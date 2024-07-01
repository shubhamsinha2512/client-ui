import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ClientsView from "./components/Clients/ClientsView";
import Nav from "./components/Nav";
import SearchHead from "./components/SearchHead/SearchHead";
import { useEffect } from "react";
import { fetchClients } from "./redux/client/client.slice";
import { isEmpty } from "./common/utils/utill";

function App() {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients.clients);
  const activeClient = useSelector((state) => state.clients.activeClient);

  useEffect(() => {
    if (isEmpty(activeClient)) {
      dispatch(fetchClients({}));
    }
  }, [activeClient]);

  return (
    <>
      <div className="app capitalize">
        <Nav />
        <main className="m-5 flex gap-x-8 h-parent-100">
          <aside className="w-1/4 max-h-screen overflow-y-scroll border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <SearchHead />
          </aside>
          <section className="w-3/4 max-h-screen overflow-y-scroll p-4 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <ClientsView clients={clients} activeClient={activeClient} />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
