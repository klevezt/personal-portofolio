import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import { Toolbar } from "@mui/material";
import BackgroundAnimation from "./components/UI/Animations/BackgroundAnimation";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer/Footer";
import Content from "./components/Layout/Content/Content";

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: {
      main: "#ff9800",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <BackgroundAnimation />
        <Header/>
        <Content />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
