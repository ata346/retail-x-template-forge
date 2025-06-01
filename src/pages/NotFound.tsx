import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Store } from "lucide-react";
const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);
  return <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md px-4">
        <div className="mb-6">
          <Store className="h-20 w-20 text-retail-600 mx-auto" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link to="/">Return to Homepage</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            
          </Button>
          <Button asChild variant="link" className="w-full">
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>;
};
export default NotFound;