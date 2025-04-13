export default function Solution() {
  const steps = [
    { title: 'Wearable Tags', desc: 'Track physical movements and locations in real-time.' },
    { title: 'Cognitive Monitoring', desc: 'Analyze patterns and behaviors using AI.' },
    { title: 'Caregiver Alerts', desc: 'Send alerts for anomalies or concerning trends.' },
  ];

  return (
    <section className="px-6 py-20 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">How MemoTag Works</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}