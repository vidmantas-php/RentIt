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
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {
  addToFavorites,
  selectFavorites,
  removeFavoritesItem
} from "../features/favorites/FavoritesSlice";
import { Ad } from "../components/Ad/Ad";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

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

  const products = useSelector(selectFavorites);
  const dispatch = useDispatch();

  function Cards() {
    return (
      <React.Fragment>
        {products.map((items) => (
          <div>
            <div className="kazkas">
              {items.added ? (
                <>
                  <Card
                    key={items.id}
                    imgsrc={items.imgsrc}
                    title={items.title}
                    itemValue={items.itemValue}
                    city={items.city}
                    redirect={items.redirect}
                    onClickCard={() => dispatch(removeFavoritesItem(items))}
                    favIcon={<FavoriteIcon className="favorites__red" />}
                  />
                </>
              ) : (
                <>
                  <Card
                    key={items.id}
                    imgsrc={items.imgsrc}
                    title={items.title}
                    itemValue={items.itemValue}
                    city={items.city}
                    redirect={items.redirect}
                    onClickCard={() => dispatch(addToFavorites(items))}
                    favIcon={<FavoriteBorderIcon />}
                  />
                </>
              )}
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }

  return (
    <div>
      <h2 className="text-center padding__1rem">Categories</h2>
      <div className="containeris_dydis">
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
          className="containeris_dydis collapse"
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
          <CategoryCard
            categoryImage="https://www.crisis-response.com/inc/img/blog/thumbnail/594.jpg"
            categoryName="Drones"
            redirect=""
          />
        </div>
      </div>

      <div className="ad margin__right__and__left__10rem margin__top__bottom__2rem">
        <Ad
          adImg="https://assets.fatllama.com/static/img/rebrand-assets/home-page/vp-access/fat-llama-vp-access.svg"
          textFirst="Access More"
          textSecond="Pursue passions. Get things done"
        />
        <Ad
          adImg="https://assets.fatllama.com/static/img/rebrand-assets/home-page/vp-access/fat-llama-vp-money.svg"
          textFirst="Save money"
          textSecond="Buy less. Rent for a fraction of the cost"
        />
        <Ad
          adImg="https://assets.fatllama.com/static/img/rebrand-assets/home-page/vp-access/fat-llama-vp-light.svg"
          textFirst="Help the planet"
          textSecond="Live lighter. Reduce waste"
        />
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

      <div className="row containeris_dydis mb-5">
        <div className="eiliskumas-1 width__30rem font__size__x__large">
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
            className="img-mp-size"
          />
        </div>
      </div>

      <div className="row containeris_dydis mb-5">
        <div>
          <img
            src="https://assets.fatllama.com/static/img/rebrand-assets/home-page/info/fat-llama-guy-on-bubble.svg"
            alt="Very beautiful product"
            className="img-mp-size"
          />
        </div>
        <div className="width__30rem font__size__x__large">
          <h2 className="text-center">Reklama</h2>
          <p>
            Join our herd of lenders earning £100s each as month lending their
            belongings and equipment. Lender protection up to £25,000 per item,
            backed by Hiscox.
          </p>
        </div>
      </div>

      <div className="mb-2">
        <div>
          <h2 className="text-center">Rental reviews</h2>
        </div>
        <div className="containeris_dydis">
          <RentalReviews />
          <RentalReviews />
          <RentalReviews />
          <RentalReviews />
        </div>
      </div>
    </div>
  );
};
