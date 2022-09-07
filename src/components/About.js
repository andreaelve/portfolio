import VsFig from '../assets/vscode.png'
import CssFig from '../assets/css.png'
import FirebaseFig from '../assets/firebase.png'
import GithubFig from '../assets/github.png'
import HtmlFig from '../assets/html.png'
import JsFig from '../assets/javascript.png'
import KotlinFig from '../assets/kotlin.png'
import MongoFig from '../assets/mongo.png'
import NodeFig from '../assets/node.png'
import ReactFig from '../assets/react.png'
import TsFig from '../assets/typescript.png'

function About() {
    return (
      <section className="about" id="about">
        <div className='about_title-container'>
          <h2 className='about_title'>HELLO, I'M ANDREA</h2>
          <p className='about_hand-icon'>👋🏼</p>
        </div>
       <p className='about_text'>Lorem ipsum dolor sit amet, <span className="red">consectetur</span> adipiscing elit. Aliquam ac venenatis elit. <span className="red">Quisque mi lectus</span>, blandit nec diam a, auctor facilisis est. Maecenas in tellus at </p>
        <div className="about_icon-container">
          <img className='about_icon' src={VsFig} />
          <img className='about_icon' src={CssFig} />
          <img className='about_icon' src={FirebaseFig} />
          <img className='about_icon' src={HtmlFig} />
          <img className='about_icon' src={GithubFig} />
          <img className='about_icon' src={JsFig} />
          <img className='about_icon' src={KotlinFig} />
          <img className='about_icon' src={MongoFig} />
          <img className='about_icon' src={NodeFig} />
          <img className='about_icon' src={ReactFig} />
          <img className='about_icon' src={TsFig} />
        </div>
      </section>
    );
  }
  
  export default About;