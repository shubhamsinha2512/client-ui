import PropTypes from "prop-types";
import ClientCard from "./ClientCard";
import { useDispatch } from "react-redux";
import { fetchClientsById } from "../../redux/client/client.slice";

function ClientsGrid({ clients, ...props }) {
  const dispatch = useDispatch();

  const handleClientSelect = (clientId) => {
    dispatch(fetchClientsById(clientId));
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {clients.map((client) => (
        <ClientCard
          key={client.id}
          client={client}
          onClick={() => handleClientSelect(client.id)}
          {...props}
        />
      ))}
    </div>
  );
}

ClientsGrid.propTypes = {
  clients: PropTypes.array,
};

export default ClientsGrid;
