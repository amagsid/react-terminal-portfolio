import React, { Component } from 'react';
import githubLogo from '../assets/GitHub-Mark-Light-32px.png';
import linkedInLogo from '../assets/linkedin.png';
// import gif from "./eye-icon-animate.gif";

export class Cat extends Component {
  state = {
    type: this.props.line.type,
    value: this.props.line.value,
  };

  style = {
    align: 'middle',
  };

  information = {
    about:
      'I would describe myself as passionate, visual, creative communicator, content creator and a people’s person. I have q collective experience ranging from management to UX design. Once a wish, now a reality, I followed a life-long dream to become a programmer. Just like the field I chose to belong to, I’m always evolving and acquiring new sklills. I see it as an infinite process. Learning something new is what keeps me focused and motivated. Motto: Do it with passion or not at all.',
    education:
      'Quis ut voluptate irure est. Ex in velit nisi nostrud occaecat ipsum non quis ea. Ipsum deserunt est amet adipisicing sint nulla quis nostrud. Ullamco enim do incididunt amet elit qui sint excepteur sit irure elit reprehenderit qui excepteur. Laborum ea minim aliquip et laboris aliquip reprehenderit sunt cupidatat pariatur esse do. In sint magna laborum culpa officia cillum ex velit commodo. Laborum adipisicing laboris incididunt nulla aliquip.',
    projects: [
      {
        projectName: 'p1',
        liveDemo: 'https://github.com/shloksomani',
        linkToGithub: 'https://github.com/shloksomani',
      },
      {
        projectName: 'p2',
        liveDemo: 'https://github.com/shloksomani',
        linkToGithub: 'https://github.com/shloksomani',
      },
    ],
    social: [
      {
        platform: 'Github',
        link: 'https://github.com/amagsid',
        logo: githubLogo,
      },
      {
        platform: 'LinkedIn',
        link: 'https://www.linkedin.com/in/ahmad-magdy-7792611b1/',
        logo: linkedInLogo,
      },

      {
        platform: 'Twitter',
        link: 'https://github.com/shloksomani',
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <p className='prompt'> {this.props.line.value} </p>
        {this.handelCd()}
      </React.Fragment>
    );
  }

  handelCd = () => {
    const navigation = this.state.value.split(' ')[1];
    if (navigation) {
      const lower = navigation.toLowerCase();
      if (lower === 'about') {
        return <p className='result'>{this.information.about}</p>;
      } else if (lower === 'education') {
        return <p className='result'>{this.information.education}</p>;
      } else if (lower === 'education') {
      } else if (lower === 'projects' || lower === 'project') {
        return (
          <React.Fragment>
            {this.information.projects.map((everyProject) => {
              return (
                <p className='result'>
                  {everyProject.projectName}
                  <a href={everyProject.liveDemo} target='_blank'>
                    Live Link
                  </a>
                  <a href={everyProject.linkToGithub} target='_blank'>
                    <img src={githubLogo} alt='GithubLink to Code' />
                  </a>
                </p>
              );
            })}
          </React.Fragment>
        );
      } else if (
        lower === 'socials' ||
        lower === 'social' ||
        lower === 'contact me' ||
        lower === 'contactme' ||
        lower === 'contact_me'
      ) {
        return (
          <React.Fragment>
            {this.information.social.map((everySocial) => {
              return (
                <p className='result'>
                  <a href={everySocial.link} target='_blank'>
                    {everySocial.platform}
                  </a>
                  <a href={everySocial.link} target='_blank'>
                    <img src={everySocial.logo} alt='social logo' />
                  </a>
                </p>
              );
            })}
          </React.Fragment>
        );
      } else {
        return <p className='result'>Opps wrong input</p>;
      }
    } else {
      return <p className='result'>Opps wrong input</p>;
    }
  };
}

export default Cat;
