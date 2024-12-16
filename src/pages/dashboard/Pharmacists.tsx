import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Pharmacists = () => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Pharmacists</h1>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Pharmacist
        </Button>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <p className="text-gray-500">Pharmacists management coming soon...</p>
      </div>
    </div>
  );
};

export default Pharmacists;