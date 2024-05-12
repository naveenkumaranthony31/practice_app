import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit(id) {
    const params=useParams();
    const navigate=useNavigate()
const formik=useFormik({
  initialValues:{
        name:"",
        age:"",
        place:""
    },

    onSubmit:async(values)=>{
      await axios.put(`https://63c6727ddcdc478e15c1977d.mockapi.io/users/${params.id}`,values)
      navigate("/")
    }
       
})




useEffect(()=>{
    loaduser()
  },[])

  const loaduser=async()=>{
    try {
      let user= await axios.get(`https://63c6727ddcdc478e15c1977d.mockapi.io/users/${params.id}`)
        formik.setValues({
            name:user.data.name,
            age:user.data.age,
            place:user.data.place
        })
    } catch (error) {
        
    }
    
    }

  return (
    <div className="container">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-lg-6">
                <label>Name</label>
                <input
                  className="form-control"
                  type={"text"}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  name="name"
                />
               
              </div>
              <div className="col-lg-6">
                <label>Age</label>
                <input
                  className="form-control"
                  type={"text"}
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  name="age"
                />
              
              </div>
              <div className="col-lg-6">
                <label>Place</label>
                <input
                  className="form-control"
                  type={"text"}
                  value={formik.values.place}
                  onChange={formik.handleChange}
                  name="place"
                />
              </div>
             
              <div className="col-lg-6">
                <input
                  className="btn btn-primary mt-2 "
                  type={"Submit"}
                  value="Submit"
                  
                />
              </div>
            </div>
          </form>
        </div>
  );
}

export default Edit;
