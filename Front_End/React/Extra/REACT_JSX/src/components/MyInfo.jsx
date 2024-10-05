import PropTypes from "prop-types";
import "../styles/myInfo.css";

export default function MyInfo({ name, gig, skills }) {
  return (
    <div className="wrapper my-info">
      <div key="name">{name.f_name + " " + name.l_name}</div>
      <div key="gig">{gig}</div>
      <div key="skills">
        {skills.map((skill) => (
          <div key={skill}>- {skill}</div>
        ))}
      </div>
    </div>
  );
}

MyInfo.propTypes = {
  name: PropTypes.object.isRequired,
  gig: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};
