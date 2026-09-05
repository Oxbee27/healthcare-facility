export const PATIENT = {
  name: "Alex Johnson",
  firstName: "Alex",
  avatar: "https://i.pravatar.cc/150?img=12",
  bloodGroup: "O+",
  age: 29,
};

export const APPOINTMENTS = [
  {
    id: 1,
    doctor: "Dr. Sarah Wilson",
    specialty: "Cardiologist",
    date: "Today",
    time: "10:30 AM",
    type: "Video consultation",
    avatar: "https://i.pravatar.cc/150?img=47",
    status: "Upcoming",
  },
  {
    id: 2,
    doctor: "Dr. Michael Chen",
    specialty: "General Physician",
    date: "Sep 09",
    time: "2:00 PM",
    type: "In-person visit",
    avatar: "https://i.pravatar.cc/150?img=11",
    status: "Confirmed",
  },
  {
    id: 3,
    doctor: "Dr. Emily Carter",
    specialty: "Dermatologist",
    date: "Sep 15",
    time: "11:00 AM",
    type: "Video consultation",
    avatar: "https://i.pravatar.cc/150?img=32",
    status: "Confirmed",
  },
];

export const DOCTORS = [
  {
    id: 1,
    name: "Dr. Sarah Wilson",
    specialty: "Cardiologist",
    rating: 4.9,
    experience: "12 years",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "General Physician",
    rating: 4.8,
    experience: "9 years",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 3,
    name: "Dr. Emily Carter",
    specialty: "Dermatologist",
    rating: 4.9,
    experience: "10 years",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 4,
    name: "Dr. James Brown",
    specialty: "Neurologist",
    rating: 4.7,
    experience: "15 years",
    avatar: "https://i.pravatar.cc/150?img=68",
  },
];

export const PRESCRIPTIONS = [
  {
    name: "Amoxicillin",
    dose: "500mg",
    instruction: "1 capsule, 3 times daily",
    remaining: 12,
  },
  {
    name: "Vitamin D3",
    dose: "1000 IU",
    instruction: "1 tablet, once daily",
    remaining: 21,
  },
  {
    name: "Lisinopril",
    dose: "10mg",
    instruction: "1 tablet every morning",
    remaining: 8,
  },
];

export const ROLE_IDENTITY = {
  role: "Patient",
  name: PATIENT.name,
  avatar: PATIENT.avatar,
};

export const NAVIGATION = [
  {
    label: "Dashboard",
    key: "dashboard",
  },
  {
    label: "Appointments",
    key: "appointments",
  },
  {
    label: "Doctors",
    key: "doctors",
  },
  {
    label: "Prescriptions",
    key: "prescriptions",
  },
  {
    label: "Health Records",
    key: "records",
  },
  {
    label: "Messages",
    key: "messages",
  },
  {
    label: "Profile",
    key: "profile",
  },
];