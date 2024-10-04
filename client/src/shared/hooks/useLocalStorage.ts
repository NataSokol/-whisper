import { useState, useEffect } from 'react';

const useLocalStorage = (key: string): boolean => {
  const [value, setValue] = useState<boolean>(false);

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    setValue(storedValue !== null);
  }, [key]);

  return value;
};

export default useLocalStorage;