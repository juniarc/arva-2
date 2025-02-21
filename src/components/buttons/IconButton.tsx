export default function IconButton({
  Icon,
  onClick,
  label,
  className = "text-lg md:text-3xl",
  children,
}: {
  Icon?: React.ComponentType<{ className?: string }>;
  onClick: () => void;
  label: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`p-1 btn-hover-light text-white flex items-center justify-center relative`}
      aria-label={label}
    >
      {children || (Icon && <Icon className={className} />)}
    </button>
  );
}
