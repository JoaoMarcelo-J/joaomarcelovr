export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid opacity-60" />

      <div className="animate-float-slow absolute -left-32 top-[-10%] h-[36rem] w-[36rem] rounded-full bg-accent/20 blur-[120px]" />
      <div className="animate-float-slow-rev absolute -right-40 top-[20%] h-[34rem] w-[34rem] rounded-full bg-accent-3/20 blur-[130px]" />
      <div className="animate-float-slow absolute bottom-[-15%] left-1/3 h-[30rem] w-[30rem] rounded-full bg-accent-2/15 blur-[120px]" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
