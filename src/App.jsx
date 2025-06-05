import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Board } from "./pages/Board/Board";
import { Backlog } from "./pages/Backlog/Backlog";

const navStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
  marginBottom: "1rem",
  textTransform: "uppercase",
  fontWeight: "bold",
};

const linkStyle = {
  textDecoration: "none",
  color: "black",
  fontSize: "150%",
  backgroundColor: "#E2E2E2",
  padding: ".5rem",
  borderRadius: ".4rem",
};

function App() {
  return (
    <BrowserRouter>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/backlog" style={linkStyle}>
          Backlog
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/backlog" element={<Backlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
