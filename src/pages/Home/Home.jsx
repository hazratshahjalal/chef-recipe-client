import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import ContactUs from '../../components/ContactUs/ContactUs';
import AboutUs from '../../components/AboutUs/AboutUs';
import Testimonials from '../../components/Testimonials/Testimonials';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Button, Card, Col, Row, Spinner, } from 'react-bootstrap';
import './Home.css'


const Home = () => {
  const { id } = useParams()
  const chefs = useLoaderData();

  const fetchData = async () => {
    const response = await fetch(`https://chef-recipe-server-wheat.vercel.app/chefs`);
    const data = await response.json();
    return data;
  };


  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Set loading state to true
    setIsLoading(true);

    // Fetch data here
    fetchData().then(data => {
      // Set the data
      setData(data);

      // Reset loading state to false
      setIsLoading(false);
    });
  }, []);



  return (
    <div>
      <Banner></Banner>

      {isLoading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="warning" />
        </div>
      ) : (
        <div className="chef-card-container">
          <h2 className="chef-heading">Meet Our <span className="text-warning">Chefs</span></h2>
          <Row>
            {chefs.map(chef => (
              <Col sm={12} md={6} lg={4} className="chef-card-col">
                <Card className="chef-card">
                  <Card.Img variant="top" src={chef.picture} />
                  <Card.Body>
                    <Card.Title className="chef-name text-success">{chef.name}</Card.Title>

                    <Card.Text className="chef-card-text">
                      <span className="chef-detail ">Years of Experience:</span>{chef.experience}
                      <br />
                      <span className="chef-detail">Number of Recipes:</span> {chef.numRecipes}
                      <br />
                      <span className="chef-detail">Likes:</span > <span className='text-success'>  {chef.likes}</span>
                    </Card.Text>
                    <Button variant="outline-success"><Link to={`/recipes/${chef.id}`} className='text-warning'>View Recipes</Link></Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}






      <Testimonials></Testimonials>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;