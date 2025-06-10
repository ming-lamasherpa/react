import React from 'react';
import { motion } from 'framer-motion';

import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';
import blog4 from '../assets/blog4.jpg';

const blogs = [
  {
    title: 'NSI Implementation Of EHR',
    desc: 'For the past two years, Cogent Health has been closely working with NSI...',
    date: '14 Nov 2022',
    img: blog1,
  },
  {
    title: 'My First Experience Of Digitizing The Health Sector',
    desc: 'I have been associated with the team of Health Informatics of Cogent Hea...',
    date: '10 Feb 2020',
    img: blog2,
  },
  {
    title: 'Gulmi Hospital Upgrades Its Health Information System',
    desc: 'District Hospital Gulmi in Lumbini Province has upgraded its health info...',
    date: '01 Jun 2022',
    img: blog3,
  },
  {
    title: 'Digitalization Of Healthcare System',
    desc: 'Cogent Health Pvt Ltd, a subsidiary of the F1Soft International Group...',
    date: '11 Sep 2021',
    img: blog4,
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white px-6 sm:px-10 md:px-16 lg:px-24 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-800">Our Blogs</h2>
        <p className="text-gray-500 mt-3 text-base">Stay updated with our latest articles</p>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={blog.img}
              alt={blog.title}
              className="w-full h-44 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-5">
              <span className="text-[11px] bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                {blog.date}
              </span>
              <motion.h3
                className="text-base font-semibold mt-3 text-gray-800 leading-snug"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                {blog.title}
              </motion.h3>
              <motion.p
                className="text-xs text-gray-600 mt-2 leading-relaxed"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                {blog.desc}
              </motion.p>
              <button className="mt-4 inline-block bg-green-500 text-white text-xs px-4 py-2 rounded-full hover:bg-green-600 transition-all">
                Read More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add to Cart */}
      <div className="mt-24 flex justify-center">
        <div className="flex items-center gap-4 bg-green-100 p-5 rounded-2xl shadow-lg hover:shadow-xl transition">
          <div className="bg-green-600 text-white p-3 rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h12m-9 4a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
              />
            </svg>
          </div>
          <div>
            <h4 className="text-md font-semibold text-green-900">Add to Cart</h4>
            <p className="text-xs text-green-800">Explore products & add easily</p>
          </div>
          <button className="ml-auto bg-green-600 text-white px-5 py-2 rounded-full text-sm hover:bg-green-700 transition">
            Add
          </button>
        </div>
      </div>
    </section>
  );
}
