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
      'I would describe myself as passionate, visual, creative communicator, content creator and a people’s person. I have q collective experience ranging from management to UX design. Once a wish, now a reality, I followed a life-long dream to become a programmer. Just like the field I chose to belong to, I’m always evolving and acquiring new sklills. I see it as an infinite process. Learning something new is what keeps me focused and motivated.\n Motto: Do it with passion or not at all.',
    education: [
      {
        date: '2021',
        name: 'HackYourFuture',
        city: 'Amsterdam',
        degree: 'Fullstack web programming',
        link: 'www.hackyourfuture.net',
      },
      {
        date: '2015',
        name: 'HYF',
        degree: 'software',
        link: 'www.com',
      },
      {
        date: '2012',
        name: 'HYF',
        degree: 'software',
        link: 'www.com',
      },
    ],

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
        return (
          <p className='result'>
            {this.information.education.map((e) => (
              <li>
                {e.date} -
                <span style={{ fontWeight: 'bold', fontSize: '15px' }}>
                  {e.name},
                </span>
                <span style={{ fontStyle: 'italic' }}>{e.city}</span>-{' '}
                {e.degree}
              </li>
            ))}
          </p>
        );
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
