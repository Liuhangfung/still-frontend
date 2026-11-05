/**
 * Facts the legal pages need. Fill these in once; every {{key}} in
 * terms.md and privacy.md is replaced with the value here.
 * Values in [brackets] are still to be decided.
 */
export const legalValues: Record<string, string> = {
  companyName: "[Company legal name]",
  companyAddress: "[Registered address]",
  contactEmail: "[support@your-domain]",
  privacyEmail: "[privacy@your-domain]",
  governingLaw: "[country / state]",
  dataRegion: "[region of the Supabase and Cloud Run projects]",
  emailProvider: "[email provider used for the founder list]",
};

export type LegalDoc = {
  slug: "terms" | "privacy";
  title: string;
  version: string;
  lastUpdated: string;
};

export const legalDocs: Record<LegalDoc["slug"], LegalDoc> = {
  terms: {
    slug: "terms",
    title: "Terms & Conditions",
    version: "0.1 (draft)",
    lastUpdated: "5 November 2026",
  },
  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    version: "0.1 (draft)",
    lastUpdated: "5 November 2026",
  },
};
