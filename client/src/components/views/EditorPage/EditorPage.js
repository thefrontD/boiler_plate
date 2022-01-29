import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../_actions/user_action";

function LoginPage(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [Name, setName] = useState("name");
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  const onTitleHandler = (event) => {
    setTitle(event.currentTarget.value);
  };
  const onContentHandler = (event) => {
    setContent(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      nickname: Name,
      title: Title,
      content: Content,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        navigate("/");
      } else {
        alert("Error");
      }
    });
  };

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div class="buttons">
        <input
          type="button"
          class="BOLD"
          value="B"
          onclick="document.execCommand('bold')"
        />
        <input
          type="button"
          class="ITALIC"
          value="Italic"
          onclick="document.execCommand('Italic')"
        />
        <input
          type="button"
          class="UNDERBAR"
          value="abc"
          onclick="document.execCommand('Underline')"
        />
        <input
          type="button"
          class="BAR"
          value="abc"
          onclick="document.execCommand('StrikeThrough')"
        />
        <input
          type="button"
          class="aignLeft"
          value="왼쪽 정렬"
          onclick="document.execCommand('justifyleft')"
        />
        <input
          type="button"
          class="aignCenter"
          value="가운데 정렬"
          onclick="document.execCommand('justifycenter')"
        />
        <input
          type="button"
          class="aignRight"
          value="오른쪽 정렬"
          onclick="document.execCommand('justifyright')"
        />
      </div>
      <br></br>
      <p>글 내용</p>
      <br />

      <div>
        <div class="editorDIV" contenteditable="true">
          안녕하 d세요
        </div>
        <div class="editorHTMLDIV"></div>
      </div>
    </div>
  );
}
export default LoginPage;
