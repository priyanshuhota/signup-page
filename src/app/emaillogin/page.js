"use client";

import React, { useState } from "react";
import { auth } from "@/app/firebase.js";
import "@/app/components/styles.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";


const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmail = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password);

    setEmail('');
    setPassword('');
  };

  return (
    <div className="email-main">
      <form onSubmit={handleEmail} className="email-form">
        <label
          style={{
            display: "flex",
            position: "absolute",
            top: 50,
            justifyContent: "center",
          }}
        >
          Enter your email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            style={{
              display: "flex",
              position: "absolute",
              top: 30,
              border: "2px solid rgb(17, 78, 134)",
              borderRadius: 10,
              color: "black",
            }}
          />
        </label>
        <br />
        <label
          style={{
            display: "flex",
            position: "absolute",
            top: 130,
            justifyContent: "center",
          }}
        >
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            style={{
              display: "flex",
              position: "absolute",
              top: 30,
              border: "2px solid rgb(17, 78, 134)",
              borderRadius: 10,
              color: "black",
            }}
          />
        </label>
        <br />
        <button
          type="submit"
          style={{
            display: "flex",
            position: "absolute",
            top: 220,
            border: "2px solid rgb(17, 78, 134)",
            width: 100,
            justifyContent: "center",
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Link href="/homepage">Sign up</Link>
        </button>
      </form>
    </div>
  );
};

export default page;
