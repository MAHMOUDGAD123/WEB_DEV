interface ActionButtonsProps {
  focusInput: () => void;
  blurInput: () => void;
  clearInput: () => void;
  selectInput?: () => void;
}

const ActionButtons = ({
  focusInput,
  blurInput,
  clearInput,
  selectInput,
}: ActionButtonsProps) => {
  return (
    <div className="action-btns">
      <button onClick={focusInput}>Focus</button>
      <button onClick={blurInput}>Blur</button>
      <button onClick={clearInput}>Clear</button>
      <button onClick={selectInput}>Select</button>
    </div>
  );
};

export default ActionButtons;
