import Project from "./Project";
import { Octokit } from "octokit";
import { useState, useEffect } from "react";

function Work() {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const octokit = new Octokit({
            auth: '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'
        });
        
        octokit.request('GET /users/{username}/repos', {
            username: 'andreaelve'
        })
            .then(res => res.data)
            .then(data => {
                console.log(data[0])
                const usefulProjectData = data.map((el, i) => {
                    return { 
                        github: el.html_url, 
                        title: el.name,
                        liveLink: el.homepage,
                        description: el.description, 
                        lastUpdated: el.updated_at,
                        index: `0${i+1}`
                    }
                })
                setProjects(usefulProjectData);
            })
            .then(() => setLoading(false))
            .catch(err => console.log(err));
    }, []);

    console.log(projects)

    if(loading){
        return (
            <section className="work" id="work">
                 <h2 className="work_title">RECENT PROJECTS</h2>
                 <p>Loading...</p>
            </section>
        )
    }

    return (
        <section className="work" id="work">
            <h2 className="work_title">RECENT PROJECTS</h2>
            <Project title={projects[0].title} description={projects[0].description} updatedAt={projects[0].updatedAt} githubUrl={projects[0].github} liveUrl={projects[0].liveLink} index={projects[0].index} />
            <div className="work_project-container project-right">
            <div className="project_title-container">
                <p className="project_num">02</p>
                <h3 className="project_title gray">Authentication</h3>
            </div>
            <p className="project_text gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu ultricies leo. Proin laoreet lectus ut ligula condimentum, a bibendum magna interdum.
            </p>
            <p className="project_date gray">
                10. Aug 2022
            </p>
            <button className="project_btn none">LIVE</button>
            <button className="project_btn">GITHUB</button>
        </div>
        </section>
    )
}

export default Work;