import React from 'react';

const JoinPrompt = () => (
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="font-semibold mb-2">Join Qollab</h3>
    <p className="text-sm text-gray-600 mb-4">Sign up to ask questions, answer others, and build your reputation in the community.</p>
    <button onClick={() => console.log('sign up')} className="w-full bg-black text-white py-2 rounded font-semibold hover:bg-gray-900 transition-colors mb-2">Sign Up</button>
    <button className="w-full border border-gray-300 py-2 rounded font-semibold text-black hover:bg-gray-100 transition-colors">Log In</button>
  </div>
);

export default JoinPrompt;
