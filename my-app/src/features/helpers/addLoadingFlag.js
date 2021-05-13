const addLoadingFlag = (mainObject) => ({
  ...mainObject,
  loading: mainObject.status === "loading",
});

export { addLoadingFlag };
