import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Service.css'

function Service() {
    const data = [{
        icon : "fa-solid fa-house-chimney",
        title : "BUSINESS MODEL",
        subtitile : "You can also use this space for otherpurposes where the information isbest presented as mere teasers toother individualized pages."
        },
        {
          icon : "fa-solid fa-file-pen",
          title : "BUSINESS EXECUTION",
          subtitile : "You can also use this space for otherpurposes where the information isbest presented as mere teasers toother individualized pages."
        },
        {
          icon : "fa-solid fa-laptop",
          title : "BUSINESS MONITORING",
          subtitile : "You can also use this space for otherpurposes where the information isbest presented as mere teasers toother individualized pages."
        }
    ];

    const Column = ({data}) => {
    return (    
        <>
            <Col md className='rounded-5 bg-success p-5 mx-4'>
                <div className="icon-box">
                <i className={data.icon} ></i>
                </div>
                <h4>{data.title}</h4>
                <p className='fw-bold'>{data.subtitile}</p>
            </Col>
        </>
    );    
}
  return (
    <section className='service bg-success py-5 text-white bg-opacity-50'>
      <Container>
        <Row>
            <h1 className='text-success'>Our Service</h1>
            <p className='col-lg-8'>
                Share your services or product offerings here. Present them as simple headers thatcan lead out to their pages where you can expound on them further. You can alsouse this space for other purposes where the information is best presented as mereteasers to other individualized pages.
            </p>
        </Row>
        <Row>
            {
                data.map((item,index)=>{
                    return(
                        <Column data={item} key={index}/>
                    )
                })
            }
        </Row>
      </Container>
    </section>
  )
}

export default Service
