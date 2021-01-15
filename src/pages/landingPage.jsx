import './landingPage.css';

//Images
import ProfileImage from '../imgs/profile.jpg';

const LandingPage = () => {
    return(
        <div id = "landingPageID" className="page landingPage animate">
            <img src={ProfileImage} alt="Profile" />

            <div id="nameCard" className="nameCard">
                <h3>PADRAIC HEATON</h3>
            </div>
        </div>
    );
}

export default LandingPage;