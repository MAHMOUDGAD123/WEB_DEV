import Article from "./Article";

const Section = () => {
  return (
    <div className="section">
      {[1, 2, 3].map((i) => (
        <Article key={i} />
      ))}
    </div>
  );
};

export default Section;
