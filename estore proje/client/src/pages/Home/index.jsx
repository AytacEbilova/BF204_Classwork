import React, { useContext, useState } from "react";
import { Col, Row } from "antd";
import { useGetProductsQuery } from "../../services/productApi";
import styles from "../Home/home.module.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { BasketContext } from "../../context/basketContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavouriteContext } from "../../context/wishlistContext";
import TextField from '@mui/material/TextField';

const Home = () => {
  const { data: products } = useGetProductsQuery();
  const { basket, setBasket } = useContext(BasketContext);
  const { fav, setFav } = useContext(FavouriteContext);
  const [searchQuery, setSearchQuery] = useState("");



  let filteredData = products?.data.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <section>
        <div className={styles.sect1}>
          <div className="container">
            <div className={styles.all}>
              <div className={styles.imgCont}>
                <img
                  src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png"
                  alt=""
                />
              </div>
              <div className={styles.textCont}>
                <h2>60% Discount</h2>
                <h1>WINTER COLLECTION</h1>
                <p>Best Cloth Collection By 2024!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.sect3}>
          <div className="container">
            <TextField 
              id="outlined-basic" 
              name="search"
              label="Search" 
              variant="outlined" 
              value={searchQuery} 
              onChange={(e)=>setSearchQuery(e.target.value)} 
              fullWidth
              margin="normal"
            />
            <h1>Latest Products</h1>
            <hr />
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              <div
                className={styles.cards}
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                {filteredData &&
                  filteredData.map((product) => {
                    return (
                      <Col
                        className="gutter-row"
                        span={6}
                        xs={24}
                        md={12}
                        lg={8}
                        key={product._id}
                      >
                        <div className={styles.card}>
                          <img src={product.img} alt="" />
                          <p>{product.title}</p>
                          <p>{product.price}</p>
                          <Button>
                            <Link to={`/detail/${product._id}`}>Detail</Link>
                          </Button>
                          <Button
                            onClick={() => {
                              let dublicateItem = basket.find(
                                (x) => x._id === product._id
                              );
                              if (dublicateItem) {
                                dublicateItem.count += 1;
                                setBasket([...basket]);
                                localStorage.setItem(
                                  "basket",
                                  JSON.stringify([...basket])
                                );
                              } else {
                                const newBasket = { ...product };
                                newBasket.count = 1;
                                setBasket([...basket, newBasket]);
                                localStorage.setItem(
                                  "basket",
                                  JSON.stringify([...basket, newBasket])
                                );
                              }
                            }}
                          >
                            Add to Basket
                          </Button>
                          <Button
                            onClick={() => {
                              let dublicateItem = fav.find(
                                (x) => x._id === product._id
                              );
                              if (dublicateItem) {
                                const updatedFav = fav.filter(
                                  (x) => x._id !== product._id
                                );
                                setFav(updatedFav);
                                localStorage.setItem(
                                  "fav",
                                  JSON.stringify(updatedFav)
                                );
                              } else {
                                setFav([...fav, product]);
                                localStorage.setItem(
                                  "fav",
                                  JSON.stringify([...fav, product])
                                );
                              }
                            }}
                          >
                            <FavoriteIcon
                              style={{
                                color: fav.find((x) => x._id === product._id)
                                  ? "red"
                                  : "inherit",
                              }}
                            />
                          </Button>
                        </div>
                      </Col>
                    );
                  })}
              </div>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
