export const logout = () => {
  localStorage.removeItem("spotivisualizer_access_token");
  localStorage.removeItem("spotivisualizer_refresh_token");
};
