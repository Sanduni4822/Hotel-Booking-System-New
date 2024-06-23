import React from 'react'

const LoginPage = () => {
  return (
    < div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Already a member? Login</h2>
        <form>
        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              id="email"
              //value={email}
              //onChange={(e) => setEmail(e.target.value)}
              //className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage;