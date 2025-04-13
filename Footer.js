export default function Footer() {
  return (
    <footer className="text-center py-6 text-gray-600 bg-gray-50">
      &copy; {new Date().getFullYear()} MemoTag. All rights reserved.
    </footer>
  );
}