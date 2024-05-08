import React, { useState } from "react";
import { post } from "../../../services/request";
import Message from "../../../classes/message"; 

const Contact = () => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {id,fullname, email, title, message } = form;
    try {
      const newMessage = new Message(id,fullname, email, title, message, false);
      const response = await post('/messages', newMessage);
      console.log('Message :', response.data); 
    } catch (error) {
      console.error('Error message:', error);
    }

    setForm({
      fullname: "",
      email: "",
      title: "",
      message: "",
    });
  };

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ width: "50%" }}>
        <iframe
          style={{ width: "100%", height: "600px" }}
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
      <div style={{ width: "50%", padding: "20px" }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            style={{ width: "100%", margin: "10px 0" }}
            className="form-control"
            value={form.fullname}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            style={{ width: "100%", margin: "10px 0" }}
            className="form-control"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            style={{ width: "100%", margin: "10px 0" }}
            className="form-control"
            value={form.title}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            style={{ width: "100%", height: "150px", margin: "10px 0" }}
            className="form-control"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button
            className="btn btn-primary"
            type="submit"
            style={{ width: "100%" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
