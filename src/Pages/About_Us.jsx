import React from 'react';
import '../Components/style.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import sokneang from "../assets/Profile/Sokneang.jpg";
import lita from "../assets/Profile/Lita.jpg";

const About_Us = () => {
  return (
    <div className="container my-5 text-light">
      <section className="mb-5">
        <h1 className="text-center mb-4">About Our Project</h1>
        <p className="lead text-justify text-center purpose-website">
        គោលបំណងចម្បងនៃការបង្កើតគេហទំព័រ LatteCoding គឺដើម្បីផ្តល់នូវបទពិសោធន៍ដ៏ល្អបំផុតដល់អតិថិជនក្នុងការកម្សាន្ត និងទិញភេសជ្ជៈកាហ្វេ និងអាហារសម្រន់។ យើងខ្ញុំបានរចនាគេហទំព័រនេះឡើងដើម្បីធ្វើឱ្យការបញ្ជាទិញរបស់អតិថិជនកាន់តែងាយស្រួល និងរហ័ស និងផ្តល់នូវព័ត៌មានអំពីផលិតផលរបស់យើងដោយច្បាស់លាស់។ យើងខ្ញុំក៏ចង់បង្កើតបរិយាកាសដ៏ស្រស់ស្អាត និងទំនើបសម្រាប់អ្នកដែលចូលចិត្តកាហ្វេ និងចង់ស្វែងរកកន្លែងសម្រាប់ធ្វើការឬកម្សាន្ត។        </p>
      </section>

      <section>
        <h1 className="text-center mb-4">About Our Team</h1>

        <div className="team-member mb-5">
          <div className="row align-items-center">
            <div className="col-md-3 text-center float-end">
              <img
                src={lita}
                alt="Member 2"
                className="img-fluid rounded-circle"
              />
            </div>
            <div className="col-md-9">
              <h3>Ouk Alita</h3>
              <p>
                A third-year Computer Science student at the Royal University of Phnom Penh. I have skills in HTML, CSS, Bootstrap, JavaScript, and React.js, which I used to build this website.
              </p>
              <p>Phone</p>
              <p><a href="">Email</a></p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='pe-4 fs-3'><FontAwesomeIcon icon={faSquareFacebook} /></a> 
                <a href="https://t.me" target="_blank" rel="noopener noreferrer" className='pe-4 fs-3'><FontAwesomeIcon icon={faTelegram} /></a> 
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='pe-4 fs-3'><FontAwesomeIcon icon={faLinkedin} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="team-member mb-5">
          <div className="row align-items-center">
            <div className="col-md-3 text-center">
              <img
                src={sokneang}
                alt="Lay Sokneang"
                className="img-fluid rounded-circle"
                style={{width: '300px', height: '300px', objectFit: 'cover'}}
              />
            </div>
            <div className="col-md-9">
              <h3>Lay Sokneang</h3>
              <p>
                A third-year Computer Science student at the Royal University of Phnom Penh. I have skills in HTML, CSS, Bootstrap, JavaScript, and React.js, which I used to build this website.
              </p>
              <p>0978845714</p>
              <p><a href="">laysokneang80@gmail.com</a></p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='pe-4 fs-3'><FontAwesomeIcon icon={faSquareFacebook} /></a> 
                <a href="https://t.me" target="_blank" rel="noopener noreferrer" className='pe-4 fs-3'><FontAwesomeIcon icon={faTelegram} /></a> 
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='pe-4 fs-3'><FontAwesomeIcon icon={faLinkedin} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="team-member mb-5">
          <div className="row align-items-center">
            <div className="col-md-3 text-center">
              <img
                src="https://via.placeholder.com/150" 
                alt="Member 3"
                className="img-fluid rounded-circle"
              />
            </div>
            <div className="col-md-9">
              <h3>Ouy Ponlouer</h3>
              <p>
                A third-year Computer Science student at the Royal University of Phnom Penh. I have skills in HTML, CSS, Bootstrap, JavaScript, and React.js, which I used to build this website.
              </p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='pe-4 fs-3'><FontAwesomeIcon icon={faSquareFacebook} /></a> 
                <a href="https://t.me" target="_blank" rel="noopener noreferrer" className='pe-4 fs-3'><FontAwesomeIcon icon={faTelegram} /></a> 
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='pe-4 fs-3'><FontAwesomeIcon icon={faLinkedin} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="team-member mb-5">
          <div className="row align-items-center">
            <div className="col-md-3 text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Member 4"
                className="img-fluid rounded-circle"
              />
            </div>
            <div className="col-md-9">
              <h3>Long Sokbomnong</h3>
              <p>
                A third-year Computer Science student at the Royal University of Phnom Penh. I have skills in HTML, CSS, Bootstrap, JavaScript, and React.js, which I used to build this website.
              </p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='pe-4 fs-3'><FontAwesomeIcon icon={faSquareFacebook} /></a> 
                <a href="https://t.me" target="_blank" rel="noopener noreferrer" className='pe-4 fs-3'><FontAwesomeIcon icon={faTelegram} /></a> 
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='pe-4 fs-3'><FontAwesomeIcon icon={faLinkedin} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h2 className='text-center display-1 fw-bold mt-5 pt-5 latte'>Latte Coding</h2>

    </div>
  );
};

export default About_Us;