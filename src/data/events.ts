// Edit / add events here
export type EventItem = {
  title: string;
  date: string;
  description: string;
};

export const events: EventItem[] = [
  {
    title: "Live Acoustic Sessions",
    date: "Every Thursday · 8PM",
    description:
      "Intimate acoustic performances under candlelight from Kampala's finest soul and jazz artists.",
  },
  {
    title: "Quiz Night",
    date: "Every Wednesday · 7:30PM",
    description:
      "Test your wit, win premium prizes. Teams of up to 6 — happy hour pricing all evening.",
  },
  {
    title: "Saturday Live Band",
    date: "Every Saturday · 9PM",
    description:
      "Afro-fusion grooves and live percussion that turn the lounge into a celebration.",
  },
  {
    title: "Sunday Garden Brunch",
    date: "Every Sunday · 11AM – 4PM",
    description:
      "Bottomless mimosas, slow-cooked dishes and a curated playlist beneath the trees.",
  },
];
