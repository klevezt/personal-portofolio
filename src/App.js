import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import { Toolbar } from "@mui/material";
import BackgroundAnimation from "./components/UI/Animations/BackgroundAnimation";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./components/Layout/Content/About";
import Home from "./components/Layout/Content/Home";
import Projects from "./components/Layout/Content/Projects";

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
        <Header />
        <Routes>
          <Route path="/personal-portofolio" element={<Home />} />
          <Route path="/personal-portofolio/about" element={<About />} />
          <Route path="/personal-portofolio/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
