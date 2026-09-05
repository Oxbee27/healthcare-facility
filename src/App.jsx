import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import PatientDashboard from "./pages/PatientDashboard";

export default function App() {
  const [role, setRole] = useState("patient");
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [railOpen, setRailOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-[#F3F5EF]">
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

          <main className="w-full max-w-[1180px] px-4 pb-[60px] pt-[30px] sm:px-6 lg:px-8">
            {role === "patient" &&
            currentPage === "dashboard" ? (
              <PatientDashboard
                onBookAppointment={handleBookAppointment}
                onNavigate={handlePageChange}
              />
            ) : (
              <ComingSoon
                role={role}
                page={currentPage}
                onBack={() =>
                  handlePageChange("dashboard")
                }
              />
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