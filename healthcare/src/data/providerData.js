import { PORTRAITS } from "./media";

export const PROVIDER_PATIENTS = [
  {
    id: "jb",
    name: "Jordan Blake",
    photo: PORTRAITS.jordanBlake,
    age: 34,
    sex: "F",
    conditions: ["Seasonal allergies", "Mild hypertension"],
    lastVisit: "Jun 3, 2026",
    nextVisit: "Sep 8, 2026",
    vitals: {
      bp: "128/82 mmHg",
      hr: "72 bpm",
      weight: "64 kg",
      updated: "Jun 3, 2026",
    },
    medications: [
      { name: "Lisinopril", dose: "10mg", frequency: "Once daily" },
      { name: "Loratadine", dose: "10mg", frequency: "As needed" },
      { name: "Sertraline", dose: "50mg", frequency: "Once daily" },
    ],
    notes: [
      {
        date: "Jun 3, 2026",
        author: "Dr. Elena Marsh",
        text: "Blood pressure trending down since starting Lisinopril. Continue current dose, recheck in September.",
      },
      {
        date: "Apr 18, 2026",
        author: "Dr. Elena Marsh",
        text: "Seasonal allergy flare-up, recommended Loratadine as needed.",
      },
    ],
  },
  {
    id: "mw",
    name: "Marcus Webb",
    photo: PORTRAITS.marcusWebb,
    age: 52,
    sex: "M",
    conditions: ["Type 2 diabetes", "High cholesterol"],
    lastVisit: "Aug 12, 2026",
    nextVisit: "Oct 6, 2026",
    vitals: {
      bp: "134/88 mmHg",
      hr: "78 bpm",
      weight: "91 kg",
      updated: "Aug 12, 2026",
    },
    medications: [
      { name: "Metformin", dose: "500mg", frequency: "Twice daily" },
      { name: "Atorvastatin", dose: "20mg", frequency: "Once daily" },
    ],
    notes: [
      {
        date: "Aug 12, 2026",
        author: "Dr. Elena Marsh",
        text: "A1C improved to 6.9%. Continue current regimen, encourage continued dietary changes.",
      },
    ],
  },
  {
    id: "pa",
    name: "Priya Anand",
    photo: PORTRAITS.priyaAnand,
    age: 29,
    sex: "F",
    conditions: ["Prenatal care — 24 weeks"],
    lastVisit: "Aug 30, 2026",
    nextVisit: "Sep 27, 2026",
    vitals: {
      bp: "112/70 mmHg",
      hr: "80 bpm",
      weight: "68 kg",
      updated: "Aug 30, 2026",
    },
    medications: [
      { name: "Prenatal vitamin", dose: "1 tablet", frequency: "Once daily" },
    ],
    notes: [
      {
        date: "Aug 30, 2026",
        author: "Dr. Elena Marsh",
        text: "Anatomy scan normal. Discussed nutrition and continuing light exercise.",
      },
    ],
  },
  {
    id: "tb",
    name: "Tyler Brooks",
    photo: PORTRAITS.tylerBrooks,
    age: 41,
    sex: "M",
    conditions: ["New patient — intake pending"],
    lastVisit: "—",
    nextVisit: "Sep 8, 2026",
    vitals: {
      bp: "—",
      hr: "—",
      weight: "—",
      updated: "—",
    },
    medications: [],
    notes: [],
  },
  {
    id: "gk",
    name: "Grace Kim",
    photo: PORTRAITS.graceKim,
    age: 67,
    sex: "F",
    conditions: ["Osteoarthritis"],
    lastVisit: "Jul 20, 2026",
    nextVisit: "Sep 8, 2026",
    vitals: {
      bp: "122/78 mmHg",
      hr: "70 bpm",
      weight: "59 kg",
      updated: "Jul 20, 2026",
    },
    medications: [
      { name: "Naproxen", dose: "250mg", frequency: "As needed" },
    ],
    notes: [
      {
        date: "Jul 20, 2026",
        author: "Dr. Elena Marsh",
        text: "Knee pain manageable with current regimen. Referred to physical therapy.",
      },
    ],
  },
];

export const TODAY_SCHEDULE = [
  {
    id: "s1",
    time: "9:00 AM",
    patientId: "jb",
    patient: "Jordan Blake",
    photo: PORTRAITS.jordanBlake,
    reason: "Blood pressure follow-up",
    type: "Video visit",
    status: "Confirmed",
  },
  {
    id: "s2",
    time: "10:30 AM",
    patientId: "mw",
    patient: "Marcus Webb",
    photo: PORTRAITS.marcusWebb,
    reason: "Diabetes check-in",
    type: "In-person",
    status: "Confirmed",
  },
  {
    id: "s3",
    time: "11:15 AM",
    patientId: "gk",
    patient: "Grace Kim",
    photo: PORTRAITS.graceKim,
    reason: "Osteoarthritis follow-up",
    type: "In-person",
    status: "Confirmed",
  },
  {
    id: "s4",
    time: "1:00 PM",
    patientId: "tb",
    patient: "Tyler Brooks",
    photo: PORTRAITS.tylerBrooks,
    reason: "New patient consult",
    type: "Video visit",
    status: "Pending",
  },
  {
    id: "s5",
    time: "2:30 PM",
    patientId: "pa",
    patient: "Priya Anand",
    photo: PORTRAITS.priyaAnand,
    reason: "Prenatal check-in",
    type: "In-person",
    status: "Confirmed",
  },
];

export const PROVIDER_INBOX = [
  {
    id: "pi1",
    name: "Jordan Blake",
    photo: PORTRAITS.jordanBlake,
    preview: "Should I keep taking Loratadine daily or only as needed?",
    message:
      "Hi Dr. Marsh, my allergies have calmed down this week. Should I keep taking Loratadine daily or switch back to only as needed?",
    time: "1h ago",
    unread: true,
  },
  {
    id: "pi2",
    name: "Marcus Webb",
    photo: PORTRAITS.marcusWebb,
    preview: "My glucose readings from this week are attached.",
    message:
      "Hi Dr. Marsh, my glucose readings from this week are attached below. They've been more stable since the dinner schedule change.",
    time: "4h ago",
    unread: true,
  },
  {
    id: "pi3",
    name: "Grace Kim",
    photo: PORTRAITS.graceKim,
    preview: "Thank you for the physical therapy referral!",
    message:
      "Thank you for the physical therapy referral! I have my first session scheduled for next week.",
    time: "1d ago",
    unread: false,
  },
];
