import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./Screens/HomeScreen";
import SurveyScreen from "./Screens/SurveyScreen";
import SurveySummaryScreen from "./Screens/SurveySummaryScreen";
import ThankyouScreen from "./Screens/ThankyouScreen";
import GenealogyScreen from "./Screens/GenealogyScreen";
import DnaScreen from "./Screens/DnaScreen";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/survey" element={<SurveyScreen />} />
          <Route path="/survey-summary" element={<SurveySummaryScreen />} />
          <Route path="/thank-you" element={<ThankyouScreen />} />
          <Route path="/genealogy" element={<GenealogyScreen />} />
          <Route path="/dna" element={<DnaScreen />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
