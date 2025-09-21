import { Phone, Calendar, DollarSign } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "Step 1",
    title: "Customer calls you",
    description: "When you miss a call, our AI immediately springs into action"
  },
  {
    icon: Calendar,
    step: "Step 2", 
    title: "AI books the job automatically",
    description: "Our intelligent system captures details and schedules the appointment"
  },
  {
    icon: DollarSign,
    step: "Step 3",
    title: "You get paid",
    description: "Jobs go straight into your calendar and you focus on the work"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-section bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our simple 3-step process turns every missed call into a booked job
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-premium rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-button group-hover:shadow-glow">
                    <step.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-brand-orange mb-2">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-brand-text mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-brand-orange/20 transform translate-x-1/2 -translate-y-1/2 z-0" 
                       style={{ width: 'calc(100% + 3rem)' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;