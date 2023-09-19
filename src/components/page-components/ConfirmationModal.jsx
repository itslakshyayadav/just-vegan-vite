import BaseModal from "@/components/base-components/BaseModal";
import BaseButton from "@/components/base-components/BaseButton";
import BaseIcon from "@/components/base-components/BaseIcon";

import { useState } from "react";

export default function ConfirmationModal({ children, modalText, onProceed }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={openModal}>{children}</div>

      {isOpen && (
        <BaseModal>
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <BaseIcon
                iconName="exclamation-circle"
                className="h-6 w-6 text-red-600"
              ></BaseIcon>
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  {modalText ? modalText : "Are you sure to proceed"}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 bg-gray-50 px-4 py-3 sm:flex sm:flex-row sm:px-6">
            <BaseButton type="button" onClick={closeModal} variant="neutral">
              Cancel
            </BaseButton>
            <BaseButton
              type="button"
              onClick={() => {
                onProceed();
                closeModal();
              }}
              variant="danger"
            >
              Proceed
            </BaseButton>
          </div>
        </BaseModal>
      )}
    </>
  );
}
