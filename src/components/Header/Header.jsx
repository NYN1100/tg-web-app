import React from "react";
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import logo from "./logo.png";
const Header = () => {
  const { user, onClose } = useTelegram();
  return (
    <div className="navbar">
      <div className="header">
        <div className="navbar1">
          <Button onClick={onClose}>
            <FontAwesomeIcon className="iconX" icon={faXmark} />
          </Button>
          <span className="username">{user?.username}</span>
        </div>
        <div className="navbar2">
          <img src={logo} alt="logo" />
          <h3>Sog'lom Taom</h3>
          <select>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
