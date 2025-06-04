
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Calculator } from "lucide-react";

interface Plan {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  color: string;
}

const plans: Plan[] = [
  {
    name: "MiniSites Plan",
    monthlyPrice: 479,
    yearlyPrice: 5265,
    description: "Single-Page Website",
    color: "text-blue-500"
  },
  {
    name: "Business Website Plan",
    monthlyPrice: 719,
    yearlyPrice: 7907,
    description: "Up to 3 Pages",
    color: "text-green-500"
  },
  {
    name: "Business Website Pro Plan",
    monthlyPrice: 2999,
    yearlyPrice: 32987,
    description: "Up to 6 Pages",
    color: "text-teal-600"
  },
  {
    name: "Basic Plan",
    monthlyPrice: 599,
    yearlyPrice: 6586,
    description: "Up to 5 Products",
    color: "text-amber-500"
  },
  {
    name: "Standard Plan",
    monthlyPrice: 1199,
    yearlyPrice: 13186,
    description: "Up to 15 Products",
    color: "text-purple-500"
  },
  {
    name: "Premium Plan",
    monthlyPrice: 2399,
    yearlyPrice: 26386,
    description: "Up to 25 Products",
    color: "text-red-500"
  },
  {
    name: "Elite Premium Plan",
    monthlyPrice: 8399,
    yearlyPrice: 92387,
    description: "Up to 50 Products",
    color: "text-amber-600"
  },
  {
    name: "Ecom Growth Plan",
    monthlyPrice: 15599,
    yearlyPrice: 171587,
    description: "Up to 88 Products",
    color: "text-emerald-600"
  }
];

const PricingCalculator = () => {
  const [selectedPlan, setSelectedPlan] = useState<number>(3);
  const [duration, setDuration] = useState<"monthly" | "yearly">("monthly");
  const [sliderValue, setSliderValue] = useState(3);

  const handleSliderChange = (value: number[]) => {
    const planIndex = value[0];
    setSliderValue(planIndex);
    setSelectedPlan(planIndex);
  };

  const toggleDuration = () => {
    setDuration(duration === "monthly" ? "yearly" : "monthly");
  };

  const selectedPlanData = plans[selectedPlan];
  const price = duration === "monthly" 
    ? selectedPlanData.monthlyPrice 
    : selectedPlanData.yearlyPrice;
  
  const savings = duration === "yearly" 
    ? Math.round(selectedPlanData.monthlyPrice * 12 - selectedPlanData.yearlyPrice)
    : 0;

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white shadow-lg">
      <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8">
        <div className="flex items-center justify-center mb-4 sm:mb-6 md:mb-8">
          <Calculator className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-amber-500 mr-2" />
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center">Pricing Calculator</h2>
        </div>
        
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            <Label htmlFor="duration" className="text-sm sm:text-base font-medium">Billing Cycle</Label>
            <div className="flex items-center justify-center sm:justify-end space-x-2 sm:space-x-3">
              <span className={`text-xs sm:text-sm ${duration === "monthly" ? "font-bold" : "text-muted-foreground"}`}>
                Monthly
              </span>
              <Switch
                id="duration"
                checked={duration === "yearly"}
                onCheckedChange={toggleDuration}
                className="scale-90 sm:scale-100"
              />
              <span className={`text-xs sm:text-sm ${duration === "yearly" ? "font-bold" : "text-muted-foreground"}`}>
                Yearly <span className="text-xs text-green-600 font-normal block sm:inline">(Save 2 months)</span>
              </span>
            </div>
          </div>
          
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <Label htmlFor="plan-slider" className="text-sm sm:text-base font-medium">Select Your Plan</Label>
            <div className="px-2 sm:px-3 md:px-4">
              <Slider 
                id="plan-slider"
                min={0}
                max={7}
                step={1}
                value={[sliderValue]} 
                onValueChange={handleSliderChange}
                className="my-4 sm:my-6"
              />
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 text-xs sm:text-sm text-center gap-1 sm:gap-2 px-1 sm:px-2">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`cursor-pointer p-1.5 sm:p-2 rounded transition-colors touch-target ${
                    selectedPlan === index 
                      ? 'font-bold bg-accent text-accent-foreground' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                  }`}
                  onClick={() => {
                    setSelectedPlan(index);
                    setSliderValue(index);
                  }}
                >
                  <div className="truncate text-xs sm:text-sm">{plan.name.split(" ")[0]}</div>
                  <div className="hidden sm:block text-xs opacity-75 mt-0.5 sm:mt-1">
                    {plan.name.split(" ")[1]}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl border border-gray-200 mt-4 sm:mt-6 md:mt-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 md:mb-6 gap-3 sm:gap-4">
              <div className="space-y-1 sm:space-y-2">
                <h3 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold ${selectedPlanData.color}`}>
                  {selectedPlanData.name}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  {selectedPlanData.description}
                </p>
              </div>
              <div className="text-center sm:text-right shrink-0">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                  ₹{price.toLocaleString()}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {duration === "monthly" ? "per month" : "per year"}
                </div>
                {savings > 0 && (
                  <div className="text-xs sm:text-sm text-green-600 font-medium mt-0.5 sm:mt-1">
                    Save ₹{savings.toLocaleString()} yearly
                  </div>
                )}
              </div>
            </div>
            
            <Button 
              asChild 
              className="w-full text-xs sm:text-sm md:text-base py-2 sm:py-3 h-10 sm:h-auto touch-target" 
              variant={selectedPlan === 5 || selectedPlan === 6 || selectedPlan === 7 ? "default" : "outline"}
            >
              <a 
                href="https://forms.gle/8EfxuZgW5dMhondk7" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Apply for this plan
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingCalculator;
