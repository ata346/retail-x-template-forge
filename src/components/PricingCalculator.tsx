
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
    monthlyPrice: 399, // Updated price
    yearlyPrice: 4388, // Updated yearly price (399 * 11)
    description: "Single-Page Website",
    color: "text-blue-500"
  },
  {
    name: "Business Website Plan",
    monthlyPrice: 599, // Updated price
    yearlyPrice: 6589, // Updated yearly price (599 * 11)
    description: "Up to 3 Pages",
    color: "text-green-500"
  },
  {
    name: "Basic Plan",
    monthlyPrice: 499,
    yearlyPrice: 5488,
    description: "Up to 5 Products",
    color: "text-amber-500"
  },
  {
    name: "Standard Plan",
    monthlyPrice: 999,
    yearlyPrice: 10988,
    description: "Up to 15 Products",
    color: "text-purple-500"
  },
  {
    name: "Premium Plan",
    monthlyPrice: 1999,
    yearlyPrice: 21988,
    description: "Up to 25 Products",
    color: "text-red-500"
  },
  {
    name: "Elite Premium Plan",
    monthlyPrice: 6999, // Updated price
    yearlyPrice: 76989, // Updated yearly price (6999 * 11)
    description: "Up to 50 Products",
    color: "text-amber-600"
  }
];

const PricingCalculator = () => {
  const [selectedPlan, setSelectedPlan] = useState<number>(2); // Default to Basic Plan (index 2)
  const [duration, setDuration] = useState<"monthly" | "yearly">("monthly");
  const [sliderValue, setSliderValue] = useState(2); // Default to Basic Plan

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
    <Card className="w-full max-w-3xl mx-auto bg-white">
      <CardContent className="p-6">
        <div className="flex items-center justify-center mb-6">
          <Calculator className="h-6 w-6 text-amber-500 mr-2" />
          <h2 className="text-2xl font-bold text-center">Pricing Calculator</h2>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Label htmlFor="duration" className="text-base">Billing Cycle</Label>
            <div className="flex items-center space-x-2">
              <span className={`text-sm ${duration === "monthly" ? "font-bold" : "text-muted-foreground"}`}>
                Monthly
              </span>
              <Switch
                id="duration"
                checked={duration === "yearly"}
                onCheckedChange={toggleDuration}
              />
              <span className={`text-sm ${duration === "yearly" ? "font-bold" : "text-muted-foreground"}`}>
                Yearly <span className="text-xs text-green-600 font-normal">(Save 2 months)</span>
              </span>
            </div>
          </div>
          
          <div className="space-y-4">
            <Label htmlFor="plan-slider" className="text-base">Select Your Plan</Label>
            <Slider 
              id="plan-slider"
              min={0}
              max={5}
              step={1}
              value={[sliderValue]} 
              onValueChange={handleSliderChange}
              className="my-6"
            />
            
            <div className="grid grid-cols-6 text-xs text-center gap-0 px-2">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`cursor-pointer ${selectedPlan === index ? 'font-bold' : 'text-muted-foreground'}`}
                  onClick={() => {
                    setSelectedPlan(index);
                    setSliderValue(index);
                  }}
                >
                  {plan.name.split(" ")[0]}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg mt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-xl font-bold ${selectedPlanData.color}`}>{selectedPlanData.name}</h3>
              <div className="text-right">
                <div className="text-3xl font-bold">₹{price.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">
                  {duration === "monthly" ? "per month" : "per year"}
                </div>
                {savings > 0 && (
                  <div className="text-xs text-green-600 font-medium">
                    Save ₹{savings.toLocaleString()} yearly
                  </div>
                )}
              </div>
            </div>
            
            <div className="text-sm">
              <p>{selectedPlanData.description}</p>
            </div>
            
            <Button 
              asChild 
              className="w-full mt-4" 
              variant={selectedPlan === 5 ? "default" : "outline"}
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
