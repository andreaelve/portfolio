import profileImage from '../assets/profilepicture.png';

function Home() {
    return (
      <section className="home" id="home">
        <div style={{backgroundImage: `url(${profileImage})`}} className="home_picture"></div>
        <div className="home_text">
            <h1 className="home_title">FULLSTACK DEVELOPER</h1>
            <p className="gray home_location">Located in Oslo📍</p>
        </div>
        {/* <div className="home_carousel">
            <p>Andrea Elvegård</p>
            <p>Andrea Elvegård</p>
        </div> */}
      </section>
    );
  }
  
  export default Home;