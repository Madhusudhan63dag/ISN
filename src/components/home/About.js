import React, {useState, useEffect  } from 'react';
import aboutImg from '../../assets/products/1.webp';
import demoImage from "../../assets/banner1.webp";
import salesImg from "../../assets/products/1.webp";
import trainingImg from "../../assets/products/1.webp";

const StatsSection = () => {
  return (
    <section className="bg-[#0074e4] w-full py-14 px-4 text-white relative flex flex-col items-center rounded-b-[13rem]">
      {/* <h2 className="text-4xl font-bold text-center mb-6">Our Impact: Leading Wellness and Customer Care</h2> */}
      <p className="text-center text-xl mb-12 leading-relaxed">
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



const tabOptions = [
  { key: "sales", label: "Sales" },
  { key: "training", label: "Training" }
];
const tabCards = {
  sales: [
    {
      title: "One - to - One",
      desc: "Connect directly with customers—one-on-one video demos",
      points: [
        "Personalisation",
        "Increase Conversion Rates",
        "Cross-Sells and Upsells",
        "Build Trust"
      ]
    },
    {
      title: "One - to - Many",
      desc: "Expand your reach with dynamic one-to-many video experiences",
      points: [
        "Cost Effective",
        "Brand Awareness and Recognition",
        "Interactive Live Sessions",
        "Improvised Sales Funnel"
      ]
    }
  ],
  training: [
    {
      title: "One-on-One Onboarding",
      desc: "Help new customers master your product with in-person training",
      points: [
        "Tailored walkthroughs",
        "Skill building",
        "Higher retention",
        "Prompt Q&A"
      ]
    },
    {
      title: "Interactive Group Workshops",
      desc: "Engage teams or groups for collaborative learning experiences",
      points: [
        "Hands-on demos",
        "Shared best practices",
        "Team alignment",
        "Scalable sessions"
      ]
    }
  ]
};

const tabImages = {
  sales: salesImg,
  training: trainingImg
};

const CardTabSection = () => {
  const [selectedTab, setSelectedTab] = useState("sales");

  return (
    <section className="w-full py-12 bg-white flex flex-col items-center">
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        {tabOptions.map(tab => (
          <button
            key={tab.key}
            onClick={() => setSelectedTab(tab.key)}
            className={`px-7 py-2 text-lg rounded-full border-2 font-semibold transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 ${
              selectedTab === tab.key
                ? "bg-[#193a6a] text-white"
                : "bg-white text-[#193a6a] border-[#193a6a]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Cards & Changing Image */}
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <div className="flex flex-row gap-8 w-full md:w-2/3">
          {tabCards[selectedTab].map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between min-w-[260px] flex-1"
            >
              <h3 className="text-2xl font-bold text-[#193a6a] mb-2">{card.title}</h3>
              <p className="text-[#193a6a] mb-4">{card.desc}</p>
              <ul className="mb-5 list-disc pl-5 text-gray-700">
                {card.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
              <button className="border-2 border-[#ff8733] text-[#ff8733] font-semibold px-6 py-2 rounded-full w-fit transition hover:bg-[#ff8733] hover:text-white">
                Talk to Us
              </button>
            </div>
          ))}
        </div>
        <div className="w-[420px] h-[340px] flex justify-center items-center">
          <img
            src={tabImages[selectedTab]}
            alt={selectedTab + " visual"}
            className="rounded-2xl shadow-lg w-full h-full transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};


const About = () => (
  <div>
    <StatsSection />
    <section className="w-full py-1 px-4 flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center gap-10 mx-20">
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
        </div>

        {/* Image or Video Side */}
        <div className="md:w-1/2 w-full flex justify-center">
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
    <CardTabSection />
  </div>
);

export default About;
