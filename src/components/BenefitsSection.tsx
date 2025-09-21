import { PhoneOff, CalendarCheck, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: PhoneOff,
    title: "Never Miss Jobs Again",
    description: "Every call gets answered, even when you're busy on another job. No more lost opportunities."
  },
  {
    icon: CalendarCheck,
    title: "Instant Appointments", 
    description: "Jobs go straight into your calendar with all the details. No back-and-forth scheduling."
  },
  {
    icon: TrendingUp,
    title: "Grow on Autopilot",
    description: "More revenue, less stress. Focus on your work while we handle the booking process."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-section bg-gradient-subtle relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-text mb-4">
              Why Service Providers Choose AlwaysBooked
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your business with automated booking that never sleeps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gradient-card rounded-2xl p-card shadow-elegant hover:shadow-glow transition-all duration-500 group hover:-translate-y-2 border border-white/20"
              >
                <div className="w-20 h-20 bg-gradient-premium rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300 shadow-button">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-brand-orange mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-brand-text leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;