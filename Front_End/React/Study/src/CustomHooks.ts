import { useState, useEffect } from "react";

type useState_LSType<T> = [T, React.Dispatch<React.SetStateAction<T>>];

// helper function
const getStoredValue = <T>(key: string, defaultValue: T): T => {
  const savedVal = JSON.parse(localStorage.getItem(key));
  if (savedVal !== null) return savedVal;
  return defaultValue instanceof Function ? defaultValue() : defaultValue;
};

/**
 * a custom useState to store the state in the localStorage
 */
const useState_LS = <T>(key: string, defaultValue: T): useState_LSType<T> => {
  const [state, setState] = useState<T>(() =>
    getStoredValue(key, defaultValue)
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

export { useState_LS };
