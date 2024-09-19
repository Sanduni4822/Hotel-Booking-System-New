import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/login/cvimg1.jpg'; // Import your image file

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form (e.g., call an API)
      console.log('Form submitted:', { email, password });
      // Redirect or show success message
      alert('Login successful!');
      navigate('/'); // Example: navigate to home page after login
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-row bg-white rounded shadow-md w-full max-w-4xl">
        {/* Left Column for Image */}
        <div className=" relative w-1/2 m-4">
          <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center">
            <div className="text-white text-xl font-semibold p-4 rounded text-center mt-3">
              <p className="text-lg">Join for free and get attractive deals</p>
            </div>
          </div>
          <img
            src={backgroundImage}
            alt="Background"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Right Column for Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-6">Already a member? Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white mb-2 p-2 rounded hover:bg-blue-600">
              Log in
            </button>
            <div className="w-full bg-blue-300 text-white text-center mt-2 p-2 rounded hover:bg-blue-600">
              <Link to="/signup">
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
