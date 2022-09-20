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
                let right = true;
                let usefulProjectData = data
                    .filter(el => el.name !== 'saltstudy-invite')
                    .map((el, i) => {
                    right = !right;
                    return { 
                        github: el.html_url, 
                        title: el.name,
                        liveLink: el.homepage,
                        description: el.description, 
                        lastUpdated: el.updated_at,
                        index: `0${i+1}`,
                        right: right
                    }
                });
                setProjects(usefulProjectData);
            })
            .then(() => setLoading(false))
            .catch(err => console.log(err));
    }, []);

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
            {projects.map(el => {
                return (
                    <Project 
                        key={el.index}
                        title={el.title} 
                        description={el.description} 
                        updatedAt={el.lastUpdated} 
                        githubUrl={el.github} 
                        liveUrl={el.liveLink} 
                        index={el.index} 
                        right={el.right}/>)
            })}
        </section>
    )
}

export default Work;