import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import NewTicket from "./page/add-new-ticket/NewTicket";
import Dashboard from "./page/dashboard/Dashboard";
import Entry from "./page/entry/Entry";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        <NewTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
