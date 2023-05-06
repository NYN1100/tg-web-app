import React, { useCallback, useEffect, useState } from "react";
import "./Form.css";
import { useTelegram } from "../../hooks/useTelegram";
const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(17);
  const [weight, setWeight] = useState(60);
  const [height, setHeight] = useState(170);
  const [sex, setSex] = useState("Erkak");
  const [telNumber, setTelNumber] = useState();
  const [address, setAddress] = useState("Katta Ariq");
  const { tg } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      name,
      age,
      weight,
      height,
      sex,
      telNumber,
      address,
    };
    tg.sendData(JSON.stringify(data));
  }, [name, age, weight, height, sex, telNumber, address]);

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
    if (name && age && weight && height && sex && telNumber && address) {
      tg.MainButton.show();
    } else {
      tg.MainButton.hide();
    }
  }, [name, age, weight, height, sex, telNumber, address]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeAge = (e) => {
    setAge(e.target.value);
  };
  const onChangeHeight = (e) => {
    setHeight(e.target.value);
  };
  const onChangeWeight = (e) => {
    setWeight(e.target.value);
  };
  const onChangeSex = (e) => {
    setSex(e.target.value);
  };
  const onChangeTelNumber = (e) => {
    setTelNumber(e.target.value);
  };
  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  return (
    <div className="form">
      <h3>Ro'yxatdan o'tish</h3>
      <h5>Ism va Familiya</h5>
      <input
        className="input"
        type="text"
        placeholder="Aziz Azizov"
        value={name}
        onChange={onChangeName}
      />
      <h5>Yosh</h5>
      <input
        className="input"
        type="number"
        value={age}
        onChange={onChangeAge}
      />
      <h5>Vazn(kg)</h5>
      <input
        className="input"
        type="number"
        value={weight}
        onChange={onChangeWeight}
      />
      <h5>Bo'y(cm)</h5>
      <input
        className="input"
        type="number"
        value={height}
        onChange={onChangeHeight}
      />
      <h5>Jins</h5>
      <select value={sex} onChange={onChangeSex} className="select">
        <option value="man">Erkak</option>
        <option value="woman">Ayol</option>
      </select>
      <h5>Telelfon Raqam</h5>
      <input
        className="input"
        type="number"
        value={telNumber}
        placeholder="+998908327777"
        onChange={onChangeTelNumber}
      />
      <h5>Manzil</h5>
      <input
        className="input"
        type="address"
        placeholder="Katta Ariq (Masalan)"
        value={address}
        onChange={onChangeAddress}
      />
    </div>
  );
};

export default Form;
