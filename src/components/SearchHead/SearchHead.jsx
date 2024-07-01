import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchClients,
  setSearchResults,
} from "../../redux/client/client.slice";
import SearchResults from "./SearchResults";

function SearchHead() {
  const dispatch = useDispatch();
  const searchRef = useRef();
  const searchTimerRef = useRef();

  const searchResult = useSelector((state) => state.clients.searchResults);

  const handleTyping = () => {
    const searchTerm = searchRef.current.value;

    if (searchTerm) {
      const query = {
        q: searchTerm,
      };

      //Deboucing
      clearTimeout(searchTimerRef.current);
      searchTimerRef.current = setTimeout(() => {
        dispatch(searchClients(query));
      }, 200);
    }
  };

  const handleBlur = () => {
    if (!searchRef.current.value) {
      dispatch(setSearchResults([]));
    }
  };

  return (
    <div className="">
      <div className="flex p-4 bg-gray-50 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-700 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600">
        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          Search
        </span>
        <input
          className="block w-full p-4 dark:placeholder-gray-100 rounded-md"
          size="lg"
          ref={searchRef}
          type="text"
          placeholder="Start typing to search.."
          onChange={handleTyping}
          onBlur={handleBlur}
        />
      </div>
      <SearchResults searchResult={searchResult} />
    </div>
  );
}

export default SearchHead;
