import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { fetchClientsById } from "../../redux/client/client.slice";
import SearchResultItem from "./SearchItem";

function SearchResults({ searchResult }) {
  const results = searchResult || [];
  const dispatch = useDispatch();

  const handleClientSelect = (clientId) => {
    dispatch(fetchClientsById(clientId));
  };

  return (
    <>
      <div className="search-result mt-4 px-4">
        <ul role="list" className="divide-y divide-gray-100">
          {results.map((result) => (
            <SearchResultItem
              onClick={() => handleClientSelect(result.id)}
              client={result}
              key={result.id}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

SearchResults.propTypes = {
  searchResult: PropTypes.array,
};

export default SearchResults;
