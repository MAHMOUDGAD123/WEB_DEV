import { Info } from "./types";

export default function InfoCard(info: Info) {
  return (
    <div className="infoCard">
      <img
        id="back-btn"
        src="../public/back.png"
        alt="back"
        onClick={() => {
          document.querySelector(".content")!.classList.remove("showInfo");
        }}
      />
      <img
        id="gender-img"
        src={info.gender === "Male" ? "/man.png" : "/woman.png"}
        alt="img"
      />

      <div className="fname">{info.fname}</div>
      <div className="email">{info.email}</div>
      <div className="age">
        <span>{info.age}</span> Years Old
      </div>
      <div className="status">
        {info.isMarried ? "Married 🤮" : "Single 😊"}
      </div>
      <fieldset className="skills">
        <legend>Skills</legend>
        {(() => {
          const skills: JSX.Element[] = [];
          info.skills.forEach((skill, i) => {
            skills.push(
              <div key={i}>
                <img src={skill} alt="logo" />
              </div>
            );
          });
          return skills;
        })()}
      </fieldset>
    </div>
  );
}
