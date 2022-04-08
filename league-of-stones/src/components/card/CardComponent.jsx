import React from "react";
import "./card-style.scss";

export const CardComponent = ({ champion, onClick, isSplited }) => {
  const { key, name, title, info } = champion;
  return (
    <div
      className={
        "flex-shrink-1 " +
        "card border-0 py-1 px-1 " +
        (isSplited ? "col-6 col-lg-4 col-xl-3" : "col-lg-2 col-3 col-xxl-3") +
        "position-relative bg-transparent"
      }
      onClick={() => onClick(champion)}
    >
      <div className="text-white bg-dark rounded overflow-hidden cursor-pointer">
        <div className="row w-xxl-100">
          <img
            className="col-12 col-xxl-7"
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${key}_0.jpg`}
            alt={name}
          />
          <div className="ms-2 me-0 mx-xxl-auto my-xxl-auto col-12 col-xxl-5">
            <p className="fw-bold">Attaque : {info.attack}</p>
            <p className="mb-xxl-0 fw-bold">Armure : {info.defense}</p>
          </div>
        </div>
        <div className="">
          <p className="my-auto mx-auto w-content text-center">
            <span className="d-block fw-bold">{name}</span>
            <span className="d-block fw-normal">{title}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
