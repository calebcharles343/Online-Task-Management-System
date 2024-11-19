import { ReactNode, useContext } from "react";
import { useState } from "react";
import { cloneElement } from "react";

import { createContext } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { ModalContextProps } from "../Interfaces";

const StyledModal = styled.div`
  width: 100rem;
  max-height: 70rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--bg-color-2);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 8rem;
  transition: all 0.5s;
  overflow-y: scroll;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 99999;
  transition: all 0.5s;
`;

// Context for managing modal state
const ModalContext = createContext<ModalContextProps | undefined>(undefined);

// Modal Provider
function Modal({ children }: { children: ReactNode }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = (name: string) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ open, close, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

// Component to trigger modal opening
interface OpenProps {
  children: React.ReactElement;
  open: string;
}

function Open({ children, open: opensWindowName }: OpenProps) {
  const { open } = useContext(ModalContext)!;

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

// Component for modal window

function Window({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  const { openName, close } = useContext(ModalContext)!;
  const { ref } = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        {/* <Button onClick={close}>Close</Button> */}
        <div>{children}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

// Assign subcomponents to Modal
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
