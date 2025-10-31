import React from 'react'
import desktopBanner from '../../assets/banner2.png'
import mobileBanner from '../../assets/banner1.webp'
// Example logos (update paths as needed)
import one from '../../assets/logos/sacredrelm.webp'
import two from '../../assets/logos/beyond_slim.webp'
import three from '../../assets/logos/camph_airr.webp'
import four from '../../assets/logos/d-52_diabetes_care.webp'
import five from '../../assets/logos/dr_alco_free.webp'
import six from '../../assets/logos/drjoints.webp'
import seven from '../../assets/logos/glowglaz.webp'
import eight from '../../assets/logos/sampoorn_arogya.webp'
import nine from '../../assets/logos/shilajit.webp'
import ten from '../../assets/logos/sriastroveda.webp'




const logos = [
  one, two, three, four,
  five, ten, six, seven, eight,
  nine,
  one, two, three, four,
  five, ten, six, seven, eight,
  nine
]

const Hero = () => {
  return (
    <section className="relative w-full h-full overflow-hidden">
      {/* Desktop banner */}
      <img
        src={desktopBanner}
        alt="Hero Banner"
        className="hidden md:block w-full h-full object-contain"
      />
      {/* Mobile banner */}
      <img
        src={mobileBanner}
        alt="Hero Banner Mobile"
        className="block md:hidden w-full h-full object-cover"
      />
      {/* Sliding logos at the bottom */}
      <div className="absolute left-0 right-0 bottom-0 py-4 marquee ">
        <div className="marquee-content items-center">
          {logos.map((logo, idx) => (
            <img key={idx} src={logo} alt="Partner Logo" className="h-16 md:h-20 mx-6 " />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
