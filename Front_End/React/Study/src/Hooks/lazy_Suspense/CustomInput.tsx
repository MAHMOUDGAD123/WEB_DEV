import { Ref, forwardRef } from "react";

interface InputProps {
  placeholder: string;
  onChange?: (e: any) => void;
}

export type RefType = Ref<HTMLInputElement>;

const CustomInput = (props: InputProps, ref: RefType) => {
  return (
    <input
      name="input"
      {...props}
      type="text"
      className="custom-input"
      ref={ref}
    />
  );
};

export default forwardRef(CustomInput);
