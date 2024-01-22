import aboutImg from "../assets/img/self.jpg";
import expImg from "../assets/img/experience.png";
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
            <h3>Data Science Course</h3>
            <p>1+ years <br/>Data Scientist/Data Analyst</p>
          </div>

          <div class="details-container">
            <img src={eduImg} alt="Education icon"class="icon" />   
            <h3>Education</h3>
            <p>M.Engg Bachelors Degree<br/>M.Engg Diploma </p>
          </div>

        </div>

        <div class="text-container">
          <p>
          Hi, my name is Aniket and I am a Data Science/Analyst Aspirant. I hold a Bachelor's Degree in Mechanical Engineering and Course certification in Data Science/Analytics.

Since I was young, I have always enjoyed to solve puzzles. So that's how I look at big data sets, to me it is one big puzzle I want to solve. Finding patterns nobody else sees is the challenge to me. Before I started my journey in Data domain I had studied for a year as a Data Analyst/Scientist in Project Execution and Processing. Do you want to work together? Please reach out to me by e-mail.
          </p>
        </div>

      </div>

    </div>
</section>
  );
};