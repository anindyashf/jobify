import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://final-project-api-alpha.vercel.app/api/auth/register', {
        name,
        image_url: imageUrl,
        email,
        password,
      });
      if (res.status === 200 || res.status === 201) {
        navigate('/login', { state: { message: "Register success, please login" } });
      }
    } catch (err) {
      setError('Failed to register');
    }
  };

  return (
    <main className="bg-gray-100 min-h-screen flex justify-center items-center">
      <section className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 my-4">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Image URL</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md transition duration-200"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Register;
