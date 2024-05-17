import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { usePostMenuMutation } from "../../services/menuApi";

const Add = () => {
  const [postMenu] = usePostMenuMutation();
  const [newMenu, setNewMenu] = useState({
    src: "",
    title: "",
    bio: "",
    price: "",
    category: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postMenu(newMenu);
      setNewMenu({ src: "", title: "", bio: "", price: "", category: "" });
    } catch (error) {
      console.error("Failed to post new menu", error);
    }
  };

  return (
    <div style={{ padding: 150, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "16px", width: "300px" }}
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-src"
          label="Image"
          variant="outlined"
          type="text"
          value={newMenu.src}
          onChange={(e) => setNewMenu({ ...newMenu, src: e.target.value })}
        />
        <TextField
          id="outlined-title"
          label="Title"
          variant="outlined"
          type="text"
          value={newMenu.title}
          onChange={(e) => setNewMenu({ ...newMenu, title: e.target.value })}
        />
        <TextField
          id="outlined-bio"
          label="Bio"
          variant="outlined"
          type="text"
          value={newMenu.bio}
          onChange={(e) => setNewMenu({ ...newMenu, bio: e.target.value })}
        />
        <TextField
          id="outlined-price"
          label="Price"
          variant="outlined"
          type="number"
          value={newMenu.price}
          onChange={(e) => setNewMenu({ ...newMenu, price: e.target.value })}
        />
        <TextField
          id="outlined-category"
          label="Category"
          variant="outlined"
          type="text"
          value={newMenu.category}
          onChange={(e) => setNewMenu({ ...newMenu, category: e.target.value })}
        />
        <Button variant="contained" type="submit">Add</Button>
      </form>
    </div>
  );
};

export default Add;
