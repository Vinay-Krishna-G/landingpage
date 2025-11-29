import { Target, Wheat, CalendarCheck } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: Target,
      title: "Tell us your goals",
      description:
        "Choose from weight loss, steady energy, or general wellness. We'll tailor your plan to support your specific health objectives.",
    },
    {
      number: "2",
      icon: Wheat,
      title: "Pick your favorite millets",
      description:
        "Select from Foxtail, Kodo, Little, Barnyard, Browntop, and more. Mix and match based on taste and nutritional needs.",
    },
    {
      number: "3",
      icon: CalendarCheck,
      title: "Get a ready-to-use weekly plan",
      description:
        "Receive personalized recipes for breakfast, lunch, and dinner, plus a smart grocery list with everything you need.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 text-balance">
            How MilletMate works
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Three simple steps to transform your meals with the power of millets
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 h-full hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Step number badge */}
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center border-2 border-emerald-200">
                    <span className="text-2xl font-bold text-emerald-700">
                      {step.number}
                    </span>
                  </div>
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-slate-800">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
