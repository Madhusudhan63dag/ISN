import React from 'react';
import aboutImg from '../../assets/products/1.webp';

const StatsSection = () => {
  return (
    <section className="bg-[#0074e4] w-full py-14 px-4 text-white relative flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center mb-6">Our Impact: Leading Wellness and Customer Care</h2>
      <p className="max-w-3xl mx-auto text-center text-xl mb-12 leading-relaxed">
        At Israelites Shopping Network, we connect thousands daily with life-changing products and dedicated support. Our seamless blend of call center expertise, digital campaigns, and trusted brands powers success stories across India.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-10 mt-8">
        {/* Years of Excellence */}
        <div className="flex flex-col items-center bg-[#2554d1] px-7 py-7 rounded-lg shadow-lg">
          <span className="text-5xl font-extrabold">10+</span>
          <span className="mt-3 text-lg font-medium">Years of<br/>Excellence</span>
        </div>
        {/* Orders Delivered */}
        <div className="flex flex-col items-center px-7 py-7">
          <span className="text-5xl font-extrabold">100k+</span>
          <span className="mt-3 text-lg font-medium text-white">
            Orders<br/>Delivered
          </span>
        </div>
        {/* Customer Care Calls */}
        <div className="flex flex-col items-center px-7 py-7">
          <span className="text-5xl font-extrabold">1M+</span>
          <span className="mt-3 text-lg font-medium text-white">
            Customer Care<br/> Calls Handled
          </span>
        </div>
        {/* Team Members */}
        <div className="flex flex-col items-center px-7 py-7">
          <span className="text-5xl font-extrabold">150+</span>
          <span className="mt-3 text-lg font-medium text-white">
            Team Members<br/>Supporting You
          </span>
        </div>
      </div>
    </section>
  );
};


const About = () => (
  <div>
    <StatsSection />
    <section className="w-full py-16 px-4 flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Content Side */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-[#193a6a] mb-4">About Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            At Israelites Shopping Network, we blend advanced customer care, trusted product distribution, and digital innovation to empower well-being across India. Whether through our expert call center or dynamic digital media, we make it seamless for customers to discover and order premium wellness products.
          </p>
          <ul className="mb-8 space-y-2 list-disc list-inside text-gray-700">
            <li>End-to-end support: Call center, backend distribution & digital teams</li>
            <li>Diverse portfolio of top wellness brands—Drjoints, Shilajit, D-52 (Dia-Free), Sampoorn Arogya, Sacredrelm, BeyondSlim</li>
            <li>Trustworthy BPO service and responsive customer care with every order</li>
            <li>Digital-first marketing and scalable solutions for product success</li>
            <li>Passionate about delivering quality, convenience, and care</li>
          </ul>
          {/* <button className="bg-[#ff8733] text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-[#f36100] transition">
            Learn More
          </button> */}
        </div>

        {/* Image or Video Side */}
        <div className="md:w-1/2 w-full flex justify-center">
          {/* Swap the <img> below with a <video> tag if desired */}
          <img
            src={aboutImg}
            alt="About us visual"
            className="rounded-2xl shadow-lg max-h-96 object-cover w-full md:w-auto"
          />
          {/* Example for video:
          <video
            src="/path/to/video.mp4"
            controls
            className="rounded-2xl shadow-lg max-h-96 object-cover w-full md:w-auto"
          />
          */}
        </div>
      </div>
    </section>
  </div>
);

export default About;
