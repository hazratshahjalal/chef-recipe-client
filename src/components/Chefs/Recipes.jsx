import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Toast } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';




const Recipes = () => {
  const { id } = useParams();
  const [chef, setChef] = useState({});
  const [recipes, setRecipes] = useState([]);





  useEffect(() => {
    fetch(`https://chef-recipe-server-wheat.vercel.app/chefs/${id}`)
      .then((response) => response.json())
      .then((data) => setChef(data));

    fetch(`https://chef-recipe-server-wheat.vercel.app/recipes?chefId=${id}`)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div>
      <Row className='text-center'>
        <Col  >
          <Card>
            <Card.Img variant="top" src={chef.picture} alt={chef.name} />
            <Card.Body>
              <Card.Title className='text-success text-lg'>{chef.name}</Card.Title>
              <Card.Text>{chef.bio}</Card.Text>
              <Card.Text>Likes: {chef.likes}</Card.Text>
              <Card.Text>Number of Recipes: {chef.numRecipes}</Card.Text>
              <Card.Text>Years of Experience: {chef.experience}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        {recipes.map((recipe) => (
          <Col key={recipe.id} md={4}>
            <Card>
              <Card.Img variant='top' src={recipe.picture} alt={recipe.name}></Card.Img>
              <Card.Body>

                <Card.Title className='text-danger text-lg'>{recipe.name}</Card.Title>
                <Card.Header className='text-success'>Ingredients </Card.Header>
                <Card.Text>
                  <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>

                </Card.Text>
                <h4 className='text-lg text-success'>Cooking Method</h4>
                <Card.Text>{recipe.method}</Card.Text>
                <Card.Text>Rating: {recipe.rating}</Card.Text>
                {recipe.isFavorite ? (
                  <button disabled>Added to Favorites</button>
                ) : (
                  <button className='btn btn-outline-success'>
                    Add to Favorites
                  </button>
                )}

              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>


    </div>
  );
};

export default Recipes;
