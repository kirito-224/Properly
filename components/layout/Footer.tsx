export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} PropertyManager. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}