import Project from "./Project";
import { useState, useEffect } from "react";

function Work() {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('github')
            .then(data => data.json())
            .then(data => data.data)
            .then(data => {
                let right = true;
                let usefulProjectData = data
                    .filter(el => el.name !== 'saltstudy-invite')
                    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                    .map((el, i) => {
                    right = !right;
                    return { 
                        github: el.html_url, 
                        title: el.name,
                        liveLink: el.homepage,
                        description: el.description, 
                        createdAt: el.created_at,
                        index: `0${i+1}`,
                        right: right
                    }});
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
                        createdAt={el.createdAt} 
                        githubUrl={el.github} 
                        liveUrl={el.liveLink} 
                        index={el.index} 
                        right={el.right}/>)
            })}
        </section>
    )
}

export default Work;