import React, { useState } from 'react';
import AuthForm from '../components/AuthPageComponent/AuthForm';
import OAuthButton from '../components/AuthPageComponent/OAuthButton';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!isLogin && form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    // Handle login/signup logic here
    alert(isLogin ? 'Logged in!' : 'Signed up!');
  };

  return (
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
        <OAuthButton provider="google" onClick={() => alert('OAuth with Google')}>
          Continue with Google
        </OAuthButton>
        {/* Add more providers as needed */}
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
  );
};

export default AuthPage; 