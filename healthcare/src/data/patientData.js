import { PORTRAITS } from "./media";

export const APPOINTMENTS = {
  upcoming: [
    {
      id: "a1",
      reason: "Blood pressure follow-up",
      provider: "Dr. Elena Marsh",
      providerPhoto: PORTRAITS.elenaMarsh,
      date: "Sep 8, 2026",
      time: "10:30 AM",
      type: "Video visit",
    },
    {
      id: "a2",
      reason: "Therapy session",
      provider: "Dr. Sam Okafor",
      providerPhoto: PORTRAITS.samOkafor,
      date: "Sep 15, 2026",
      time: "4:00 PM",
      type: "Video visit",
    },
    {
      id: "a3",
      reason: "Annual skin check",
      provider: "Dr. Noor Haddad",
      providerPhoto: PORTRAITS.noorHaddad,
      date: "Sep 22, 2026",
      time: "9:15 AM",
      type: "In-person",
    },
  ],

  past: [
    {
      id: "a4",
      reason: "Annual physical",
      provider: "Dr. Elena Marsh",
      providerPhoto: PORTRAITS.elenaMarsh,
      date: "Jun 3, 2026",
      time: "9:00 AM",
      type: "In-person",
      status: "Completed",
    },
    {
      id: "a5",
      reason: "Allergy consult",
      provider: "Dr. Elena Marsh",
      providerPhoto: PORTRAITS.elenaMarsh,
      date: "Apr 18, 2026",
      time: "2:30 PM",
      type: "Video visit",
      status: "Completed",
    },
    {
      id: "a6",
      reason: "Cardiology check-in",
      provider: "Dr. Raj Kapoor",
      providerPhoto: PORTRAITS.rajKapoor,
      date: "Feb 2, 2026",
      time: "11:00 AM",
      type: "In-person",
      status: "Completed",
    },
  ],
};

export const RECORDS = [
  {
    id: "r1",
    type: "Lab results",
    title: "Lipid panel",
    provider: "Dr. Elena Marsh",
    date: "Aug 28, 2026",
    status: "New",
  },
  {
    id: "r2",
    type: "Visit summary",
    title: "Annual physical",
    provider: "Dr. Elena Marsh",
    date: "Jun 3, 2026",
    status: "Reviewed",
  },
  {
    id: "r3",
    type: "Referral",
    title: "Dermatology referral",
    provider: "Dr. Elena Marsh",
    date: "May 12, 2026",
    status: "Reviewed",
  },
  {
    id: "r4",
    type: "Imaging",
    title: "Chest X-ray",
    provider: "Dr. Raj Kapoor",
    date: "Jan 22, 2026",
    status: "Reviewed",
  },
  {
    id: "r5",
    type: "Immunization",
    title: "Influenza vaccine",
    provider: "Meridian Pharmacy",
    date: "Oct 4, 2025",
    status: "Reviewed",
  },
];

export const MESSAGE_THREADS = [
  {
    id: "t1",
    name: "Dr. Elena Marsh",
    photo: PORTRAITS.elenaMarsh,
    preview: "Your lipid panel results are in — overall looking good.",
    time: "2h ago",
    unread: true,
    messages: [
      {
        from: "them",
        text: "Hi Jordan, your lipid panel results are in. Overall looking good — LDL is down slightly from your last visit.",
        time: "2h ago",
      },
      {
        from: "them",
        text: "Keep up with the current dose of Lisinopril and we'll recheck at your September visit.",
        time: "2h ago",
      },
    ],
  },
  {
    id: "t2",
    name: "Dr. Sam Okafor",
    photo: PORTRAITS.samOkafor,
    preview: "Looking forward to our session on the 15th.",
    time: "1d ago",
    unread: false,
    messages: [
      {
        from: "them",
        text: "Hi Jordan, just confirming our video session on the 15th at 4:00 PM. Let me know if that time still works.",
        time: "1d ago",
      },
      {
        from: "me",
        text: "That works for me, see you then!",
        time: "1d ago",
      },
    ],
  },
  {
    id: "t3",
    name: "Meridian Pharmacy",
    photo: null,
    preview: "Your Lisinopril refill is ready for pickup.",
    time: "3d ago",
    unread: false,
    messages: [
      {
        from: "them",
        text: "Your Lisinopril 10mg refill is ready for pickup at the Meridian Health pharmacy.",
        time: "3d ago",
      },
    ],
  },
];

export const BILLING = {
  balance: 128.4,
  invoices: [
    {
      id: "inv1",
      description: "Annual physical — copay",
      date: "Jun 3, 2026",
      amount: 40.0,
      status: "Paid",
    },
    {
      id: "inv2",
      description: "Lipid panel — lab fee",
      date: "Aug 28, 2026",
      amount: 88.4,
      status: "Due",
    },
    {
      id: "inv3",
      description: "Allergy consult — copay",
      date: "Apr 18, 2026",
      amount: 40.0,
      status: "Paid",
    },
    {
      id: "inv4",
      description: "Cardiology check-in — copay",
      date: "Feb 2, 2026",
      amount: 40.0,
      status: "Paid",
    },
  ],
  paymentMethod: {
    brand: "Visa",
    last4: "4242",
    expiry: "08/28",
  },
};
