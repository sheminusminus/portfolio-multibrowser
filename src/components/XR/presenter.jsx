import React from 'react';
import { createPortal } from 'react-dom';

import { useVrKeysPressedHook } from 'hooks';

import { classie } from 'utils';

import styles from './styles.module.css';

const xrRoot = document.getElementById('xrRoot');


const XR = ({ setHideApp }) => {
  const [addedListeners, setAddedListeners] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(true);
  const [forceVr, setForceVr] = React.useState(false);

  const pressingVRef = React.useRef(false);
  const pressingRRef = React.useRef(false);

  useVrKeysPressedHook({
    addedListeners,
    forceVr,
    pressingRRef,
    pressingVRef,
    setAddedListeners,
    setForceVr,
  });

  const swapApps = (hasDevice = false) => {
    if (hasDevice || forceVr) {
      setHideApp(true);
      setIsHidden(false);
      window.xrSessionSupported = Boolean(navigator.xr && navigator.xr.isSessionSupported('inline'));
      window.dispatchEvent(window.runXrEvent);
    }
  };

  if (isHidden) {
    if (navigator.xr) {
      navigator.xr.requestDevice().then(() => swapApps(true)).finally(swapApps);
    } else if (forceVr) {
      swapApps();
    }
  }

  const xrPrompt = (
    <div
      className={classie({
        [styles.xr]: true,
        hide: isHidden,
      })}
    >
      <button className={styles.xrPrompt}>
        <h4>Exit XR</h4>
      </button>
    </div>
  );

  return createPortal(xrPrompt, xrRoot);
};

export default XR;
