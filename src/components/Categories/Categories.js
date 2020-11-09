import React from "react";
import "../../MainPage.css";
import { CategoryCard } from "../Cards/CategoryCard/CategoryCard";

function Categories() {
  return (
    <div className="m-4">
      {/* <h2 className="text-center padding__1rem">Categories</h2> */}
      <div className="containeris justify-content-center">
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
          categoryImage="https://i.pinimg.com/564x/b7/75/95/b775953923c0727458bc55a94223ce82.jpg"
          categoryName="DJ Equipment"
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
      </div>
      <div>
        <div className="d-flex justify-content-center">
          <button
            // className="navbar-toggler dropdown-toggle margin__bottom__1rem text__color__selection font__size__1rem"
            className="navbar-toggler margin__bottom__1rem text__color__selection font__size__1rem"
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
          className="containeris collapse"
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
    </div>
  );
}

export default Categories;
