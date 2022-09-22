function Project({ title, description, createdAt, githubUrl, liveUrl, index, right }) {
    const makeDate = () => {
        const months = {
            0: 'January',
            1: 'February',
            2: 'March',
            3: 'April',
            4: 'May',
            5: 'June',
            6: 'July',
            7: 'August',
            8: 'September',
            9: 'October',
            10: 'November',
            11: 'December'
        }

        const fullDate = new Date(createdAt);
        const year = fullDate.getFullYear();
        const month = months[fullDate.getMonth()];
        const date = fullDate.getDate();
        return `${date}. ${month} ${year}`;
    }

    return (
        <div className={`work_project-container ${right ? 'project-right' : 'project-left'}`}>
            <div className="project_title-container">
                <p className="project_num">{index}</p>
                <h3 className="project_title gray">{title}</h3>
            </div>
            <p className="project_text gray">
                {description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu ultricies leo. Proin laoreet lectus ut ligula condimentum, a bibendum magna interdum.'}
            </p>
            <p className="project_date gray">
                Created at: {makeDate()}
            </p>
            <div className="project_btn-container">
                {(liveUrl !== null && liveUrl !== "") && <button className="project_btn" onClick={() => window.open(liveUrl, '_blank')}>LIVE</button>}
                <button className="project_btn" onClick={() => window.open(githubUrl, '_blank')}>GITHUB</button>
            </div>
        </div>
    )
}

export default Project;