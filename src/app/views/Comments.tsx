"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { CreatePost } from "../components/CreatePost/CreatePost";
import { ShowPosts } from "../components/ShowPost/ShowPost";
import { auth } from "../config/firebase";
import Login from "../components/Login/Login";

export const Comments = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      {user ? (
        <div>
          <CreatePost />
          <ShowPosts />
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};
