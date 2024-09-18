import { useRef } from "react";
import { server } from "../server/fake_server";
import { useNavigate, useParams } from "react-router-dom";

const MemberCard = ({ data }) => {
  const popup = useRef() as { current: HTMLDivElement };
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();

  const onRemoveClickHandler = () => {
    popup.current.classList.add("show");
  };

  const onConfirm = () => {
    popup.current.classList.remove("show");
    server.removeMember(+id);
    navigate("/members");
  };

  const onCancel = () => {
    popup.current.classList.remove("show");
  };

  return (
    <div className="member-card">
      <div className="popup" ref={popup}>
        <div className="remove-confirmation">
          <p>Are you sure?</p>
          <div className="btns">
            <div onClick={onConfirm}>yes</div>
            <div onClick={onCancel}>no</div>
          </div>
        </div>
      </div>

      <div
        className="remove"
        title="remove"
        onClick={onRemoveClickHandler}
      ></div>

      <div className="avatar">
        <img src={`../../assets/members/${data.name}.jpg`} alt={data.name} />
        <h2 className="name">{data.name}</h2>
      </div>

      <div className="info">
        <h3>
          Age <span>{data.age}</span>
        </h3>
        <h3>
          Country <span>{data.country}</span>
        </h3>
        <h3>
          Job <span>{data.job}</span>
        </h3>
        <h3>
          Phone <span>{data.phone}</span>
        </h3>
      </div>
    </div>
  );
};

export default MemberCard;
