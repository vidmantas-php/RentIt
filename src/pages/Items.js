import React from "react";
// import React, { useEffect, useState } from "react";
// import itemApi from "../api/itemApi";
import Card from "../components/Cards/Card/Card";
// import Loading from "../components/Loading/Loading";
import "./Items.css";
// import { Slider } from "../components/Carousel/Slider";
import { CategoryCard } from "../components/Cards/CategoryCard/CategoryCard";
import RentalReviews from "../components/RentalReviews/RentalReviews";
import "../MainPage.css";
import { useSelector, useDispatch } from 'react-redux';

import {
  addToFavorites,
  selectFavorites,
} from "../features/favorites/FavoritesSlice";

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

  const products = useSelector(selectFavorites)
  const dispatch = useDispatch();

  function Cards() {
    return (
      <React.Fragment>
        {/* /* {isLoading ? (
          <Loading className="loading loading-page" />
        ) : (
          items.map((item) => ( */ }
          {products.map((items) => (
        <div>
          <div className="kazkas">
            <Card
              // key={item.id}
              key={items.id}
              imgsrc={items.imgsrc}
              title={items.title}
              itemValue={items.itemValue}
              city={items.city}
              redirect={items.redirect}
              onClickCard={() => dispatch(addToFavorites(items))}
              // {`/products/${product.id}`}
              // imgsrc="https://images.creativemarket.com/0.1.0/ps/7219151/300/200/m2/fpc/wm0/t5nk3muqwpf5pcd5rrgicears5kw3c0oshvlespkdh05fhftkkzlt4vs05j82ts2-.jpg?1572428562&s=209474640e9993046a57673177887050"
              // title="Scooter"
              // itemValue="26.3"
              // city="Vilnius"
              // redirect="/item"
            />
          </div>
        </div>
        /* ))
        )} */
          ))}
      </React.Fragment>
    );
  }

  return (
    <div>
      <h2 className="text-center padding__1rem">Categories</h2>
      <div className="containeris">
        <CategoryCard
          categoryImage="https://i.pinimg.com/originals/e7/ff/65/e7ff654cee54c6f1fe58279cb56c40ab.jpg"
          categoryName="Cameras"
          redirect=""
        />
        <CategoryCard
          categoryImage="https://www.crisis-response.com/inc/img/blog/thumbnail/594.jpg"
          categoryName="Drones"
          redirect=""
        />
        <CategoryCard
          categoryImage="https://www.taylorguitars.com/sites/default/files/styles/responsive_column/public/TAYLOR-THREECOLUMN-DEALER%20%281%29.jpg?itok=PZ_ids-L"
          categoryName="Musical Instruments"
          redirect=""
        />
        <CategoryCard
          categoryImage="https://i.pinimg.com/originals/3a/be/c3/3abec3610afbc69dbb815526a921ffd0.jpg"
          categoryName="Electric Scooters"
          redirect=""
        />
        <CategoryCard
          categoryImage="https://images.squarespace-cdn.com/content/v1/5c0bf52cc3c16ad0c27bb250/1547664398847-7WPAFS97S1RUKTPZ2QN4/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/Giant-Off-Road.jpg"
          categoryName="Sports"
          redirect=""
        />
        <CategoryCard
          categoryImage="https://i.pinimg.com/originals/e7/ff/65/e7ff654cee54c6f1fe58279cb56c40ab.jpg"
          categoryName="Cameras"
          redirect=""
        />
        <CategoryCard
          categoryImage="https://www.crisis-response.com/inc/img/blog/thumbnail/594.jpg"
          categoryName="Drones"
          redirect=""
        />
      </div>
      <div>
        <div className="display__flex justify__content__center">
          <button
            className="navbar-toggler dropdown-toggle margin__bottom__1rem"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent2"
            aria-controls="navbarSupportedContent2"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            More Categories
          </button>
        </div>

        <div
          className="containeris collapse navbar-collapse"
          id="navbarSupportedContent2"
        >
          <CategoryCard
            categoryImage="https://i.pinimg.com/originals/e7/ff/65/e7ff654cee54c6f1fe58279cb56c40ab.jpg"
            categoryName="Cameras"
            redirect=""
          />
          <CategoryCard
            categoryImage="https://www.crisis-response.com/inc/img/blog/thumbnail/594.jpg"
            categoryName="Drones"
            redirect=""
          />
          <CategoryCard
            categoryImage="https://www.taylorguitars.com/sites/default/files/styles/responsive_column/public/TAYLOR-THREECOLUMN-DEALER%20%281%29.jpg?itok=PZ_ids-L"
            categoryName="Musical Instruments"
            redirect=""
          />
          <CategoryCard
            categoryImage="https://i.pinimg.com/originals/3a/be/c3/3abec3610afbc69dbb815526a921ffd0.jpg"
            categoryName="Electric Scooters"
            redirect=""
          />
          <CategoryCard
            categoryImage="https://images.squarespace-cdn.com/content/v1/5c0bf52cc3c16ad0c27bb250/1547664398847-7WPAFS97S1RUKTPZ2QN4/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/Giant-Off-Road.jpg"
            categoryName="Sports"
            redirect=""
          />
          <CategoryCard
            categoryImage="https://i.pinimg.com/originals/e7/ff/65/e7ff654cee54c6f1fe58279cb56c40ab.jpg"
            categoryName="Cameras"
            redirect=""
          />
          <CategoryCard
            categoryImage="https://www.crisis-response.com/inc/img/blog/thumbnail/594.jpg"
            categoryName="Drones"
            redirect=""
          />
        </div>
      </div>

      {/* <Slider
          first="https://telefonai.eu/Failai/OLD/gopro-oficialiai-pristate-naujasias-gopro-8-ir-gopro-hero-max-veiksmo-kameras.jpg"
          second="https://social.usq.edu.au/-/media/usq/social/study-tips/pages/desktop-background-collection-banner.ashx"
          third="https://nodum.lt/wp-content/uploads/2019/11/cybertruck2.jpg"
        /> */}

      <div className="container-fluid d-flex-justify-content-center">
        <h2 className="text-center padding__1rem">Top Items</h2>
        <div className="eilute">
          <Cards />
          <Cards />
        </div>
      </div>

      <div className="display__flex margin__right__and__left__10rem justify__content__space__around align__all__items__center">
        <div className="width__30rem font__size__x__large">
          <h2 className="text-center padding__1rem">Reklama</h2>
          <p>
            Join our herd of lenders earning £100s each month lending their
            belongings and equipment. Lender protection up to £25,000 per item,
            backed by Hiscox.
          </p>
        </div>
        <div>
          <img
            src="https://assets.fatllama.com/static/img/rebrand-assets/home-page/info/fat-llama-girl-on-phone.svg"
            alt="Very beautiful product"
            className="img-height-width"
          />
        </div>
      </div>

      <div className="display__flex margin__right__and__left__10rem justify__content__space__around align__all__items__center">
        <div>
          <img
            src="https://assets.fatllama.com/static/img/rebrand-assets/home-page/info/fat-llama-guy-on-bubble.svg"
            alt="Very beautiful product"
            className="img-height-width"
          />
        </div>
        <div className="width__30rem font__size__x__large">
          <h2 className="text-center">Reklama</h2>
          <p>
            Join our herd of lenders earning £100s each month lending their
            belongings and equipment. Lender protection up to £25,000 per item,
            backed by Hiscox.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-center">Rental reviews</h2>
        </div>
        <div className="rental__review">
          <div className="display__flex">
            <RentalReviews />
            <RentalReviews />
          </div>
          <div className="display__flex">
            <RentalReviews />
            <RentalReviews />
          </div>
        </div>
      </div>
    </div>
  );
};
