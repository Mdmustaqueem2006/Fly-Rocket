import React from "react";
import { useDispatch } from "react-redux";
import authService from '../../appwrite/auth'
import { logout } from "../../store/authSlice";
import Button from "../Button";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logouthandler = () => {
    authService.logout()
    .then( () => {
      dispatch(logout())
    })
    .catch( () => {})
    
  };

  return (
    <Button
      className=" inline-block px-6 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logouthandler}
    >
      Logout
    </Button>
  );
}

export default LogoutBtn;
