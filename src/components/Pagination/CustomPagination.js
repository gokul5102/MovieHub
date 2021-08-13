import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});
const CustomPagination = ({ setPage, numberOfPages = 10 }) => {
  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <MuiThemeProvider theme={darkTheme}>
        <Pagination
          count={numberOfPages}
          onChange={(e) => handleChange(e.target.textContent)}
          hideNextButton
          hidePrevButton
          color="primary"
        />
      </MuiThemeProvider>
    </div>
  );
};

export default CustomPagination;
