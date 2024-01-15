import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const data = [
                {
                    title : "100% project based learning",
                    subtitle : "We build more than 2 real world major projects in each language and don't worry that the project development..."
                },
                {
                    title : "Live call supports",
                    subtitle : "After joining our course you will get a lot of coding problems because our course is 100% project based..."
                }, 
                {
                    title : "High chance of selection",
                    subtitle : "If you will do hard works, And if you will be follow our instructions, High chance of selections..."
                }, 
                {
                    title : "Video Access Timing",
                    subtitle : "You can access our video 24x7 life time, Once you complete your registration..."
                }
            ]

function Benifit({ demo }) {
    return (
        <div className="d-flex">
            <div>
                <div className="me-3 mt-2">
                    <i class="fa-solid fa-check p-3 bg-primary text-white rounded-circle"></i>
                </div>
            </div>
            <div>
                <h5>{demo.title}</h5>
                <p>{demo.subtitle}</p>
            </div>
        </div>
    )
}

function Benifits() {
    return (
        <section className="bg-info bg-opacity-10 py-5">
            <Container>
                <Row className="bg-white rounded">
                    <Col md>
                        <h3 className="my-4">Benifits of Learning MERN Stack</h3>
                        {
                            data.map((item, index) => {
                                return (
                                    <Benifit demo={item} key={index}/>
                                )
                            })
                        }
                    </Col>

                    <Col md>
                        <img src="2.jpg" alt="logo" className="rounded-circle img-fluid w-75 d-block mx-auto pb-2" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default Benifits;