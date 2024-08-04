import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

export default function Index() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetching api for data
  useEffect(() => {
    axios
      .get("http://localhost:4000")
      .then((res) => {
        // console.log("API response:", res.data); // Add this line for debugging
        if (Array.isArray(res.data)) {
          setUsers(res.data);
        } else {
          console.error("API response is not an array:", res.data);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  // deleting function
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:4000/DeleteUser/" + id)
      .then((res) => {
        console.log();
        // Update the state to remove the deleted user
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Link to="/CreateUser" className="float-right relative right-3 top-3">
        <Button Name="New User +" />
      </Link>
      <h1 className="text-2xl sm:text-4xl font-bold text-center relative top-20 overflow-hidden">
        CRUD APP
      </h1>
      {loading ? (
        <div className="flex justify-center items-center h-[90vh]">
          <div className="loader">
            <ClipLoader size={50} color={"#00000"} loading={loading} />
          </div>
        </div>
      ) : users.length === 0 ? (
        <div className="flex justify-center items-center h-[90vh]">
          <h2 className="text-xl text-gray-500">No users found</h2>
        </div>
      ) : (
        <div className="relative overflow-x-auto grid place-items-center h-[90vh]">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Age
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.name}
                  </th>
                  <td className="px-6 py-4">{user.age}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4 flex gap-1">
                    <Link to={`/UpdateUser/${user._id}`}>
                      <Button Name="Edit" />
                    </Link>
                    <Button
                      Name="Delete"
                      onClick={() => handleDelete(user._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
