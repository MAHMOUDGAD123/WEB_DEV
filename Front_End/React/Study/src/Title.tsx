type TitleType = {
  name: string;
};

const Title = ({ name }: TitleType) => {
  return <div className="title">{name}</div>;
};

export default Title;
