export const PATIENTS = [
  {
    id: 1,
    name: "Alex Johnson",
    firstName: "Alex",
    avatar: "https://i.pravatar.cc/150?img=12",
    bloodGroup: "O+",
    age: 29,
    gender: "Male",
    phone: "+234 801 234 5678",
    email: "alex.johnson@example.com",

    vitals: {
      bloodPressure: "118/76",
      heartRate: "72 bpm",
      temperature: "36.7°C",
      weight: "72 kg",
    },

    allergies: ["Penicillin"],
    conditions: ["Mild hypertension"],
    surgeries: ["None"],

    medicalHistory: [
      {
        title: "Blood Pressure Assessment",
        type: "Consultation",
        date: "August 28, 2026",
        doctor: "Dr. Sarah Wilson",
        diagnosis: "Mild hypertension",
        notes:
          "Blood pressure is currently stable. Continue monitoring regularly.",
      },
      {
        title: "Complete Blood Count",
        type: "Laboratory",
        date: "August 20, 2026",
        doctor: "Dr. Michael Chen",
        diagnosis: "Normal",
        notes:
          "Blood count results are within the normal range.",
      },
    ],

    medications: [
      {
        name: "Lisinopril",
        dose: "10mg",
        instruction: "1 tablet every morning",
        status: "Active",
      },
      {
        name: "Vitamin D3",
        dose: "1000 IU",
        instruction: "1 tablet once daily",
        status: "Active",
      },
    ],
  },

  {
    id: 2,
    name: "Sarah Williams",
    firstName: "Sarah",
    avatar: "https://i.pravatar.cc/150?img=45",
    bloodGroup: "A+",
    age: 34,
    gender: "Female",
    phone: "+234 802 345 6789",
    email: "sarah.williams@example.com",

    vitals: {
      bloodPressure: "124/80",
      heartRate: "76 bpm",
      temperature: "36.5°C",
      weight: "65 kg",
    },

    allergies: ["Dust"],
    conditions: ["Asthma"],
    surgeries: ["Appendectomy — 2021"],

    medicalHistory: [
      {
        title: "Asthma Review",
        type: "Consultation",
        date: "August 26, 2026",
        doctor: "Dr. Emily Carter",
        diagnosis: "Stable asthma",
        notes:
          "Symptoms are well controlled. Continue current treatment plan.",
      },
      {
        title: "Chest X-Ray",
        type: "Imaging",
        date: "August 14, 2026",
        doctor: "Dr. Michael Chen",
        diagnosis: "No acute findings",
        notes:
          "Chest imaging shows no significant abnormality.",
      },
    ],

    medications: [
      {
        name: "Salbutamol",
        dose: "100mcg",
        instruction: "Use when required",
        status: "Active",
      },
      {
        name: "Cetirizine",
        dose: "10mg",
        instruction: "1 tablet at night",
        status: "Active",
      },
    ],
  },

  {
    id: 3,
    name: "Michael Brown",
    firstName: "Michael",
    avatar: "https://i.pravatar.cc/150?img=51",
    bloodGroup: "B+",
    age: 42,
    gender: "Male",
    phone: "+234 803 456 7890",
    email: "michael.brown@example.com",

    vitals: {
      bloodPressure: "130/84",
      heartRate: "79 bpm",
      temperature: "36.8°C",
      weight: "81 kg",
    },

    allergies: ["None known"],
    conditions: ["Type 2 diabetes"],
    surgeries: ["None"],

    medicalHistory: [
      {
        title: "Diabetes Follow-up",
        type: "Consultation",
        date: "August 25, 2026",
        doctor: "Dr. Michael Chen",
        diagnosis: "Type 2 diabetes",
        notes:
          "Blood glucose levels require continued monitoring and lifestyle management.",
      },
      {
        title: "Blood Glucose Test",
        type: "Laboratory",
        date: "August 18, 2026",
        doctor: "Dr. Sarah Wilson",
        diagnosis: "Elevated glucose",
        notes:
          "Follow-up testing recommended.",
      },
    ],

    medications: [
      {
        name: "Metformin",
        dose: "500mg",
        instruction: "1 tablet twice daily",
        status: "Active",
      },
      {
        name: "Atorvastatin",
        dose: "20mg",
        instruction: "1 tablet at night",
        status: "Active",
      },
    ],
  },

  {
    id: 4,
    name: "Emily Davis",
    firstName: "Emily",
    avatar: "https://i.pravatar.cc/150?img=32",
    bloodGroup: "AB+",
    age: 27,
    gender: "Female",
    phone: "+234 804 567 8901",
    email: "emily.davis@example.com",

    vitals: {
      bloodPressure: "112/72",
      heartRate: "68 bpm",
      temperature: "36.4°C",
      weight: "59 kg",
    },

    allergies: ["None known"],
    conditions: ["Migraine"],
    surgeries: ["None"],

    medicalHistory: [
      {
        title: "Migraine Assessment",
        type: "Consultation",
        date: "August 22, 2026",
        doctor: "Dr. James Brown",
        diagnosis: "Migraine",
        notes:
          "Patient advised to maintain adequate hydration and regular sleep.",
      },
      {
        title: "Neurological Assessment",
        type: "Examination",
        date: "August 10, 2026",
        doctor: "Dr. James Brown",
        diagnosis: "Normal neurological examination",
        notes:
          "No neurological abnormalities detected.",
      },
    ],

    medications: [
      {
        name: "Ibuprofen",
        dose: "400mg",
        instruction: "Take when required",
        status: "Active",
      },
    ],
  },

  {
    id: 5,
    name: "Daniel Okafor",
    firstName: "Daniel",
    avatar: "https://i.pravatar.cc/150?img=68",
    bloodGroup: "O-",
    age: 38,
    gender: "Male",
    phone: "+234 805 678 9012",
    email: "daniel.okafor@example.com",

    vitals: {
      bloodPressure: "121/78",
      heartRate: "74 bpm",
      temperature: "36.6°C",
      weight: "76 kg",
    },

    allergies: ["Latex"],
    conditions: ["High cholesterol"],
    surgeries: ["Knee surgery — 2022"],

    medicalHistory: [
      {
        title: "Cholesterol Review",
        type: "Consultation",
        date: "August 24, 2026",
        doctor: "Dr. Sarah Wilson",
        diagnosis: "High cholesterol",
        notes:
          "Continue medication and maintain a heart-healthy diet.",
      },
      {
        title: "Lipid Profile",
        type: "Laboratory",
        date: "August 16, 2026",
        doctor: "Dr. Michael Chen",
        diagnosis: "Elevated LDL",
        notes:
          "Repeat lipid profile recommended in three months.",
      },
    ],

    medications: [
      {
        name: "Atorvastatin",
        dose: "20mg",
        instruction: "1 tablet at night",
        status: "Active",
      },
    ],
  },
];


export const PATIENT = PATIENTS[0];

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
    icon: "home",
  },
  {
    label: "Patients",
    key: "patients",
    icon: "users",
  },
  {
    label: "Appointments",
    key: "appointments",
    icon: "calendar",
  },
  {
    label: "Doctors",
    key: "doctors",
    icon: "users",
  },
  {
    label: "Prescriptions",
    key: "prescriptions",
    icon: "pill",
  },
  {
    label: "Health Records",
    key: "records",
    icon: "folder",
  },
  {
    label: "Messages",
    key: "messages",
    icon: "message",
  },
];