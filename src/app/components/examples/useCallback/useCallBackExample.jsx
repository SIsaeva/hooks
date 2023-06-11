import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
  const [data, setData] = useState({});
  const withOutCallback = useRef(0);
  const withCallback = useRef(0);

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  // withoutcallback
  const validateWithOutCallback = (data) => {
    console.log(data);
  };
  useEffect(() => {
    withOutCallback.current++;
  }, [validateWithOutCallback]);

  // withcallback
  const validateWithCallback = useCallback((data) => {
    console.log(data);
  }, []);
  useEffect(() => {
    withCallback.current++;
  }, [validateWithCallback]);

  useEffect(() => {
    validateWithOutCallback(data);
    validateWithCallback(data);
  }, [data]);

  return (
    <CardWrapper>
      <SmallTitle>Example</SmallTitle>
      <p>Render without callback: {withOutCallback.current}</p>
      <p>Render with callback: {withCallback.current}</p>
      <label className="form-label" htmlFor="email">
        Email
      </label>
      <input
        onChange={handleChange}
        type="email"
        className="form-control"
        id="email"
        value={data.email || ""}
        name="email"
      ></input>
    </CardWrapper>
  );
};

export default UseCallBackExample;
