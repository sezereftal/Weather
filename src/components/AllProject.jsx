import React from "react";
import SearchHeader from "./SearchHeader";
import CurrentWeater from "./CurrentWeater";
import WeeklyWeater from "./WeeklyWeater";

function AllProject() {
  return (
    <div className="All-project">
      <SearchHeader />
      <CurrentWeater />
      <WeeklyWeater />
    </div>
  );
}

export default AllProject;
