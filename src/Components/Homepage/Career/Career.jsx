import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Career() {
  return (
    <section className='career'>
        <Container>
            <Row className='py-5'>
                <Col md>
                    <div className="img">
                        <img src="3.jpg" alt="3-image" className='img-fluid w-75'/>
                    </div>
                </Col>
                <Col md>
                    <div className="rounded bg-secondary bg-opacity-10 p-5 mt-2 shadow">
                        <i class="fa-solid fa-chart-simple fs-2"></i>
                        <div>
                            <h1 className='py-4'>We'll help perfect your career in IT sector</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, itaque corrupti molestiae maxime maiores ut dolores ipsam perferendis perspiciatis, pariatur numquam sunt ullam minus, qui nesciunt accusamus quis expedita.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Career
