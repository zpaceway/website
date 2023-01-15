import { ButtonHTMLAttributes } from "react";
import { CgSpinner } from "react-icons/cg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading: boolean;
}

const Button = ({ children, loading, type }: Props) => {
  return (
    <button
      className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 relative flex items-center justify-center rounded focus:outline-none"
      type={type}
    >
      <div className={`${loading ? "opacity-0" : "opacity-1"}`}>{children}</div>
      {loading && <CgSpinner className="animate-spin absolute text-2xl" />}
    </button>
  );
};

export default Button;
