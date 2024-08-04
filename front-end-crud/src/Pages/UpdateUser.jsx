import InputFiled from '../components/InputFiled';
import Button from '../components/Button';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function UpdateUser() {
  const navigate = useNavigate()
  const { id } = useParams(); // Destructure to get the id
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios.get('http://localhost:4000/getUser/' + id)
      .then(result => {
        setName(result.data.name);
        setAge(result.data.age);
        setEmail(result.data.email);
      })
      .catch(err => console.log(err));
  }); // Add id as a dependency

  const Submit = (e) => {
    e.preventDefault();

    console.log({ name, age, email });
    // Send data to the API
    axios.put("http://localhost:4000/UpdateUser/" + id, { name, age, email })
      .then(result => console.log(''))
      .catch(err => console.log(err));
      navigate('/')
  };

  return (
    <div>
      <h1 className='text-5xl text-center relative top-10'>Update User</h1>
      <form className="flex justify-center items-center flex-col gap-3 h-[80vh]" onSubmit={Submit}>
        <InputFiled Name="Write ur name..." onchange={(e) => setName(e.target.value)} value={name} />
        <InputFiled Name="Age..." onchange={(e) => setAge(e.target.value)} value={age} />
        <InputFiled Name="Email..." onchange={(e) => setEmail(e.target.value)} value={email} />
        <span className="relative right-[74px]">
          <Button Name="Update!" />
        </span>
      </form>
    </div>
  );
}
