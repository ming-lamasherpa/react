import React from 'react';

export default function DropYourCV() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-teal-300 to-teal-400 py-20 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-10">
        <h2 className="text-3xl font-bold text-teal-700 text-center mb-2">Drop Your CV</h2>
        <p className="text-center text-gray-600 mb-8">
          We’re always on the lookout for high-performing and energetic individuals. Please send your resume if you want to become one.
        </p>

        <form className="space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-teal-50 p-3 rounded-md border border-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
            <input
              type="text"
              placeholder="Address"
              className="bg-teal-50 p-3 rounded-md border border-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="tel"
              placeholder="Mobile Number"
              className="bg-teal-50 p-3 rounded-md border border-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-teal-50 p-3 rounded-md border border-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          {/* Preferred Department */}
          <select
            className="w-full bg-teal-50 p-3 rounded-md border border-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          >
            <option value="">--- Preferred Department ---</option>
            <option value="Development">Development</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="HR">Human Resources</option>
          </select>

          {/* File Upload */}
          <div>
            <label className="block mb-1 text-gray-700">Upload Your CV</label>
            <input
              type="file"
              className="bg-white p-2 border border-teal-100 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-md transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
