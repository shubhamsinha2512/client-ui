import { useFormik } from "formik";
import { forwardRef, useRef, useImperativeHandle, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import Input from "./Input";
import { isEmpty } from "../common/utils/utill";
import {
  deleteClientsById,
  saveClient,
  setActiveClient,
  updateClientsById,
} from "../redux/client/client.slice";
import Button from "./Button";

const ClientModal = forwardRef(function (props, ref) {
  const dailogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dailogRef.current.showModal();
      },
      close() {
        dailogRef.current.close();
      },
    };
  });

  const activeClient = useSelector((state) => state.clients.activeClient);

  useEffect(() => {
    if (!isEmpty(activeClient)) {
      dailogRef.current.showModal();
    } else {
      dailogRef.current.close();
    }
  }, [activeClient]);

  return (
    <dialog
      ref={dailogRef}
      className="fixed inset-0 z-10 w-screen overflow-y-auto rounded-lg"
    >
      {!isEmpty(activeClient) && (
        <>
          <div className="flex min-h-full items-start justify-center p-4 text-center bg-gray-100 py-4">
            <h2 className="text-4xl font-extrabold dark:text-white">
              {activeClient.name || "New Company Details"}
            </h2>
          </div>
          <div className="flex min-h-full items-end justify-center mt-4 p-4">
            <ModalForm activeClient={activeClient} />
          </div>
        </>
      )}
    </dialog>
  );
});

function ModalForm({ activeClient, ...props }) {
  const creatingNew = !activeClient.id ? true : false;
  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      ...activeClient,
    },
    validate,
    onSubmit: (values) => {
      if (isEmpty(values)) return;

      if (creatingNew) {
        delete values.id; //Double check for cleaning up
        handleSave(values);
      } else {
        handleUpdate(values);
      }
    },
    enableReinitialize: true,
  });

  const inpitFields = Object.entries(formik.values);

  const handleSave = (values) => {
    dispatch(saveClient(values));
  };

  const handleUpdate = (values) => {
    dispatch(updateClientsById(values));
  };

  const handleDelete = (values) => {
    const id = values?.id;
    dispatch(deleteClientsById(id));
  };

  const handleClose = () => {
    dispatch(setActiveClient({}));
  };
  return (
    <form onSubmit={formik.handleSubmit} {...props}>
      {/* Body */}
      <div className="text-left grid gap-6 mb-6 md:grid-cols-3">
        {inpitFields &&
          inpitFields.length > 0 &&
          inpitFields.map(([key], index) => {
            return (
              <div key={index}>
                <Input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  key={key}
                  id={key}
                  name={key}
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[key]}
                  disabled={key === "id"}
                />
              </div>
            );
          })}
      </div>
      {/* Footer */}
      <div className="flex min-h-full items-end justify-center mt-4 p-4">
        <Button color={"white"} label={"Close"} onClick={handleClose} />
        {!creatingNew && (
          <Button
            color={"red"}
            label={"Delete"}
            onClick={() => handleDelete(formik.values)}
          />
        )}
        <Button
          color={"blue"}
          label={"Save"}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        />
      </div>
    </form>
  );
}

ModalForm.propTypes = {
  activeClient: PropTypes.object.isRequired,
};

ClientModal.displayName = "ClientModal";
export default ClientModal;
