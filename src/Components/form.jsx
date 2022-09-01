import React, { useState } from "react";
import emailjs from 'emailjs-com';



function Form() {


    function handleClick(event) {
        event.preventDefault();

        emailjs.sendForm('service_2o5rq45', 'template_x1jgtg8', event.target, 'V8T-BnQcnCg_dNTxt')
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