import React, { useEffect ,useState} from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

function View() {

    const params = useParams();
  

 
    const [userData,setUserData]=useState({})


  useEffect(()=>{
    loadUser()
  },[])
let loadUser =async()=>{
  try{
    let user = await axios.get(
      `https://63c6727ddcdc478e15c1977d.mockapi.io/users/${params.id}`
    );

setUserData(user.data)
}
  catch(error){

  }
}
  return (
  
  <>
  <h2 >{userData.name}</h2>
  <h3>{userData.age}</h3>
  <h4>{userData.place}</h4>
 
  </>
)
  
  
  }

export default View;    
