import AppRoutes from "./routes";
import './App.css';

import "@aws-amplify/ui-react/styles.css";
import { useState, useEffect } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";

import { generateClient } from "aws-amplify/data";
import type { Schema } from "../amplify/data/resource";

const client = generateClient<Schema>({ 
  authMode: "userPool" 
});

type UserProfile = Schema["UserProfile"]["type"];

export default function App() {
  const [_, setUserProfiles] = useState<UserProfile[]>([]);
  const { route } = useAuthenticator((context) => [context.user]);
  const isAuthed = route === "authenticated";
  
  useEffect(() => {
    if (!isAuthed) return;
    fetchUserProfile();
  }, []);

  async function fetchUserProfile() {
    const { data: profiles } = await client.models.UserProfile.list();
    setUserProfiles(profiles);
  }

  return (
    <div className="app">
      <AppRoutes />
    </div>
  );
}
