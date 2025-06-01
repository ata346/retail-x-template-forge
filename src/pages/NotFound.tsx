
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Store, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md w-full">
        <div className="mb-6 sm:mb-8">
          <Store className="h-16 w-16 sm:h-20 sm:w-20 text-retail-600 mx-auto" />
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
          Page Not Found
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="space-y-3 sm:space-y-4">
          <Button asChild className="w-full h-12 text-base" size="lg">
            <Link to="/" className="flex items-center justify-center gap-2">
              <Home className="h-4 w-4" />
              Return to Homepage
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="w-full h-12 text-base" size="lg">
            <Link to="/pricing" className="flex items-center justify-center gap-2">
              <Store className="h-4 w-4" />
              View Our Plans
            </Link>
          </Button>
          
          <Button asChild variant="link" className="w-full h-12 text-base" size="lg">
            <Link to="/contact" className="flex items-center justify-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
