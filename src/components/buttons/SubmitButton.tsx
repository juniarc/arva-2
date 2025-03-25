import { Spinner } from "@material-tailwind/react";

export default function SubmitButton({
  isLoading,
  text,
}: {
  isLoading: boolean;
  text: string;
}) {
  return (
    <button
      type="submit"
      className="w-full text-white h-10 rounded font-playfair-display font-bold flex justify-center items-center bg-primary hover:bg-primary/90 transition-colors"
    >
      {isLoading ? (
        <div>
          <Spinner
            className="text-white/50 size-6"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        </div>
      ) : (
        text
      )}
    </button>
  );
}
