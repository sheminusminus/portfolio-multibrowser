import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import { useVrKeysPressedHook } from 'hooks';

import { classie } from 'utils';

import styles from './styles.module.css';

const xrRoot = document.getElementById('xrRoot');


const navigatorHasXr = Boolean(
  navigator.xr
  && navigator.xr.requestDevice,
);

const XR = ({ setHideApp }) => {
  const [addedListeners, setAddedListeners] = React.useState(false);
  const [forceVr, setForceVr] = React.useState(false);

  const isHiddenRef = React.useRef(true);
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

  const swapApps = React.useCallback((hasDevice = false) => {
    if (hasDevice || forceVr) {
      if (isHiddenRef.current) {
        setHideApp(true);
        isHiddenRef.current = false;
        window.xrSessionSupported = Boolean(
          navigatorHasXr
          && navigator.xr.isSessionSupported('inline'),
        );
        window.dispatchEvent(window.runXrEvent);
      } else {
        setHideApp(false);
        isHiddenRef.current = true;
      }
    }
  }, [isHiddenRef, forceVr, setHideApp]);

  if (isHiddenRef.current) {
    if (navigatorHasXr) {
      navigator.xr.requestDevice().then(() => swapApps(true)).finally(swapApps);
    } else if (forceVr) {
      swapApps();
    }
  }

  React.useEffect(() => {
    const prepXrHandler = () => {
      if (isHiddenRef.current) {
        setForceVr(true);
      }
    };

    window.addEventListener('prepxr', prepXrHandler);

    return () => {
      window.removeEventListener('prepxr', null);
    };
  }, [isHiddenRef, setForceVr]);

  const xrPrompt = (
    <div
      className={classie({
        [styles.xr]: true,
        hide: true,
      })}
    >
      <button
        className={styles.xrPrompt}
      >
        <h4>Exit XR</h4>
      </button>
    </div>
  );

  return createPortal(xrPrompt, xrRoot);
};

XR.propTypes = {
  setHideApp: PropTypes.func.isRequired,
};

export default XR;
