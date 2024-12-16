import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 w-full max-w-md animate-fadeIn">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Create Account</h1>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); navigate("/dashboard"); }}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
              placeholder="Create a password"
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;