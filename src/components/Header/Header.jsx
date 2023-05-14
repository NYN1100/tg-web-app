import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "./logo.png";

import Translation from "../Translation/Data.json";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { user, onClose } = useTelegram();

  const [lang, setLang] = useState("UZ");
  const [content, setContent] = useState({});

  window.content = content;

  useEffect(() => {
    if (lang === "UZ") {
      setContent(Translation.UZ);
    } else {
      setContent(Translation.RU);
    }
  });

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
          <img src={logo} alt="logo" onClick={() => navigate("/")} />
          <h3 onClick={() => navigate("/")}>Sog'lom Taom</h3>
          <Link to={"shoppingCart"}>
            <FontAwesomeIcon
              className="faCart"
              icon={faCartShopping}
              style={{ color: "#ffff" }}
            />
          </Link>
          <select value={lang} onChange={(e) => setLang(e.target.value)}>
            <option>UZ</option>
            <option>RU</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
