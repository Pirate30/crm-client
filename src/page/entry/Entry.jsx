import React, { useState } from "react";
import "./Entry.css";
import Login from "../../components/login/Login";
import PassReset from "../../components/password-reset/PassReset";

export default function Entry() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formtype, setFormtype] = useState("login");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("in submit");
    // console.log("e", email);
    // console.log("p", password);
  };

  return (
    <div className="entry bg-info">
      {/* <Button>yelo</Button> */}
      <div className="jumbotron">
        {formtype === "login" && (
          <Login
            handleSubmit={handleSubmit}
            setEmail={setEmail}
            setPassword={setPassword}
            setFormtype={setFormtype}
          />
        )}
        {formtype === "reset" && (
          <PassReset
            handleSubmit={handleSubmit}
            setEmail={setEmail}
            setFormtype={setFormtype}
            email={email}
          />
        )}
      </div>
    </div>
  );
}
