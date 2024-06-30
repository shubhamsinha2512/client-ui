import "./App.css";
import Nav from "./components/Nav";
import SearchHead from "./components/SearchHead";

function App() {
  return (
    <>
      <div className="p-4 mt-2 mx-2">
        <Nav />
        <main className="m-4">
          <SearchHead />
        </main>
      </div>
    </>
  );
}

export default App;
