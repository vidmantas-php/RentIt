import React from "react";
// import React, { useEffect, useState } from "react";
// import itemApi from "../api/itemApi";
import Card from "../components/Card/Card";
// import Loading from "../components/Loading/Loading";
import "./Items.css";
import { Slider } from "../components/Carousel/Slider";
import CategoryCard from "../components/CategoryCard/CategoryCard";

export default () => {
  // const [items, setItems] = useState([]);
  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   itemApi
  //     .fetchItems()
  //     .then(({ data }) => setItems(data))
  //     .then(setTimeout(() => setLoading(false), 1000));
  // }, []);

  function Cards() {
    return (
      <React.Fragment>
        {/* {isLoading ? (
          <Loading className="loading loading-page" />
        ) : (
          items.map((item) => ( */}
        <div>
          <div className="kazkas">
            <Card
              // key={item.id}
              imgsrc="https://images.creativemarket.com/0.1.0/ps/7219151/300/200/m2/fpc/wm0/t5nk3muqwpf5pcd5rrgicears5kw3c0oshvlespkdh05fhftkkzlt4vs05j82ts2-.jpg?1572428562&s=209474640e9993046a57673177887050"
              title="Scooter"
              itemValue="26.3"
              city="Vilnius"
              redirect="/item"
            />
          </div>
        </div>
        {/* ))
        )} */}
      </React.Fragment>
    );
  }

  return (
    <div>
      <div>
        <CategoryCard/>

        {/* <Slider
          first="https://telefonai.eu/Failai/OLD/gopro-oficialiai-pristate-naujasias-gopro-8-ir-gopro-hero-max-veiksmo-kameras.jpg"
          second="https://social.usq.edu.au/-/media/usq/social/study-tips/pages/desktop-background-collection-banner.ashx"
          third="https://nodum.lt/wp-content/uploads/2019/11/cybertruck2.jpg"
        /> */}
      </div>
      <div className="container-fluid d-flex-justify-content-center">
        <h2 className="text-center">Top Items</h2>
        <div className="eilute">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
};
