export default function Traction() {
  const traction = [
    { stat: '5K+', label: 'Pre-orders' },
    { stat: '12', label: 'Healthcare Partners' },
    { stat: '93%', label: 'Reported Improvement' },
  ];

  return (
    <section className="px-6 py-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Traction So Far</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {traction.map((item, i) => (
          <div key={i} className="p-6 bg-blue-50 rounded-xl shadow-md hover:shadow-lg">
            <p className="text-4xl font-bold text-blue-700">{item.stat}</p>
            <p className="text-gray-700 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}