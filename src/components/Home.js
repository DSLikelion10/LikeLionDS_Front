import React from 'react';
// import '../css/ResetCSS.css';
import '../css/Home.css';
import github from '../img/github.png';
import discord from '../img/discord.png';
import googleDrive from '../img/google_drive.png';
import velog from '../img/Velog.png';
import insta from '../img/insta.png';

function SNS({ contact }) {
  return (
    <span className="sns_aline">
      <a
        style={{ textDecoration: 'none' }}
        target="_blank"
        href={contact.link}
        rel="noreferrer"
      >
        <img className="sns_icon" alt={contact.title} src={contact.img} />
        <p className="sns_name"> {contact.title} 바로가기 </p>
      </a>
    </span>
  );
}

export default function Home() {
  const contacts = [
    {
      id: 1,
      title: 'Github',
      link: 'https://github.com/DSLikelion10',
      img: github,
    },
    {
      id: 2,
      title: 'Discord',
      link: 'https://discord.com/channels/912254268814278656/925771903673712690/953153862297075772',
      img: discord,
    },
    {
      id: 3,
      title: 'GoogleDrive',
      link: 'https://drive.google.com/drive/u/2/folders/12ls2TFz53N3HJYDfiRbS-0kPRzsA5uUs',
      img: googleDrive,
    },
    {
      id: 4,
      title: 'Velog',
      link: 'https://velog.io/@liklion_ds',
      img: velog,
    },
    {
      id: 5,
      title: 'Insta',
      link: 'https://www.instagram.com/likelion_ds/',
      img: insta,
    },
  ];

  return (
    <div className="wideframe">
      <h1 className="title">안녕하세요! 덕성여대 멋쟁이사자처럼 10기 입니다</h1>
      <h1 className="small-title"> 덕성 멋사 10기 입니다 </h1>
      <div className="sns_container">
        <div className="sns_box">
          {contacts.map((contact, index) => (
            <SNS contact={contact} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
