import React, { Component } from 'react';
import Header from './Header';
import { Carousel, Button, ButtonGroup } from 'react-bootstrap';
import { Loading } from './Loading';
import './App.css';
import { RatingBar } from './components';
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: null,
      fetching: true,
      project: null,
      active_mobile: null,
      active_idx: 0,
      frameworks: [],
      languages: []
    };

    this.before_idx = 0;
  }

  componentDidMount() {
    fetch('/projects.json', {
      method: 'GET'
    }).then(
      res => {
        res.json().then(
          projects => {
            this.setState({
              projects: projects,
              fetching: false,
              project: projects.mobile,
              active_mobile: projects.mobile.projects[0]
            }, () => this.slide());
          }
        );
      }
    );

    let frameworks = [{
      name: 'React Native',
      rank: 4
    }, {
      name: 'Angular 8',
      rank: 4
    }, {
      name: 'SpringBoot',
      rank: 4
    }, {
      name: 'Firebase',
      rank: 4
    }, {
      name: 'NodeJS',
      rank: 3.5
    }, {
      name: 'ReactNative',
      rank: 4
    }, {
      name: 'MongoDB',
      rank: 3
    }];

    let languages = [
      {
        name: 'JavaScript',
        rank: 4
      },
      {
        name: 'Java 8',
        rank: 4
      }, {
        name: 'TypeScript',
        rank: 3
      }, {
        name: 'PHP7',
        rank: 3
      }, {
        name: 'SQL',
        rank: 3
      }, {
        name: 'Python 3',
        rank: 2.5
      }]
    this.setState({ frameworks, languages });
  }

  slide() {
    let { active_idx, active_mobile } = this.state;
    this.current_timeout = setTimeout(() => {
      this.setState({ active_idx: active_idx === active_mobile.pictures.length - 1 ? 0 : active_idx + 1 });
      this.slide();
    }, 3000);
  }

  right() {
    let { active_idx, active_mobile } = this.state;
    if (active_idx === active_mobile.pictures.length - 1) {
      this.setState({ active_idx: 0 });
      return;
    }
    this.setState({ active_idx: active_idx + 1 });
    return;
  }

  left() {
    let { active_idx, active_mobile } = this.state;
    if (active_idx === 0) {
      this.setState({ active_idx: active_mobile.pictures.length - 1 });
      return;
    }
    this.setState({ active_idx: active_idx - 1 });
    return;
  }
  render() {

    let { frameworks, languages } = this.state;
    return (
      <div>
        <Header></Header>
        <div className="container mb-3" id="about">
          <h2>Aldair Marín Hernández</h2>
          <div className="row">
            <div className="col-md-8 d-flex justify-content-center align-items-center" >
              <p className="mt-3 text text-justify">Soy informático, originario de Córdoba, Veracruz. Egresado de la Universidad Veracruzana y con disponibilidad de movilidad a otra ciudad. Con experiencia en proyectos desarrollados en Java, Javascript, Python y PHP, entusiasta en aprender y desarrollar nuevas habilidades técnicas y personales</p>
            </div>
            <div className="col-md-4">
              <img src={'/undraw_preferences_popup_wbfw.svg'} style={{ width: '80%' }}></img>
            </div>
          </div>

        </div>

        <section className="jumbotron" id="skills">
          <div className="container shadow" style={{ backgroundColor: '#fff', borderRadius: '1%', padding: '5%' }}>
            <h3>Programming Language Skills</h3>
            <br></br>
            <div className="row">
              <div className="col-sm-6 mb-3">
                <img src="/undraw_code_typing_7jnv.svg" style={{ width: '80%', alignSelf: 'center', justifySelf: 'center' }}></img>
              </div>
              <div className="col-sm-6 mb-3">
                {
                  languages.map(
                    language => {
                      return <>
                        <RatingBar language={language}></RatingBar>
                      </>;
                    }
                  )
                }
              </div>
              <br></br>
              <div className="col-sm-6 mt-3">
              </div>
              <div className="col-sm-6 mt-3">
                <h3>Techs</h3>
              </div>
              <div className="col-sm-6 mt-3 d-flex flex-column align-items-center justify-content-end">
                {
                  frameworks.map(
                    framework => {
                      return <>
                        <RatingBar language={framework}></RatingBar>
                      </>;
                    }
                  )
                }
              </div>
              <br></br>
              <div className="col-sm-6 mt-3">
                <img style={{ width: '100%', height: 300 }} className='img-responsive' src='/undraw_percentages_0rur.svg'></img>
              </div>
            </div>
          </div>
        </section>
        <section className='jumbotron' style={{ backgroundColor: '#3F3D56' }}>
          <div id="show_case" className='container shadow' style={{ backgroundColor: '#fff', borderRadius: '1%', padding: '5%' }}>
            <h3>Showcase</h3>
            <div className='mt-3' style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <ButtonGroup aria-label="Button Group">
                <Button onClick={(e) => { e.preventDefault(); let project = this.state.projects.mobile; this.setState({ project, active_mobile: project.projects[0] }); }} variant="secondary">Mobile</Button>
                <Button onClick={(e) => { e.preventDefault(); let project = this.state.projects.web; this.setState({ project, active_mobile: project.projects[0] }); }} variant="secondary">Web</Button>
              </ButtonGroup>
            </div>
            <div className='row mt-3'>
              <div className='col-12 col-md-3 card'>
                <div style={{
                  display: 'flex',
                  height: '100%',
                  alignContent: 'center',
                  alignItems: 'center'
                }}>
                  <div style={{ width: '100%', alignContent: 'center' }}>

                    {
                      this.state.fetching ? <Loading></Loading> : <div>
                        <h3 className='text-center mb-3'>{this.state.project.title}</h3>
                        <img className='img-responsive' src={this.state.project.id === 1 ? '/smartphone.svg' : '/computer.svg'} alt="logo" />
                        <p className='mt-3'>Click on each item to watch Screens</p>
                        <ul className="list-unstyled">
                          {
                            this.state.project.projects.map(
                              (app, index) => <li style={{ cursor: 'pointer' }} key={index} onClick={() => {
                                clearTimeout(this.current_timeout);
                                this.setState({ active_mobile: app, active_idx: 0 }, () => this.slide())
                              }}>
                                <div className="shadow-sm" style={{ backgroundColor: '#3F3D56', marginTop: 10, padding: 10, borderRadius: 10 }}>
                                  <p style={{ color: '#fff', textAlign: 'center' }}>{app.title}</p>
                                </div>
                              </li>
                            )
                          }
                        </ul></div>
                    }

                  </div>
                </div>

              </div>
              <div className='col-12 col-md-9'>
                <div className='card' style={{ minHeight: 600 }}>
                  {this.state.fetching ? <Loading></Loading> :
                    <div>
                      <h6 className='text-center mb-3 mt-3'><b>{this.state.active_mobile.title}</b></h6>
                      <Carousel
                        activeIndex={this.state.active_idx}

                        onSelect={(evt, direction) => {
                          clearTimeout(this.current_timeout);
                          if (direction === 'prev')
                            this.left();
                          else
                            this.right();
                          this.slide();
                        }}
                      >
                        {
                          this.state.active_mobile.pictures.map(
                            (picture_url, index) => <Carousel.Item key={index}>
                              <div className='p-3' style={{ display: 'flex', backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                <img
                                  className="d-block"
                                  height='500'
                                  src={picture_url}
                                  alt="Slide"
                                />
                              </div>
                            </Carousel.Item>
                          )
                        }

                      </Carousel>
                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <b>Stack</b>
                        <div className='d-flex flex-row'>
                          {this.state.active_mobile.stack.map((stack_url, idx) => <img
                            alt='screenshot'
                            key={idx}
                            className="d-block mr-2"
                            height='50'
                            src={stack_url}
                          />)}
                        </div>
                      </div>

                      <div>

                      </div>
                    </div>}
                </div>
              </div>
            </div>
          </div>

        </section>
      </div >
    );
  }
}

