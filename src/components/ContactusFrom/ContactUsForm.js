import React from "react";
import "./ContactUs.css";
const ContactUsForm = () => {
  return (
    <div className="wholeDiv">
      <div className="contactus">
        <form className="form" >
          <div className="title-form">Contact Us </div>
          {/* {error !== "" ? <span style={{ color: "red" }}>{error}</span> : ""} */}
          <label>Name</label>
          <input
            placeholder="Name"
            //  value={name}
            // onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            placeholder="Email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />

          <label>Message</label>
          <textarea
            placeholder="Message"
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            // type="submit"
            // style={{ background: loader ? "#ccc" : "  #ff590b" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
