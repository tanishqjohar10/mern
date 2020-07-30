import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);


    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse());
    };


    
    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    }



    return (
        <div className="container">
            <div className="py-4">
                <h1>Employee</h1>
                
                
                <table class="table border ">
                    <thead class="thead-dark">
                        <tr>
                           
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">E-mail</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.firstname}</td>                               
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link class="btn btn-primary mr-4" to={`/users/${user.id}`}>View</Link>
                                    <Link class="btn btn-primary mr-4" to ={`/users/edit/${user.id}`}>Edit</Link>
                                    <Link class="btn btn-primary mr-4" onClick={() => deleteUser(user.id)}>Delete</Link>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                
                

                
                <div className="pagination">

                
                <a href="#" class="active">1</a>
                <a href="#" >2</a>
                <a href="#">3</a>
                <a href="#">&raquo;</a>

                


            
            </div>
            </div>
        </div>
    );
};



export default Home;

