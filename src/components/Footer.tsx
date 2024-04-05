
function Footer() {
  return (
    <footer className="bg-black text-white py-4 px-3 mt-16">
    <div className="container mx-auto flex flex-wrap items-center justify-between">
      <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
      <span className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
  <img src="courses/logo.png" alt="Logo" className="w-20 h-auto" />
</span>
      </div>


      <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
        <ul className="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
          <li>
            <a href="contact" className="text-gray-400 hover:text-white">
              Contact
            </a>
          </li>

          <li>
            <a href="terms" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  
  );
}

export default Footer;
