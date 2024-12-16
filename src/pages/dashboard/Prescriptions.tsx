import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Medicine {
  id: number;
  name: string;
  dosage: string;
}

interface Prescription {
  id: number;
  patientName: string;
  date: string;
  status: string;
  medicines: Medicine[];
}

const Prescriptions = () => {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([
    {
      id: 1,
      patientName: "Jean Dupont",
      date: "2024-02-20",
      status: "Actif",
      medicines: [
        { id: 1, name: "Paracétamol", dosage: "500mg" },
        { id: 2, name: "Ibuprofène", dosage: "400mg" },
      ],
    },
  ]);

  const [selectedPrescription, setSelectedPrescription] = useState<Prescription | null>(null);

  const handleDelete = (id: number) => {
    setPrescriptions(prescriptions.filter((prescription) => prescription.id !== id));
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Ordonnances</h1>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Ajouter une Ordonnance
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {prescriptions.map((prescription) => (
              <>
                <TableRow key={prescription.id}>
                  <TableCell>{prescription.patientName}</TableCell>
                  <TableCell>{prescription.date}</TableCell>
                  <TableCell>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {prescription.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedPrescription(
                          selectedPrescription?.id === prescription.id ? null : prescription
                        )}
                      >
                        {selectedPrescription?.id === prescription.id ? 
                          <ChevronUp className="w-4 h-4" /> : 
                          <ChevronDown className="w-4 h-4" />
                        }
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-700"
                        onClick={() => handleDelete(prescription.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                {selectedPrescription?.id === prescription.id && (
                  <TableRow>
                    <TableCell colSpan={4}>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-medium text-gray-900 mb-2">Médicaments Prescrits</h3>
                        <div className="space-y-2">
                          {prescription.medicines.map((medicine) => (
                            <div key={medicine.id} className="flex justify-between items-center p-2 bg-white rounded-lg">
                              <span>{medicine.name}</span>
                              <span className="text-gray-500">{medicine.dosage}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Prescriptions;