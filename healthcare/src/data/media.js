// Centralized image references for Meridian Health.
//
// All photos are served directly from Unsplash's CDN (images.unsplash.com),
// free to use under the Unsplash License. Keeping them in one file makes it
// easy to swap in your own photography later — just replace the URL string,
// everything else (sizing, cropping, alt text) is handled by the component
// that consumes it.

function unsplash(id, width = 800) {
  return `https://images.unsplash.com/${id}?q=80&w=${width}&auto=format&fit=crop`;
}

export const FACILITY = {
  name: "Meridian Health",
  tagline: "Modern medicine. Human care.",
};

// Hero background — modern hospital / health-facility exterior.
export const HERO_IMAGE = unsplash("photo-1580615631392-aeb060d526e4", 1800);

// Small floating "care in action" photo used inside the hero card.
export const HERO_FLOATING_IMAGE = unsplash(
  "photo-1631217868264-e5b90bb7e133",
  600
);

// Portraits — used for care-team avatars and provider lists.
export const PORTRAITS = {
  elenaMarsh: unsplash("photo-1659353888906-adb3e0041693", 300),
  rajKapoor: unsplash("photo-1612349317150-e413f6a5b16d", 300),
  noorHaddad: unsplash("photo-1594824476967-48c8b964273f", 300),
  samOkafor: unsplash("photo-1622253692010-333f2da6031d", 300),
  ameliaCho: unsplash("photo-1643297654416-05795d62e39c", 300),
  jordanBlake: unsplash("photo-1546961329-78bef0414d7c", 300),
  priyaNair: unsplash("photo-1704054006064-2c5b922e7a1e", 300),
  marcusWebb: unsplash("photo-1560250097-0b93528c311a", 300),
  priyaAnand: unsplash("photo-1612203304476-2ed23c55b5b9", 300),
  tylerBrooks: unsplash("photo-1622902046580-2b47f47f5471", 300),
  graceKim: unsplash("photo-1566616213894-2d4e1baee5d8", 300),
};

// Doctors and nurses attending to patients — used in the rotating
// "Care, in good hands" gallery on the patient dashboard.
export const CARE_IN_ACTION = [
  {
    id: "consult",
    src: unsplash("photo-1631217868264-e5b90bb7e133", 1400),
    eyebrow: "In the clinic",
    title: "Personalized consultations",
    description:
      "Every visit starts with a conversation, not a chart — your care team listens first.",
  },
  {
    id: "bedside",
    src: unsplash("photo-1584516150909-c43483ee7932", 1400),
    eyebrow: "Inpatient care",
    title: "Attentive bedside manner",
    description:
      "Whether it's a routine check-in or a hospital stay, you're never just a room number.",
  },
  {
    id: "checkup",
    src: unsplash("photo-1581056771107-24ca5f033842", 1400),
    eyebrow: "Follow-up visits",
    title: "Clear, unhurried explanations",
    description:
      "Your provider walks through results and next steps in plain language.",
  },
  {
    id: "examine",
    src: unsplash("photo-1638202993928-7267aad84c31", 1400),
    eyebrow: "Preventive care",
    title: "Thorough, gentle exams",
    description:
      "Routine screenings and checkups designed around your comfort.",
  },
  {
    id: "careteam",
    src: unsplash("photo-1631217871099-88310a909a32", 1400),
    eyebrow: "Collaborative care",
    title: "A team behind every visit",
    description:
      "Specialists coordinate directly so nothing falls through the cracks.",
  },
];
