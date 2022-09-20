function Project({ title, description, updatedAt, githubUrl, liveUrl, index }) {
    if(liveUrl !== null && liveUrl !== "") console.log(liveUrl);
    return (
        <div className="work_project-container project-left">
            <div className="project_title-container">
                <p className="project_num">{index}</p>
                <h3 className="project_title gray">{title}</h3>
            </div>
            <p className="project_text gray">
                {description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu ultricies leo. Proin laoreet lectus ut ligula condimentum, a bibendum magna interdum.'}
            </p>
            <p className="project_date gray">
                {updatedAt}
            </p>
            {(liveUrl !== null && liveUrl !== "") && <button className="project_btn" onClick={() => window.open(liveUrl, '_blank')}>LIVE</button>}
            <button className="project_btn" onClick={() => window.open(githubUrl, '_blank')}>GITHUB</button>
        </div>
    )
}

export default Project;