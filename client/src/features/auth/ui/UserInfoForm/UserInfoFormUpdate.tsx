import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
import { infoUpdate } from "@/entities/user/model/userThunks";
import styles from "../../../../pages/UserPage/User.module.css";

export const UserInfoFormUpdate: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);

  const dateFromDatabase = user?.birthday;
  const dateObject = new Date(dateFromDatabase);
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const day = String(dateObject.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  const dispatch = useAppDispatch();
  const [phone, setPhone] = useState(user?.phone);
  const [email, setEmail] = useState(user?.email);
  const [name, setName] = useState(user?.name);
  const [surname, setSurname] = useState(user?.surname);
  const [birthday, setBirthday] = useState(formattedDate);
  const [address, setAddress] = useState(user?.address);
  const [message, setMessage] = useState("");
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  useEffect(() => {
    setEmail(user?.email);
    setPhone(user?.phone);
    setName(user?.name);
    setSurname(user?.surname);
    setBirthday(formattedDate);
    setAddress(user?.address);
  }, [user]);
 

  const handleUpdateUserInfo = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
    
      const isoBirthday = birthday ? birthday : null;
      const resultAction = await dispatch(
        infoUpdate({
          email,
          phone,
          name,
          surname,
          birthday: isoBirthday,
          address,
        })
      );

      if (resultAction.meta.requestStatus === "fulfilled") {
        setMessage("Изменения сохранены");
        setIsMessageVisible(true);

        setTimeout(() => {
          setIsMessageVisible(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Редактировать информацию</h2>
      <form className={styles.form} onSubmit={handleUpdateUserInfo}>
        <div className={styles.inputGroup}>
          <input
            className={styles.input}
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Фамилия"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            className={styles.input}
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="+7 (___) ___-__-__"
            maxLength={16}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <input
          className={styles.inputadress}
          type="text"
          placeholder="Адрес"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <input
          className={styles.inputemail}
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className={styles.button} type="submit">
          Сохранить изменения
        </button>
      </form>

      <div
        className={`${styles.message} ${
          isMessageVisible ? styles.visible : ""
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default UserInfoFormUpdate;
