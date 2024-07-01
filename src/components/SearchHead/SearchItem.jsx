import PropTypes from "prop-types";
import { generateRandomColorArray } from "../../common/utils/utill";
import Avatar from "boring-avatars";

function SearchResultItem({ client, ...props }) {
  const colors = generateRandomColorArray(3);

  return (
    <li
      key={client.email}
      className="flex justify-between gap-x-6 py-3"
      {...props}
    >
      <div className="flex min-w-0 gap-x-4 cursor-pointer">
        <Avatar
          size={60}
          name="Maria Mitchell"
          variant="marble"
          colors={colors}
        />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-600">
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
  onClick: PropTypes.func,
};

export default SearchResultItem;
