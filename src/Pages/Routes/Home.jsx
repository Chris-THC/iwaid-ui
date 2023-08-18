import React from "react";
import { showCarouselComponent, showFooter } from "../../Components/Initation/Initation";

export const Home = () => {
  return (
    <div>
        {showCarouselComponent()}
        {showFooter()}
    </div>
  );
};

