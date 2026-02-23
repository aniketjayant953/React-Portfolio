import aboutImg from "../assets/img/self.jpg";
import expImg from "../assets/img/suitcase.png";
import eduImg from "../assets/img/education.png";

export const About = () => {
 
  return (
    <section id="about">
    <p class="section__text__p1">Get To Know More</p>
    <h1 class="title">About Me</h1>

    <div class="section-container">
      <div class="section__pic-container">
        <img src={aboutImg}  class="about-pic" alt=""/>
      </div>

      <div class="about-details-container">

        <div class="about-containers">
            
          <div class="details-container">
            <img src={expImg} alt="Experience icon" class="icon"/>
            <h3>Data Analyst</h3>
            <p>3.5+ years <br/>at YOUNGELEMENT INDIA PRIVATE LIMITED PVT LTD </p>
          </div>

          <div class="details-container">
            <img src={eduImg} alt="Education icon"class="icon" />   
            <h3>Education</h3>
            <p>Bachelors in Engineering Degree<br/> SPPU University </p>
          </div>

        </div>

        <div class="text-container">
          <p>
          Hi, my name is Aniket and I am a Data Science/Analyst Aspirant. I hold a Bachelor's Degree from SPPU University and Course certification in Data Science/Analytics.

Since I was young, I have always enjoyed to solve puzzles. So that's how I look at big data sets, to me it is one big puzzle I want to solve. Finding patterns nobody else sees is the challenge to me. Before I started my journey in Data domain I had studied for a year as a Data Analyst/Scientist in Project Execution and Processing. Do you want to work together? Please reach out to me by e-mail.
          </p>
        </div>

      </div>

    </div>
</section>
  );
};