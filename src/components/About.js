import Carousel from "./Carousel";

const About = () => {
  const importAll = images => {
    let icons = [];
    images.keys().forEach(item => icons.push(item.replace('./', '')));
    return icons;
  }
  const images = importAll(require.context('../assets/icon', false, /\.(png|jpe?g|svg)$/));

    return (
      <section className="about" id="about">
        <div className='about_title-container'>
          <h2 className='about_title'>HELLO, I'M ANDREA</h2>
          <p className='about_hand-icon'>👋🏼</p>
        </div>
        <p className='about_text'>
          I'm a <span className="red">happy</span> and friendly 'people' person who <span className="red">thrives in creative and social environments</span>. What drove me to pursue a career as a developer is <span className="red">my passion</span> for problem solving and <span className="red">experimenting</span> with new ideas.
        </p>
        <p className='about_text'>
          I'm currently employed as a consultant at Salt, and I'm continuously working towards widening my knowledge and <span className="red">improving</span> my skillset. 
        </p>
        <Carousel>
          {images.map((el, i) => <img className="about_icon" key={i} alt={el} src={require(`../assets/icon/${el}`)}/>)}
        </Carousel>
      </section>
    );
  }
  
  export default About;