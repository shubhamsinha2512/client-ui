import { useFormik } from "formik";
import { forwardRef, useRef, useImperativeHandle, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import { isEmpty } from "../common/utils/utill";
import {
  deleteClientsById,
  saveClient,
  setActiveClient,
  updateClientsById,
} from "../redux/client/client.slice";

const ResultModal = forwardRef(function (props, ref) {
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
      <div className="flex min-h-full items-start justify-center p-4 text-center bg-gray-100 py-4">
        <h2 className="text-4xl font-extrabold dark:text-white">
          {activeClient.name || "New Company Details"}
        </h2>
      </div>
      <div className="flex min-h-full items-end justify-center mt-4 p-4">
        <ModalForm activeClient={activeClient} />
      </div>
    </dialog>
  );
});

function ModalForm({ activeClient, ...props }) {
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
      if (!values.id) {
        delete values.id;
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
    <form onSubmit={formik.handleSubmit}>
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
      <div className="flex min-h-full items-end justify-center mt-4 p-4">
        <button
          onClick={handleClose}
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Close
        </button>
        <button
          onClick={() => handleDelete(formik.values)}
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete
        </button>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Save
        </button>
      </div>
    </form>
  );
}

ResultModal.displayName = "ResultModal";
export default ResultModal;
