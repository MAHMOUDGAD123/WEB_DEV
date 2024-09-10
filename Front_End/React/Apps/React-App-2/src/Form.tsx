import { Info } from "./types";

export default function Form(porps: {
  formInfo: Info;
  setFormInfo: React.Dispatch<
    React.SetStateAction<{
      fname: string;
      email: string;
      age: number;
      gender: string;
      isMarried: boolean;
      skills: string[];
    }>
  >;
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        document.querySelector(".content")!.classList.add("showInfo");
      }}
    >
      <input
        type="text"
        name="fname"
        id="fname"
        placeholder="Full Name"
        autoComplete="on"
        required
        value={porps.formInfo.fname}
        onChange={(e) => {
          porps.setFormInfo({ ...porps.formInfo, fname: e.target.value });
        }}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        autoComplete="on"
        required
        value={porps.formInfo.email}
        onChange={(e) => {
          porps.setFormInfo({ ...porps.formInfo, email: e.target.value });
        }}
      />
      <label htmlFor="age" className="number-label">
        <span>Age</span>
        <input
          type="number"
          name="age"
          id="age"
          required
          max={100}
          min={20}
          value={porps.formInfo.age}
          onChange={(e) => {
            porps.setFormInfo({ ...porps.formInfo, age: +e.target.value });
          }}
        />
      </label>
      <fieldset className="radio-wrapper">
        <legend>Gender</legend>
        <label htmlFor="male" className="radio-label">
          <input
            type="radio"
            name="gender"
            id="male"
            required
            onChange={() => {
              porps.setFormInfo({ ...porps.formInfo, gender: "Male" });
            }}
          />
          <span>Male</span>
        </label>
        <label htmlFor="female" className="radio-label">
          <input
            type="radio"
            name="gender"
            id="female"
            required
            onChange={() => {
              porps.setFormInfo({ ...porps.formInfo, gender: "Female" });
            }}
          />
          <span>Female</span>
        </label>
      </fieldset>
      <label htmlFor="isMarried" className="checkbox-label">
        <span>Married</span>
        <input
          type="checkbox"
          name="isMarried"
          id="isMarried"
          checked={porps.formInfo.isMarried}
          onChange={(e) => {
            porps.setFormInfo({
              ...porps.formInfo,
              isMarried: e.target.checked,
            });
          }}
        />
      </label>
      <div className="select-warpper">
        <label htmlFor="skills">Skills</label>
        <select
          name="skills"
          id="skills"
          required
          multiple
          onChange={(e) => {
            const skills: string[] = [];
            for (const option of e.target.options) {
              if (option.selected) skills.push(option.value);
            }
            porps.setFormInfo({ ...porps.formInfo, skills: skills });
          }}
        >
          <option value="/html.png" label="HTML"></option>
          <option value="/css.png" label="CSS"></option>
          <option value="/js.png" label="JavaScript"></option>
          <option value="/ts.png" label="TypeScript"></option>
          <option value="/react.png" label="React"></option>
        </select>
      </div>
      <button>Submit</button>
    </form>
  );
}
