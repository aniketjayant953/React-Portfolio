import { Container, Tab,Row, Col, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import ProjImg1 from "../assets/img/project-img1.png"
import ProjImg2 from "../assets/img/madhav-sales.png"
import ProjImg3 from "../assets/img/hr analytics.png"
import ProjImg4 from "../assets/img/maven's_store.png"
import ProjImg5 from "../assets/img/real-estate.png"
import ProjImg6 from "../assets/img/olympics.gif"
import ProjImg7 from "../assets/img/laptop-ML.png"
import ProjImg8 from "../assets/img/rock-paper-scissors.gif"
import ProjImg9 from "../assets/img/recommender.gif"
import ProjImg10 from "../assets/img/email.png"
import ProjImg11 from "../assets/img/dog_gif.gif"
import ProjImg12 from "../assets/img/quora.png"
import ProjImg13 from "../assets/img/covid-19.gif"
import ProjImg14 from "../assets/img/patient.gif"
import ProjImg15 from "../assets/img/spotify.gif"
import CertImg1 from "../assets/img/sql.jpg"
import CertImg2 from "../assets/img/python-programming.jpg"
import CertImg3 from "../assets/img/pandas.jpg"
import CertImg4 from "../assets/img/machine-learning.jpg"
import CertImg5 from "../assets/img/stats.jpg"


import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Projects = () => {

    const projects1 = [
        {
            title:"Spotify",
            description: "Visualizing Spotify’s Musical Universe Using Chat-GPT",
            imgUrl: ProjImg15,
            link:"https://medium.com/@aniketjayant953/melodic-insights-unveiling-spotifys-musical-universe-using-chat-gpt-513d6f598f8b"
        },
        {
            title:"Covid-19",
            description: "Visualizing Pandamecic Progression In Tableau",
            imgUrl: ProjImg13,
            link:"https://medium.com/@aniketjayant953/covid-19-tale-tableaus-visual-narrative-62c4ff90934d"
        },
        {
            title:"Patient Wait list",
            description: "Streamlining Patient Waitlists with Power BI",
            imgUrl: ProjImg14,
            link:"https://medium.com/@aniketjayant953/transforming-healthcare-streamlining-patient-waitlists-with-power-bi-dashboards-a8d551172106"
        },
        {
            title:"Story of Olympics",
            description: "Visualizing Olympic History In Tableau",
            imgUrl: ProjImg6,
            link:"https://medium.com/@aniketjayant953/120-years-of-olympic-triumphs-an-exploratory-dive-into-the-dataset-by-tableau-281a99c17d5f"
        },
        {
            title:"Real Estate",
            description: "Dynamic Real Estate Sales Dashboard",
            imgUrl: ProjImg5,
            link: "https://medium.com/@aniketjayant953/changing-how-homes-are-sold-4f01a39e25ac"
        },
        {
            title:"Maven's Toy Store",
            description: "Retail Metrics Dashboard",
            imgUrl: ProjImg4,
            link: "https://medium.com/@aniketjayant953/toy-store-sales-power-bi-interactive-dashboard-baf0978c2f07"
        },
        
        {
            title:"Employees Attrition",
            description: "Attrition Insights Dashboard",
            imgUrl: ProjImg3,
            link:"https://medium.com/@aniketjayant953/hr-attrition-rate-powerbi-dashboard-b9419a1540f8"
        },
        {
            title:"Ecommerce",
            description: "Madhav Sales Performance Dashboard",
            imgUrl: ProjImg2,
            link:"https://medium.com/@aniketjayant953/e-commerce-sales-interactive-dashboard-ac806c7a042b"
        },
        {
            title:"SuperStore",
            description: "Retail Performance Dashboard",
            imgUrl: ProjImg1,
            link:"https://medium.com/@aniketjayant953/superstore-sales-analysis-in-power-bi-55ea9a284251"
        },
       
    ]
    const projects2 = [
        {
            title:"Quora Question Key Pairs",
            description: "Quora question similarity analysis using NLP.",
            imgUrl: ProjImg12,
            link:"https://medium.com/@aniketjayant953/nlp-exploration-quoras-question-key-pairs-1c9eb00e521d"
        },
        {
            title:"Laptop Price Predictor",
            description: "Predictive Analysis: Laptop Price Estimation",
            imgUrl: ProjImg7,
            link: "https://medium.com/@aniketjayant953/forecasting-laptop-costs-a-machine-learning-approach-3dbcf9bbf5c6"
        },
        {
            title:"Rock Paper Scissors",
            description: "Interactive Hand Gesture AI Game",
            imgUrl: ProjImg8,
            link:"https://medium.com/@aniketjayant953/computer-vision-gaming-rock-paper-scissors-ai-cdc1584d9c4d"
        },
        {
            title:"Movie Recommender",
            description: "Content-based movie recommender system.",
            imgUrl: ProjImg9,
            link: "https://medium.com/@aniketjayant953/elevating-movie-choices-unveiling-a-content-based-recommender-system-119e1b756550"
        },
        {
            title:"Email Spam Classifier",
            description: "Textual Data Analysis and Prediction",
            imgUrl: ProjImg10,
            link:"https://medium.com/@aniketjayant953/unveiling-the-crystal-ball-predicting-spam-emails-with-precision-cdcbdda98b84"
        },
        {
            title:"YoloV5",
            description: "Precision Dog Detection Using YOLOv5 Model",
            imgUrl: ProjImg11,
            link:"https://medium.com/@aniketjayant953/unleashing-yolov5-real-time-dog-detection-in-videos-0ebe2c1f9607"
        },
    ]

    const projects3 = [
        {
            title:"SQL",
            description: "ITVedant Certificate",
            imgUrl: CertImg1
        },
        {
            title:"Python Programming",
            description: "ITVedant Certificate",
            imgUrl: CertImg2
        },
        {
            title:"Numpy & Pandas",
            description: "ITVedant Certificate",
            imgUrl: CertImg3
        },
        {
            title:"Machine Learning",
            description: "ITVedant Certificate",
            imgUrl: CertImg4
        },
        {
            title:"Statistics",
            description: "ITVedant Certificate",
            imgUrl: CertImg5
        },
    ]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                        {({isVisible}) => 
                            <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                <h2>Projects</h2>
                                <p>When it comes to my data science projects, I understand the importance of putting my skills into action. With each project, I've explored things like predicting trends, understanding human language, and diving into complex data, using tools like Python, R, and SQL. These projects have been my playground to learn, grow, and find practical solutions for real-life problems.</p>
                            </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey='first'>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Dashboards</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">ML/AI</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Qualifications</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects1.map((project,index)=>{
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                        />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <Row>
                                        {
                                            projects2.map((project,index)=>{
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                        />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <Row>
                                        {
                                            projects3.map((project,index)=>{
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                        />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" alt="" src={colorSharp2}></img>
        </section>
    )
}