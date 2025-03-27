export default function Button({
  children,
  handleClick,
  variant = "white",
  className,
}: {
  children: React.ReactNode;
  handleClick: () => void;
  variant?: "white" | "green";
  className?: string;
}) {
  return (
    <button
      onClick={handleClick}
      className={`p-2.5 rounded-lg text-sm font-bold transition-colors duration-300 ${className} ${variant === "white" ? "border border-solid bg-white  border-primary text-primary hover:bg-white/90" : "text-white bg-primary hover:bg-primary/90"}`}
    >
      {children}
    </button>
  );
}
