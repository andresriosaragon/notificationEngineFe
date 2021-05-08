import { defaultTheme } from "../helpers/makeThemedStyles";

const genericInputStyle = {
  marginLeft: 20,
  marginRight: 20,
  paddingTop: "3%",
  paddingBottom: "3%",
  [`@media (max-width: ${defaultTheme.breakpoints.md}px)`]: {
    marginBottom: 20,
  },
};

const genericLabelStyle = {
  marginBottom: 5,
};
export { genericInputStyle, genericLabelStyle };
