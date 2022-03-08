import React, { useEffect, useState, ChangeEvent, useCallback } from "react";
import * as SC from "./Exchange.styled";

import { API, tExchangeData } from "../../api";

import { Input } from "../Input";
import { Select } from "../Select";

type tNameSelect = {
  [key: string]: () => void;
};

function Exchange() {
  const [bankData, setBankData] = useState({} as tExchangeData);
  const [valueFrom, setValFrom] = useState<number | string>(1);
  const [valueTo, setValueTo] = useState<number | string>(0);
  const [currencyFrom, setСurrencyFrom] = useState("USD");
  const [currencyTo, setСurrencyTo] = useState("PHP");

  const calculate = useCallback((): number | string => {
    const rateFrom = bankData.rates[currencyFrom];
    const rateTo = bankData.rates[currencyTo];
    if (typeof valueFrom === "string") {
      return "";
    } else {
      return Number(((valueFrom / rateFrom) * rateTo).toFixed(2));
    }
  }, [bankData.rates, valueFrom, currencyFrom, currencyTo]);

  useEffect(() => {
    API.fetching().then((data) => {
      setBankData(data);
    });
  }, []);

  useEffect(() => {
    if (Object.keys(bankData).length > 0) {
      const convertedValue = calculate();
      setValueTo(convertedValue);
    }
  }, [bankData, currencyFrom, currencyTo, calculate]);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    let value: number | string;
    let clearedValue: string = e.target.value.replace(/[^\d]/g, "").trim();
    if (clearedValue !== "") {
      value = +clearedValue;
    } else {
      value = clearedValue;
    }
    setValFrom(value);

    const convertedValue = calculate();
    setValueTo(convertedValue);
  };

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    let name = e.target.name;
    const calcFromTo = () => {
      setСurrencyFrom(e.target.value);
    };
    const calcToFrom = () => {
      setСurrencyTo(e.target.value);
    };
    const runByNameSelect: tNameSelect = {
      currencyFrom: calcFromTo,
      currencyTo: calcToFrom,
    };

    runByNameSelect[name]();
  };

  const onClickReverse = (e: ChangeEvent<HTMLElement>) => {
    setСurrencyFrom(currencyTo);
    setСurrencyTo(currencyFrom);
    e.target.classList.toggle("reverse");
  };

  return (
    <SC.Container>
      {Object.keys(bankData).length === 0 ? (
        <p>ЗАГРУЗКА...</p>
      ) : (
        <SC.Dashboard>
          <SC.DashboardRow>
            <Input
              value={valueFrom}
              onChangeInput={onChangeInput}
              name="valueFrom"
              autofocus
            />
            <Select
              name="currencyFrom"
              onChangeSelect={onChangeSelect}
              value={currencyFrom}
              rates={bankData.rates}
            />
          </SC.DashboardRow>
          <SC.DashboardRow>
            <SC.Arrows onClick={onClickReverse}>↓↑</SC.Arrows>
          </SC.DashboardRow>
          <SC.DashboardRow>
            <Input value={valueTo} name="valueTo" disabled />
            <Select
              name="currencyTo"
              onChangeSelect={onChangeSelect}
              value={currencyTo}
              rates={bankData.rates}
            />
          </SC.DashboardRow>
        </SC.Dashboard>
      )}
    </SC.Container>
  );
}

export default Exchange;
