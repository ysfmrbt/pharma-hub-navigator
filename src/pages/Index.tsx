import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 p-4">
      <div className="w-full max-w-4xl animate-fadeIn">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Système de Gestion de Pharmacie
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Optimisez vos opérations pharmaceutiques avec notre solution de gestion moderne
          </p>
        </div>

        <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden group transition-transform duration-300 hover:-translate-y-2">
          <img
            src="/placeholder.svg"
            alt="Gestion de Pharmacie"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4">
            <Button
              onClick={() => navigate("/register")}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
            >
              Créer un Compte
            </Button>
            <Button
              onClick={() => navigate("/login")}
              variant="outline"
              className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-6 rounded-xl text-lg border-2 transition-all duration-300 transform hover:scale-105"
            >
              Connexion
            </Button>
          </div>
        </div>

        <section className="bg-card backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">À Propos de Nous</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Notre Mission</h3>
              <p className="text-gray-600">
                Nous nous engageons à fournir aux pharmacies des outils modernes et efficaces pour optimiser leur gestion quotidienne et améliorer les services aux patients.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Notre Vision</h3>
              <p className="text-gray-600">
                Transformer la gestion pharmaceutique grâce à des solutions numériques innovantes, permettant aux professionnels de santé de se concentrer sur ce qui compte le plus : les soins aux patients.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;