import React, { useState } from "react";
import Button from "../components/Button.jsx";
import InputField from "../components/InputFiled.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function CreateUser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  const Submit = (e) => {
    e.preventDefault();

    console.log({ name, age, email });
    // Send data to the API
    axios
      .post("http://localhost:4000/create", { name, age, email })
      .then((res) => {console.log('')
        navigate('/')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <h1 className="text-5xl text-center p-5 relative top-16">Create User</h1>
      <form
        onSubmit={Submit}
        className="flex justify-center items-center flex-col gap-3 h-[80vh]"
      >
        <InputField
          Name="Write your name..."
          onchange={(e) => setName(e.target.value)}
        />
        <InputField Name="Age..." onchange={(e) => setAge(e.target.value)} />
        <InputField
          Name="Email..."
          onchange={(e) => setEmail(e.target.value)}
        />
        <span className="relative right-[76px]">
          <Button Name="Create!" />
        </span>
      </form>
    </div>
  );
}
