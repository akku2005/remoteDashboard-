import React from "react";
import PendingInfoBox from "./PendingInfoBox"; // Ensure this is the correct import path

const MobilePendingInfoSection = () => {
  return (
    <div className="flex flex-row  gap-3 w-full">
      <PendingInfoBox count={2} label="Pending Project" />
      <PendingInfoBox count={0} label="Account Change" />
    </div>
  );
};

export default MobilePendingInfoSection;
