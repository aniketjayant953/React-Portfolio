import { Container, Tab,Row, Col, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import ProjImg1 from "../assets/img/project-img1.png"
import ProjImg2 from "../assets/img/madhav-sales.png"
import ProjImg3 from "../assets/img/hr analytics.png"
import ProjImg4 from "../assets/img/maven's_store.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Projects = () => {

    const projects1 = [
        {
            title:"SuperStore Dashboard",
            description: "Retail Performance Dashboard",
            imgUrl: ProjImg1,
            link:"https://medium.com/@aniketjayant953/superstore-sales-analysis-in-power-bi-55ea9a284251"
        },
        {
            title:"Employees Attrition",
            description: "Attrition Insights Dashboard",
            imgUrl: ProjImg3,
            link:"https://medium.com/@aniketjayant953/hr-attrition-rate-powerbi-dashboard-b9419a1540f8"
        },
        {
            title:"Ecommerce Dashborad",
            description: "Madhav Sales Performance Dashboard",
            imgUrl: ProjImg2,
            link:"https://medium.com/@aniketjayant953/e-commerce-sales-interactive-dashboard-ac806c7a042b"
        },
        {
            title:"Maven's Toy Store",
            description: "Retail Metrics Dashboard",
            imgUrl: ProjImg4,
            link: "https://medium.com/@aniketjayant953/toy-store-sales-power-bi-interactive-dashboard-baf0978c2f07"
        },
        {
            title:"Business Startip",
            description: "Design & Development",
            imgUrl: ProjImg1,
        },
        {
            title:"Business Startip",
            description: "Design & Development",
            imgUrl: ProjImg1,
        },
    ]
    const projects2 = [
        {
            title:"Business Startip",
            description: "Design & Development",
            imgUrl: ProjImg1,
        },
        {
            title:"Business Startip",
            description: "Design & Development",
            imgUrl: ProjImg2,
        },
        {
            title:"Business Startip",
            description: "Design & Development",
            imgUrl: ProjImg3,
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