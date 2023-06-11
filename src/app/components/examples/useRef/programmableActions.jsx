import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
  const inputRef = useRef();
  const handleClick = () => {
    console.log(inputRef.current.clientWidth);
    inputRef.current.focus();
  };
  const handleClickWith = () => {
    inputRef.current.style.width = "100px";
  };
  return (
    <CardWrapper>
      <SmallTitle className="card-title">
        Программируемые действия и свойства
      </SmallTitle>
      <Divider />
      <label className="form-label" htmlFor="email">
        Email
      </label>
      <input
        ref={inputRef}
        type="email"
        className="form-control"
        id="email"
      ></input>
      <button className=" btn btn-primary" onClick={handleClick}>
        Фокус input
      </button>
      <button className=" btn btn-secondary" onClick={handleClickWith}>
        Изменить ширину объекта
      </button>
    </CardWrapper>
  );
};

export default ProgrammableActionsExample;
