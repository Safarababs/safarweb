import React, { useState } from "react";
import emailjs from 'emailjs-com';



function Form() {


    function handleClick(event) {
        event.preventDefault();

        emailjs.sendForm('service_emjf1t3', 'Tonton E.T Enterprise', event.target, 'oMQJa8lQkpH2z6yB6TUGf')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          event.target.reset()
    }

    return (
        <form onSubmit={handleClick}>
            <input type="text" name="name" placeholder="name" className="box" />
            <input type="email" name="email" placeholder="email" className="box" />
            <input type="text" name="tel" placeholder="+123-123456" className="box" />
            <input type="text" name="subject" placeholder="project" className="box" />
            <textarea cols="30" rows="10" name="message"  className="box message" placeholder="message"></textarea>
            <button type="submit" className="btn"> send <i className="fas fa-paper-plane"></i> </button>

        </form>
    )
}

export default Form;
