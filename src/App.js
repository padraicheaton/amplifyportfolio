import './App.css';

import ReactFullpage from '@fullpage/react-fullpage';

//Pages
import LandingPage from './pages/landingPage';
import AboutPage from './pages/aboutPage';
import ProjectsPage from './pages/projectsPage';

function App() {

  return (
    <ReactFullpage 
    
        //Fullpage.js options
        licenseKey = '253C1471-AC944259-A28BD0E8-0AF8AD7D'
        continuousVertical = {true}
        navigation = {true}
        anchors = {['landingPage', 'aboutPage', 'projectsPage']}

        onLeave = {(origin, destination, direction) => {
          document.getElementById(origin.anchor + "ID").classList.remove("animate");
          document.getElementById(destination.anchor + "ID").classList.add("animate");
        }}
        
        //Component to render
        render = {({state, fullpageApi}) => {
          return(
            <ReactFullpage.Wrapper>
              <div className="section">
                <LandingPage />
              </div>

              <div className="section">
                <AboutPage />
              </div>

              <div className="section">
                <ProjectsPage />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}

    />
  );
}

export default App;
