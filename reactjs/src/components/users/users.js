import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",  
    phone: "",
    currentaddress: "",
    permanentaddress: "",
    course: "",
    college: "",
    year: "",
    cgpa: "",
    cname: "",
    designation: "",
    doj: "",
    dor: "",
    linkedinprofile: "",
    facebookprofile: "",
    hobby: "",
    githubprofile: ""

  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.firstname}</li>
        <li className="list-group-item">last name: {user.lastname}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phone: {user.phone}</li>
        <li className="list-group-item">current address: {user.currentaddress}</li>
        <li className="list-group-item">permanent address: {user.permanentaddress}</li>
        <li className="list-group-item">course: {user.course}</li>
        <li className="list-group-item">college: {user.college}</li>
        <li className="list-group-item">year: {user.year}</li>
        <li className="list-group-item">cgpa: {user.cgpa}</li>
        <li className="list-group-item">company name: {user.cname}</li>
        <li className="list-group-item">Designation: {user.designation}</li>
        <li className="list-group-item">Date of Joining: {user.doj}</li>
        <li className="list-group-item">Facebook Profile: {user.facebookprofile}</li>
        <li className="list-group-item">GitHub Profile: {user.githubprofile}</li>
        <li className="list-group-item">Hobbies: {user.hobby}</li>
        <li className="list-group-item">LinkedIn Profile: {user.linkedinprofile}</li>




      </ul>
    </div>
  );
};

export default User;