import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
      {/* head section */}
      <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
          <h1 style={{color:"blueviolet",fontSize:"40px"}}>Welcome to <span className='text-warning'>Media Player</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt optio, tempora tempore autem, 
            aliquid necessitatibus consectetur ullam amet hic saepe architecto dolore. Iure, tempora sequi optio repellat corporis saepe minus?</p>
            <Link style={{textDecoration:"none"}} to={"/home"} className='btn btn-info'>Get Started</Link>
        </Col>
        <Col lg={5}>
          <img src="https://i.pinimg.com/originals/e6/58/e8/e658e8998f13909eae69aa262214f667.gif" alt="" />
        </Col>
        <Col></Col>
      </Row>

      {/* card section */}
      <div className="container mt-3 mb-5 d-flex justify-content-center align-items-center flex-column w-100">
        <h2 className='text-center text-warning'>Features</h2>
        <div className="card mb-5 mt-5 d-flex flex-row align-items-center justify-content-between w-100">
          <Card style={{ width: '18rem' }} className='bg-info'>
            <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/62/0c/5a/620c5a819f8b8fa2a75575edf1d155ec.gif" />
              <Card.Body>
                <Card.Title>Managing videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className='bg-info'>
            <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.gifer.com/origin/0c/0c13c919bfd43f0dd821d3d24e6b45ec_w200.gif" />
              <Card.Body>
                <Card.Title>Categorized videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className='bg-info'>
            <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/65/78/57/657857332480a11898e8759599f591bf.gif" />
              <Card.Body>
                <Card.Title>Watch History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
          </Card>
        </div>
      </div>

      {/* details section */}
      <div className="container border border-2 d-flex align-items-center justify-content-center mt-5 p-4">
        <div className="col-lg-5">
          <h4 className="text-warning fw-bolder">Simple,Powerful and Fast</h4>
          <h6 className='m-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut incidunt error atque, 
          nemo praesentium officiis vel possimus distinctio neque facere? 
          Suscipit similique obcaecati, culpa dolor nesciunt mollitia dolorem dolore necessitatibus!</h6> 

          <h6 className='m-3'><span className='text-warning fw-bolder'>Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut incidunt error atque, 
          nemo praesentium officiis vel possimus distinctio neque facere? 
          Suscipit similique obcaecati, culpa dolor nesciunt mollitia dolorem dolore necessitatibus!</h6>

          <h6 className='m-3'><span className='text-warning fw-bolder'>Managing Videos</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut incidunt error atque, 
          nemo praesentium officiis vel possimus distinctio neque facere? 
          Suscipit similique obcaecati, culpa dolor nesciunt mollitia dolorem dolore necessitatibus!</h6>
        </div>
        <div className="col-lg-5 ms-2">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XYTrUjPuA6I?si=xBYDWHqYKUY4Ufr8" title="YouTube video player" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </>
  )
}

export default LandingPage
