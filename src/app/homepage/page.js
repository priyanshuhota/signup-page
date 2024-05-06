"use client";

import { Button } from '@nextui-org/button'
import React from 'react'
import {auth} from "@/app/firebase.js"
import Link from "next/link";



const page = () => {
  return (
    <div>
      <Button style={{width: 100, height: 50}} onClick={() => auth.signOut()}><Link href="/">Sign out</Link></Button>
    </div>
  )
}

export default page
