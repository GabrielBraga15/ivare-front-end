export default function BackgroundDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-white dark:from-slate-950 dark:to-slate-900" />

      <div
        className="absolute -top-16 left-[-40%] h-40 w-[28rem] rounded-full bg-white/70 blur-2xl dark:hidden"
        style={{ animation: "cloud-float 34s linear infinite" }}
      />
      <div
        className="absolute top-6 left-[-55%] h-56 w-[42rem] rounded-full bg-white/55 blur-3xl dark:hidden"
        style={{ animation: "cloud-float 52s linear infinite" }}
      />
      <div
        className="absolute top-28 left-[-35%] h-36 w-[30rem] rounded-full bg-white/60 blur-2xl dark:hidden"
        style={{ animation: "cloud-float 40s linear infinite" }}
      />
      <div
        className="absolute top-44 left-[-60%] h-44 w-[36rem] rounded-full bg-white/45 blur-3xl dark:hidden"
        style={{ animation: "cloud-float 60s linear infinite" }}
      />
      <div
        className="absolute top-[55%] left-[-45%] h-48 w-[40rem] rounded-full bg-white/35 blur-3xl dark:hidden"
        style={{ animation: "cloud-float 70s linear infinite" }}
      />

      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute inset-0 opacity-80">
          <div
            className="absolute left-[8%] top-[14%] h-1 w-1 rounded-full bg-white"
            style={{ animation: "twinkle 2.2s ease-in-out infinite" }}
          />
          <div
            className="absolute left-[14%] top-[32%] h-1.5 w-1.5 rounded-full bg-white/90"
            style={{ animation: "twinkle 3.6s ease-in-out infinite" }}
          />
          <div
            className="absolute left-[22%] top-[18%] h-1 w-1 rounded-full bg-white/80"
            style={{ animation: "twinkle 2.8s ease-in-out infinite" }}
          />
          <div
            className="absolute left-[28%] top-[48%] h-1 w-1 rounded-full bg-white/85"
            style={{ animation: "twinkle 4.4s ease-in-out infinite" }}
          />
          <div
            className="absolute left-[35%] top-[22%] h-1.5 w-1.5 rounded-full bg-white/85"
            style={{ animation: "twinkle 3.1s ease-in-out infinite" }}
          />
          <div
            className="absolute left-[42%] top-[10%] h-1 w-1 rounded-full bg-white/75"
            style={{ animation: "twinkle 2.5s ease-in-out infinite" }}
          />
          <div
            className="absolute left-[50%] top-[30%] h-1 w-1 rounded-full bg-white/80"
            style={{ animation: "twinkle 3.9s ease-in-out infinite" }}
          />
          <div
            className="absolute left-[58%] top-[18%] h-1.5 w-1.5 rounded-full bg-white/90"
            style={{ animation: "twinkle 4.8s ease-in-out infinite" }}
          />
          <div
            className="absolute left-[64%] top-[42%] h-1 w-1 rounded-full bg-white/75"
            style={{ animation: "twinkle 3.2s ease-in-out infinite" }}
          />
          <div
            className="absolute left-[70%] top-[12%] h-1 w-1 rounded-full bg-white/80"
            style={{ animation: "twinkle 2.7s ease-in-out infinite" }}
          />
          <div
            className="absolute left-[76%] top-[26%] h-1.5 w-1.5 rounded-full bg-white/85"
            style={{ animation: "twinkle 4.1s ease-in-out infinite" }}
          />
          <div
            className="absolute left-[82%] top-[52%] h-1 w-1 rounded-full bg-white/80"
            style={{ animation: "twinkle 3.4s ease-in-out infinite" }}
          />
          <div
            className="absolute left-[88%] top-[20%] h-1 w-1 rounded-full bg-white/75"
            style={{ animation: "twinkle 2.9s ease-in-out infinite" }}
          />
          <div
            className="absolute left-[92%] top-[38%] h-1.5 w-1.5 rounded-full bg-white/90"
            style={{ animation: "twinkle 5.2s ease-in-out infinite" }}
          />
          <div
            className="absolute left-[60%] top-[68%] h-1 w-1 rounded-full bg-white/75"
            style={{ animation: "twinkle 3.8s ease-in-out infinite" }}
          />
          <div
            className="absolute left-[30%] top-[70%] h-1.5 w-1.5 rounded-full bg-white/85"
            style={{ animation: "twinkle 4.6s ease-in-out infinite" }}
          />
          <div
            className="absolute left-[18%] top-[62%] h-1 w-1 rounded-full bg-white/80"
            style={{ animation: "twinkle 3.3s ease-in-out infinite" }}
          />
        </div>

        <div className="absolute left-[75%] top-[18%] h-24 w-24 rounded-full bg-white/6 blur-xl" />
        <div className="absolute left-[72%] top-[16%] h-10 w-10 rounded-full bg-white/10 blur-md" />
      </div>
    </div>
  );
}
