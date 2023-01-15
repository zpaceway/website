interface Props {
  title: string;
  align: "left" | "right" | "center";
  children: React.ReactNode;
  fullWidth?: boolean;
}

const ZpacewaySection = ({
  title,
  align,
  children,
  fullWidth = false,
}: Props) => {
  const textDirection =
    align === "left"
      ? "text-left"
      : align === "center"
      ? "text-center"
      : "text-right";

  const justifyClass =
    align === "left"
      ? "justify-start"
      : align === "center"
      ? "justify-center"
      : "justify-end";

  return (
    <div className={`flex ${justifyClass} ${textDirection}`}>
      <div
        className={`flex flex-col gap-8 w-full ${fullWidth ? "" : "max-w-lg"}`}
      >
        <div className="text-4xl font-bold">
          <span className="border-b-lime-500 border-b-4">{title}</span>
        </div>
        <div className="flex flex-col gap-8">{children}</div>
      </div>
    </div>
  );
};

export default ZpacewaySection;
