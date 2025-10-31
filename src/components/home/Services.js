

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
    title: "Customer Ordering & Helpline",
    border: "orange",
    icon: <OrangeIcon />,
    points: [
      "Live call center order placement",
      "Real-time customer support",
      "Friendly assistance with every call"
    ],
    desc: "Seamless buying experience powered by our expert BPO team.",
    link: "#"
  },
  {
    title: "Media & Digital Campaigns",
    border: "blue",
    icon: <BlueIcon />,
    points: [
      "Data-driven digital ads",
      "Multi-channel product promotion",
      "Brand growth & lead generation"
    ],
    desc: "Cutting-edge marketing to boost product success—across platforms.",
    link: "#"
  },
  {
    title: "Product Distribution & Fulfillment",
    border: "orange",
    icon: <OrangeIcon />,
    points: [
      "Efficient order processing",
      "Pan-India logistics",
      "Inventory & supply management"
    ],
    desc: "Reliable delivery and backend support for every brand.",
    link: "#"
  },
  {
    title: "Customer Care Excellence",
    border: "orange",
    icon: <OrangeIcon />,
    points: [
      "24/7 support lines",
      "Issue resolution & follow-up",
      "Loyalty-building service"
    ],
    desc: "Always available to help, solve, and delight your customers.",
    link: "#"
  },
  {
    title: "Brand Partnership & Growth",
    border: "blue",
    icon: <BlueIcon />,
    points: [
      "Onboarding new products",
      "Performance analytics",
      "Long-term partner success"
    ],
    desc: "Work with us to scale your wellness and lifestyle products.",
    link: "#"
  },
  {
    title: "Compliance & Trust Assurance",
    border: "orange",
    icon: <OrangeIcon />,
    points: [
      "Certified, government-approved products",
      "Transparent operations",
      "Customer-first business ethics"
    ],
    desc: "Build lasting trust with quality standards and clear communication.",
    link: "#"
  }
];

const cardBorder = {
  orange: "border-[#ff8733]",
  blue: "border-[#193a6a]"
};

const CardGrid = () => (
  <section className="w-full bg-white py-14 px-5 flex flex-col items-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-[#0074E4] text-center mb-2">
      Everything You Need for Product Success
    </h2>
    <p className="mb-10 text-center text-[#0074E4] text-lg">
      From digital marketing and call center support to pan-India distribution and customer care, Israelites Shopping Network delivers seamless solutions that help your products reach, convert, and delight customers everywhere.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl w-full">
      {cards.map((card, idx) => (
        <div key={idx} className={`relative rounded-2xl border-2 ${cardBorder[card.border]} bg-white shadow-md p-7 h-full flex flex-col transition-shadow hover:shadow-lg`}>
          <h3 className="text-[#0074E4] font-bold text-lg mb-2">{card.title}</h3>
          <p className="text-[#0074E4] text-sm mb-5">{card.desc}</p>
          <ul className="mb-6 list-disc pl-5">
            {card.points.map((pt, idy) => (
              <li key={idy} className="font-medium text-[#193a6a]">
                {pt}
              </li>
            ))}
          </ul>
          {/* <a
            href={card.link}
            className="mt-auto text-[#193a6a] font-semibold hover:underline flex items-center"
          >
            Learn More
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a> */}
        </div>
      ))}
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