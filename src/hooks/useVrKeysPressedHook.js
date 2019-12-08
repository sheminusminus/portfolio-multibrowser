import React from 'react';

import { Keys } from 'appConstants';

const useVrKeysPressedHook = (options = {}) => {
  const {
    addedListeners,
    forceVr,
    pressingRRef,
    pressingVRef,
    setAddedListeners,
    setForceVr,
  } = options;

  const testForceVr = React.useCallback((pressingV, pressingR) => {
    const nextForceVr = Boolean(pressingV && pressingR);
    if (nextForceVr !== forceVr) {
      setForceVr(nextForceVr);
    }
  }, [forceVr, setForceVr]);

  React.useEffect(() => {
    if (!addedListeners) {
      setAddedListeners(true);

      document.addEventListener('keydown', (evt) => {
        const { key } = evt;

        if (key === Keys.V) {
          pressingVRef.current = true;
        } else if (key === Keys.R) {
          pressingRRef.current = true;
        }

        testForceVr(pressingVRef.current, pressingRRef.current);
      });

      document.addEventListener('keyup', (evt) => {
        const { key } = evt;

        if (key === Keys.V) {
          pressingVRef.current = false;
        } else if (key === Keys.R) {
          pressingRRef.current = false;
        }

        testForceVr(pressingVRef.current, pressingRRef.current);
      });
    }
  }, [forceVr, addedListeners, setAddedListeners, testForceVr, pressingVRef, pressingRRef]);
};

export default useVrKeysPressedHook;
