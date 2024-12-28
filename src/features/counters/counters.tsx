import { useState } from "react";
import { Counter } from "../../components/counter";
import styles from "./counters.module.scss";
import { Total } from "../total/total";

const languages = [
  "Python",
  "Rust",
  "C#/.NET",
  "Golang",
  "JS",
  "Java",
  "Scala",
  "Ruby",
];

export const Counters = () => {
  const [total, setTotal] = useState<Record<string, number>>({});

  const totalSum = Object.values(total).reduce((acc, curr) => acc + curr, 0);

  return (
    <>
      <h1>Counter</h1>
      <div className={styles.counters}>
        {languages.map((lang) => (
          <Counter
            onChange={(newVal) =>
              setTotal((prev) => {
                return {
                  ...prev,
                  ...newVal,
                };
              })
            }
            key={lang}
            name={lang}
          />
        ))}
      </div>
      {!!totalSum && <Total total={totalSum} />}
    </>
  );
};
