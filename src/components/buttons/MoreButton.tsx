import { BsChevronDown } from "react-icons/bs";

export default function MoreButton({
  handleShowMoreButton,
  showMoreOpen,
  text,
}: {
  handleShowMoreButton: () => void;
  showMoreOpen: boolean;
  text: string;
}) {
  return (
    <button
      onClick={handleShowMoreButton}
      className="w-full bg-secondary text-sm flex items-center justify-center py-2.5 rounded mt-2.5"
    >
      <span className="flex items-center gap-2">
        <p>{showMoreOpen ? `Hide ${text}` : `Read ${text}`}</p>
        <BsChevronDown className={showMoreOpen ? "rotate-180" : ""} />
      </span>
    </button>
  );
}
