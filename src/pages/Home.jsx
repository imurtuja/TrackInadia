import { useEffect } from "react";
import TrackingForm from "../components/TrackingForm";
import ServicesShowcase from "../components/ServicesShowcase";

const Home = () => {
  useEffect(() => {
    document.title = "TrackIndia by Murtuja - Package Tracking Platform";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <TrackingForm />
      <ServicesShowcase />
    </div>
  );
};

export default Home;
