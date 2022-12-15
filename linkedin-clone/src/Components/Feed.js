import React, { useEffect, useState } from "react";
import "../Style/Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "../Components/Post";
import { db } from "../Components/firebase";
import { initializeApp } from "firebase/app";
import { collection, onSnapshot } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const colRef = collection(db, "posts");

    const unsubListener = onSnapshot(colRef, {
      next: (snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      },
      error: (err) => {
        // TODO: handle error (signed out? no permission? no connection?)
      },
    });

    return unsubListener; // <- don't forget to return the unsubscribe function!
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "Junior Wahab",
      description: "this is a test",
      message: input,
      photoUrl: "",
      timestamp: initializeApp.firestore.FieldValue.severTimestamp(),
    });
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              type="text"
              name=""
              id=""
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>

        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>
      {posts.map((post) => {
        <Post />;
      })}
      <Post
        name="Junior Wahab"
        description="This is a test"
        message="Wow this worked"
      />
    </div>
  );
};

export default Feed;
