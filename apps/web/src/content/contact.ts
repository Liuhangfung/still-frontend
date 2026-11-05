/** Topics people can pick on the contact form. Keep ids stable: they will be stored. */
export const contactTopics = [
  { id: "general", label: "General question" },
  { id: "founder", label: "Founder list" },
  { id: "account", label: "My account or data" },
  { id: "bug", label: "Report a problem" },
  { id: "press", label: "Press & partnerships" },
] as const;

export type ContactTopic = (typeof contactTopics)[number]["id"];

export const contactLimits = { name: 100, email: 254, message: 2000, messageMin: 10 };
