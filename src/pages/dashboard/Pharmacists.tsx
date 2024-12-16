import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Pharmacist {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
}

const Pharmacists = () => {
  const [pharmacists, setPharmacists] = useState<Pharmacist[]>([
    {
      id: 1,
      name: "Marie Lambert",
      email: "marie.lambert@pharmacie.fr",
      phone: "01 23 45 67 89",
      role: "Pharmacien Chef",
    },
  ]);

  const handleDelete = (id: number) => {
    setPharmacists(pharmacists.filter((pharmacist) => pharmacist.id !== id));
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Pharmaciens</h1>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Ajouter un Pharmacien
        </Button>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Téléphone</TableHead>
              <TableHead>Rôle</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pharmacists.map((pharmacist) => (
              <TableRow key={pharmacist.id}>
                <TableCell>{pharmacist.name}</TableCell>
                <TableCell>{pharmacist.email}</TableCell>
                <TableCell>{pharmacist.phone}</TableCell>
                <TableCell>{pharmacist.role}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:text-red-700"
                      onClick={() => handleDelete(pharmacist.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Pharmacists;