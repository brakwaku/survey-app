import { Link } from "react-router-dom";
import SurveyLink from "../components/SurveyLink";

const NotFoundScreen = () => {
    return (
        <div className="container">
      <div className="pt-5" style={{ minHeight: 80 + "vh" }}>
        <h1>Page Not Found</h1>
        <p>
          The page you are trying to reach does not exist. Go <Link to='/'>Home</Link>
        </p>
      </div>
      <SurveyLink buttonName="Page Edit Suggestion" />
    </div>
    )
}

export default NotFoundScreen
