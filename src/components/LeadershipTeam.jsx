import React from 'react';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';

const teamMembers = [
  {
    name: 'Dr. Suman Gautam',
    title: 'Founder & Medical Director',
    image: photo1,
  },
  {
    name: 'Anita K.C.',
    title: 'Chief Operating Officer',
    image: photo2,
  },
  {
    name: 'Ramesh Shrestha',
    title: 'Lead Developer',
    image: photo3,
  },
];

const LeadershipTeam = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-teal-50 py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 drop-shadow-sm">
            🌟 Meet Our Senior Leadership
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-xl mx-auto">
            If everyone is moving forward together, then success takes care of itself.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-center shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 relative group"
            >
              <div className="absolute top-4 right-4 bg-teal-100 text-teal-600 text-xs px-3 py-1 rounded-full shadow-sm group-hover:bg-teal-200">
                Team Lead
              </div>

              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-6 border-4 border-teal-300 shadow-md"
              />
              <h3 className="text-2xl font-bold text-gray-700">{member.name}</h3>
              <p className="text-teal-600 mt-1 font-medium">{member.title}</p>
              <div className="mt-4 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Passionate about innovation and leadership in health-tech.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
