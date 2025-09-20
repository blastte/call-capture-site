import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="py-section bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-text mb-6">
            Ready to stop losing jobs?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join hundreds of service providers who never miss another customer call.
          </p>
          
          <Button 
            variant="hero" 
            size="xl"
            asChild
            className="text-xl px-12 py-4 h-16"
          >
            <a href="mailto:hello@alwaysbooked.com">Get Started Today</a>
          </Button>
          
          <div className="mt-8 text-sm text-muted-foreground">
            No setup fees • Cancel anytime • 30-day money back guarantee
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;