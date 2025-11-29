import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            Healthy weekly meal plans, powered by millets.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            Balance your breakfast, lunch, and dinner with traditional millets.
            Get personalized meal plans that bring ancient grains into your
            modern lifestyle, promoting better health and sustainable eating
            habits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base">
              Create my weekly plan
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base bg-transparent"
            >
              View sample menu
            </Button>
          </div>
        </div>

        {/* Right side - Meal planner card */}
        <div className="flex justify-center lg:justify-end">
          <Card className="w-full max-w-md p-6 shadow-xl bg-card border-border">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-card-foreground">
                  Your Weekly Plan
                </h3>
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20"
                >
                  7 Days
                </Badge>
              </div>

              <div className="space-y-3">
                <MealDay
                  day="Monday"
                  meal="Foxtail Millet Laddoo"
                  tags={["High fiber", "Low GI"]}
                />
                <MealDay
                  day="Tuesday"
                  meal="Barnyard Millet Khichdi"
                  tags={["Protein rich"]}
                />
                <MealDay
                  day="Wednesday"
                  meal="Kodo Millet Pulao"
                  tags={["Low GI", "Gluten-free"]}
                />
                <MealDay
                  day="Thursday"
                  meal="Little Millet Upma"
                  tags={["High fiber"]}
                />
                <MealDay
                  day="Friday"
                  meal="Pearl Millet Roti"
                  tags={["Iron rich", "Protein rich"]}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function MealDay({
  day,
  meal,
  tags,
}: {
  day: string;
  meal: string;
  tags: string[];
}) {
  return (
    <div className="p-3 rounded-xl border border-border bg-secondary/50 hover:bg-secondary transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-muted-foreground">{day}</p>
          <p className="text-base font-semibold text-card-foreground truncate">
            {meal}
          </p>
        </div>
        <div className="flex flex-wrap gap-1 justify-end">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs bg-accent/80 text-accent-foreground border-0"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
