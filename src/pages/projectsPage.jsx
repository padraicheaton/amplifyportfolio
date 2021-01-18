import './projectsPage.css'
import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listProjects } from '../graphql/queries';
import {createProject} from '../graphql/mutations';

import Project from './components/project';

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [focusProj, setFocusProj] = useState({
        project: {},
        index: null
    });
    const [anim, setAnim] = useState(0);

    useEffect(() => {
        fetchProjects();
    }, []);

    async function DebugAddProj() {
        // console.log("DEBUG ADDING PROJECT");

        // const proj = {
        //     id: 0,
        //     name: "second placeholder",
        //     description: "placeholder description",
        //     imageUrl: "https://padraicheaton.github.io/portfolio/static/media/deadline.da848ee8.png",
        // }

        // await API.graphql(graphqlOperation(createProject, {input: proj}));
    }

    async function fetchProjects() {
        try {
            const projectData = await API.graphql(graphqlOperation(listProjects));
            const foundProjects = projectData.data.listProjects.items;

            foundProjects.sort((a, b) => {
                return a.id - b.id;
            })

            setProjects(foundProjects);

            if(foundProjects.length > 0)
                setFocusProj({
                    project: foundProjects[0],
                    index: 0
                });
        }

        catch {
            console.log("Error fetching projects");
        }
    }

    function nextFocusedProj() {
        if (projects.length === 0)
            return;

        var i = focusProj.index;
        var toIndex = i < projects.length-1 ? i+1 : 0;

        setFocusProj({
            project: projects[toIndex],
            index: toIndex
        });

        setAnim(1);
    }

    function prevFocusedProj() {
        if (projects.length === 0)
            return;
        
        var i = focusProj.index;
        var toIndex = i > 0 ? i-1 : projects.length-1;

        setFocusProj({
            project: projects[toIndex],
            index: toIndex
        });

        setAnim(1);
    }

    return(
        <div id = "projectsPageID" className="page projectsPage">
            <div className="title">
                <h2>Projects</h2>
            </div>

            <div className="container">
                {focusProj.project != null &&
                    <Project title={focusProj.project.name} imgUrl={focusProj.project.imageUrl} desc={focusProj.project.description} anim={anim} animFinished={()=>{setAnim(0)}}/>
                }
                <div className="btnContainer">
                    <div className="customBtn rightBorder" onClick={prevFocusedProj}>Prev</div>
                    <div className="customBtn leftBorder" onClick={nextFocusedProj}>Next</div>
                </div>
            </div>
            
        </div>
    );
}

export default ProjectsPage;