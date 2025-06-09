import { useEffect } from "react";
import { useState } from "react";
import { setItem, getItem } from "../utils/localStorage";

export function UsePersistedState(key, initialValue) {
  const [value, setValue] = useState(() => {
    const item = getItem(key);
    return item || initialValue;
  });

  useEffect(() => {
    setItem(key, value);
  }, [value]);

  return [value, setValue];
}
