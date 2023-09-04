import React from "react";
import { Outlet } from "react-router-dom";
// import { PersonalDates } from "./pages/PersonalDates";
// import { PersonalHistory } from "./pages/PersonalHistory";
// import { PersonalPrescriptions } from "./pages/PersonalPrescriptions";
// import { Personalformation } from "./pages/Personalformation";
import { Tabs } from "./Tabs";

export const TabsConteiner = () => {
  return (
    <div>
      <Tabs />
      <Outlet />
      {/* <Routes>
        <Route path="/" element={<Personalformation />} />
        <Route path="/medical/dates" element={<PersonalDates />} />
        <Route
          path="/medical/prescriptions"
          element={<PersonalPrescriptions />}
        />
        <Route path="/medical/history" element={<PersonalHistory />} />
        <Route path="/*" element={<div>Error 404 Not Found Page</div>} />
      </Routes> */}
    </div>
  );
};
