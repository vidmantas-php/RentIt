import React, { useState, useEffect } from "react";
import axios from "axios";
import { Waypoint } from "react-waypoint";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "../../components/Cards/Card/Card";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Categories from "../../components/Categories/Categories";

const InfiniteScrolling = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const ITEMS_PER_PAGE = 15;

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = () => {
    if (!hasNextPage) return;

    const searchUserURL = `https://api.github.com/search/users?q=dcoder&page=${page}&per_page=${ITEMS_PER_PAGE}`;
    axios.get(searchUserURL).then(({ data: { items, total_count } }) => {
      if (items) {
        if (total_count === users.length + items.length) {
          setHasNextPage(false);
        }

        setUsers((users) => [...users, ...items]);
        setPage((page) => page + 1);
      }
    });
  };

  const loadMoreData = () => {
    if (page > 1) {
      getData();
    }
  };

  return (
    <>
    <Categories />
      <div className="row">
        <div className="col text-center">
          <h2>Items</h2>
          <div className="container-fluid">

            <div className="eilute">
              {users.map((user, idx) => (
                <div className="kazkas">
                  <Card
                    key={idx}
                    imgsrc={user.avatar_url}
                    title={user.login}
                    itemValue={user.id}
                    // city={items.city}
                    // redirect={items.redirect}
                    // onClickCard={() => dispatch(addToFavorites(items))}
                    favIcon={<FavoriteBorderIcon />}
                  />
                </div>
              ))}
            </div>
          </div>
          {hasNextPage && (
            <Waypoint onEnter={loadMoreData}>
              <h5 className="text-muted mt-5">
                Loading data <CircularProgress color="secondary" />
              </h5>
            </Waypoint>
          )}
        </div>
      </div>
    </>
  );
};

export default InfiniteScrolling;
