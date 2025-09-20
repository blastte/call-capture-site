const Footer = () => {
  return (
    <footer className="py-8 bg-brand-text">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center">
          <div className="text-white/90 text-sm">
            <span className="font-semibold">AlwaysBooked™</span>
            {" | "}
            <a 
              href="mailto:hello@alwaysbooked.com" 
              className="hover:text-brand-orange transition-colors"
            >
              hello@alwaysbooked.com
            </a>
            {" | "}
            <a 
              href="tel:+1234567890" 
              className="hover:text-brand-orange transition-colors"
            >
              (123) 456-7890
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;