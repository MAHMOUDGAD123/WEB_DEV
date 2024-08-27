import "./App.css";
import Form from "./Form.tsx";
import InfoCard from "./InfoCard.tsx";
import { useState } from "react";
import { Info } from "./types";

function Header(): JSX.Element {
  return <h2 className="header">SECOND REACT APP</h2>;
}

export default function App() {
  const init: Info = {
    fname: "",
    email: "",
    age: 20,
    gender: "",
    isMarried: false,
    skills: [],
  };
  const [formInfo, setFormInfo] = useState(init);

  return (
    <>
      <Header />
      <div className="content">
        <Form formInfo={formInfo} setFormInfo={setFormInfo} />
        <InfoCard
          fname={formInfo.fname}
          email={formInfo.email}
          age={formInfo.age}
          gender={formInfo.gender}
          isMarried={formInfo.isMarried}
          skills={formInfo.skills}
        />
      </div>
    </>
  );
}
