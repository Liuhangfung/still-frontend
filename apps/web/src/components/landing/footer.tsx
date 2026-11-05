import { Icon } from "@still/ui";
import { Brand } from "./nav";
import { Wrap } from "./section";

const product = [
  { href: "#reset", label: "The reset" },
  { href: "#programme", label: "The 56 days" },
  { href: "#blog", label: "Blog" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

// Legal pages are not written yet; these links stay inert until they exist.
const company = ["Contact", "Terms", "Privacy"];

export function Footer() {
  return (
    <footer className="border-t border-line bg-footer pb-10 pt-14 text-sm text-muted">
      <Wrap className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mb-3">
            <Brand />
          </div>
          <p>By traders, for traders. 56 days, one quest a day.</p>
        </div>
        <div>
          <h5 className="mb-3 text-sm font-bold text-ink">Product</h5>
          <ul className="flex flex-col gap-2">
            {product.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="mb-3 text-sm font-bold text-ink">Company</h5>
          <ul className="flex flex-col gap-2">
            {company.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </div>
        <div className="col-span-full flex items-start gap-3.5 rounded-[14px] border-[1.5px] border-l-[5px] border-line border-l-teal bg-white px-5 py-[18px] text-ink">
          <Icon name="help-support" className="mt-0.5 text-2xl text-teal-dark" />
          <div>
            <b>If trading is hurting your life,</b> you are not alone. If you&apos;re trading with
            money you need, borrowed money, or you can&apos;t stop even when you want to, please
            talk to someone. Find free, confidential support through a gambling or
            financial-distress helpline in your country.
          </div>
        </div>
        <div className="col-span-full border-t border-line pt-[22px] text-xs leading-relaxed">
          Still is an educational habit-training app. It does not provide financial, investment or
          trading advice, signals or recommendations, and does not connect to any broker or
          exchange. Trading involves substantial risk of loss. Practice results do not guarantee
          future results. For users aged 18 and over. © 2026 Still.
        </div>
      </Wrap>
    </footer>
  );
}
