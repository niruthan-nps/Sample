const features = [
  {
    icon: "/assets/intel.png",
    title: "Intel Core i7",
    desc: "Powerful processing for gaming and productivity.",
  },
  {
    icon: "/assets/rtx.png",
    title: "NVIDIA RTX",
    desc: "Next-gen graphics for immersive experiences.",
  },
  {
    icon: "/assets/ssd.png",
    title: "1TB SSD",
    desc: "Lightning-fast storage for speed and reliability.",
  },
  {
    icon: "/assets/ddr4.png",
    title: "16GB DDR4",
    desc: "Seamless multitasking with high-performance RAM.",
  },
];

export default function Features() {
  return (
    <section className="bg-black text-white px-16 py-20 text-center">
      <h2 className="text-3xl font-bold mb-12">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center">
            <img src={f.icon} alt={f.title} className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="text-gray-400 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
