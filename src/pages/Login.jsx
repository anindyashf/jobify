import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../utils/AuthContext';
import { useLocation } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { saveAuthData } = useContext(AuthContext);
  const { state } = useLocation();
  const successMessage = state?.message;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://final-project-api-alpha.vercel.app/api/auth/login', {
        email,
        password,
      });
      if (res.status === 200) {
        const { token, user } = res.data;
        
        saveAuthData({ token, user });
        navigate('/');
      }
    } catch (err) {
      setError('Failed to login. Please check your credentials.');
    }
  };

  return (
    <main className="bg-gray-100 py-4 min-h-screen flex justify-center items-center">
      <section className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Login;
