import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import NewTicket from "./page/add-new-ticket/NewTicket";
import Dashboard from "./page/dashboard/Dashboard";
import Entry from "./page/entry/Entry";
import TicketList from "./page/ticket-lising/TicketList";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <NewTicket /> */}
        <TicketList />
      </DefaultLayout>
    </div>
  );
}

export default App;
