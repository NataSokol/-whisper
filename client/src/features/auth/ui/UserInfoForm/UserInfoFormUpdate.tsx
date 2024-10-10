import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
// import { useCategoryActions } from "@/shared/hooks/useCategoryActions";
import { infoUpdate } from "@/entities/user/model/userThunks";
import { unwrapResult } from "@reduxjs/toolkit";
import Button, { ThemeButton } from "@/shared/ui/Button/Button";

export const UserInfoFormUpdate: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const [phone, setPhone] = useState(user?.phone);
  const [email, setEmail] = useState(user?.email);
  const [name, setName] = useState(user?.name);
  const [surname, setSurname] = useState(user?.surname);
  const [birthday, setBirthday] = useState(user?.birthday);
  const [address, setAddress] = useState(user?.address);

  const handleUpdateUserInfo = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      //!!!!!! ПОПРАВИТЬ
      if (user && email && phone && name && surname && birthday && address) {
        const resultAction = await dispatch(
          infoUpdate({ email, phone, name, surname, birthday, address })
        );
        unwrapResult(resultAction);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <h2>Редактировать категорию</h2>
        <form onSubmit={handleUpdateUserInfo}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="date"
            value={birthday?.toString()}
            onChange={(e) => setBirthday(new Date(e.target.value))}
          />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button theme={ThemeButton.DARK} type="submit">Сохранить</Button>
        </form>
      </div>
    </div>
  );
};

export default UserInfoFormUpdate;
