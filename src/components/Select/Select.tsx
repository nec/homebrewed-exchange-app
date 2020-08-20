import React, { ChangeEvent } from "react";
import * as SC from "./Select.styled";
import { tListCurrency } from "../../api";

type tSelectProps = {
  value: string;
  onChangeSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  rates: tListCurrency;
};

function Select({ value, onChangeSelect, name, rates }: tSelectProps) {
  return (
    <SC.Label aria-label="currency">
      <SC.Select
        type="text"
        name={name}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => onChangeSelect(e)}
        value={value}
      >
        {Object.entries(rates).map(([k, v], i) => {
          return (
            <option key={i} value={k}>
              {k}
            </option>
          );
        })}
      </SC.Select>
    </SC.Label>
  );
}

export default Select;
