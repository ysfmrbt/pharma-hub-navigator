import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";

interface Prescription {
  id: number;
  patientName: string;
  date: string;
  status: string;
  medicines: { id: number; name: string; dosage: string }[];
}

const Prescriptions = () => {
  const [selectedPrescription, setSelectedPrescription] = useState<Prescription | null>(null);

  // Mock data - replace with actual data fetching
  const prescriptions: Prescription[] = [
    {
      id: 1,
      patientName: "John Doe",
      date: "2024-02-20",
      status: "Active",
      medicines: [
        { id: 1, name: "Amoxicillin", dosage: "500mg" },
        { id: 2, name: "Ibuprofen", dosage: "400mg" },
      ],
    },
    // Add more mock data as needed
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Prescriptions</h1>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Prescription
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Patient Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {prescriptions.map((prescription) => (
              <tr
                key={prescription.id}
                onClick={() => setSelectedPrescription(prescription)}
                className="hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {prescription.patientName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {prescription.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {prescription.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedPrescription && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Medicines for {selectedPrescription.patientName}
          </h2>
          <div className="space-y-4">
            {selectedPrescription.medicines.map((medicine) => (
              <div
                key={medicine.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <h3 className="font-medium text-gray-900">{medicine.name}</h3>
                  <p className="text-sm text-gray-500">Dosage: {medicine.dosage}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Prescriptions;