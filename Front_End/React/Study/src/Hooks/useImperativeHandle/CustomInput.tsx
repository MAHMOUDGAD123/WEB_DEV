import { Ref, forwardRef, useImperativeHandle, useRef } from "react";

interface InputProps {
  onChange: (e: any) => void;
  placeholder: string;
}

export type RefType = {
  focus: () => void;
  blur: () => void;
  clear: () => void;
  select: () => void;
};

const CustomInput = (props: InputProps, ref: Ref<RefType>) => {
  const inputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        (inputRef.current as HTMLInputElement).focus();
      },

      blur: () => {
        (inputRef.current as HTMLInputElement).blur();
      },

      clear: () => {
        const inputEle = inputRef.current as HTMLInputElement;
        inputEle.focus();
        inputEle.value = "";
        inputEle.parentElement.querySelector(".output").textContent = "";
      },

      select: () => {
        (inputRef.current as HTMLInputElement).select();
      },
    }),
    []
  );

  return (
    <input {...props} type="text" className="custom-input" ref={inputRef} />
  );
};

export default forwardRef(CustomInput);
