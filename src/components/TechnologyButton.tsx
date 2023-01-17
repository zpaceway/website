import Link from "next/link";

interface Props {
  children: string;
}

const TechnologyButton = ({ children }: Props) => {
  return (
    <Link
      target="_blank"
      href={`https://www.google.com/search?q=${children
        .replace(/\+/g, "%2B")
        .replace(/ /g, "+")}`}
    >
      <button className="text-sm relative px-2 flex items-center justify-center text-white border-emerald-200 border hover:bg-emerald-400 rounded-sm">
        <div>{children}</div>
      </button>
    </Link>
  );
};

export default TechnologyButton;
