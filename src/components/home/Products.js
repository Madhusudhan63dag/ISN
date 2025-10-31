import React from 'react';
import one from '../../assets/products/1.webp';
import two from '../../assets/products/2.webp';
import three from '../../assets/products/3.webp';
import four from '../../assets/products/4.webp';
import five from '../../assets/products/5.webp';
import six from '../../assets/products/6.webp';
import seven from '../../assets/products/7.webp';
import eight from '../../assets/products/8.webp';

const products = [
  { image: one, title: "Drjoints", link: "https://drjoints.in" },
  { image: three, title: "shilajit", link: "https://glowglaz.com" },
  { image: four, title: "D-52", link: "https://diafreeayush.com" },
  { image: five, title: "Sampoorn Arogya", link: "https://sampoornarogya.com" },
  { image: six, title: "Sacredrelm", link: "https://sacredrelm.com" },
  { image: seven, title: "Sacredrelm", link: "https://sacredrelm.com" },
  { image: eight, title: "BeyondSlim", link: "https://beyondslim.in" },
];

const Products = () => (
  <section className=" py-16 px-4 flex flex-col items-center">
    <h2 className="text-4xl font-bold text-[#193a6a] mb-4 text-center">Discover Our Trusted Wellness Brands</h2>
    <p className=" text-center text-gray-700 mb-10">
      From everyday health essentials to life-changing solutions, our featured products represent innovation, quality, and care. Shop with confidence and find the perfect fit for your wellness journey—all backed by dedicated service and support.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((prod, idx) => (
        <div
          key={idx}
          className="group rounded-xl bg-white shadow-lg overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2 relative"
        >
          <div className="overflow-hidden h-80 md:h-64 lg:h-64 flex items-center justify-center bg-[#f3e8ff]">
            <img
              src={prod.image}
              alt={prod.title}
              className="w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-5">
            <h3 className="text-lg font-bold text-[#193a6a] mb-1">{prod.title}</h3>
            <a href={prod.link}>
              <button className="mt-2 bg-[#ff8733] text-white font-semibold py-1 px-4 rounded-full shadow hover:bg-[#f36100] transition">
                View Details
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Products;
