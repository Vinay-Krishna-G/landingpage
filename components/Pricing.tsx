import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Free",
      tagline: "Just exploring millets",
      price: "₹0",
      period: "",
      features: [
        "1 weekly plan",
        "Basic recipes",
        "Recipe browsing",
        "Community access",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      tagline: "Everyday Millet Lifestyle",
      price: "₹299",
      period: "/month",
      features: [
        "New plan every week",
        "Unlimited recipes",
        "Soaking schedules included",
        "Grocery list export",
        "Nutritionist chat support",
        "Priority support",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 text-balance">
            Start simple. Upgrade when you're ready.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Try MilletMate for free, then unlock advanced features when you're
            ready to commit to your health journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-white ${
                plan.highlighted
                  ? "border-2 border-emerald-500 shadow-xl scale-105"
                  : "border border-slate-200"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold text-slate-800 mb-2">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-base text-slate-600">
                  {plan.tagline}
                </CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-slate-800">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-slate-600 text-lg">
                      {plan.period}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="px-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="px-8 pb-8">
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-300"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
