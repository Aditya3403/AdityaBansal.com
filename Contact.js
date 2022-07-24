import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';


function Contact(props){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setCPassword] = useState("");
  
  // async function sendData(e){
  //   e.preventDefault();
  //   try {
  //     const res = await fetch("/signup",{
  //       method:"POST",
  //       headers:{
  //         "Accept":"application/json",
  //         "Content-Type":"application/json"
  //       },
  //       body: JSON.stringify({
  //         name:name,email:email,password:password,confirmPassword:confirmPassword
  //       })
  //     });
  //     navigate("/");
  //     const data = await res.json();
      
  //   } catch (error) {
  //     console.log(error)
      
  //   }

  // }

    return(
      <>
        <div className='contactPage'>
          <div className='contactPage-heading'>
            <h1>Let's create something great together!!</h1>
          </div>
          <div className='contactPage-para-socials'>
            <div className='contactPage-para'>
              <p>Want to say "Hey!"? Want to ask me something?<br/> Want to discuss new project or opportunity with me? Want to hire me? Ping Me!<br/><br/> For a qickker responce ping me on the social platforms or you can also use the form below.</p>
            </div>
            <div className='contactPage-socials'>
            <a href="https://www.instagram.com/adityabansal3403/" target="_blank"><i className="fab fa-instagram fa-2x"></i></a>
            <a href="https://www.linkedin.com/in/aditya-bansal-036b36211/"target="_blank"><i className="fab fa-linkedin-in fa-2x"></i></a>
            <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
            </div>
          </div>
          <div className='contactPage-form'>
            <form action="https://api.formclip.xyz/form/5LlfFhMKy2n2WBBnwYlL" method="post">
              <label for="name">Name</label>
              <input type="text" name="name" />
              <label for="email">Email</label>
              <input type="text" name="email" />
              <label for="message">Message</label>
              <textarea name="message"></textarea>
              <button>Submit</button>
            </form>
          </div>

        </div>
      </>
    );
}

export default Contact;