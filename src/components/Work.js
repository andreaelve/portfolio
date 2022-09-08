import Project from "./Project";

function Work() {
    return (
        <section className="work" id="work">
            <h2 className="work_title">RECENT PROJECTS</h2>
            <Project />
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