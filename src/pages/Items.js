import React from "react";
// import itemApi from "../api/itemApi";
import Card from "../components/Cards/Card/Card";
// import Loading from "../components/Loading/Loading";
import "./Items.css";
import RentalReviews from "../components/RentalReviews/RentalReviews";
import "../MainPage.css";
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {
  addToFavorites,
  selectFavorites,
  removeFavoritesItem,
} from "../features/favorites/FavoritesSlice";
import { Ad } from "../components/Ad/Ad";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";
import Categories from "../components/Categories/Categories";

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
          /* {items.map((items) => ( */
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
        ))}
      </React.Fragment>
    );
  }

  return (
    <div className="containeris px-2">
        <Categories />
      <div className="ad containeris">
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

      <div className="column">
        <h2 className="text-center padding__1rem">Top Items</h2>
        <div className="containeris">
          <Cards />
        </div>
        <Link to="/allitems" style={{ textDecoration: "none" }}>
          <p className="text-center">More items</p>
        </Link>
      </div>

      <div className="row containeris mb-5">
        <div className="eiliskumas-1 width__30rem">
          <h2 className="">
            Earn money from your things
          </h2>
          <p className="font__size__x__large color__grey__like">
            Join our herd of lenders earning £100s each month lending their
            belongings and equipment.
          </p>
          <p className="font__size__x__large color__grey__like"> Lender protection up to £25,000 per item, backed by Hiscox.</p>
        </div>
        <div>
          <img
            src="https://assets.fatllama.com/static/img/rebrand-assets/home-page/info/fat-llama-girl-on-phone.svg"
            alt="Very beautiful product"
            className="img-mp-size"
          />
        </div>
      </div>

      <div className="row containeris mb-5">
        <div>
          <img
            src="https://assets.fatllama.com/static/img/rebrand-assets/home-page/info/fat-llama-guy-on-bubble.svg"
            alt="Very beautiful product"
            className="img-mp-size"
          />
        </div>
        <div className="width__30rem">
          <h2 className="">Get access to (almost) anything</h2>
          <p className="font__size__x__large color__grey__like">
            Join our herd of lenders earning £100s each as month lending their
            belongings and equipment.
          </p>
          <p className="font__size__x__large color__grey__like"> Lender protection up to £25,000 per item, backed by Hiscox.</p>
        </div>
      </div>

      <div className="mb-2">
        <div>
          <h2 className="text-center">Rental reviews</h2>
        </div>
        <div className="containeris">
          <RentalReviews />
          <RentalReviews />
          <RentalReviews />
          <RentalReviews />
        </div>
      </div>
    </div>
  );
};
