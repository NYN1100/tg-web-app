import React, { useState, useContext } from "react";
import "./Details.css";
import menu1 from "./menu1.jpg";

import Button from "../Button/Button.jsx";
import { useParams } from "react-router-dom";
import AddSubs from "../AddSubs/AddSubs";

const Details = ({ img }) => {
  let { menuId } = useParams();
  menuId = +menuId;

  return (
    <div className="details">
      <div className="details1">
        <div className="img1">
          <img src={menu1} />
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
        <AddSubs id={menuId}></AddSubs>
        <Button className="button1">Ma'lumotlarim</Button>
      </div>
    </div>
  );
};

export default Details;
