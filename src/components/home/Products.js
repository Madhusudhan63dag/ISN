import React, { useState, useRef, useEffect } from 'react';
import one from '../../assets/products/1.webp';
import four from '../../assets/products/4.webp';
import five from '../../assets/products/5.webp';
import six from '../../assets/products/6.webp';
import seven from '../../assets/products/7.webp';
import eight from '../../assets/products/8.webp';
import three from '../../assets/products/3.webp';


const stories = [
  { title: "How a Global Electronics Leader Generated ₹9000CR+ in Revenue", img: one },
  { title: "How a Haircare Brand Achieved 95% CSAT Through Intelligent Customer Support", img: one },
  { title: "Boosting Sales with Live Video Engagement for a Smart Appliance Brand", img: one },
  { title: "Fintech Brand Drives 3x User Satisfaction with Automated CX", img: one },
  { title: "Scaling Support for D2C Startup: 2X Faster Response, Happier Customers", img: one },
];

function getVisibleCards() {
  if (typeof window === "undefined") return 1;
  if (window.innerWidth < 640) return 1;       // Mobile
  if (window.innerWidth < 1024) return 2;      // Tablet
  return 3;                                    // Desktop
}

const SuccessStories = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => setVisible(getVisibleCards());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % stories.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Duplicate first few cards for seamless looping
  const displayStories = [...stories, ...stories.slice(0, visible)];

  // Calculate card percentage width
  const cardPercent = 100 / visible;

  return (
    <section className="w-full py-16 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-[#193a6a] text-center mb-12">
        See how Maxicus has digitally transformed CX
      </h2>
      <div className="flex flex-col md:flex-row gap-12 w-full items-start px-0">
        {/* Left Info */}
        <div className="flex flex-col gap-6 md:w-1/3 max-w-xs md:justify-center pl-4">
          <h3 className="text-2xl font-bold text-[#193a6a]">Client Success Stories</h3>
          <p className="text-gray-700 mb-2">
            Uncover the Impact: Revenue Growth, Higher Customer Satisfaction, and Accelerated Business Growth
          </p>
        </div>
        {/* Sliding Cards */}
        <div className="flex-1 overflow-hidden w-full">
          <div className="flex transition-transform duration-700 w-full"
            style={{
              width: "100%",
              transform: `translateX(-${current * cardPercent}%)`,
            }}
          >
            {displayStories.map((story, idx) => (
              <div
                key={idx}
                className="group rounded-3xl mx-2 overflow-hidden shadow-xl flex flex-col justify-end h-[320px] relative transition hover:shadow-2xl"
                style={{
                  flex: `0 0 ${cardPercent}%`,
                  maxWidth: `${cardPercent}%`,
                  background: `linear-gradient(0deg, rgba(34,34,34,.48), rgba(0,0,0,.21)), url(${story.img}) center/cover no-repeat`
                }}
              >
                <div className="absolute inset-0 transition group-hover:bg-[#193a6a]/30"></div>
                <div className="z-10 py-7 px-7 relative flex flex-col items-start">
                  <h4 className="text-white text-lg font-bold mb-4 drop-shadow-lg leading-tight">{story.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};



const products = [
  { image: one, title: "Drjoints", link: "https://drjoints.in", tag: "Joint Care" },
  { image: four, title: "D-52", link: "https://diafreeayush.com", tag: "Sugar Control" },
  { image: five, title: "Sampoorn Arogya", link: "https://sampoornarogya.com", tag: "Ayurveda" },
  { image: six, title: "Sacredrelm", link: "https://sacredrelm.com", tag: "Spiritual" },
  { image: seven, title: "Sacredrelm", link: "https://sacredrelm.com", tag: "Spiritual" },
  { image: eight, title: "BeyondSlim", link: "https://beyondslim.in", tag: "Slimming" },
  { image: three, title: "Shilajit", link: "https://glowglaz.com", tag: "Vitality" },
];


const CARD_WIDTH_MOBILE = 180; // px for mobile
const CARD_WIDTH_DESKTOP = 350; // px for desktop

const Products = () => {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  // Dynamically update card width for auto-slide based on screen size
  function getCardWidth() {
    return window.innerWidth < 640
      ? CARD_WIDTH_MOBILE * 2 // two cards on mobile
      : CARD_WIDTH_DESKTOP;
  }

  useEffect(() => {
    let i = 0;
    function slide() {
      if (scrollRef.current) {
        i = (i + 1) % products.length;
        scrollRef.current.scrollTo({
          left: i * getCardWidth(),
          behavior: 'smooth'
        });
      }
    }
    intervalRef.current = setInterval(slide, 3000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>    
      <section className="py-16 px-0 flex flex-col items-center bg-gradient-to-b from-[#fff8f0] to-[#f3e8ff]">
        <h2 className="text-4xl font-bold text-[#193a6a] mb-4 text-center">Discover Our Trusted Wellness Brands</h2>
        <p className="text-center text-gray-700 mb-10 px-4">
          From everyday health essentials to life-changing solutions, our featured products represent innovation, quality, and care. Shop with confidence and find the perfect fit for your wellness journey—all backed by dedicated service and support.
        </p>
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch'}}
        >
          <div className="flex gap-8 px-4 md:px-10 lg:px-24" style={{
            scrollSnapType: 'x mandatory',
            minWidth: `${getCardWidth() * products.length}px`
          }}>
            {products.map((prod, idx) => (
              <div
                key={idx}
                className={`min-w-[45vw] max-w-[45vw] sm:min-w-[350px] sm:max-w-[360px] bg-white bg-opacity-80 rounded-3xl shadow-xl
                  flex flex-col items-center overflow-hidden border border-[#e2e8f0]
                  transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-[#ff8733]
                  relative cursor-pointer`}
                style={{ scrollSnapAlign: 'center' }}
              >
                <div className="w-full h-[180px] sm:h-[320px] flex items-center justify-center bg-gradient-to-br from-[#e0eaff] to-[#ffe8d9]">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="object-cover w-[160px] h-[160px] sm:w-[300px] sm:h-[300px] rounded-2xl shadow-sm
                    border-4 border-white"
                    style={{ transition: "transform 0.3s" }}
                  />
                </div>
                <div className="p-6 w-full text-center flex flex-col items-center flex-1">
                  <span className="inline-block px-4 py-1 mb-3 bg-[#0074e4] text-white text-xs rounded-full font-semibold shadow">{prod.tag}</span>
                  <h3 className="text-md sm:text-xl font-bold text-[#193a6a] mb-2">{prod.title}</h3>
                  <a href={prod.link} target="_blank" rel="noopener noreferrer" className="w-full mt-2">
                    <button className="w-full bg-[#ff8733] text-white font-semibold py-2 rounded-xl shadow hover:bg-[#f36100] transition text-base">
                      View Details
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SuccessStories />
    </div>
  );
};

export default Products;
