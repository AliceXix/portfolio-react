import React from "react";
import { stackList,
  stackListLearning,
  stackListInterest,
} from "../../data/ProjectData";
import {
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <div className="AboutBio">
            Hey, coding comrades! I'm <strong>Alice</strong>!
            <br></br>
            <br></br>
            <br></br>
            and before I dive into the exciting world of software development, let me rewind a bit. Born and raised in the charming land of France, I've been riding the ski slopes since for ever and for a cool six years teaching folks how to master the mountains.
            <br></br>
            <br></br>
                      But here's where the plot thickens – picture me two years ago, stumbling into a coding <strong>bootcamp</strong> like I'd just hit a double black diamond run blindfolded. Surprise! I rediscovered my passion for learning, and it turns out I've got a secret love affair with software development that's as thrilling as a downhill race.
            <br></br>
            <br></br>
            You see, my background isn't just about conquering ski runs; it's a tale of sports and outdoor adventures that set the stage for my journey into the digital wilderness.
            <br></br>
            <br></br>
                      <strong>I'm not your average coder</strong>; I'm more like a coding wizard, on a quest for knowledge, brewing up creative solutions. I firmly believe in asking a zillion questions, because, in coding, it's better to have too many answers than to let a bug party go unchecked!
            <br></br>
            <br></br>
            Now, here's the punchline: I'm a firm believer that every individual has a unique spark, just waiting for the right code to ignite it. And creating the perfect coding environment? Well, that's a team sport, my friends.
            <br></br>
            <br></br>
                      So, whether it's carving up slopes, crafting code, or kindling the flames of creativity, I'm all in. Let's embark on this journey together, because when you combine a love for adventure with a newfound passion for software development, <strong>there's no limit to what we can achieve</strong>.
          </div>
          <br></br>
          <br></br>
          <hr></hr>
          <br></br>
          <div className="AboutBio tagline2">
            <strong>I can work with..</strong>
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
          <hr></hr>
          <br></br>
          <div className="AboutBio tagline2">
            <strong>I am currently learning..</strong>
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
          <hr></hr>
          <br></br>
          <div className="AboutBio tagline2">
            <strong>I am curious about..</strong>
          </div>
          <Technologies>
            {stackListInterest.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
