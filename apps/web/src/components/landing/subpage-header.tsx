import Link from "next/link";
import { Brand } from "./nav";
import { Wrap } from "./section";

/** Simple header for pages other than the landing page: logo home + a back link. */
export function SubpageHeader() {
  return (
    <header className="border-b border-line bg-white">
      <Wrap className="flex h-[72px] items-center justify-between">
        <Brand href="/" />
        <Link href="/" className="text-sm font-semibold text-muted hover:text-ink">
          ← Back to Still
        </Link>
      </Wrap>
    </header>
  );
}
