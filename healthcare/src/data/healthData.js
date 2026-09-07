import { PORTRAITS } from "./media";

export const PROVIDERS = [
  {
    id: "p1",
    name: "Dr. Elena Marsh",
    specialty: "Family Medicine",
    initials: "EM",
    photo: PORTRAITS.elenaMarsh,
  },
  {
    id: "p2",
    name: "Dr. Raj Kapoor",
    specialty: "Cardiology",
    initials: "RK",
    photo: PORTRAITS.rajKapoor,
  },
  {
    id: "p3",
    name: "Dr. Noor Haddad",
    specialty: "Dermatology",
    initials: "NH",
    photo: PORTRAITS.noorHaddad,
  },
  {
    id: "p4",
    name: "Dr. Sam Okafor",
    specialty: "Behavioral Health",
    initials: "SO",
    photo: PORTRAITS.samOkafor,
  },
  {
    id: "p5",
    name: "Amelia Cho, NP",
    specialty: "Internal Medicine",
    initials: "AC",
    photo: PORTRAITS.ameliaCho,
  },
];

export const PATIENT = {
  id: "jb",
  name: "Jordan Blake",
  age: 34,
  sex: "F",
  mrn: "MRN-30291",
  initials: "JB",
  photo: PORTRAITS.jordanBlake,

  conditions: [
    "Seasonal allergies",
    "Mild hypertension",
  ],

  allergies: [
    "Penicillin",
    "Shellfish",
  ],

  provider: "Dr. Elena Marsh",

  medications: [
    {
      id: "m1",
      name: "Lisinopril",
      dose: "10mg",
      frequency: "Once daily",
      status: "Active",
      refillsLeft: 2,
    },
    {
      id: "m2",
      name: "Loratadine",
      dose: "10mg",
      frequency: "As needed",
      status: "Active",
      refillsLeft: 0,
    },
    {
      id: "m3",
      name: "Sertraline",
      dose: "50mg",
      frequency: "Once daily",
      status: "Active",
      refillsLeft: 1,
    },
  ],

  tasks: [
    {
      id: "t1",
      text: "Flu shot due for the 2026 season",
    },
    {
      id: "t2",
      text: "Complete pre-visit questionnaire for Sep 8 appointment",
    },
    {
      id: "t3",
      text: "New lab results available to review",
    },
  ],

  careTeam: [
    {
      name: "Dr. Elena Marsh",
      initials: "EM",
      specialty: "Family Medicine — Primary care",
      photo: PORTRAITS.elenaMarsh,
    },
    {
      name: "Dr. Sam Okafor",
      initials: "SO",
      specialty: "Behavioral Health",
      photo: PORTRAITS.samOkafor,
    },
  ],

  nextAppointment: {
    reason: "Blood pressure follow-up",
    provider: "Dr. Elena Marsh",
    providerInitials: "EM",
    providerPhoto: PORTRAITS.elenaMarsh,
    date: "Sep 8, 2026",
    time: "10:30 AM",
    type: "Video visit",
  },
};

export const NAVIGATION = {
  patient: [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "home",
    },
    {
      id: "appointments",
      label: "Appointments",
      icon: "calendar",
    },
    {
      id: "records",
      label: "Medical records",
      icon: "folder",
    },
    {
      id: "messages",
      label: "Messages",
      icon: "message",
    },
    {
      id: "medications",
      label: "Medications",
      icon: "pill",
    },
    {
      id: "billing",
      label: "Billing",
      icon: "card",
    },
    {
      id: "settings",
      label: "Settings",
      icon: "settings",
    },
  ],

  provider: [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "home",
    },
    {
      id: "schedule",
      label: "Schedule",
      icon: "calendar",
    },
    {
      id: "patients",
      label: "Patients",
      icon: "users",
    },
    {
      id: "chart",
      label: "Patient chart",
      icon: "file",
    },
    {
      id: "inbox",
      label: "Inbox",
      icon: "inbox",
    },
    {
      id: "settings",
      label: "Settings",
      icon: "settings",
    },
  ],

  admin: [
    {
      id: "dashboard",
      label: "Overview",
      icon: "home",
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: "bar",
    },
    {
      id: "departments",
      label: "Departments",
      icon: "building",
    },
    {
      id: "settings",
      label: "Settings",
      icon: "settings",
    },
  ],
};

export const ROLE_IDENTITY = {
  patient: {
    name: "Jordan Blake",
    subtitle: "Patient",
    initials: "JB",
    photo: PORTRAITS.jordanBlake,
  },

  provider: {
    name: "Dr. Elena Marsh",
    subtitle: "Family Medicine",
    initials: "EM",
    photo: PORTRAITS.elenaMarsh,
  },

  admin: {
    name: "Priya Nair",
    subtitle: "Practice Administrator",
    initials: "PN",
    photo: PORTRAITS.priyaNair,
  },
};