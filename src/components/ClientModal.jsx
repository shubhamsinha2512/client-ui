import { forwardRef, useRef, useImperativeHandle } from "react";
import { useSelector } from "react-redux";

const ResultModal = forwardRef(function ({ ...props }, ref) {
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

  return (
    <dialog
      ref={dailogRef}
      className="fixed inset-0 z-10 w-screen overflow-y-auto"
    >
      <div className="flex min-h-full items-end justify-center p-4 text-center">
        <div></div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            onClick={() => {}}
          >
            Deactivate
          </button>
          <form method="dialog">
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              onClick={() => {
                dailogRef.current.close();
              }}
              data-autofocus
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
});

ResultModal.displayName = "ResultModal";
export default ResultModal;
