import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import heroAnim from '../public/hero.json'; // Add your Lottie animation here

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-blue-50">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        AI for Dementia Care
      </motion.h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-6">
        Empowering caregivers with AI-driven memory tracking and cognitive support for those affected by dementia.
      </p>
      <a href="#cta" className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition">
        Request a Demo
      </a>
      <div className="w-72 mt-10">
        <Lottie animationData={heroAnim} loop />
      </div>
    </section>
  );
}