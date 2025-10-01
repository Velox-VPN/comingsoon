export default function Footer() {
  return (
    <footer className="text-sm text-gray-500 text-center mt-12 mb-4">
      <p>© {new Date().getFullYear()} Boring Global. All rights reserved.</p>
      <p className="mt-1">
        Made with 💖 by{" "}
        <a
          href="https://itzmatt019.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          ItzMatt019
        </a>
      </p>
    </footer>
  );
}