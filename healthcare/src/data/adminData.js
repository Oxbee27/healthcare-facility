export const ADMIN_STATS = [
  { id: "patients", label: "Active patients", value: "4,820", change: "+3.2%" },
  { id: "appointments", label: "Appointments this month", value: "1,240", change: "+6.1%" },
  { id: "wait", label: "Average wait time", value: "8 min", change: "-1.4%" },
  { id: "satisfaction", label: "Patient satisfaction", value: "4.8 / 5", change: "+0.1" },
];

export const APPOINTMENT_VOLUME = {
  months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  values: [980, 1040, 1105, 1180, 1210, 1240],
};

export const DEPARTMENTS = [
  {
    id: "d1",
    name: "Family Medicine",
    head: "Dr. Elena Marsh",
    staff: 18,
    patientsThisMonth: 640,
    status: "On track",
  },
  {
    id: "d2",
    name: "Cardiology",
    head: "Dr. Raj Kapoor",
    staff: 11,
    patientsThisMonth: 210,
    status: "On track",
  },
  {
    id: "d3",
    name: "Dermatology",
    head: "Dr. Noor Haddad",
    staff: 7,
    patientsThisMonth: 165,
    status: "On track",
  },
  {
    id: "d4",
    name: "Behavioral Health",
    head: "Dr. Sam Okafor",
    staff: 9,
    patientsThisMonth: 128,
    status: "Needs staffing",
  },
  {
    id: "d5",
    name: "Internal Medicine",
    head: "Amelia Cho, NP",
    staff: 14,
    patientsThisMonth: 302,
    status: "On track",
  },
  {
    id: "d6",
    name: "Emergency",
    head: "Dr. Priya Anand",
    staff: 22,
    patientsThisMonth: 415,
    status: "High volume",
  },
];
