import profileImage from '../assets/profilepicture.png';

function Home() {
    return (
      <section className="home" id="home">
          <div className='home_circle-container'>
            <div className="home_circle-gray"></div>
            <div className="home_circle-red"></div>
            <div style={{backgroundImage: `url(${profileImage})`}} className="home_picture"></div>
          </div>
          <div className="home_text">
              <h1 className="home_title">FULLSTACK DEVELOPER</h1>
              <p className="gray home_location">Located in Oslo📍</p>
          </div>
      </section>
    );
  }
  
  export default Home;