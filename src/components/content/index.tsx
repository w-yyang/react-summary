import React from "react";

import { RouteList } from "../../routes";
import './content.less';

export const AppContent = () => {
  return (
    <div className="ctx-container">
      <RouteList />
    </div>
  );
};