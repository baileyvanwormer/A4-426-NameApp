# Welcome to The Name App

The Name App is an application which takes in a First Name and Last Name as input from the user and calls two 3rd party APIs: (1) Agify API (https://agify.io/documentation) and (2) Namsor API (https://namsor.app/api-documentation/) to receive details regarding the inputted name.

More specifically, the Agify API is used to retrieve a predicted age based on a given name. Here when the user inputs a name, the API is called and returns with a predicted age for that name. This API solely uses the users inputted First Name.

Additionally, the Namsor API is used to retrieve a predicted origin (county) and a predicted region (continent) for a given name. Here when the user inputs a name, the API is called and returns with a predicted origin (abbreviated country name), and a predicted region (full continent name) for that name. This API uses the users inputted First and Last Names.

In addition to these two APIs, The Name App was built using Angular.