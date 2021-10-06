import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/private-route/PrivateRoute";
import DefaultLayout from "./layout/DefaultLayout";
import NewTicket from "./page/add-new-ticket/NewTicket";
import Dashboard from "./page/dashboard/Dashboard";
import Entry from "./page/entry/Entry";
import TicketList from "./page/ticket-lising/TicketList";
import TicketDetails from "./page/ticket/TicketDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Entry />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/add-ticket">
            <NewTicket />
          </PrivateRoute>
          <PrivateRoute path="/tickets">
            <TicketList />
          </PrivateRoute>
          <PrivateRoute path="/ticket/:id">
            <TicketDetails />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
