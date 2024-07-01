import PropTypes from "prop-types";
import ClientsGrid from "./ClientsGrid";
import { isEmpty } from "../../common/utils/utill";
import ClientForm from "./ClientForm";

function ClientsView({ clients, activeClient, ...props }) {
  return (
    <>
      <div className="flex items-center justify-between py-2 mb-4">
        <h2 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          {activeClient.name || "Company Details"}
        </h2>
      </div>
      {isEmpty(activeClient) ? (
        <ClientsGrid clients={clients} {...props} />
      ) : (
        <ClientForm activeClient={activeClient} />
      )}
    </>
  );
}

ClientsView.propTypes = {
  clients: PropTypes.array,
  activeClient: PropTypes.object,
};

export default ClientsView;
