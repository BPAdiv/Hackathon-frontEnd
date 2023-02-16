import React, {useContext} from "react";

import AddTabel from "../components/AddTabel";
import ExcelTable from "../components/ExcelTable";
import AddToTable from "./AddToTable";
import NavBar from "../components/NavBar";

function ShowAndEditTabel(props) {
  return (
    <div>
      <NavBar />

      <AddTabel />
      <ExcelTable />
      <AddToTable />
    </div>
  );
}

export default ShowAndEditTabel;
