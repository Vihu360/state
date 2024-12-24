
import React, { createContext, useContext, ReactNode } from "react";
import { Account, Client } from "react-native-appwrite";

// Initialize the App Write SDK

const client = new Client()
.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string)

const account = new Account(client);

interface User {
name?: string;
email?: string;
[key: string]: any;
}

