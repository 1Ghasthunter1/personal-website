const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-7xl overflow-hidden py-4 px-4 sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          <div className="px-5 py-2 select-none">
            <a className="text-base text-gray-500 hover:text-gray-900">
              Go Home
            </a>
          </div>
          <div className="px-5 py-2 select-none">
            <a className="text-base text-gray-500 hover:text-gray-900">
              Contact Me
            </a>
          </div>
          <div className="px-5 py-2 select-none">
            <a
              className="text-base text-gray-500 hover:text-gray-900"
              href="https://github.com/1Ghasthunter1"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </nav>
        <p className="mt-4 text-center text-base text-gray-400 select-none">
          &copy; 2022 Hunter Pruett. All good vibes ✌️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
