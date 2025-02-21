import { useState } from "react";

export function useSearch() {
  const [inputValue, setInputValue] = useState<string>("");
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const submitSearch = () => {
    if (inputValue) {
      window.location.href = `/products?search=${inputValue.toLowerCase()}`;
    }
  };

  return { inputValue, onInputChange, submitSearch };
}
