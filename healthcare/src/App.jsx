import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import PatientDashboard from "./pages/PatientDashboard";
import PatientAppointments from "./pages/PatientAppointments";
import PatientRecords from "./pages/PatientRecords";
import PatientMessages from "./pages/PatientMessages";
import PatientMedications from "./pages/PatientMedications";
import PatientBilling from "./pages/PatientBilling";

import ProviderDashboard from "./pages/ProviderDashboard";
import ProviderSchedule from "./pages/ProviderSchedule";
import ProviderPatients from "./pages/ProviderPatients";
import ProviderPatientChart from "./pages/ProviderPatientChart";
import ProviderInbox from "./pages/ProviderInbox";

import AdminDashboard from "./pages/AdminDashboard";
import AdminAnalytics from "./pages/AdminAnalytics";
import AdminDepartments from "./pages/AdminDepartments";

import SettingsPage from "./pages/SettingsPage";

export default function App() {
  const [role, setRole] = useState("patient");
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [railOpen, setRailOpen] = useState(false);
  const [selectedPatientId, setSelectedPatientId] = useState("jb");

  function handlePageChange(page) {
    setCurrentPage(page);
    setRailOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleRoleChange(newRole) {
    setRole(newRole);
    setCurrentPage("dashboard");
    setRailOpen(false);
  }

  function handleBookAppointment() {
    alert("Appointment booking will be added in Part 4.");
  }

  const pageProps = {
    onBookAppointment: handleBookAppointment,
    onNavigate: handlePageChange,
    onSelectPatient: setSelectedPatientId,
    patientId: selectedPatientId,
    role,
  };

  const PAGES = {
    patient: {
      dashboard: PatientDashboard,
      appointments: PatientAppointments,
      records: PatientRecords,
      messages: PatientMessages,
      medications: PatientMedications,
      billing: PatientBilling,
      settings: SettingsPage,
    },
    provider: {
      dashboard: ProviderDashboard,
      schedule: ProviderSchedule,
      patients: ProviderPatients,
      chart: ProviderPatientChart,
      inbox: ProviderInbox,
      settings: SettingsPage,
    },
    admin: {
      dashboard: AdminDashboard,
      analytics: AdminAnalytics,
      departments: AdminDepartments,
      settings: SettingsPage,
    },
  };

  const ActivePage = PAGES[role]?.[currentPage] || ComingSoon;

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F3F5EF]">
      <div className="flex min-h-screen">
        <Sidebar
          role={role}
          currentPage={currentPage}
          setPage={handlePageChange}
          railOpen={railOpen}
          setRailOpen={setRailOpen}
          setRole={handleRoleChange}
        />

        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar
            role={role}
            setRailOpen={setRailOpen}
          />

          <main className="mx-auto w-full max-w-[1180px] px-4 pb-10 pt-5 sm:px-6 sm:pb-[60px] sm:pt-7 lg:px-8">
            {ActivePage === ComingSoon ? (
              <ComingSoon
                role={role}
                page={currentPage}
                onBack={() => handlePageChange("dashboard")}
              />
            ) : (
              <ActivePage {...pageProps} />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

function ComingSoon({
  role,
  page,
  onBack,
}) {
  return (
    <div className="flex min-h-[500px] items-center justify-center">
      <div className="text-center">
        <div
          className="
            mx-auto mb-4 flex h-14 w-14
            items-center justify-center
            rounded-full bg-[#E4EFEA]
            text-[#1F6F63]
          "
        >
          ✦
        </div>

        <h2
          className="
            m-0 mb-2
            font-['Newsreader']
            text-2xl
            font-semibold
          "
        >
          {page.charAt(0).toUpperCase() + page.slice(1)}
        </h2>

        <p className="mb-5 text-sm text-[#4B5B5A]">
          The {role} {page} page is coming in the next part.
        </p>

        <button
          type="button"
          onClick={onBack}
          className="
            rounded-lg
            bg-[#1F6F63]
            px-4 py-2.5
            text-sm font-semibold text-white
            hover:bg-[#154F46]
          "
        >
          Back to dashboard
        </button>
      </div>
    </div>
  );
}
