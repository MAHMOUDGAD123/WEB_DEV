import { useParams } from "react-router-dom";
import { db } from "./db";

const styles: React.CSSProperties = {
  color: "gold",
  border: "3px solid orange",
  padding: 15,
  textAlign: "left",
  borderRadius: 10,
};

const Person = () => {
  const { id } = useParams();
  const { name, age } = db.get(id);

  return (
    <div style={styles}>
      <div>- Name: {name}</div>
      <div>- Age: {age}</div>
    </div>
  );
};

export default Person;
