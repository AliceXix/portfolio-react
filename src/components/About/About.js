import React from "react";
import { stackList,
  stackListLearning
} from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import img from "../../Assets/img_3565.jpg"

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src={img}
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Alice</strong>!
            <br></br>
            <br></br>
            I come form a sports, outdoor and teaching background.
            <br></br>
            It was a long way for me to get where I am, but what matters to me from the begging on, is to be able to do something I burn for and to feel free which for me reflects in being able to physically be where I want to.
            <br></br>
            I always have had a certain fascination for technologies and especially code. Due to my background and social environment at the time, I never got closer to this field.
            <br></br>
            Now after many years I have grown and found the courage and the voice to dive into web development.
            <br></br>
            I found an internship in a start-up for about seven months. Not only did I realize how deep my fascination for not only code but the entire concept of web development is, but also got to discover and impact many other fields that are necessary for a strong company base.
            <br></br>
            After this I enrolled and successfully graduated from a fullstack web development bootcamp where I could rediscover my love for learning as well as learn many valuable technologies and get hands on experience.
            <br></br>
            <br></br>
            And all of this to say I guess, I love what I do, I gave a lot to be able to do it on a daily basis and I want to find a match in a company that values my thrive for knowledge.
          </div>
          <br></br>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies..
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
          <br></br>
          <div className="AboutBio tagline2">
            I am currently learning to use the following technologies..
          </div>
          <Technologies>
            {stackListLearning.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src ={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
          <br></br>
          <div className="AboutBio tagline2">
            I am interested in working in the future with the following technologies..
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
