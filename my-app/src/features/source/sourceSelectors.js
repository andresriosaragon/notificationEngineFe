const sourcesSelector = (state) => state.source.sources;
const industriesOptionsSelector = (state) => ({
  ...state.source.industries,
  options: state.source.industries.results.map(({ id, name }) => ({
    value: id,
    label: name,
  })),
});

export { sourcesSelector, industriesOptionsSelector };
