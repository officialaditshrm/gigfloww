import './App.css'
import Upbar from './components/Upbar.jsx'
import { useNavigate } from "react-router-dom"

function Landing() {
    const navigate = useNavigate()
    const handleJoinNow = () => {
        navigate("/signup")
    }

    return <section>
        <Upbar />
        <div id = "main">
            <div id = "head">
                <div id = "headcontain">
                    <div id = "mainhead">
                        <h1 id = "mainheadertext">Your Creative Gig Journey Starts Here</h1>
                    </div>
                    <div id = "abouthead">
                        <p>
                            Gigfloww is a next-generation HR consultancy that helps businesses (US , UK ) optimize their workforce by replacing traditional employees with skilled interns and entry-level professionals. By offering cost-effective hiring solutions, Gigfloww enables companies to reduce overhead while maintaining efficiency and productivity. With a streamlined approach to talent acquisition, onboarding, and management, Gigfloww ensures businesses can scale their teams flexibly without long-term commitments.
                        </p>
                    </div>
                </div>
            </div>
            <div id = "features">
                <div className = "feature">
                    <h3 className = "featurehead">Feature 1</h3>
                    <div className = "featureabout">
                        This is the description of Feature 1
                    </div>
                </div>
                <div className = "feature">
                    <h3 className = "featurehead">Feature 1</h3>
                    <div className = "featureabout">
                        This is the description of Feature 1
                    </div>
                </div>
                <div className = "feature">
                    <h3 className = "featurehead">Feature 1</h3>
                    <div className = "featureabout">
                        This is the description of Feature 1
                    </div>
                </div>
                <div className = "feature">
                    <h3 className = "featurehead">Feature 1</h3>
                    <div className = "featureabout">
                        This is the description of Feature 1
                    </div>
                </div>
                <div className = "feature">
                    <h3 className = "featurehead">Feature 1</h3>
                    <div className = "featureabout">
                        This is the description of Feature 1
                    </div>
                </div>
                <div className = "feature">
                    <h3 className = "featurehead">Feature 1</h3>
                    <div className = "featureabout">
                        This is the description of Feature 1
                    </div>
                </div>
                <div className = "feature">
                    <h3 className = "featurehead">Feature 1</h3>
                    <div className = "featureabout">
                        This is the description of Feature 1
                    </div>
                </div>
                <div className = "feature">
                    <h3 className = "featurehead">Feature 1</h3>
                    <div className = "featureabout">
                        This is the description of Feature 1
                    </div>
                </div>
                <div className = "feature">
                    <h3 className = "featurehead">Feature 1</h3>
                    <div className = "featureabout">
                        This is the description of Feature 1
                    </div>
                </div>
            </div>
            <div id = "more">
                <div id = "checkout">
                    <button id = "join" onClick = { handleJoinNow }>Join Now</button>
                </div>
                <div id = "extras">
                    No Copyrights involved.
                </div>
            </div>
        </div>
    </section>
}

export default Landing
