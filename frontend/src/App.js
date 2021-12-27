import "./App.css";
import MapView from "./views/MapView";
import ReportDetailView from "./views/ReportDetailView";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<MapView />} />
        <Route path="/report/:id/:locationId" element={<ReportDetailView />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
