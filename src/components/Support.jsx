// src/components/Support.jsx
export default function Support() {
  const items = [
    {
      icon: "🌐", // replace with real icons if you have them
      title: "Product Support",
      desc: "Up to 3 years onsite warranty available for your peace of mind.",
    },
    {
      icon: "👤",
      title: "Personal Account",
      desc: "With big discounts, free delivery and a dedicated support specialist.",
    },
    {
      icon: "💰",
      title: "Amazing Savings",
      desc: "Up to 70% off new products, you can be sure of the best price.",
    },
  ];

  return (
    <section className="bg-white px-16 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
