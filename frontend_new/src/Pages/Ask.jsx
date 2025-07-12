import React, { useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import api from '../connection'
// import dotenv from 'dotenv'
// dotenv.config()
const Ask = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [tags, setTags] = useState([])
    const [tagInput, setTagInput] = useState('')

    // Get author from localStorage (adjust if you use context or another method)
    const author = localStorage.getItem('userId')

    const handleAddTag = () => {
        const trimmed = tagInput.trim()
        if (trimmed && !tags.includes(trimmed)) {
            setTags([...tags, trimmed])
        }
        setTagInput('')
    }

    const handleRemoveTag = (removeTag) => {
        setTags(tags.filter(tag => tag !== removeTag))
    }

    const handlePost = () => {
        api.post('/questions', {
            title,
            description,
            tags, // array of strings
            author
        })
        .then(res => {
            console.log(res)
        })
    }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <div className='flex flex-row items-center justify-between w-[800px] mb-3'>
        <h1 className='text-2xl font-bold font-poppins'>Ask a Question</h1>
        <button className='bg-black text-white px-4 py-2  font-poppins' onClick={handlePost}>Post</button>
        </div>
        {/* Title input */}
        <input
            className='w-[800px] mb-4 p-2 border border-gray-300 rounded font-poppins'
            type='text'
            placeholder='Enter your question title'
            value={title}
            onChange={e => setTitle(e.target.value)}
        />
        {/* Tags input */}
        <div className='w-[800px] mb-4'>
            <div className='flex flex-row mb-2'>
                <input
                    className='flex-1 p-2 border border-gray-300 rounded font-poppins'
                    type='text'
                    placeholder='Add a tag and press Add'
                    value={tagInput}
                    onChange={e => setTagInput(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') handleAddTag() }}
                />
                <button onClick={handleAddTag} className='ml-2 px-3 py-1 bg-gray-200 rounded'>Add</button>
            </div>
            <div className='flex flex-wrap gap-2'>
                {tags.map(tag => (
                    <span key={tag} className='bg-blue-100 text-blue-800 px-2 py-1 rounded flex items-center'>
                        {tag}
                        <button onClick={() => handleRemoveTag(tag)} className='ml-1 text-red-500'>&times;</button>
                    </span>
                ))}
            </div>
        </div>
        {/* Author display */}
        <div className='w-[800px] mb-4 font-poppins text-gray-600'>
            Author: <span className='font-semibold'>{author}</span>
        </div>
        {/* Description editor */}
        <Editor
            apiKey='x4rmgexednh7rad9aambu4az79beej00symglpgytbzafloe'
            value={description}
            onEditorChange={setDescription}
            init={{
                // height: 500,
                width: 800,
                menubar: true,
                plugins: [
                    "image",
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "help",
                    "wordcount",
                ],
                toolbar:
                    "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
            }}
        />
    </div>
  )
}

export default Ask