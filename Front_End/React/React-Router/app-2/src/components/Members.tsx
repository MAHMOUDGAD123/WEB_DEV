import { Link } from "react-router-dom";
import "./members.css";
import { MemberType } from "../server/fake_server";

type PostProps = {
  data: [number, MemberType][];
};

const Members = ({ data }: PostProps) => {
  return (
    <div className="members-page">
      {data.map(([id, member]) => {
        return (
          <Link
            to={`${id}`}
            key={id}
            data-title={member.name}
            className="cool-title"
          >
            <img src={`../../assets/members/${member.name}.jpg`} />
          </Link>
        );
      })}
      <Link to="/members/add-new" key="new" title="add new member">
        <img src="../../assets/members/add-new.svg" alt="add-new" />
      </Link>
    </div>
  );
};

export default Members;
