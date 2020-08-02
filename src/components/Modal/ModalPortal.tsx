import ReactDOM from 'react-dom';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function ModalPortal({ children }: Props): JSX.Element {
  const isBrowser = typeof window !== 'undefined';

  if (!isBrowser) {
    return null;
  }
  const portal = document.querySelector('#modals-container');
  console.log(portal);
  return ReactDOM.createPortal(children, portal);
}

export default ModalPortal;
