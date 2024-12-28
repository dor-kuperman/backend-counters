type Props = {
  total: number;
};

export const Total = ({ total }: Props) => {
  return (
    <div>
      <span>Total: </span>
      <span>{total}</span>
    </div>
  );
};
