import { RefreshCw, Scale, BookOpen, ShoppingCart } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: RefreshCw,
      title: "Smart millet rotations",
      description:
        "Our intelligent algorithm avoids repeating the same millet too often, ensuring variety and balanced nutrition throughout your week.",
    },
    {
      icon: Scale,
      title: "Balanced macros by default",
      description:
        "Each plan balances complex carbs, protein, and healthy fats automatically, so you get complete nutrition without the guesswork.",
    },
    {
      icon: BookOpen,
      title: "Beginner-friendly recipes",
      description:
        "Simple steps with clear soaking times and cooking methods make it easy for anyone to prepare delicious millet dishes.",
    },
    {
      icon: ShoppingCart,
      title: "Grocery list generator",
      description:
        "One tap to see everything you need for the week. Export to your favorite grocery app or print for shopping convenience.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 text-balance">
            Built for modern life, rooted in ancient grains.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            MilletMate combines centuries-old nutritional wisdom with smart
            technology to make healthy eating effortless and enjoyable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-emerald-100 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <feature.icon className="h-7 w-7 text-emerald-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-800">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
