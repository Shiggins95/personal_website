import React from 'react';
import PropTypes from 'prop-types';

const JourneyComponent = props => {
  return (
    <div id="journey" ref={props.reference}>
      <h1>My Journey</h1>
      <div>
        <h2 id="one">Self Learning</h2>
        <p>
          In 2017 I started teaching myself HTML and CSS. I wanted to build my own website, and having been quoted a
          price, I thought "That's expensive, I can do it myself!".
        </p>
        <p className="wrong_was_i"> How wrong was I.</p>
        <p>
          I picked up HTML and CSS fairly quickly, and learned that for some more advanced techniques, I would need
          Javascript. So begun my next chapter.
        </p>
      </div>
      <div>
        <h2 id="two">CodeClan</h2>
        <p>In 2018 I joined CodeClan.</p>
        <p>
          I knew that in order to design and build my own website, I would need some help. CodeClan taught me valuable
          skills that I am able to apply to multiple different situations. I learned Javascript, Java, Ruby and React. I
          quickly developed a strong interest in React and knew that I wanted to explore Javascript, as a whole, in a
          lot more detail
        </p>
      </div>
      <div className="long">
        <h2 id="three">Into the big wide world!</h2>
        <p>After CodeClan I accepted a job offer and began my new career as a Software Developer.</p>
        <p>
          I have been working here for nearly a year and I have enjoyed every moment. The skills I have gained from this
          time, combined with the lessons CodeClan taught me have allowed me to explore new languages and frameworks. I
          developed a Flappy Bird clone in Unity using C#, I have been working on building a scheduling app using Vue
          for my job and I have used web scraping technologies to build personal apps to make my life a little easier.
          Although my best quality of life development I have build was one that allowed me to create a React
          application from any directory in my terminal and installs all of the tools I use in every project.
          <br />
          It saves me around 3 minutes when setting up my project... Impressive, EH?
        </p>
      </div>
    </div>
  );
};

JourneyComponent.propTypes = {
  reference: PropTypes.object
};

export default JourneyComponent;
