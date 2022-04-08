import React from "react";

export const CardListComponent = ({
  children,
  title,
  dark = false,
  isSplited = true,
}) => {
  return (
    <div
      className={
        "card-list d-flex justify-content-start flex-column my-0 px-0 h-100" +
        (dark ? " bg-dark" : "") +
        (isSplited ? " col-6 " : " col-12 ")
      }
    >
      <h1 className={"mx-3 mt-2" + (dark ? " text-white" : "")}>{title}</h1>
      <div className="row justify-content-start flex-row pt-2 mx-0 flex-shrink-1 w-100 overflow-y-auto px-2">
        {children}
      </div>
    </div>
  );
};
