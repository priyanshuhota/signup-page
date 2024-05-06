"use client";

import React, { useState } from "react";
import Image from "next/image";
import "@/app/components/styles.css";
import MyImage from "@/app/components/images/cliff.png";
import { Button } from "@nextui-org/button";
import { MdOutlineEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import firebase from "firebase/compat/app";
import { auth } from "@/app/firebase.js";
import Link from "next/link";

const Login = () => {

  function handleGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  function handleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div className="main">
      <span className="cliff-pic">
        <Image src={MyImage} alt="Heyy"></Image>
      </span>
      <div className="writeup">
        <div className="logo-writeup">
          <span style={{ padding: 1.2, margin: 1.2 }}>LO</span>
          <div className="go-box">GO</div>
        </div>
        <span id="journey" style={{ marginTop: 45 }}>
          Journey to a trillion miles starts from here!!
        </span>
      </div>

      <div className="signup-box">
        <span className="signup">Sign up</span>
        <span className="text-signup">Choose a signup method</span>
        <Button
          className="buttons-login"
          style={{ marginTop: 150 }}
          onClick={handleGoogle}
        >
          <FcGoogle style={{ margin: 4 }} />
          Signup with Google
        </Button>
        <Button
          className="buttons-login"
          style={{ marginTop: 210 }}
          >
            <Link href = "/emaillogin" style={{display: "flex", position: "relative"}}>
          <MdOutlineEmail style={{ margin: 4 }} />
          Signup with Email
            </Link>
        </Button>
        <span className="login">
          Already an user?{" "}
          <Button onClick={handleLogin}>
            <span style={{ marginLeft: 2, color: "rgb(22, 22, 255)" }}>
              Log-in
            </span>
          </Button>
        </span>
      </div>  
    </div>
  );
};

export default Login;
