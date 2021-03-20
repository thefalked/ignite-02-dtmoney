import Modal from "react-modal";
import { Container } from "./style";

Modal.setAppElement("#root");

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <Container>
        <h2>
          New Transaction
        </h2>
      </Container>
    </Modal>
  )
}
