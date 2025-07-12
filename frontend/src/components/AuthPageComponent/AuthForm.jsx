// frontend/src/AuthForm.jsx
import React from 'react';

const AuthForm = ({
  isLogin,
  form,
  error,
  handleChange,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label className="block text-gray-700 mb-1">Email</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
        required
      />
    </div>
    <div>
      <label className="block text-gray-700 mb-1">Password</label>
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
        required
      />
    </div>
    {!isLogin && (
      <div>
        <label className="block text-gray-700 mb-1">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
      </div>
    )}
    {error && <div className="text-red-500 text-sm">{error}</div>}
    <button
      type="submit"
      className="w-full bg-black text-white py-2 rounded font-semibold hover:bg-black transition-colors"
    >
      {isLogin ? 'Login' : 'Sign Up'}
    </button>
  </form>
);

export default AuthForm;