import BaseModal from "@/components/base-components/BaseModal";
import BaseButton from "@/components/base-components/BaseButton";
import { useState } from "react";

export default function ConfirmationModal({ children, onProceed }) {
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
        <BaseModal modalText="Are you sure, you want to proceed?">
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
        </BaseModal>
      )}
    </>
  );
}
