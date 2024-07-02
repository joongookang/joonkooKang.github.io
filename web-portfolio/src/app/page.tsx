import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="bg-[#4e54c8]">
        <div className="flex p-2 text-white">
          <span className="animate-tracking-in-expand text-4xl font-bold">
            KANG
            <br /> JOONKOO
          </span>
          <ul className="flex self-center px-24 text-xl font-semibold">
            <li className="px-10">
              <Link href="" className="text-white no-underline">
                Home
              </Link>
            </li>
            <li className="px-10">PROFILE</li>
            <li className="px-10">WORK</li>
            <li className="px-10">SNS</li>
          </ul>
          <span className="absolute right-5 self-center text-xl font-semibold">
            Language
          </span>
        </div>
        <div className="relative">
          <div className="sticky top-0 flex h-screen flex-col items-center justify-center bg-gradient-to-b from-green-200 to-blue-200">
            <div className="area h-9 w-full">
              <div className="flex justify-center from-indigo-900 to-blue-700 p-10">
                <div className="w-max ">
                  <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl font-bold text-white">
                    簡単プロフィール＿{" "}
                    <span className="text-yellow-300">Simple Profile</span>
                  </h1>
                </div>
              </div>
              <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
            <h2 className="text-4xl font-bold">The Second slide</h2>
            <p className="mt-2">Scroll Down for next slide</p>
          </div>
          <div className="sticky top-0 flex h-screen flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
            <h2 className="text-4xl font-bold">The Third slide</h2>
            <p className="mt-2">Scroll Down</p>
          </div>
          <div className="sticky top-0 flex h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
            <h2 className="text-4xl font-bold">The Fourth slide</h2>
          </div>
        </div>
      </main>
    </>
  );
}
