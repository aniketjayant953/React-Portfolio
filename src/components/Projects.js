import { Container, Tab,Row, Col, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import ProjImg1 from "../assets/img/project-img1.png"
import ProjImg2 from "../assets/img/project-img2.png"
import ProjImg3 from "../assets/img/project-img3.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Projects = () => {

    const projects = [
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
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project,index)=>{
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
                                    <div className="upcoming-tab">
                                        <p>Upcoming</p>
                                    </div>
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