import React from "react";

import ImageHero from "assets/images/hero/img-hero.png";
import ImageFrame from "assets/images/hero/img-frame.png";
import IconCities from "assets/icon/ic_cities.svg";
import IconTraveler from "assets/icon/ic_traveler.svg";
import IconTreasure from "assets/icon/ic_treasure.svg";
import Button from "elements/Button";
import numberFormat from 'utility/numbFormat.js'

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }


  return (
    <section className="container pt-4">
      <div className="row mt-5 align-items-center">
        <div className="col-auto pr-5" style={{width: 530}}>
          <h1 className="font-weight-bold">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p className="mb-4 font-weight-light text-gray-500" style={{lineHeight:"170%"}}>
            We provide what you need to enjoy your <br /> holiday with family.
            Time to make another <br /> memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show me Now
          </Button>

          <div className="row align-items-center mt-5">
            <div className="col-auto" style={{marginRight: 15}}>
              <img
                src={IconTraveler}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-2">
                {numberFormat(props.data.travelers)}
                <span className="text-gray-500 font-weight-light">
                  Travelers
                </span>
              </h6>
            </div>

            <div className="col-auto" style={{marginRight: 15}}>
              <img
                src={IconTreasure}
                alt={`${props.data.treasures} Treasure`}
              />
              <h6 className="mt-2">
                {numberFormat(props.data.treasures)}
                <span className="text-gray-500 font-weight-light">
                  Treasure
                </span>
              </h6>
            </div>

            <div className="col-auto" style={{marginRight: 50}}>
              <img src={IconCities} alt={`${props.data.cities} Cities`} />
              <h6 className="mt-2">
                {numberFormat(props.data.cities)}
                <span className="text-gray-500 font-weight-light">Cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6 pl-5">
          <div style={{width: 520, height:410}}>
            <img
              src={ImageHero}
              alt="Room with couche" className="img-fluid position-absolute"
              style={{margin :'-30px 0 0 -30px' , zIndex:1}}
            />

            <img
              src={ImageFrame}
              alt="Room with couche Frame" className="img-fluid position-absolute"
              style={{margin :'0 -15px -15px 0' , zIndex:0}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
