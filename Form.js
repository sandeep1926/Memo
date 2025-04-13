import { useState } from 'react';
import supabase from '../lib/supabase';

export default function Form() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    const { error } = await supabase.from('waitlist').insert({ email });
    if (error) {
      setStatus('Error! Try again.');
    } else {
      setStatus('Thank you! You’re on the waitlist.');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="p-3 rounded text-black"
      />
      <button type="submit" className="bg-white text-blue-600 font-semibold py-2 rounded hover:bg-gray-200 transition">
        Join Waitlist
      </button>
      <p className="text-sm mt-2">{status}</p>
    </form>
  );
}