import React from 'react';
import { FaBullseye, FaMountain, FaHandHoldingMedical } from 'react-icons/fa';

const values = [
  {
    title: "Our Core Purpose",
    description: "Empower healthcare service providers to achieve better patient and financial outcomes through trusted health-tech solutions.",
    icon: <FaHandHoldingMedical />,
    color: "from-green-400 to-emerald-600",
  },
  {
    title: "Our Vision",
    description: "To become the first-choice health-tech company by building an interoperable ecosystem that improves patient health outcomes in Nepal.",
    icon: <FaMountain />,
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "Our Mission",
    description: "To build modern, integrated, and user-friendly health information platforms to enhance decision-making and care delivery.",
    icon: <FaBullseye />,
    color: "from-pink-400 to-red-500",
  },
];

const VisionMission = () => {
  return (
    <section className="bg-gradient-to-b from-white to-teal-50 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-teal-700 mb-6">
          Vision, Mission & Core Values
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-16">
          Creating products that contribute to promoting patient-centered quality care and delivering data-driven results in healthcare.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {values.map((item, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-3xl shadow-xl transition-all duration-300 overflow-hidden hover:scale-[1.03] hover:shadow-2xl`}
            >
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${item.color} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300`} />
              <div className="p-10">
                <div className="text-5xl text-teal-600 mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
