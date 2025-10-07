const Footer = () => {
  return (
    <footer className="py-8 bg-brand-card-dark border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center">
          <div className="text-brand-text-light text-sm">
            <span className="font-semibold text-brand-text">AlwaysBooked™</span>
            {" | "}
            <a 
              href="mailto:hello@alwaysbooked.com" 
              className="hover:text-brand-blue transition-colors"
            >
              hello@alwaysbooked.com
            </a>
            {" | "}
            <a 
              href="tel:+1234567890" 
              className="hover:text-brand-blue transition-colors"
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