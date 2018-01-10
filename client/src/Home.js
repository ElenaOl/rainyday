import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import {Parallax, Carousel} from 'react-materialize';

class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
          childProp:""
      }
  }
  componentDidMount() {
    $('.card__share > a').on('click', function(e){
        e.preventDefault(); // prevent default action - hash doesn't appear in url
        $(this).parent().find( 'div' ).toggleClass( 'card__social--active' );
        $(this).toggleClass('share-expanded');
    });
  }

  render() {
    return (
      <div >
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br/>
              <h1 className="header center teal-text text-lighten-2">Rainy Day</h1>
                <div className="row center">
                <h5 className="header col s12 light">A more rewarding way to track your savings</h5>
              </div>
              <br/>
            </div>
          </div>
          <div className="parallax">
            <img 
              src="https://static.pexels.com/photos/606455/pexels-photo-606455.jpeg" 
              alt="Unsplashed background img 2"
              height="800"
            />
          </div> 
        </div>{/*end index banner*/}
        <br/><br/>
        <div className="container space ">
          <div className="section">
    {/* <!--   Icon Section   --> */}
            <div className="row">
              <div className="col s12 m4 ">
                <div className="icon-block  hoverable info-card">
                  <h2 className="center brown-text"><i className="large material-icons">dashboard</i></h2>
                  <h5 className="center">Import and critique</h5>
                  <p className="light center-align">Here you can start tracking your spending habits by importing your bank statement </p>
                </div>
              </div>
              <div className="col s12 m4 ">
                <div className="icon-block  hoverable info-card">
                  <h2 className="center brown-text"><i className="large material-icons">assignment</i></h2>
                  <h5 className="center">Categorize and disifer </h5>
                  <p className="light center-align">
                 Next separate your neccessary spending with your leisure spending. That way you can see how much money you can work on saving.
                  </p>
                </div>
              </div>
              <div className="col s12 m4 ">
                <div className="icon-block  hoverable info-card ">
                  <h2 className="center brown-text"><i className="large material-icons">map</i></h2>
                  <h5 className="center">Set goals to cut down </h5>
                  <p className="light center-align">
                      Once you have separated your necessary spending with you leisure spending, you can better determine what you want to cut down on.
                   </p>
                </div>
              </div>
            </div>                                
          </div>
        </div>
    {/* secound row of info button */}
        <div className="container space">
          <div className="section">
            {/* <!--   Icon Section   --> */}
            <div className="row">
              <div className="col s12 m4 ">
                <div className="icon-block  hoverable info-card">
                  <h2 className="center brown-text"><i className="large material-icons">border_color</i></h2>
                  <h5 className="center">Track what you purposefully saved</h5>
                  <p className="light center-align">
                    Every time you go to the store and almost buy an unnecessary product, 
                    submit the product by category, description, amount and date.
                    This way you can document your good saving habits.
                  </p>
                </div>
              </div>
              <div className="col s12 m4 ">
                <div className="icon-block  hoverable info-card">
                  <h2 className="center brown-text"><i className="large material-icons">insert_chart</i></h2>
                  <h5 className="center">Compare and Track</h5>
                  <p className="light center-align">
                    After you have been tracking your good spending habits, 
                    you can then compare the amount of
                    money you saved against what you had spent before you had tracked it.
                  </p>
                </div>
              </div>
              <div className="col s12 m4 ">
                <div className="icon-block  hoverable info-card">
                  <h2 className="center brown-text"><i className="large material-icons">dashboard</i></h2>
                  <h5 className="center">Keep track and save</h5>
                  <p className="light center-align">
                    To continue to track your progress import your next bank statement 
                    to compare data and track for the next month 
                  </p>
                </div>
              </div>
            </div> {/*end row*/}
          </div>{/*end section*/}
        </div>{/*end container space*/}
        <br /><br />
      {/* end of info button */}
        {<Parallax imageSrc="/img/umbrellas.png"/>}
      {/* carousel */}
        <div >
          <h3 className="header  center-align col s9 offset-s2 light">Making better spending choices, set goals, and improve your quality of life for tomorrow</h3>
            <Carousel  images={[
              <img src="/img/login.png"/>,
              <img src="/img/savings.png"/>,
              <img src="/img/transactions.png"/>,
              <img src="/img/graphs.png"/>,
            ]} />
          </div>
        {/* end of carousel */}
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 center">
                <h3><i className="mdi-content-send brown-text"></i></h3>
                <h4>Contact Us</h4>
                <p className="center-align light">Meet the developers</p>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
      {/* about the Developers */}
        <div className="valign-wrapper section-box top-page top-page-landing " >
          <div className="section-box row section-prices section no-pad-bot hide-on-med-and-down">
            <div className="col s3 ">
              <div className="card  hoverable">
                <div className="card-image border-tlr-radius">
                  <img className='border-tlr-radius picture' src="/img/aj.jpg"  alt="Aj photo"/>
                  <span className="card-title">Full stack developer, bank records pages, React routes and database</span>
                </div>
                <div className="card__content card__padding" >
                  <div className="card__share">
                    <div className="card__social">
                      <a className="share-icon mail" href="mailto:stevens1434@gmail.com"><span className="fa fa-envelope"></span></a>
                      <a className="share-icon linkedin" href="https://www.linkedin.com/in/stevens1434/"><span className="fa fa-linkedin"></span></a>
                      <a className="share-icon github" href="https://github.com/stevens1434"><span className="fa fa-github"></span></a>
                    </div>
                    <a id="share" className="share-toggle share-icon" ></a>
                  </div>
                  <div className="card__meta">
                    <a >Andrew Stevens</a>
                    {/* <time>30 October</time> */}
                  </div>
                  <article className="card__article">
                    <h4>About Andrew</h4>
                    <p>Curious full-stack web developer who loves working complex problems into simple, 
                      thoughtful solutions that cause good for others. I thrive while working in flexible and 
                      collaborative environments. I am always driving towards actionable decisions and goals, 
                      can liken most any working situation to my experience fishing (which is an ongoing learning process) 
                      or growing up working at the family-business, and have an absurd love of being near water.</p>
                  </article>
                </div>
              </div>
            </div>
            <div className="col s3 ">
              <div className="card  hoverable  ">
                <div className="card-image border-tlr-radius">
                  <img className='border-tlr-radius picture' src="/img/brian.jpg"  alt="Brian photo"/>
                  <span className="card-title">Full stack developer, user data presentation and development</span>
                </div>
                <div className="card__content card__padding" >
                  <div className="card__share">
                    <div className="card__social">
                      <a className="share-icon mail" href="mailto:bc.boxomail@gmail.com"><span className="fa fa-envelope"></span></a>
                      <a className="share-icon linkedin" href="https://www.linkedin.com/in/unclebconnor/"><span className="fa fa-linkedin"></span></a>
                      <a className="share-icon github" href="https://github.com/unclebconnor"><span className="fa fa-github"></span></a>
                    </div>
                    <a id="share" className="share-toggle share-icon" ></a>
                  </div>
                  <div className="card__meta">
                    <a >Brian Connor</a>
                    {/* <time>30 October</time> */}
                  </div>
                  <article className="card__article">
                    <h4>About Brian</h4>
                    <p>I am observant, reliable, and unbound by convention. I am focused on helping others leverage 
                      technology to simplify and streamline complex tasks, making room for deep work and human connection.</p>
                  </article>
                </div>
              </div>
            </div>
            <div className="col s3 ">
              <div className="card  hoverable  ">
                <div className="card-image border-tlr-radius">
                    <img className='border-tlr-radius picture' src="/img/elena.jpg"  alt="Elena photo"/>
                    <span className="card-title">Full stack developer, React routes and database, savings page</span>
                </div>
                <div className="card__content card__padding" >
                  <div className="card__share">
                    <div className="card__social">
                      <a className="share-icon mail" href="mailto:pravutiner@gmail.com"><span className="fa fa-envelope"></span></a>
                      <a className="share-icon linkedin" href="https://www.linkedin.com/in/elena-olekh/"><span className="fa fa-linkedin"></span></a>
                      <a className="share-icon github" href="https://github.com/ElenaOl"><span className="fa fa-github"></span></a>
                    </div>
                    <a id="share" className="share-toggle share-icon" ></a>
                  </div>
                  <div className="card__meta">
                    <a>Elena Olekh</a>
                    {/*<time>30 October</time>*/}
                  </div>
                  <article className="card__article">
                    <h4>About Elena</h4>
                    <p>I am a web developer with a passion for science and dedication to details. 
                      My previous experience in research, project management and regulatory affairs 
                      contributed to my love for exploring new topics and passion to learn programming 
                      languages that allow me to create new web sites and application. I am ready to implement 
                      my newly earned knowledge in web development and contribute to the world through my creativity.</p>
                  </article>
                </div>
              </div>
            </div>
            <div className="col s3 ">
              <div className="card  hoverable  ">
                <div className="card-image border-tlr-radius">
                  <img className='border-tlr-radius  picture' src="/img/liz.jpg"  alt="Liz photo"/>
                  <span className="card-title">Front-end leaning full stack developer</span>
                </div>
                  <div className="card__content card__padding" >
                    <div className="card__share">
                      <div className="card__social">
                        <a className="share-icon mail" href="mailto:efriedla20852@gmail.com"><span className="fa fa-envelope"></span></a>
                        <a className="share-icon linkedin" href="https://www.linkedin.com/in/elizabeth-friedland13/"><span className="fa fa-linkedin"></span></a>
                        <a className="share-icon github" href="https://github.com/efriedla"><span className="fa fa-github"></span></a>
                      </div>
                      <a id="share" className="share-toggle share-icon" ></a>
                    </div>
                    <div className="card__meta">
                      <a >Elizabeth Friedland</a>
                      {/* <time>30th October</time> */}
                    </div>
                    <article className="card__article">
                      <h4>About Elizabeth</h4>
                      <p> Aspiring web developer with a background in human resources 
                      that complements technical skillset allowing novel perspectives 
                      on users interactions.</p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          {/* moble only */}
            <div className=" hide-on-med-and-up">
              <div>
                <img src="/img/aj.jpg" alt="AJ Stevens" className='circle responsive-img'/>
                <div className="card__author-content border-tlr-radius">
                  title<a>Andrew Stevens</a>
                </div>
                <div className="card__share">
                  <div className="card__social">
                    <a className="share-icon mail" href="mailto:stevens1434@gmail.com"><span className="fa fa-envelope"></span></a>
                    <a className="share-icon linkedin" href="https://www.linkedin.com/in/stevens1434/"><span className="fa fa-linkedin"></span></a>
                    <a className="share-icon github" href="https://github.com/stevens1434" ><span className="fa fa-github"></span></a>
                  </div>
                  <a id="share" className="share-toggle share-icon" ></a>
                </div>
              </div>
          {/* person 2 */}
              <div>
                <img src="/img/brian.jpg"  alt="Brian Connor" className='circle responsive-img'/>
                <div className="card__author-content border-tlr-radius">
                  title <a>Brian</a>
                </div>
                <div className="card__share">
                  <div className="card__social">
                    <a className="share-icon mail" href="mailto:bc.boxomail@gmail.com"><span className="fa fa-envelope"></span></a>
                    <a className="share-icon linkedin"  href="https://www.linkedin.com/in/unclebconnor/"><span className="fa fa-linkedin"></span></a>
                    <a className="share-icon github" href="https://github.com/unclebconnor"><span className="fa fa-github"></span></a>
                  </div>
                  <a id="share" className="share-toggle share-icon" ></a>
                </div>
              </div>
          {/* person 3 */}
              <div>
                <img src="/img/elena.jpg" alt="user" className='circle responsive-img'/>
                <div className="card__author-content border-tlr-radius">
                  title <a>Elena Olekh</a>
                </div>
                <div className="card__share">
                  <div className="card__social">
                    <a className="share-icon mail" href="mailto:pravutiner@gmail.com"><span className="fa fa-envelope"></span></a>
                    <a className="share-icon linkedin" href="https://www.linkedin.com/in/elena-olekh/"><span className="fa fa-linkedin"></span></a>
                    <a className="share-icon github" href="https://github.com/ElenaOl"><span className="fa fa-github"></span></a>
                  </div>
                  <a id="share" className="share-toggle share-icon" ></a>
                </div>
              </div>
          {/* person 4 */}
              <div>
                <img src="/img/liz.jpg" alt="user" className='circle responsive-img'/>
                  <div className="card__author-content border-tlr-radius">
                    Front-end Developer:  <br /> <a>Elizabeth Friedland</a>
                  </div>
                  <div className="card__share">
                    <div className="card__social">
                        <a className="share-icon mail" href="mailto:efriedla20852@gmail.com"><span className="fa fa-envelope"></span></a>
                        <a className="share-icon linkedin"  href="https://www.linkedin.com/in/elizabeth-friedland13/"><span className="fa fa-linkedin"></span></a>
                        <a className="share-icon github" href="https://github.com/efriedla"><span className="fa fa-github"></span></a>
                    </div>
                    <a id="share" className="share-toggle share-icon" ></a>
                  </div>
                </div>
              </div>
            </div>
      {/* end of the Developer info */}
        <footer className="page-footer #263238 blue-grey darken-2 center-align">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h5 className="white-text">Company Bio</h5>
                <p className="grey-text text-lighten-4">
                  We are a team of college students working on this 
                  project like it's our full time job. Any amount 
                  would help support and continue development on this 
                  project and is greatly appreciated.
                </p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              Made by <a className="brown-text text-lighten-3" href="http://materializecss.com">The team</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Home;