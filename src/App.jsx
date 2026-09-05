import { useState } from "react";

import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import ErrorBoundary from "./components/ErrorBoundary"




import PatientDashboard from "./pages/PatientDashboard";
import Appointments from "./pages/Appointments";
import Doctors from "./pages/Doctors";
import Prescriptions from "./pages/Prescriptions";
import HealthRecords from "./pages/HealthRecords";
import Placeholder from "./pages/Placeholder";

export default function App() {
  const [active, setActive] = useState("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = (page) => {
    setActive(page);
    setMobileOpen(false);
  };

  const renderPage = () => {
    switch (active) {
      case "dashboard":
        return (
          <PatientDashboard
            onBookAppointment={() => navigate("appointments")}
            onNavigate={navigate}
          />
        );

      case "appointments":
        return (
          <Appointments
            onBookAppointment={() => alert("Booking form coming soon")}
          />
        );

      case "doctors":
        return (
          <Doctors
            onBookAppointment={() => navigate("appointments")}
          />
        );

      case "prescriptions":
        return <Prescriptions />;

      case "records":
        return <HealthRecords />;

      case "messages":
        return (
          <Placeholder
            title="Messages"
            description="Chat securely with your doctors and care team."
          />
        );

      case "profile":
        return (
          <Placeholder
            title="Profile"
            description="Manage your personal details and account settings."
          />
        );

      default:
        return <PatientDashboard onNavigate={navigate} />;
    }
  };

  return (
    
  <div className="min-h-screen bg-[#F3F5EF]">

    <Sidebar
      active={active}
      onNavigate={navigate}
      open={mobileOpen}
      onClose={() => setMobileOpen(false)}
    />

    <div className="min-h-screen lg:ml-64">

      <Topbar
        onMenu={() => setMobileOpen(true)}
      />

      <main className="mx-auto w-full max-w-[1500px] p-4 sm:p-6 lg:p-8">
        {renderPage()}
      </main>

    </div>

  </div>
);
}