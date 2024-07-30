// import React from 'react';

export default function Component() {
    return (
        <form>
            <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-800"
                    placeholder="Email"
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700">Password</label>
                <input
                    type="password"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-800"
                    placeholder="Password"
                />
            </div>

            <button
                className="w-full bg-purple-800 text-white py-2 rounded-md hover:bg-purple-900 transition duration-300">
                Login
            </button>
        </form>
    );
}