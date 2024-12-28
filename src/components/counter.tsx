import { useEffect } from "react";
import styles from "./counter.module.scss";
import { useCounter } from "./use-counter";

type Props = {
  name: string;
  onChange: (value: Record<string, number>) => void;
};

export const Counter = ({ name, onChange }: Props) => {
  const { onInc, onDec, current } = useCounter(name);

  useEffect(() => {
    onChange?.({ [name]: current });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <div className={styles.counterBox}>
      <span>{name}</span>
      <span>{current}</span>
      <div className={styles.buttonsBox}>
        <button className={styles.button} onClick={onInc}>
          +
        </button>
        <button className={styles.button} onClick={onDec}>
          -
        </button>
      </div>
    </div>
  );
};
