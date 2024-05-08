import React from 'react'
import { useFormik } from 'formik';
import SignupSchema from '../../../validation/country.validation'
const Add = () => {
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email:'',
      title:'',
      message:''

    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema:SignupSchema
  });
  return (
    
    <div style={{ width: "50%", padding: "20px",margin:'0 auto' }}>
        <form onSubmit={formik.onSubmit} >
        <input
  type="text"
  name="fullname"
  placeholder="Full Name"
  style={{ width: "100%", margin: "10px 0" }}
  className="form-control"
  value={formik.values.fullname}
  onChange={formik.handleChange}
/>
{formik.errors.fullname ? <div style={{color:'red'}}>{formik.errors.fullname}</div> : null}
          <input
            type="text"
            name="email"
            placeholder="Email"
            style={{ width: "100%", margin: "10px 0" }}
            className="form-control"
    
          />
           {formik.errors.email ? <div  style={{color:'red'}}>{formik.errors.email}</div> : null}
          <input
            type="text"
            name="title"
            placeholder="Title"
            style={{ width: "100%", margin: "10px 0" }}
            className="form-control"
        
          />
           {formik.errors.title ? <div  style={{color:'red'}}>{formik.errors.title}</div> : null}
          <textarea
            name="message"
            placeholder="Message"
            style={{ width: "100%", height: "150px", margin: "10px 0" }}
            className="form-control"
        
          ></textarea>
           {formik.errors.message ? <div  style={{color:'red'}}>{formik.errors.message}</div> : null}
          <button
            className="btn btn-primary"
            type="submit"
            style={{ width: "100%" }}
          >
            Submit
          </button>
        </form>
    </div>
  )
}

export default Add