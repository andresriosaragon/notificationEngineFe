import { atom } from "recoil";

const userAtom = atom({
  key: "userAtom",
  default: {
    age: 10,
    name: "",
  },
});

export { userAtom };
