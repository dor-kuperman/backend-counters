import { useLocalStorageState, useCounter as ahooksCounter } from "ahooks";

export const useCounter = (name: string) => {
  const [storageCount, setStorageCount] = useLocalStorageState<string>(name, {
    defaultValue: "0",
  });
  const [current, { inc, dec }] = ahooksCounter(Number(storageCount));

  const onInc = () => {
    setStorageCount(`${current + 1}`);
    inc();
  };

  const onDec = () => {
    setStorageCount(`${current - 1}`);
    dec();
  };

  return { onInc, onDec, current };
};
