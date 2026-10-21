export default function Home() {
  return (
    <main className="flex-1 px-6 py-16 md:px-[130px]">
      <h1 className="font-display text-5xl font-bold text-olive md:text-[80px] md:leading-[85px]">
        A Quiet Bloom
        <br />
        in Every Sip
      </h1>
      <p className="mt-8 max-w-[497px] text-xl leading-[35px]">
        We whisk fine matcha with floral touches to create cups that feel like
        a gentle pause in your day.
      </p>
      <div className="mt-8 flex gap-4">
        {["bg-olive", "bg-blossom", "bg-cream border", "bg-white border", "bg-ink"].map(
          (c) => (
            <span key={c} className={`size-12 rounded-full ${c}`} />
          ),
        )}
      </div>
    </main>
  );
}
