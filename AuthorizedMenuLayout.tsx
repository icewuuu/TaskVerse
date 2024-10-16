import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  CssBaseline,
} from "@mui/material";
import { Outlet } from "react-router-dom";

const AuthorizedMenuLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        fontFamily: "'Open Sans', sans-serif",
      }}
    >
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#1976d2", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            VeraPrint
          </Typography>
          <Button color="inherit" sx={{ textTransform: "none" }}>
            Menu 1
          </Button>
          <Button color="inherit" sx={{ textTransform: "none" }}>
            Menu 2
          </Button>
          <Button color="inherit" sx={{ textTransform: "none" }}>
            Menu 3
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ paddingTop: "100px" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AuthorizedMenuLayout;
