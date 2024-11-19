import React from "react";
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import DataFetcher from "./components/DataFetcher";

const App = () => (
    <div>
        <h1>React Forms and Data Fetching</h1>
        <ControlledForm />
        <UncontrolledForm />
        <DataFetcher />
    </div>
);

export default App;
