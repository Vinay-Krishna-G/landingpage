export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© 2025 MilletMate. Made with 💚 in India.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-800 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-800 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-slate-800 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
