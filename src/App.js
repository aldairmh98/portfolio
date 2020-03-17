import React, { Component } from 'react';
import Header from './Header';
import { Carousel, Button, ButtonGroup } from 'react-bootstrap';
import { Loading } from './Loading';
import './App.css';

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
      name: 'Angular 8',
      rank: '* * *'
    }, {
      name: 'ReactJS',
      rank: '* * *'
    }, {
      name: 'ExpressJS',
      rank: '* * *'
    }, {
      name: 'Flask',
      rank: '* * *'
    }, {
      name: 'ReactNative',
      rank: '* * *'
    }, {
      name: 'JPA',
      rank: '* * *'
    }];

    let languages = [
      {
        name: 'JavaScript',
        rank: '* * * *'
      },
      {
        name: 'Java 8',
        rank: '* * * *'
      }, {
        name: 'Python 3',
        rank: '* * *'
      }, {
        name: 'TypeScript',
        rank: '* * *'
      }, {
        name: 'PHP7',
        rank: '* * *'
      },
      {
        name: 'CSS',
        rank: '* * *'
      },
      {
        name: 'C#',
        rank: '* *'
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

    return (
      <div>
        <Header></Header>
        <div className="container" id="about">
          <div className="row">
            <div className="col-md-3">
              <p>FOTO</p>
            </div>
            <div className="col-md-9">
              <h2>Aldair Marín Hernández</h2>
              <p className="mt-3 text text-justify">Informático, originario de Córdoba, Veracruz. Recién egresado de la Universidad Veracruzana y con disponibilidad de movilidad a otra ciudad. Con experiencia en proyectos desarrollados en Java, Javascript, Python y PHP, entusiasta en desarrollar y aprender nuevas habilidades técnicas y personales.</p>
              <p>Me interesa el desarrollo Backend, sin embargo, también he utilizado tecnologías para el FrontEnd.</p>
            </div>
          </div>

        </div>
        <div className="container mt-3" id="skills">
          <h2 className="mb-3">Skills</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <th>Lenguaje</th>
                    <th>Valoración</th>
                  </thead>
                  {
                    this.state.languages.map(language => <tr>
                      <td>{language.name}</td>
                      <td>{language.rank}</td>
                    </tr>)
                  }
                </table>
              </div>
            </div>

            <div className="col-md-6">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <th>Framework</th>
                    <th>Valoración</th>
                  </thead>
                  {
                    this.state.frameworks.map(framework => <tr>
                      <td>{framework.name}</td>
                      <td>{framework.rank}</td>
                    </tr>)
                  }

                </table>
              </div>
            </div>
          </div>


        </div>
        <div id="show_case" className='container mb-3'>
          <h3>Showcase</h3>
          <div className='mt-3' style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <ButtonGroup aria-label="Button Group">
              <Button onClick={(e) => { e.preventDefault(); let project = this.state.projects.mobile; this.setState({ project, active_mobile: project.projects[0] }); }} variant="secondary">Mobile</Button>
              <Button onClick={(e) => { e.preventDefault(); let project = this.state.projects.web; this.setState({ project, active_mobile: project.projects[0] }); }} variant="secondary">Web</Button>
            </ButtonGroup>
          </div>
          <div className='row mt-3'>
            <div className='col-md-3 card'>
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
                      <p className='mt-3'>Click on each item to see Screens</p>
                      <ul>
                        {
                          this.state.project.projects.map(
                            (app, index) => <li key={index} onClick={() => {
                              clearTimeout(this.current_timeout);
                              this.setState({ active_mobile: app, active_idx: 0 }, () => this.slide())
                            }}>{app.title}</li>
                          )
                        }
                      </ul></div>
                  }

                </div>
              </div>

            </div>
            <div className='col-md-9'>
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

      </div >
    );
  }
}

