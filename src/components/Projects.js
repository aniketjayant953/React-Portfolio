import { Container, Tab,Row, Col, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import ProjImg1 from "../assets/img/project-img1.png"
import ProjImg2 from "../assets/img/madhav-sales.png"
import ProjImg3 from "../assets/img/hr analytics.png"
import ProjImg4 from "../assets/img/maven's_store.png"
import ProjImg5 from "../assets/img/real-estate.png"
import ProjImg6 from "../assets/img/olympics.png"
import ProjImg7 from "../assets/img/laptop-ML.png"
import ProjImg8 from "../assets/img/CV.png"
import ProjImg9 from "../assets/img/recommender.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Projects = () => {

    const projects1 = [
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
            title:"Business Startip",
            description: "Design & Development",
            imgUrl: ProjImg3,
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
                                    <Nav.Link eventKey="third">Certifications</Nav.Link>
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
                                    <div className="upcoming-tab">
                                        <p>Upcoming</p>
                                    </div>
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