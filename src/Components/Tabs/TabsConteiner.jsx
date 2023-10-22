import React from "react";
import { Outlet } from "react-router-dom";
import { Tabs } from "./Tabs";

export const TabsConteiner = () => {
  return (
    <div>
      <Tabs />
      <Outlet />
    </div>
  );
};
