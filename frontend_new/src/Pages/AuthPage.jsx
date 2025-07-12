import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../connection'
import AuthForm from '../components/AuthPageComponent/AuthForm';
import OAuthButton from '../components/AuthPageComponent/OAuthButton';
import { useObj } from '../ObjContext';
const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: '', password: '', username: '' });
  const { obj, setObj } = useObj();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password || (!isLogin && !form.username)) {
      setError('Please fill in all required fields.');
      return;
    }
    // Handle login/signup logic here
    if(!isLogin) {
      api.post('/auth/register', form).then((res) => {
        alert(isLogin ? 'Logged in!' : 'Signed up!');
        // console.log(res.data);
        setObj(res.data);
        navigate('/');
      }).catch((err) => {
        console.log(err);
      });
    } else {
      api.post('/auth/login', {email: form.email, password: form.password}).then((res) => {
        setObj(res.data);
        navigate('/');
      }).catch((err) => {
        console.log(err);
      });
    }
  };

  const handleOAuth = () => {
    // OAuth requires a redirect, not an API call
    window.location.href = 'http://localhost:4600/api/auth/google';
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <div className="flex flex-col items-center mb-6">
          <div className="text-3xl font-bold mb-2">Qollab</div>
        </div>
        <AuthForm
          isLogin={isLogin}
          form={form}
          error={error}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-gray-400 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <div className="flex flex-col gap-2">
          <OAuthButton provider="google" onClick={() => handleOAuth()}>
            Continue with Google
          </OAuthButton>
        </div>
        <div className="mt-4 text-center text-sm text-gray-600">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <button className="text-black hover:underline" onClick={() => setIsLogin(false)}>
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button className="text-black hover:underline" onClick={() => setIsLogin(true)}>
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
