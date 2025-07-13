import Image from 'next/image';

export default function LaunchPage() {
  return (
    <>
      <Image
        src="/bull-logo.png"
        alt="Felena Theory Logo"
        width={120}
        height={120}
        className="mb-6"
      />

      <h1 className="text-3xl md:text-5xl font-bold text-green-500 drop-shadow-md">
        Felena Theory Official Launch
      </h1>

      <p className="text-lg md:text-xl mt-4 text-green-400">
        The XP Engine is now active.<br />
        Unlock engines, earn prestige, and climb through the leaderboards of XP Ranking while earning real money while you do it.
      </p>

      <p className="text-sm md:text-md mt-6 text-white">
        Launch date confirmed: <span className="font-semibold text-green-300">November 7</span>
      </p>
    </>
  );
}