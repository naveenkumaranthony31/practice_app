import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect} from "react";
import { Table } from 'react-bootstrap';
import '../App.css';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";

import { Link } from 'react-router-dom';
function Home() {

  const  [usename,setusename]=useState([])
  const params = useParams();
  
  const eymploees=async()=>{
    let empl=await axios.get("https://63c6727ddcdc478e15c1977d.mockapi.io/users")
    setusename(empl.data)
  }

  useEffect(()=>{
    eymploees()
  },[])

  let userDelete=async() =>{
    try {
      await axios.delete(`https://624a7fdb852fe6ebf887ce66.mockapi.io/users/${params.id}`)
      eymploees()
alert("Sure want delete")
    } catch (error) {
      
    }
  }

return(
<div>
<Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Place</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          usename.map((items)=>{
            return(
<tr>
              <td>{items.name}</td>
              <td>{items.age}</td>
              <td>{items.place}</td>
              <td>
              <span className='bttn gap-3'>
              <Link to="/view/:id"><button type="button" class="btn btn-primary">View</button></Link>
              <Link to="/edit/:id"><button type="button" class="btn btn-secondary">Edit</button></Link>
              <Link onClick={()=>userDelete(usename.id)}><button type="button" class="btn btn-danger">Delete</button></Link>
              </span>
              </td>
            </tr>
            )
            
          })
        }
        </tbody>
    </Table>
</div>
    )
}

export default Home;