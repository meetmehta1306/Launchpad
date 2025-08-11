import React from "react";
import "./LogoSlider.css";
import { Icon } from "@iconify/react";

function LogoSlider() {
  return (
    <div className="slider">
      <div className="logo-track">
        <div className="logo-box">
          <Icon icon="logos:netflix" className="logo-icon" />
        </div>
        <div className="logo-box">
          <Icon icon="logos:airbnb" className="logo-icon" />
        </div>
        <div className="logo-box">
          <Icon icon="logos:behance" className="logo-icon" />
        </div>
        <div className="logo-box">
          <Icon icon="logos:bitrise" className="logo-icon" />
        </div>
        <div className="logo-box">
          <Icon icon="logos:envato" className="logo-icon" />
        </div>
        <div className="logo-box">
          <Icon icon="logos:webflow" className="logo-icon" />
        </div>
        <div className="logo-box">
          <Icon icon="logos:wordpress" className="logo-icon" />
        </div>
        {/* Duplicate logos for seamless sliding */}
        <div className="logo-box">
          <Icon icon="logos:netflix" className="logo-icon" />
        </div>
        <div className="logo-box">
          <Icon icon="logos:airbnb" className="logo-icon" />
        </div>
        <div className="logo-box">
          <Icon icon="logos:behance" className="logo-icon" />
        </div>
        <div className="logo-box">
          <Icon icon="logos:bitrise" className="logo-icon" />
        </div>
        <div className="logo-box">
          <Icon icon="logos:envato" className="logo-icon" />
        </div>
        <div className="logo-box">
          <Icon icon="logos:webflow" className="logo-icon" />
        </div>
        <div className="logo-box">
          <Icon icon="logos:wordpress" className="logo-icon" />
        </div>
      </div>
    </div>
  );
}

export default LogoSlider;


