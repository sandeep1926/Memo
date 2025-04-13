import { motion } from 'framer-motion';

export default function Problem() {
  return (
    <section className="px-6 py-20 bg-white text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        The Growing Challenge of Dementia
      </motion.h2>
      <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
        Over 55 million people live with dementia worldwide, with nearly 10 million new cases every year. Early diagnosis and consistent care are critical—but current systems fall short.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
        {[
          { stat: "55M+", label: "Global dementia cases" },
          { stat: "75%", label: "Remain undiagnosed" },
          { stat: "10M", label: "New cases per year" },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="p-6 bg-blue-100 rounded-xl shadow"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-3xl font-bold text-blue-700">{item.stat}</p>
            <p className="text-gray-700">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}