import { Button } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router";
import {  useGetOneProductsQuery } from "../../services/productApi";

const Detail = () => {
  const { id } = useParams();
  const { data: product } = useGetOneProductsQuery(id);
  const navigate = useNavigate();
  return (
    <>
      {product && (
        <div className="cards">
          <img src={product?.data.img} alt="" />
          <p>{product?.data.title}</p>
          <p>{product?.data.price}</p>
          <Button size="small"  onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      )}
    </>
  );
};

export default Detail;
