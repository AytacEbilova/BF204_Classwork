import React from "react";
import { useDeleteProductMutation, useGetProductsQuery, usePostProductMutation } from "../../services/productApi";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import Swal from 'sweetalert2'
import productSchema from "../../validation/productValidation";
import { Space, Table } from 'antd';
import DeleteIcon from '@mui/icons-material/Delete';




const Add = () => {
  const { data: products, refetch } = useGetProductsQuery();
  const[postProduct]=usePostProductMutation();
  const[deleteProduct]=useDeleteProductMutation();


  const columns = [
    {
      title: 'Image',
      dataIndex: 'img',
      key: 'img',
      render:(text,record)=>(
        <img src={record.img} alt={text} width={100} height={50}/>
      )
       
      
    
    },
    {
      title: 'Title',
      dataIndex: 'title',
     
    },
    {
      title: 'Price',
      dataIndex: 'price',
     
    },
     {
      title: "Action",
      render: (_, record) => {
      return  <Button
          onClick={() => {
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then(async (result) => {
              if (result.isConfirmed) {
                await deleteProduct(record._id);
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            });
          }}
        >
          <DeleteIcon />
        </Button>;
      },
    }
  ];

  const formik = useFormik({
    initialValues: {
      img: "",
      title: "",
      price: "",
    },
    onSubmit: (values,{resetForm}) => {
       postProduct(values).then(()=>{
        Swal.fire({
          title: "Added Succesfully!",
          text: "You clicked the button!",
          icon: "success"
        });
        refetch();
        resetForm();
       })
    },
    validationSchema:productSchema
  });

  return (
    <>
      <div style={{ width: "40%", margin: "30px auto", padding: "50px 0" }}>
      <h3 style={{ textAlign: "center", padding: "20px 0" }}>Add Product</h3>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          id="outlined-basic"
          name="img"
          label="Image"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.img}
        />
        {formik.touched.img && formik.errors.img && ( <span style={{color:'red'}}>{formik.errors.img}</span> )}
        <TextField
          id="outlined-basic"
          name="title"
          label="Title"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
          {formik.touched.title && formik.errors.title && ( <span style={{color:'red'}}>{formik.errors.title}</span> )}
        <TextField
          id="outlined-basic"
          name="price"
          label="Price"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
          {formik.touched.price && formik.errors.price && ( <span style={{color:'red'}}>{formik.errors.price}</span> )}
        <Button variant="contained" type="submit">
          Add
        </Button>
      </form>
      <Space
        style={{
          marginBottom: 16,
        }}
      >
       
      </Space>
      <Table columns={columns} dataSource={products?.data}  />
    </div>
    
    </>
    
  );
};

export default Add;
