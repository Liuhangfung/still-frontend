import { readFileSync } from "node:fs";
import { join } from "node:path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { legalDocs, legalValues, type LegalDoc } from "@/content/legal/config";
import { Footer } from "../landing/footer";
import { Wrap } from "../landing/section";
import { SubpageHeader } from "../landing/subpage-header";

/** Reads a legal Markdown file at build time and fills in the {{key}} values. */
function loadDoc(slug: LegalDoc["slug"]): string {
  const raw = readFileSync(join(process.cwd(), "src/content/legal", `${slug}.md`), "utf8");
  return raw.replace(/\{\{(\w+)\}\}/g, (match, key: string) => legalValues[key] ?? match);
}

export function LegalPage({ slug }: { slug: LegalDoc["slug"] }) {
  const doc = legalDocs[slug];
  return (
    <>
      <SubpageHeader />
      <main className="bg-white py-14 lg:py-20">
        <Wrap className="max-w-[820px]">
          <h1 className="display text-[clamp(44px,6vw,64px)]">{doc.title.toUpperCase()}</h1>
          <p className="mt-3 text-sm font-semibold text-muted">
            Version {doc.version} · Last updated {doc.lastUpdated}
          </p>
          <div className="mt-6 rounded-[14px] border-[1.5px] border-l-[5px] border-line border-l-gold bg-gold-paper px-5 py-4 text-sm text-ink">
            <b>Draft.</b> This document is being finalised and will be reviewed by a lawyer before
            the Still app launches. Text in [brackets] is still to be filled in.
          </div>
          <article className="prose prose-slate mt-10 max-w-none prose-headings:font-extrabold prose-headings:text-ink prose-h2:mt-12 prose-h2:text-2xl prose-h3:text-lg prose-a:text-teal-dark prose-strong:text-ink prose-table:text-sm prose-th:text-ink">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{loadDoc(slug)}</ReactMarkdown>
          </article>
        </Wrap>
      </main>
      <Footer />
    </>
  );
}
