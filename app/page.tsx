import { Icon, type IconName } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";

const ICON_NAMES: IconName[] = [
  "arrow-right",
  "arrow-left",
  "search",
  "menu",
  "map",
  "calendar",
  "gift",
  "call",
  "telegram",
  "instagram",
];

// Temporary component preview — replaced by the real sections as they land.
export default function Home() {
  return (
    <main className="flex-1 space-y-10 px-6 py-16 md:px-[130px]">
      <h1 className="font-display text-5xl font-bold text-olive md:text-[80px] md:leading-[85px]">
        A Quiet Bloom
        <br />
        in Every Sip
      </h1>

      <div className="flex flex-wrap items-center gap-4 text-ink">
        {ICON_NAMES.map((n) => (
          <Icon key={n} name={n} size={32} />
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <Logo type="default" size="large" />
        <Logo type="bloom" size="large" />
        <span className="rounded-2xl bg-olive p-2">
          <Logo type="blossom-white" size="large" />
        </span>
        <span className="rounded-2xl bg-olive p-2">
          <Logo type="blossom" size="large" />
        </span>
      </div>
    </main>
  );
}
