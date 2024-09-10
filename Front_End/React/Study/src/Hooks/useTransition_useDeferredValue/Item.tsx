export type ItemProps = {
  name: string;
  year: number;
};

const Item = ({ name, year }: ItemProps) => {
  return (
    <div className="item">
      <div className="name">{name}</div>
      <div className="year">{year}</div>
    </div>
  );
};

export default Item;
