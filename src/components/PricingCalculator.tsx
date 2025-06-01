
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
      <CardContent className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <Calculator className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500 mr-2" />
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center">Pricing Calculator</h2>
        </div>
        
        <div className="space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Label htmlFor="duration" className="text-base font-medium">Billing Cycle</Label>
            <div className="flex items-center justify-center sm:justify-end space-x-3">
              <span className={`text-sm ${duration === "monthly" ? "font-bold" : "text-muted-foreground"}`}>
                Monthly
              </span>
              <Switch
                id="duration"
                checked={duration === "yearly"}
                onCheckedChange={toggleDuration}
              />
              <span className={`text-sm ${duration === "yearly" ? "font-bold" : "text-muted-foreground"}`}>
                Yearly <span className="text-xs text-green-600 font-normal block sm:inline">(Save 2 months)</span>
              </span>
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <Label htmlFor="plan-slider" className="text-base font-medium">Select Your Plan</Label>
            <div className="px-2 sm:px-4">
              <Slider 
                id="plan-slider"
                min={0}
                max={7}
                step={1}
                value={[sliderValue]} 
                onValueChange={handleSliderChange}
                className="my-6"
              />
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 text-xs text-center gap-2 px-2">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`cursor-pointer p-2 rounded transition-colors ${
                    selectedPlan === index 
                      ? 'font-bold bg-accent text-accent-foreground' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                  }`}
                  onClick={() => {
                    setSelectedPlan(index);
                    setSliderValue(index);
                  }}
                >
                  <div className="truncate">{plan.name.split(" ")[0]}</div>
                  <div className="hidden sm:block text-[10px] opacity-75 mt-1">
                    {plan.name.split(" ")[1]}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 lg:p-8 rounded-xl border border-gray-200 mt-6 sm:mt-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 sm:mb-6 gap-4">
              <div className="space-y-2">
                <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold ${selectedPlanData.color}`}>
                  {selectedPlanData.name}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {selectedPlanData.description}
                </p>
              </div>
              <div className="text-center sm:text-right shrink-0">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  ₹{price.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">
                  {duration === "monthly" ? "per month" : "per year"}
                </div>
                {savings > 0 && (
                  <div className="text-xs sm:text-sm text-green-600 font-medium mt-1">
                    Save ₹{savings.toLocaleString()} yearly
                  </div>
                )}
              </div>
            </div>
            
            <Button 
              asChild 
              className="w-full text-sm sm:text-base py-2 sm:py-3" 
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
