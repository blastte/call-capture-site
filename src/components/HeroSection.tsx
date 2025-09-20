import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-section');
    demoSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-section bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-brand-text mb-6 leading-tight">
            Turn Missed Calls Into Booked Jobs — 
            <span className="text-brand-orange"> Automatically</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Never lose another customer. Our AI answers missed calls, books jobs instantly, 
            and puts them straight into your calendar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero-outline" 
              size="xl"
              onClick={scrollToDemo}
              className="w-full sm:w-auto"
            >
              Watch Demo
            </Button>
            <Button 
              variant="hero" 
              size="xl"
              asChild
              className="w-full sm:w-auto"
            >
              <a href="mailto:hello@alwaysbooked.com">Book Free Call</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;