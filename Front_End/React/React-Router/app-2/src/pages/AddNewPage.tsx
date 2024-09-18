import "./add-new-page.css";
import AddNewForm from "../components/AddNewForm";
import { useNavigate } from "react-router-dom";

const AddNewPage = () => {
  const navigate = useNavigate();

  const onCancel = () => {
    navigate("/members");
  };

  return (
    <div className="add-new-page">
      <AddNewForm onCancel={onCancel} />
    </div>
  );
};

export default AddNewPage;
