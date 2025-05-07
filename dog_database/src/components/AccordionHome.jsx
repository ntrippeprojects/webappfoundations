import React from "react";
import ReactDOM from "react-dom";
import "../App.css";
import Accordion from 'react-bootstrap/Accordion';
import Link from "react-router-dom";

function AccordionHome() {
      return (
        <Accordion defaultActiveKey="0">
          <h3>Click below to learn more about my project.</h3>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Why a Dog Database?</Accordion.Header>
            <Accordion.Body>
              I chose dogs, and dog breeds, as the subject for my project for a few reasons.
              For one, I love dogs and am interested in learning about particular dog breeds
              and what purpose they have historically been bred for. Dogs have evolved along
              side humans over time and they are one of, if not the, friendliest animals 
              to humans in the world. I also chose dogs because I thought it would make for an
              interesting and logical topic for building a database and using database logic.
              While there are a high number of different dog breeds throughout the world, what I
              primarily am choosing to focus on due to project and time constraints is the dog
              breeds listed on the official American Kennel Club website.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Data Sources and References</Accordion.Header>
            <Accordion.Body>
              The dog breeds used in the project and database are the breeds listed on the official&nbsp;
              <a href="https://www.akc.org/dog-breeds/" target="_blank">American Kennel Club website</a>.
              Any content of my fiancée and I's dog, Beetle, is provided by me directly! :)
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>About Me</Accordion.Header>
            <Accordion.Body>
              My name is Nathaniel and I am a first-year graduate student here in the Master of Information Technology
              program at Illinois Tech. I live in the greater Boston, Massachusetts area with my fiancée, Tara, and our dog, Beetle.
              I currently work as a Senior Technical Support Engineer at Salesforce and I love to learn new technologies and help others
              learn as well. When I am not working or studying, I love to spend time with my loved ones, enjoy nature, or watch my favorite team,
              the Boston Celtics. I previously studied at University of Massachusetts Boston where I earned my bachelor's in Information Technology,
              specializing in Business Intelligence.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      );
    }    

export default AccordionHome;