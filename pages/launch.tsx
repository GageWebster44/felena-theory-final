import Image from 'next/image';
src="/bull-logo.png" ; // Ensure this path resolves during build

export default function LaunchPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white text-center px-4">
      <div className="animate-fade-in">
        <Image
          src="/bull-logo.png"
  alt="Felena Theory Logo"
  width={120}
  height={120}
  className="mb-6"
/>
        /
        <h1 className="text-3xl md:text-5xl font-bold text-green-500 drop-shadow-md">
          Felena Theory Official Launch
        </h1>
        <p className="text-lg md:text-xl mt-4 text-green-400">
          The XP Engine is now active.<br />
          Unlock engines, earn prestige, and build your glow.
        </p>
        <p className="text-sm md:text-md mt-6 text-white">
          Launch date confirmed: <span className="font-semibold text-green-300">November 7, 2025</span>
        </p>
        <a
          href="/dashboard"
          className="mt-8 inline-block bg-green-600 hover:bg-green-500 text-black font-bold py-3 px-6 rounded-full transition"
        >
          Enter App
        </a>
      </div>
    </main>
  );
}