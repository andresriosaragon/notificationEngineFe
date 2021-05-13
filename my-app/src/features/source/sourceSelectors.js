const sourceSelector = (state) => ({
  ...state.source,
  loading: state.source.status === "loading",
});

export { sourceSelector };
