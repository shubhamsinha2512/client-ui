import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchClients, setSearchResults } from "../redux/client/client.slice";
import PropTypes from "prop-types";
import Avatar from "boring-avatars";
import { generateRandomColorArray } from "../common/utils/utill";

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
      }, 300);
    }
  };

  const handleBlur = () => {
    if (!searchRef.current.value) {
      dispatch(setSearchResults([]));
    }
  };

  return (
    <div className="mt-4 py-4">
      <div className="flex p-4 bg-gray-50 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-700 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600">
        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
        </span>
        <input
          className="block w-full p-4 dark:placeholder-gray-100 rounded-md"
          size="lg"
          ref={searchRef}
          type="text"
          placeholder="Start typing to search.."
          onChange={handleTyping}
          onBlur={handleBlur}
          onFocus={handleTyping}
        />
      </div>
      <SearchResults searchResult={searchResult} />
    </div>
  );
}

function SearchResults({ searchResult }) {
  const results = searchResult || [];

  return (
    <div className="search-result mt-4 px-4">
      <ul role="list" className="divide-y divide-gray-100">
        {results.map((result) => (
          <SearchResultItem client={result} key={result.id} />
        ))}
      </ul>
    </div>
  );
}

SearchResults.propTypes = {
  searchResult: [],
};

function SearchResultItem({ client }) {
  const colors = generateRandomColorArray(5);
  return (
    <li key={client.email} className="flex justify-between gap-x-6 py-3">
      <div className="flex min-w-0 gap-x-4">
        <Avatar
          size={60}
          name="Maria Mitchell"
          variant="marble"
          colors={colors}
        />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {client.name}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {client.category}, {client.subCategory}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            Registration Date: {client.registrationDate}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900">{client.role}</p>
        <p className="mt-1 text-xs leading-5 text-gray-500">
          {client.state}, {client.country}
        </p>
      </div>
    </li>
  );
}

SearchResultItem.propTypes = {
  client: {
    id: PropTypes.number,
    score: PropTypes.number,
    name: PropTypes.string,
    Roc: PropTypes.string,
    companyStatus: PropTypes.string,
    companyActivity: PropTypes.string,
    registrationDate: PropTypes.string,
    category: PropTypes.string,
    subCategory: PropTypes.string,
    companyClass: PropTypes.string,
    state: PropTypes.string,
    country: PropTypes.string,
    email: PropTypes.string,
    cin: PropTypes.string,
    pin: PropTypes.string,
    address: PropTypes.string,
    link: PropTypes.string,
  },
};

export default SearchHead;
