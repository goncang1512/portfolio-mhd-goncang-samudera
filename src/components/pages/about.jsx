import React, { useState } from "react";

function about() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image:
        "https://images.unsplash.com/photo-1682686578707-140b042e8f19?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&w=500",
    },
  });

  const handleNameChange = (e) => {
    setPerson({ ...person, name: e.target.value });
  };

  const handleTitle = (e) => {
    setPerson({
      ...person,
      artwork: { ...person.artwork, title: e.target.value },
    });
  };

  const handleCity = (e) => {
    setPerson({
      ...person,
      artwork: { ...person.artwork, city: e.target.value },
    });
  };

  const handleImage = (e) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-[1rem]">
      <label htmlFor="">
        Name :{" "}
        <input
          type="text"
          value={person.name}
          placeholder="nama"
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="">
        Title :{" "}
        <input
          type="text"
          placeholder="title"
          value={person.artwork.title}
          onChange={handleTitle}
        />
      </label>
      <label htmlFor="">
        City :{" "}
        <input
          type="text"
          placeholder="city"
          value={person.artwork.city}
          onChange={handleCity}
        />
      </label>
      <label htmlFor="">
        Image :{" "}
        <input
          type="text"
          placeholder="image"
          value={person.artwork.image}
          onChange={handleImage}
        />
      </label>

      <p>
        {person.artwork.title} by {person.name} located in {person.artwork.city}
      </p>
      <img
        src={person.artwork.image}
        alt=""
        className="w-96 h-96 object-cover"
      />
    </div>
  );
}

export default about;
