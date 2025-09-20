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
    <section className="py-section bg-brand-light-gray">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
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
                className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-orange/20 transition-colors">
                  <benefit.icon className="w-8 h-8 text-brand-orange" />
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