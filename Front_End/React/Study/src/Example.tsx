type ExampleType = {
  children: JSX.Element | JSX.Element[] | null;
};

const Example = ({ children }: ExampleType) => {
  return (
    <fieldset className="example">
      <legend></legend>
      {children}
    </fieldset>
  );
};

export default Example;
