import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <h2>About This Project</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, inventore iusto! Quis quisquam quo cupiditate iure veritatis deserunt maiores pariatur.</p>
      <Link to='/'>
        <p style={{paddingTop:24}}>Back to home</p>
      </Link>
    </Card>
  )
}

export default AboutPage;
