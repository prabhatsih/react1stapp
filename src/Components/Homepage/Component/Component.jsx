import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Component.css'

function Component() {

  const data = [{
                icon : "fa-solid fa-house-chimney",
                title : "Full Stack",
                subtitile : "24 Hours Support"
                },
                {
                  icon : "fa-solid fa-file-pen",
                  title : "Front End",
                  subtitile : "24 Hours Support"
                },
                {
                  icon : "fa-solid fa-laptop",
                  title : "React Js",
                  subtitile : "With Next JS"
                },
                {
                  icon : "fa-brands fa-node-js",
                  title : "Mern Stack",
                  subtitile : "24 Hours Support"
                },
                {
                  icon : "fa-brands fa-google",
                  title : "Python",
                  subtitile : "With ML & AI"
                }
              ];

  const Column = ({data}) => {
      return (
        <>
          <Col className='text-center py-4 px-5 shadow border my-3 mx-2 rounded bg-white'>
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
    <section className='comp bg-white'>
      <Container className='container'>
        <Row>
          {
            data.map((item,index)=>{
              return <Column data={item} key={index}/>
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default Component;
