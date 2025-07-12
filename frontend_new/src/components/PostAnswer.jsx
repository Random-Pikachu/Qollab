import React, { useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useObj } from '../ObjContext';
import api from '../connection'
import { useParams, useNavigate } from 'react-router-dom';


const PostAnswer = () => {

    const { obj } = useObj();
    const navigate = useNavigate();
    const [description, setDescription] = useState('');
    const author = obj.user._id;
    const { id } = useParams();
    const handlePost = () => {
        api.post(`/answers/${id}`, {
            description,
            author
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })

        navigate('/')
    }

  return (
    <>
    <div className='flex flex-col items-center justify-center gap-4'>

        <Editor
            apiKey='x4rmgexednh7rad9aambu4az79beej00symglpgytbzafloe'
            value={description}
            onEditorChange={setDescription}
            init={{
                // height: 500,
                width: 700,
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
          <button className='bg-black text-white px-4 py-2  font-poppins mb-4' onClick={handlePost}>Post</button>

    </div>
    </>
  )
}

export default PostAnswer