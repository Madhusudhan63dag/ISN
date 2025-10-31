

const OrangeIcon = () => (
  <svg className="w-8 h-8 text-[#ff8733]" fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const BlueIcon = () => (
  <svg className="w-8 h-8 text-[#193a6a]" fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const cards = [
  {
    title: "Order Placement & Support",
    border: "orange",
    icon: <OrangeIcon />,
    points: [
      "Dedicated call center for easy ordering",
      "Instant assistance for all queries",
      "Personalized support every step of the way"
    ],
    desc: "A hassle-free purchase workflow delivered by friendly experts.",
    link: "#"
  },
  {
    title: "Digital Marketing & Media",
    border: "blue",
    icon: <BlueIcon />,
    points: [
      "Targeted campaigns for product visibility",
      "Omni-channel strategies to maximize reach",
      "Proven lead generation and brand building"
    ],
    desc: "Drive awareness, engagement, and growth with smart digital promotion.",
    link: "#"
  },
  {
    title: "Product Delivery & Logistics",
    border: "orange",
    icon: <OrangeIcon />,
    points: [
      "Rapid nationwide delivery network",
      "Robust inventory and dispatch systems",
      "End-to-end order fulfillment"
    ],
    desc: "Your products safely delivered, on-time, every time across India.",
    link: "#"
  },
  {
    title: "After-Sales Customer Care",
    border: "orange",
    icon: <OrangeIcon />,
    points: [
      "Round-the-clock helplines",
      "Efficient issue resolution",
      "Building loyalty through excellent service"
    ],
    desc: "Continuous support for every customer—before, during, and after purchase.",
    link: "#"
  },
  {
    title: "Brand Partnerships",
    border: "blue",
    icon: <BlueIcon />,
    points: [
      "Smooth integration for new brands",
      "Growth analytics and performance tracking",
      "Sustained collaboration for market leadership"
    ],
    desc: "Scale faster with tailored partnership programs and actionable insights.",
    link: "#"
  },
  {
    title: "Quality & Compliance",
    border: "orange",
    icon: <OrangeIcon />,
    points: [
      "Certified and regulatory-approved products",
      "Full transparency at every stage",
      "Ethics-driven customer relationships"
    ],
    desc: "Earn trust and repeat business with a commitment to safety and integrity.",
    link: "#"
  }
];


const cardBorder = {
  orange: "border-[#ff8733]",
  blue: "border-[#193a6a]"
};

const CardGrid = () => (
  <section className="w-full bg-white py-1 px-5 flex flex-col items-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-[#0074E4] text-center mb-2">
      Everything You Need for Product Success
    </h2>
    <p className="mb-10 text-center text-[#0074E4] text-lg">
      From digital marketing and call center support to pan-India distribution and customer care, Israelites Shopping Network delivers seamless solutions that help your products reach, convert, and delight customers everywhere.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl w-full">
      {cards.map((card, idx) => {
        // Set unique hover classes by card index
        let hoverClass = "";
        if (idx === 0) hoverClass = "hover:scale-105 hover:-rotate-2"; // pop up, slight rotate
        else if (idx === 1) hoverClass = "hover:scale-105 hover:translate-x-2"; // pop right
        else if (idx === 2) hoverClass = "hover:scale-105 hover:-translate-x-2"; // pop left
        else if (idx === 3) hoverClass = "hover:scale-105 hover:-rotate-3"; // pop up, bigger rotate
        else if (idx === 4) hoverClass = "hover:scale-105 hover:translate-y-2"; // pop down
        else hoverClass = "hover:scale-105 hover:shadow-2xl"; // default pop + shadow

        return (
          <div
            key={idx}
            className={`relative rounded-2xl border-2 ${cardBorder[card.border]} bg-white shadow-md p-7 h-full flex flex-col transition-all duration-300 ease-in-out group ${hoverClass}`}
            style={{ willChange: "transform" }}
          >
            <h3 className="text-[#0074E4] font-bold text-lg mb-2">{card.title}</h3>
            <p className="text-[#0074E4] text-sm mb-5">{card.desc}</p>
            <ul className="mb-6 list-disc pl-5">
              {card.points.map((pt, idy) => (
                <li key={idy} className="font-medium text-[#193a6a]">
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  </section>
);


const Services = () => {
  return (
    <div>
      <CardGrid />
    </div>
  )
}

export default Services;