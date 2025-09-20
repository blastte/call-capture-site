const DemoSection = () => {
  return (
    <section id="demo-section" className="py-section bg-brand-light-gray">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-text mb-4">
            See How It Works
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            See how it works in just 2 minutes.
          </p>
          
          <div className="relative rounded-xl overflow-hidden shadow-card-hover bg-white p-2">
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              {/* Placeholder for video - replace with actual embed */}
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg 
                    className="w-8 h-8 text-white ml-1" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-2">Demo Video</h3>
                <p className="text-muted-foreground">
                  Replace this with your actual YouTube or Vimeo embed
                </p>
              </div>
            </div>
          </div>
          
          {/* Example embed code - uncomment and replace with your actual video */}
          {/*
          <div className="relative rounded-xl overflow-hidden shadow-card-hover">
            <iframe
              className="w-full h-64 lg:h-96"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="AlwaysBooked Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;