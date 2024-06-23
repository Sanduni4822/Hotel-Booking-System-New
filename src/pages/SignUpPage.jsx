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
        </form>
      </div>
    </div>
  )
}

export default SignUpPage;