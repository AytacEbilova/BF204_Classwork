import React, { useContext } from "react";
import { BasketContext } from "../../context/basketContext";

const Basket = () => {
  const { basket, setBasket } = useContext(BasketContext);
  return (
    <div style={{ width: "40%", margin: "70px auto", padding: "70px 0" }}>
      <h3>Basket</h3>
      <ul style={{ display: "flex", flexDirection: "column" }}>
        {basket &&
          basket.map((basketItem) => {
            return (
              <li style={{display:"flex",gap:"15px"}}>
                <span>
                  {basketItem.title} | <b>{basketItem.count}</b>
                </span>
                <button onClick={()=>{
                  const currentItem=basket.find((x)=>x._id==basketItem._id)
                  if (currentItem.count>1) {
                    currentItem.count -= 1;
                    setBasket([...basket]);
                    localStorage.setItem("basket", JSON.stringify([...basket]));
                  } else {
                    const uptadeItem = basket.filter(
                      (x) => x._id != basketItem._id
                    );
                    setBasket([...uptadeItem]);
                    localStorage.setItem(
                      "basket",
                      JSON.stringify([...uptadeItem])
                    );
                  }
                }}>-</button>
                <button
                  onClick={() => {
                    const currentItem = basket.find(
                      (x) => x._id == basketItem._id
                    );
                    currentItem.count += 1;
                    setBasket([...basket]);
                    localStorage.setItem("basket", JSON.stringify([...basket]));
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    const uptadeItem = basket.filter(
                      (x) => x._id != basketItem._id
                    );
                    setBasket([...uptadeItem]);
                    localStorage.setItem(
                      "basket",
                      JSON.stringify([...uptadeItem])
                    );
                  }}
                >
                  remove
                </button>
              </li>
            );
          })}
      </ul>
      <button onClick={()=>{
        setBasket([]);
        localStorage.setItem(
          "basket",
          JSON.stringify([])
        );
      }}>order</button>
    </div>
  );
};

export default Basket;
