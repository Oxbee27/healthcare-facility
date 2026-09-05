import { useState } from "react";

import { PATIENTS } from "./data/healthData";

import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";

import PatientDashboard from "./pages/PatientDashboard";
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import Doctors from "./pages/Doctors";
import Prescriptions from "./pages/Prescriptions";
import HealthRecords from "./pages/HealthRecords";
import Placeholder from "./pages/Placeholder";

export default function App() {
  const [active, setActive] = useState("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(PATIENTS[0]);

  // Change page
  const navigate = (page) => {
    setActive(page);
    setMobileOpen(false);
  };

  // Change selected patient
  const selectPatient = (patient) => {
    setSelectedPatient(patient);
    setActive("dashboard");
    setMobileOpen(false);
  };

  // Render active page
  const renderPage = () => {
    switch (active) {
      case "dashboard":
        return (
          <PatientDashboard
            patient={selectedPatient}
            onBookAppointment={() => navigate("appointments")}
            onNavigate={navigate}
            onSelectPatient={selectPatient}
          />
        );

      case "patients":
        return (
          <Patients
            onSelectPatient={selectPatient}
          />
        );

      case "appointments":
        return (
          <Appointments
            onBookAppointment={() =>
              alert("Booking form coming soon")
            }
          />
        );

      case "doctors":
        return (
          <Doctors
            onBookAppointment={() =>
              navigate("appointments")
            }
          />
        );

      case "prescriptions":
        return <Prescriptions />;

      case "records":
        return (
          <HealthRecords
            patient={selectedPatient}
          />
        );

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
        return (
          <PatientDashboard
            patient={selectedPatient}
            onBookAppointment={() =>
              navigate("appointments")
            }
            onNavigate={navigate}
            onSelectPatient={selectPatient}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F5EF]">

      {/* Sidebar */}
      <Sidebar
        active={active}
        onNavigate={navigate}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      {/* Main content */}
      <div className="min-h-screen lg:ml-64">

        {/* Topbar */}
        <Topbar
          patient={selectedPatient}
          onMenu={() => setMobileOpen(true)}
        />

        {/* Page content */}
        <main className="mx-auto w-full max-w-[1500px] p-4 sm:p-6 lg:p-8">
          {renderPage()}
        </main>

      </div>
    </div>
  );
}