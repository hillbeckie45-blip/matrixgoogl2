import { Pricing } from "@/components/ui/pricing";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const plans = [
  {
    name: "STARTER",
    price: "50",
    yearlyPrice: "40",
    period: "per month",
    features: [";)"],
    description: "Perfect for individuals and small projects",
    buttonText: "Escape now",
    href: "/",
    isPopular: false,
  },
  {
    name: "PROFESSIONAL",
    price: "99",
    yearlyPrice: "79",
    period: "per month",
    features: [";)", ";)"],
    description: "no refund faggots (its going to charity)",
    buttonText: "Get Started",
    href: "/sign-up",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    price: "299",
    yearlyPrice: "239",
    period: "per month",
    features: ["???", "???", "???"],
    description: "For large organizations with specific needs",
    buttonText: "Contact Sales",
    href: "/contact",
    isPopular: false,
    isBlurred: true,
  },
];

const PricingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 text-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft size={24} />
        <span>Back</span>
      </button>
      <Pricing
        plans={plans}
        title="A leader doesn't just survive the game. He makes the game survive him.."
      />
    </div>
  );
};

export default PricingPage;
