import React from "react";
import "./Details.css";
import menu1 from "./menu1.jpg";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button.jsx";
const Details = ({ img }) => {
  return (
    <div className="details">
      <div className="details1">
        <div className="img1">
          <img src={menu1} alt="" />
        </div>
        <h2>Menu 1</h2>
        <h3>100 000 sum</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eius
          cupiditate pariatur, officiis sunt magnam esse fugit beatae natus.
          Sint, deleniti error eum provident necessitatibus quibusdam temporibus
          consequuntur, doloremque repudiandae at veritatis quidem ea voluptate
          ipsa assumenda sunt alias nihil. Eum itaque animi velit ex totam
          excepturi nisi voluptates quasi.
        </p>
      </div>
      <div className="details2">
        <h3>Necha kun uchun buyurtma berasiz</h3>
        <input type="number" />
      </div>
      <div className="details3">
        <Button className="button1">Ma'lumotlarim</Button>
        <div className="shoppingCart">
          <p>12</p>
          <FontAwesomeIcon className="faShCart" icon={faCartShopping} />
        </div>
      </div>
    </div>
  );
};

export default Details;
