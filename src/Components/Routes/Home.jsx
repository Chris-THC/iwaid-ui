import React from "react";
import { showCarouselComponent, showFooter } from "../Initation/Initation";

export const Home = () => {
  return (
    <div>
       {showCarouselComponent()}
       {showFooter()}
    </div>
  );
};

