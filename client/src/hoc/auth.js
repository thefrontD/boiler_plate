import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../_actions/user_action";

export default function foo(SpecificComponent, option, adminRoute = null) {
  //null: 아무나 출입가능
  //false: 로그인 유저는 출입 불가능
  //true: 로그인 유저만 출입 가능

  function AuthenticationCheck(props) {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    useEffect(() => {
      dispatch(auth()).then((response) => {
        //로그인 하지 않은 상태
        if (!response.payload.isAuth) {
          if (option) {
            navigate("/login");
          }
        } else {
          //로그인 한 상태
          if (adminRoute && !response.payload.isAdmin) {
            navigate("/");
          } else {
            if (option === false) {
              navigate("/");
            }
          }
        }
      });
    });

    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
