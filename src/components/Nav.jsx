import { useRef } from "react";
import ClientModal from "./Clients/ClientModal";
import { useDispatch } from "react-redux";
import { setActiveClient } from "../redux/client/client.slice";
import { newEmptyClient } from "../redux/client/client.initialState";
import Button from "./Button";

function Nav() {
  let dailogRef = useRef();
  const dispatch = useDispatch();

  const handleAddClient = () => {
    dispatch(setActiveClient(newEmptyClient));
  };

  return (
    <>
      <ClientModal ref={dailogRef} />
      <nav className="flex bg-gray-50 justify-between w-full border-b-4 p-5">
        <div className="flex max-w-screen-xl p-2">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Client - Web Crawler
            </span>
          </a>
        </div>
        <div>
          {/* <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleAddClient}
          >
            Create New Client
          </button> */}
          <Button
            label={"Create New Client"}
            onClick={handleAddClient}
            color="blue"
          />
        </div>
      </nav>
    </>
  );
}

export default Nav;
