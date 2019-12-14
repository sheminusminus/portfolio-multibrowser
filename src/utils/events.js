export const makeDispatchPreviewXrEvent = setHideApp => (evt) => {
  evt.preventDefault();
  setHideApp(true);
  window.xrSessionSupported = false;
  window.dispatchEvent(window.prepXrEvent);
};
