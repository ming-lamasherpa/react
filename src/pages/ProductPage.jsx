import React from 'react';
import laptopImage from '../assets/laptop.jpg';
import laptop2Image from '../assets/laptop2.jpg';

const ProductPage = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <div className="bg-teal-300 text-white py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold">Our Products</h1>
                    <div className="mt-2 text-sm">
                        Home <span className="mx-2">›</span> <span className="font-semibold">Our Products</span>
                    </div>
                </div>
            </div>

            {/* Products */}
            <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
                {/* Product 1 */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="lg:w-1/2 space-y-4">
                        <h2 className="text-3xl font-semibold text-teal-500">Electronic Medical Record</h2>
                        <p className="text-gray-600">
                            Elevate the quality of care to the next level with a completely customizable platform
                            that enables you to document medical, financial, and other clinical records
                            improving every outcome.
                        </p>
                        <button className="mt-4 bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600 transition">
                            Learn More →
                        </button>
                    </div>
                    <div className="lg:w-1/2">
                        <img
                            src={laptopImage}
                            alt="Electronic Medical Record"
                            className="w-full max-w-md mx-auto"
                        />
                    </div>
                </div>

                {/* Product 2 */}
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
                    <div className="lg:w-1/2">
                        <img
                            src={laptop2Image}
                            alt="Online Doctor Appointments"
                            className="w-full max-w-md mx-auto"
                        />
                    </div>
                    <div className="lg:w-1/2 space-y-4">
                        <h2 className="text-3xl font-semibold text-teal-500">Online Doctor Appointments</h2>
                        <p className="text-gray-600">
                            Say goodbye to long queues and all the hassle of booking a doctor’s appointment.
                            With e-Appointments, you can schedule a doctor appointment in just a few taps
                            within the eSewa App.
                        </p>
                        <button className="mt-4 bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600 transition">
                            Learn More →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
