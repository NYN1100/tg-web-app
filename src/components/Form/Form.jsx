import React, { useCallback, useEffect, useState } from "react";
import "./Form.css";
import { useTelegram } from "../../hooks/useTelegram";
const Form = () => {
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [subject, setSubject] = useState("physical");
  const { tg } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      country,
      street,
      subject,
    };
    tg.sendData(JSON.stringify(data));
  }, [country, street, subject]);

  useEffect(() => {
    Telegram.WebApp.onEvent("mainButtonClicked", onSendData);
    return () => {
      Telegram.WebApp.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Ma'lumotlarni yuborish",
    });
  }, []);

  useEffect(() => {
    if (!street || !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, street]);

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };
  const onChangeSub = (e) => {
    setSubject(e.target.value);
  };
  return (
    <div className="form">
      <h3>Malumaotlaringizni kiriting</h3>
      <input
        className="input"
        type="text"
        placeholder="Davlat"
        value={country}
        onChange={onChangeCountry}
      />
      <input
        className="input"
        type="text"
        placeholder="Ko'cha"
        value={street}
        onChange={onChangeStreet}
      />
      <select value={subject} onChange={onChangeSub} className="select">
        <option value="physical">Jismoniy shaxs</option>
        <option value="legal">Yuridik shaxs</option>
      </select>
    </div>
  );
};

export default Form;
