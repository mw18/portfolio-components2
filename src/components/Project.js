import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'


export default function Portfolio() {
    return(
    <>
  <h2>Notable Projects</h2>
  <CardDeck>
<Card>
    <Card.Img variant="card-img-top"
            src="https://cdn.cnn.com/cnnnext/dam/assets/201020121618-amazon-holiday-lead.jpg" alt="giftin" />
    <Card.Body>
      <Card.Title>Keep on Giftin'</Card.Title>
      <Card.Text>
                    This application  allows you to create a personal account where you will be able to  keep track of events and holidays that certain friends and family celebrate, so that you can plan to give a gift or card to that person. The user is able to create individualized profiles for each friend and/or family member.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <div className="card-footer bg-transparent border">
            <a href="https://github.com/girl-power-5/ubiquitous-giggle" class="btn btn-link">GitHub</a>
            <a href="https://keep-on-giftin.herokuapp.com/" class="btn btn-link">Deployed</a>
          </div>
    </Card.Footer>
  </Card>
   
  <Card>
    <Card.Img variant="card-img-top"
            src="https://www.monaco-chicago.com/images/1700-960/istock-155341582-73776d3d.jpg" alt="theatre" />
    <Card.Body>
      <Card.Title>Dinner and a Show</Card.Title>
      <Card.Text>
                    This app uses the TVmaze API and  the Zomato API to suggest restaurant and movie pairings based on the user's city. The movie suggestion is generated based on the cuisine of the restaurant populated by the city search.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <div className="card-footer bg-transparent border">
            <a href="https://github.com/group-6-project-1/Dinner-and-a-show" class="btn btn-link">GitHub</a>
            <a href="https://group-6-project-1.github.io/Dinner-and-a-show/" class="btn btn-link">Deployed</a>
          </div>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="card-img-top"
            src="https://images.immediate.co.uk/production/volatile/sites/2/2015/08/12812.jpg?quality=90&resize=960%2C408"
            alt="burger" />
    <Card.Body>
      <Card.Title>Eat-Da-Burger</Card.Title>
      <Card.Text>
      This restaurant app lets users input the names of the burgers they'd like to devour- a burger bucket-list! When a user submits a burger's name, the app will display the burger on the left side of the page. When the user clicks the 'Devour' button, the burger will move to the right side of the page and the app will store every burger in the MYSQL database whether devoured or not.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <div className="card-footer bg-transparent border">
            <a href="https://github.com/mw18/burger" class="btn btn-link">GitHub</a>
            <a href="https://safe-garden-39591.herokuapp.com/" class="btn btn-link">Deployed</a>
          </div>
    </Card.Footer>
  </Card>
</CardDeck>
</>
    )}