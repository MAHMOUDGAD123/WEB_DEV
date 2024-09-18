import { Form } from "react-router-dom";

type AddNewFormProps = {
  onCancel: () => void;
};

const AddNewForm = ({ onCancel }: AddNewFormProps) => {
  return (
    <Form method="post" action="/members/add-new">
      <h2>Adding new member</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        pattern="[a-zA-Z ]+"
        required
        autoFocus
        autoComplete="on"
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        min="20"
        max="45"
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        pattern="[+]201(?:0|1|2|5)[0-9]{8}"
        required
        autoComplete="on"
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        pattern="[A-Z][a-z ]+"
        required
        autoComplete="on"
      />
      <input
        type="text"
        name="job"
        placeholder="Job"
        pattern="[A-Z][a-z ]+"
        required
        autoComplete="on"
      />
      <div className="btns">
        <button className="add" type="submit">
          Add
        </button>
        <button className="cancel" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </Form>
  );
};

export default AddNewForm;
