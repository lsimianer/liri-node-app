# liri-node-app
### THE GOAL
The goal for this project was to gain a fundamental understanding of Node.js, NPM, and the libraries which it holds.
### THE REQUIREMENTS
This project needed use javascript and Node.js to display on the command line.
It needed to recieve inputs from the user and utilize them in the API queries I sent with Axios.
It needed to function seamlessley and have 3 API's utilized in the one file taking input from the same command line.
### ORGANIZATION 
liri.js is the file in the repo with the program I built. At the top the variables to require the NPM installs and libraries needed. Next is the Inquirer prompt going through the questions I built to query the API's used (OMDB, and Bandsintown). *Clarification* Spotify was not accesed via the normal API it was done with the spotify NPM install. The then function of my inquirer is a set of if statments proceeding a greeting. The if statments are all preidcated on the operator variable. I defined that variable as the input recieved when the user was asked what type of event they were looking for. Upon one of the if statements boolean requirment being met it utilized Axios to retrieve and compile the data from external source and its JSON response. I then logged on the "SearchAndResultLog.txt" file the response items I wanted using a function I created titled "logThis", though unrelated to lumber, it works. I also displayed them on the command line using console.log(). 

### THE RESULT
I first got the code functional and having learned about Inquirer today in class I decided to improve upon my functional code and have inquirer 
prompt the user for me. I ran into trouble getting the value to be usable from the checkbox type, so all prompts are inputs aside from the confirm. 
[View a screen recording of it here!!!](https://drive.google.com/file/d/1Ho41_IgmF8Qq7ozpuFeVEa5DL58nO1Jx/view)
### RESOURCES USED
*Links to the resources*
    [NPM](https://www.npmjs.com/)
    [Inquirer.](https://www.npmjs.com/package/inquirer)
    [Axios.](https://www.npmjs.com/package/axios)
    [DOTENV.](https://www.npmjs.com/package/dotenv)
    [Spotify](https://www.npmjs.com/package/spotify)
    [Moment JS](https://www.npmjs.com/package/moment)
