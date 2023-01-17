import { CgSpinner } from "react-icons/cg";

const LoadingSpinner = () => {
  return (
    <div className="bg-neutral-900 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50">
      <CgSpinner className="animate-spin text-emerald-400 text-6xl" />
    </div>
  );
};

export default LoadingSpinner;
