import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 p-4">
      <div className="w-full max-w-4xl animate-fadeIn">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pharmacy Management System
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Streamline your pharmacy operations with our modern management solution
          </p>
        </div>

        <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/placeholder.svg"
            alt="Pharmacy Management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="flex justify-center gap-4">
          <Button
            onClick={() => navigate("/register")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
          >
            Add Account
          </Button>
          <Button
            onClick={() => navigate("/login")}
            variant="outline"
            className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-6 rounded-xl text-lg border-2 transition-all duration-300 transform hover:scale-105"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;