import PropTypes from "prop-types";
import Button from "../Button";
import placeHolderImg1 from "../../common/icons/company-placeholder-1.jpg";
import placeHolderImg2 from "../../common/icons/company-placeholder-2.jpg";
import placeHolderImg3 from "../../common/icons/company-placeholder-3.jpg";
import placeHolderImg4 from "../../common/icons/company-placeholder-4.jpg";

const imageUrls = [
  placeHolderImg1,
  placeHolderImg2,
  placeHolderImg3,
  placeHolderImg4,
];

function ClientCard({ client, ...props }) {
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  const randomImage = imageUrls[randomIndex];

  return (
    <div className="p-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <img className="rounded-t-lg object-contain" src={randomImage} alt="" />
      <div className="p-1">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {client.name?.length < 15
            ? client.name
            : `${client.name?.substring(0, 30)}..`}
        </h5>
        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
          Registration Date: {client.registrationDate}
        </p>
        <Button label={"View Details"} color="blue" {...props} />
      </div>
    </div>
  );
}

ClientCard.propTypes = {
  client: PropTypes.object,
};

export default ClientCard;
