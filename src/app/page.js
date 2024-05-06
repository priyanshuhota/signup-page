"use client";

import React from 'react';
import Login from "./components/Login";
import { auth } from '@/app/firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import Page from "../app/homepage/page";

export default function Home() {
  const [user] = useAuthState(auth)
  return (
    <> 
      {user ? <Page/> : <Login/> }
    </>
  );
}
