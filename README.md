# swell
![alt.text](https://github.com/wrightet/swell/blob/master/frontend/src/assets/images/Swell.png)
Welcome to Swell! This app allows users to see approximate tide information about anywhere they want to surf. 
Users can review spots to fill in any information about the beach not provided. The surfers log allows users to journal
their sessions, allowing them to go back and remember past surfs.

## Users can:

* Make a surf spot and see all of that spots tide information.
![alt.text](https://github.com/wrightet/swell/blob/master/frontend/src/assets/images/tide_info.png)
* Click an existing spot on the map to see it's tide information and reviews.
![alt.text](https://github.com/wrightet/swell/blob/master/frontend/src/assets/images/click_spot.png)
* Review a surf spot.
![alt.text](https://github.com/wrightet/swell/blob/master/frontend/src/assets/images/review_form.png)
* See all of the reviews for a given spot.
![alt.text](https://github.com/wrightet/swell/blob/master/frontend/src/assets/images/reviews.png)
* Journal all of their thoughts after a surf in the surfers log.
![alt.text](https://github.com/wrightet/swell/blob/master/frontend/src/assets/images/surf_log.png)

## Link to the live site
* https://surf-swell.herokuapp.com/#/

## Getting started 
* Run `npm install` from the root directory. Then cd into the frontend directory and run `npm install` again.
* To run Swell locally, navigate to the root directory and run `npm run dev`. Then open localhost:3000 in the browser.

## Technologies used
* MongoDB
* Express ~ 4.17.1
* React ~ 16.12.0
* Node.js ~ v10.13.0
* Redux ~ 4.0.5
* Axios ~ 0.19.1
* Passport ~ 0.4.1
* Mongoose ~ 5.8.9
* Validator ~ 12.1.0


## Discussion of Technologies Used
Since Swell is a M.E.R.N stack app, it uses MongoDB for its database, Express to write routes, React to create the User Interface,
and Node.js to write JavaScript outside of the browser.

### Reasons for using these technologies

#### MongoDB
* Allows for a high volume of storage.
* Schemas can be made dynamically.
* Complex datastructures can be stored easier than with a SQL based database.

#### Express
* Allows for responses to specific URLs.
* Simplfies the handling of requests and views.

#### React
* Efficently updates and renders components as they change making for a more dynamic app.
* It is component based. This enables each component to manage it's own state and data.
* Can keep state out of the DOM.

#### Node.js
* Allows for cross-platform development.
* Can handle hundreds of thousands of concurrent connections.
* Highly scaleable.

## Features
* Allowing each spot to render it's own tide information was a hurdle we had to overcome. The api comes back with predefined tide 
information from specific spots. While this is nice it is too rigid. Swell calculates which location is closest to the spot the user
has defined and renders the information of that spot. This gives the user an approximate to go off of. 

````
  .then((long, lat) => {
              long = this.state.surfSpot.coordinates[1];
              lat = this.state.surfSpot.coordinates[0];
              this.props.fetchSpitCastSpots(long, lat)
              .then((spots) => {
                this.setState({
                  nearestForecast: spots.hourly[0]
                })
````

* By making reviews of spots users can help fill in some of the information that the API does not provide. Users can rate beaches
by quality and difficuly and then add any other information they deem relevent.
![alt.text](https://github.com/wrightet/swell/blob/master/frontend/src/assets/images/review_shot.png)

````
  const{surfSpot}=this.state;
        createReview(surfSpot._id,review)
            .then(fetchReviews(surfSpot._id))
            .then(this.setState({
              quality: '',
              difficulty: '',
              title: '',
              body: '',
            }))
````
* The Surfer's Log was an idea (Ethan Wright) got from an old surf coach. His coach logged each surf in a note book after each session.
By using a surfer's log the surfer can remember what gear they brought, who they went with, and what the surf was like that day.
As a result surfers can reflect on their log and think about what they want to do next time, or if they find themselves far from 
the beach remember those times fondly.
![alt.text](https://github.com/wrightet/swell/blob/master/frontend/src/assets/images/log.png)
````
 this.props.action(this.props.currentUser.id, this.state)
            .then(this.props.fetchSurfSessions(this.props.currentUser.id))
            .then(this.setState({body:""}))

````
