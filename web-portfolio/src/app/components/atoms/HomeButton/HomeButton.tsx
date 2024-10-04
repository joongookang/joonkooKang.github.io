import Link from "next/link";

interface HomeButtonProps {
  fontSize: string;
}

/**Homeのボタン*/
export const HomeButton = ({ fontSize }: HomeButtonProps) => {
  return (
    <div className="group relative my-10 inline-flex">
      <div className="transitiona-all absolute -inset-px rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"></div>
      <Link
        href=""
        className={`relative inline-flex items-center justify-center rounded border-2 border-transparent bg-gray-900 px-5 py-2 ${fontSize} text-white transition-all duration-200 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2`}
      >
        View More
      </Link>
    </div>
  );
};
