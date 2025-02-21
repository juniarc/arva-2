import { LuX } from "react-icons/lu";

export default function CloseButton({
  onClose,
  className = "text-lg md:text-3xl",
  color = "text-black",
  position = "top-3 right-3",
}: {
  onClose: () => void;
  className?: string;
  color?: string;
  position?: string;
}) {
  return (
    <button
      onClick={onClose}
      className={`absolute ${position} p-1 flex items-center justify-center`}
    >
      <LuX className={`${className} ${color}`} />
    </button>
  );
}
