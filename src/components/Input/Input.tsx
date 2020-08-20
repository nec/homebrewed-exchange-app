import React, { ChangeEvent } from "react";
import * as SC from "./Input.styled";

type tInputProps = {
  value: number | string;
  onChangeInput?: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  autofocus?: boolean;
  disabled?: boolean;
};

function Input({
  value,
  onChangeInput,
  name,
  autofocus,
  disabled,
}: tInputProps) {
  return (
    <SC.Label>
      <SC.Input
        type="text"
        inputMode="numeric"
        name={name}
        onChange={
          onChangeInput
            ? (e: ChangeEvent<HTMLInputElement>) => onChangeInput(e)
            : null
        }
        value={value}
        autoFocus={autofocus}
        disabled={disabled}
      />
    </SC.Label>
  );
}

export default Input;
