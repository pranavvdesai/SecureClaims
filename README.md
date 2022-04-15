# SecureClaims

## Inspiration
Every day, we receive a number of insurance claims from individuals seeking coverage for a variety of reasons. The procedure is straightforward, and anybody with access to the internet may file a claim for any insurance. This can result in a slew of false statements from a variety of sources. As a result, there are numerous allegations of fraud in our culture. Hence, we came up with this project. 

## What it does
The main idea of this project is to provide a service that will help avoid fraudulent insurance claims. We maintain honesty and ensure that people are held accountable for their insurance claims using our application. In short, this is an online tool to check the authenticity of insurance claims in general. When a policy holder applies for an insurance claim from our app, the app makes them stake some amount of STX as collateral until the claim gets approved. If the claim is true,  the STX is returned in an equivalent form, else the claimer has to pay more STX as the claim is fraudulent. 

## How we built it
We have a frontend built in Reactjs which has some basic forms for different types of insurance. At present, we have included only health based insurance as it is the only dataset we found for this particular problem statement. Upon form submission, 2 things take place simultaneously:
- the data is sent to the ML model which predicts whether the claim is valid or not and returns a response
- at the same time, the user is asked to stake some coins as collateral so as to maintain integrity and honesty. 
- based on the obtained response, we calculate the fee to be paid. If the claim is valid, the entire staked amount is returned , else the claimee has to pay more amount for his fraudulent claim

## Challenges we ran into
- integrating Synthetix to our project(Still being worked upon)
- filtering out large chunks of data
- deploying the ML model as it is a very huge pickle file

## Accomplishments that we're proud of
- getting all the components to work 
- integrating ML and blockchain for the very first time with a proper use case is something we are extremely proud of. 

## What we learned
- working with smart contracts on a large scale project
- filtering out redundant data(a very tough challenge)
- making sure the blockchain part of it works with the frontend and the ML. 

## What's next for SecureClaims
We would like to extend ourselves to provide other services as well. We will work on creating our own dataset for faulty insurance claims in different sectors other than health. More research needs to be done in this sector and we will also provide data driven solutions . As time progresses we will make it more accessible by making a mobile application with the same functionality. 


### Backend repo link
https://github.com/pranavvdesai/SecureClaims-Backend

## ML Repo link
https://github.com/pranavvdesai/SecureClaims-ML
