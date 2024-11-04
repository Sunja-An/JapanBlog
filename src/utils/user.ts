import Cookies from "js-cookie";

export const useIfAccess = () => {
  if (Cookies.get("access-token")) {
    return true;
  } else {
    return false;
  }
};
