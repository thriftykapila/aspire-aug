import React, { useEffect, useState } from "react";
import styles from "./carousel.module.css";
import Logo from "../assets/Logo-2.svg";
import Visa from "../assets/VisaLogo.svg";
import Eye from "../assets/remove_red_eye-24px.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { getAccountData } from "../features/account/accountSelector";
import { setSlide } from "../features/account/accountSlice";

const CardCarousel = () => {
  const dispatch = useDispatch();
  const accountData = useSelector(getAccountData);

  const handleSelect = (currentSlide:any) => {
    dispatch(setSlide(currentSlide));
  };

  const [showCardNumber, setShowCardNumber] = useState(false);
  const CardRender = (displayName, cardNumber, expiryDate, freeze) => {
    const handleOnClickShowNumber = () => {
      setShowCardNumber((prevState) => !prevState);
    };
    const last4Digit = cardNumber?.slice(12, 16);
    return (
      <div className={styles["container"]}>
        <div className={styles["card-number-container"]}>
          <div
            className={styles["show-card-number"]}
            onClick={handleOnClickShowNumber}
          >
            <span>
              <img src={Eye} alt="red eye" className={styles["red-eye"]}></img>
            </span>
            <span>
              {showCardNumber ? `Hide card number` : `Show card number`}
            </span>
          </div>
        </div>
        <div
          className={`${styles["carousel-card"]} ${
            freeze ? styles["card-freeze"] : ""
          }`}
        >
          <div className={styles["carousel-logo"]}>
            <img src={Logo} className={styles["logo-size"]} alt="aspire"></img>
          </div>
          <div className={styles["card-detail"]}>
            <p className={styles["card-member-name"]}>{displayName}</p>
            <p className={styles["card-number"]}>
              {showCardNumber ? cardNumber : `.... .... .... ${last4Digit}`}
            </p>
            <div className={styles["card-other-detail"]}>
              <p>Thru: {expiryDate} </p>
              <p>
                CVV: <span className={styles["card-cvv"]}></span> ***
              </p>
            </div>
          </div>
          <div className={styles["carousel-logo-visa"]}>
            <img src={Visa} className={styles["logo-size"]} alt="visa"></img>
          </div>
        </div>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: handleSelect,
  };

  return (
    <div className="d-flex justify-content">
      {accountData.length === 0 && (
        <div className="d-flex flex-column justify-content-center align-items-center gap-2">
          <div className="text text-warning mt-4 fw-bold fs-3">Oh No!</div>
          <div className="text text-white fs-4">No card found !!!</div>
        </div>
      )}
      {accountData.length > 1 ? (
        <Slider {...settings} className={styles["carousel-container"]}>
          {accountData?.map((card) => {
            return CardRender(
              card?.cardDisplayName,
              card?.cardNumber,
              card?.cardExpiry,
              card?.freeze
            );
          })}
        </Slider>
      ) : (
        <div>
          {accountData?.map((card) => {
            return CardRender(
              card?.cardDisplayName,
              card?.cardNumber,
              card?.cardExpiry,
              card?.freeze
            );
          })}
        </div>
      )}
    </div>
  );
};
export default CardCarousel;
