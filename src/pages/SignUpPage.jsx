import React from 'react'

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
            <input
               type="text"
               id="name"
               name="name"


               //className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded`}
               placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              //value={formData.email}
              //onChange={handleChange}
              //className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              //value={formData.password}
              //onChange={handleChange}
              //className={`w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded`}
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              //value={formData.confirmPassword}
              //onChange={handleChange}
              //className={`w-full p-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded`}
              placeholder="Confirm your password"
            />
          </div>
          


        </form>
      </div>
    </div>
  )
}

export default SignUpPage;