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
      <main className="py-14 lg:py-20">
        <Wrap className="max-w-[820px]">
          <h1 className="text-[clamp(44px,6vw,64px)] tracking-[-0.025em]">{doc.title}</h1>
          <p className="mt-3 text-sm text-muted">
            Version {doc.version} · Last updated {doc.lastUpdated}
          </p>
          <div className="mt-6 rounded-2xl border border-[#d8c8ab] bg-gold-wash px-5 py-4 text-sm text-ink">
            <b className="font-semibold">Draft.</b> This document is being finalised and will be
            reviewed by a lawyer before the Still app launches. Text in [brackets] is still to be
            filled in.
          </div>
          <article className="prose prose-stone mt-10 max-w-none prose-headings:font-serif prose-headings:font-normal prose-headings:text-ink prose-h2:mt-12 prose-h2:text-[32px] prose-h3:text-2xl prose-p:text-lead prose-li:text-lead prose-a:text-ink prose-strong:text-ink prose-table:text-sm prose-th:text-ink">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{loadDoc(slug)}</ReactMarkdown>
          </article>
        </Wrap>
      </main>
      <Footer />
    </>
  );
}
