import React, { useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";

export default function App() {
  const [user, setUser] = useState({
    name: "The Octocat",
    username: "octocat",
    bio: "The GitHub Octocat",
    public_repos: 8,
    followers: 3938,
    following: 9,
    location: "San Francisco",
    blog: "https://github.blog",
    company: "GitHub",
    twitter: "Not Available",
    created_at: "Joined 25 Jan 2011",
    avatar_url: "/images/Bitmap.png",
  });

  const [input, setInput] = useState({
    username: "",
  });

  function handleChange(event) {
    setInput({
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`https://api.github.com/users/${input.username}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }

  return (
    <div>
      <Header
        getUser={handleSubmit}
        handleClick={handleChange}
        user={input.username}
      />
      <Profile
        name={user.name}
        username={user.login}
        bio={user.bio}
        repoCount={user.public_repos}
        followers={user.followers}
        following={user.following}
        location={user.location}
        blog={user.blog}
        company={user.company}
        twitter={user.twitter_usename}
        dateJoined={user.created_at}
        image={user.avatar_url}
      />
    </div>
  );
}
