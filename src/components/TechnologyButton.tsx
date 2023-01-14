import { CgSpinner } from "react-icons/cg";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  loading: boolean;
}

const TechnologyButton = ({ onClick, children, loading }: Props) => {
  return (
    <button
      onClick={onClick}
      className="text-sm relative px-2 flex items-center justify-center text-white border-white border hover:bg-white hover:text-black rounded-sm font-mono"
    >
      <div className={`${loading ? "opacity-0" : "opacity-1"}`}>{children}</div>
      {loading && <CgSpinner className="animate-spin absolute" />}
    </button>
  );
};

export default TechnologyButton;
