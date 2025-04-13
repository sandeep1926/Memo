import DarkModeToggle from '../components/DarkModeToggle';

export default function Home() {
  return (
    <>
      <DarkModeToggle />
      <main className="font-sans bg-white dark:bg-gray-900 dark:text-white transition-all">
        <Hero />
        <Problem />
        <Solution />
        <Traction />
        <CTA />
        <Footer />
      </main>
    </>
  );
}