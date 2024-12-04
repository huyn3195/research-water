import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-r from-blue-50 to-blue-200">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl font-semibold text-center sm:text-left text-blue-800">
          Our Group Project: Water Usage at St. Thomas
        </h1>
        <p className="text-lg text-center sm:text-left text-gray-700 font-[family-name:var(--font-geist-mono)]">
          A detailed analysis of water consumption at St. Thomas compared to
          other schools. Our team consists of:
        </p>
        <ul className="list-disc list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] text-gray-600">
          <li>Cameron</li>
          <li>Cat</li>
          <li>Kate</li>
          <li>Isaiah</li>
        </ul>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] text-gray-700">
          <li className="mb-2">
            Discover how our school compares in water usage efficiency.
          </li>
          <li>See our findings and analysis in the project report.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-gray-300 dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://documentation-link.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our analysis
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
