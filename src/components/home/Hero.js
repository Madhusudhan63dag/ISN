import React from 'react'
import desktopBanner from '../../assets/banner2.png'
import mobileBanner from '../../assets/banner1.webp'
// Example logos (update paths as needed)
import meeshoLogo from '../../assets/logos/sacredrelm_logo.png'
import fincareLogo from '../../assets/logos/sacredrelm_logo.png'
import ajioLogo from '../../assets/logos/sacredrelm_logo.png'
import oneplusLogo from '../../assets/logos/sacredrelm_logo.png'
import swiggyLogo from '../../assets/logos/sacredrelm_logo.png'
import cars24Logo from '../../assets/logos/sacredrelm_logo.png'
import zomatoLogo from '../../assets/logos/sacredrelm_logo.png'
import acLogo from '../../assets/logos/sacredrelm_logo.png'



const logos = [
  meeshoLogo, fincareLogo, ajioLogo, oneplusLogo,
  swiggyLogo, cars24Logo, zomatoLogo, acLogo,
  // repeat again for infinite loop look
  meeshoLogo, fincareLogo, ajioLogo, oneplusLogo,
  swiggyLogo, cars24Logo, zomatoLogo, acLogo
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
      <div className="absolute left-0 right-0 bottom-0 py-4 marquee bg-white">
        <div className="marquee-content items-center">
          {logos.map((logo, idx) => (
            <img key={idx} src={logo} alt="Partner Logo" className="h-8 md:h-20 mx-6 grayscale" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
