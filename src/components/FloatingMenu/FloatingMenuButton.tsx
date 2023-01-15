interface Props {
  children: React.ReactNode;
  color: string;
  onClick?: () => void;
}
const FloatingMenuButton = ({ children, color, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-1 bg-zinc-100 rounded-md pointer-events-auto text-3xl hover:rotate-6 ${color}`}
    >
      {children}
    </div>
  );
};

export default FloatingMenuButton;