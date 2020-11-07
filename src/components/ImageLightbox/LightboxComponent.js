import React, { Component } from "react";
import Lightbox from "./lib/Lightbox";
import "../../MainPage.css";
import "./LightboxComponent.css";

const images = [
  "https://www.techadvisor.co.uk/cmsdata/features/3668712/uk_electric_scooter_law_thumb800.jpg",
  "https://www.techadvisor.co.uk/cmsdata/features/3668712/uk_electric_scooter_law_thumb800.jpg",
  "https://www.techadvisor.co.uk/cmsdata/slideshow/3631238/best_electric_scooters_thumb1200_4-3.jpg",
];
// const thumbs = ["https://images.creativemarket.com/0.1.0/ps/7219151/300/200/m2/fpc/wm0/t5nk3muqwpf5pcd5rrgicears5kw3c0oshvlespkdh05fhftkkzlt4vs05j82ts2-.jpg?1572428562&s=209474640e9993046a57673177887050", "https://www.techadvisor.co.uk/cmsdata/features/3668712/uk_electric_scooter_law_thumb800.jpg", "https://www.techadvisor.co.uk/cmsdata/slideshow/3631238/best_electric_scooters_thumb1200_4-3.jpg"];

class LightboxComponent extends Component {
  static onImageLoadError(imageSrc, _srcType, errorEvent) {
    console.error(`Could not load image at ${imageSrc}`, errorEvent); // eslint-disable-line no-console
  }

  constructor() {
    super();

    this.state = {
      index: 0,
      isOpen: false,
    };

    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.moveNext = this.moveNext.bind(this);
    this.movePrev = this.movePrev.bind(this);
  }

  openLightbox() {
    this.setState({ isOpen: true });
  }

  closeLightbox() {
    this.setState({ isOpen: false });
  }

  moveNext() {
    this.setState((prevState) => ({
      index: (prevState.index + 1) % images.length,
    }));
  }

  movePrev() {
    this.setState((prevState) => ({
      index: (prevState.index + images.length - 1) % images.length,
    }));
  }

  render() {
    let lightbox;
    if (this.state.isOpen) {
      lightbox = (
        <Lightbox
          mainSrc={images[this.state.index]}
          nextSrc={images[(this.state.index + 1) % images.length]}
          prevSrc={
            images[(this.state.index + images.length - 1) % images.length]
          }
          //   mainSrcThumbnail={thumbs[this.state.index]}
          //   nextSrcThumbnail={thumbs[(this.state.index + 1) % images.length]}
          //   prevSrcThumbnail={
          //     thumbs[(this.state.index + images.length - 1) % images.length]
          //   }
          onCloseRequest={this.closeLightbox}
          onMovePrevRequest={this.movePrev}
          onMoveNextRequest={this.moveNext}
          onImageLoadError={LightboxComponent.onImageLoadError}
        />
      );
    }

    return (
      <div>
        <div className="d-flex pagrdiv_lightbox">
          <div className="d-flex mini_photos">
            <img
              src="https://www.techadvisor.co.uk/cmsdata/features/3668712/uk_electric_scooter_law_thumb800.jpg"
              alt="Very beautiful product"
              className="small__images"
              onClick={this.openLightbox}
              id="open-lightbox"
            />
            <img
              src="https://www.techadvisor.co.uk/cmsdata/slideshow/3631238/best_electric_scooters_thumb1200_4-3.jpg"
              alt="Very beautiful product"
              className="small__images"
              onClick={this.openLightbox}
              id="open-lightbox"
            />
            <img
              src="https://www.techadvisor.co.uk/cmsdata/features/3668712/uk_electric_scooter_law_thumb800.jpg"
              alt="Very beautiful product"
              className="small__images"
              onClick={this.openLightbox}
              id="open-lightbox"
            />
          </div>
          <div className="main_photo">
            <img
              src="https://www.techadvisor.co.uk/cmsdata/features/3668712/uk_electric_scooter_law_thumb800.jpg"
              alt="Very beautiful product"
              className="img-height-width"
              onClick={this.openLightbox}
              id="open-lightbox"
            />
          </div>
          {lightbox}
        </div>
      </div>
    );
  }
}

export default LightboxComponent;
