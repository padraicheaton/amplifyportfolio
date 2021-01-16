import './projectsPage.css'

import Project from './components/project';

const ProjectsPage = () => {
    return(
        <div id = "projectsPageID" className="page projectsPage">
            <div className="title">
                <h2>Projects</h2>
            </div>
            <div className="projectsContainer">
                <div className="slide">
                    <Project title="Deadline" imgUrl="https://padraicheaton.github.io/portfolio/static/media/deadline.da848ee8.png" desc="A digital game made using the Unity game engine, created for Introduction to Computer Game Design in my third semester at UTS. Voted best in subject for Summer 2020 in the UTS Games Exhibition. Use the newly found very useful (and not dangerous) side effects of coffee to race across the city and hand in your assignment in this new take on the puzzle platformer genre"/>
                </div>
                <div className="slide">
                    <Project title="Jason Assistant" imgUrl="https://padraicheaton.github.io/portfolio/static/media/jasonassistant.43f50d9d.JPG" desc="An online assistant I created in my spare time, integrated with Telegram (to send and recieve messages), IFTTT (to control my bedroom lights), all running on a Raspberry Pi. Click to see the github page where I have keep an up-to-date list of this assistant's functionality" />
                </div>
                <div className="slide">
                    <Project title="Shapeshifter" imgUrl="https://padraicheaton.github.io/portfolio/static/media/shapeshifter.b543ab96.png" desc="A board game made using Tabletopia, created for Introduction to Computer Game Design. Exhibited in the UTS Games Exhibition. Deceive your friends or work together to repair the ship in this fast-paced game for survival "/>
                </div>
                <div className="slide">
                    <Project title="Ms. Pac-Man Recreation" imgUrl="https://padraicheaton.github.io/portfolio/static/media/mspacman.b0202b9c.png" desc="A digital game made using the Unity game engine, created for Introduction to Computer Game Development in my second semester at UTS. This was my first time ever putting together a serious game project, and I am very happy with how it turned out. Click to see the itch.io page for a more in-depth explanation and to play the game!"/>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;