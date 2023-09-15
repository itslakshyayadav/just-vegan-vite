import BaseIcon from "./BaseIcon";

export default function BaseModal(props) {
  const { modalText, iconName, children } = props;

  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <BaseIcon
                      iconName="exclamation-circle"
                      className="h-6 w-6 text-red-600"
                    ></BaseIcon>
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{modalText}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-3 bg-gray-50 px-4 py-3 sm:flex sm:flex-row sm:px-6">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
