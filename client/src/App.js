import React from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import HealthForm from "./components/Form/Health/HealthForm";
import MotorForm from "./components/Form/Motor&Travel/MotorTravel";
import FormTabs from "./components/FormTabs/FormTabs";
import Payment from "./components/Payment/Payment";
import Admin from "./components/Admin/Admin";

const App = () => {
  return (
    <div>
      <div className="md:ml-64">
        <Sidebar />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/healthform" component={HealthForm} />
        <Route exact path="/motorform" component={FormTabs} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/admin" component={Admin} />
      </div>
    </div>
  );
};

export default App;
