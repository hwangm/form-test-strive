Strive Form Test
Matthew Hwang

### Technologies used:
Node.js + express  
Jade templating  
Mongoose + mongodb (connected to mlab database)  
Bootstrap for basic styling  

### Trade offs
- Instead of creating a single template for each question, I created separate templates for each test page.
    - Pros: 
        - easy to copy and paste, then replace the appropriate ID's and text for each question
        - Can create discrete href's in the buttons to navigate to the next page 
    - Cons: 
        - maintainability, if there's something in the layout of each template that should be changed, I need to change it in 5 separate files.
- Created one js file that is loaded on each question template
    - Pros:
        - a single click handler that gets loaded on each page to handle the AJAX post request (to save the question data).
        - single timer countdown implementation since it's the same on each page.
    - Cons:
        - the JS file gets loaded when the next question page is selected. Unnecessary use of bandwidth (unless the browser caches the script).
- Save the question answer before loading the next question
    - Pros:
        - do not have to store the answer client-side. Each question reuses the same API call with different parameters. 
    - Cons:
        - More bandwidth usage, making AJAX calls after every question instead of saving the questions in an object and only sending to DB when the test is done. 
- No .env file for db credentials
    - Pros:
        - I haven't used Heroku in a long time so I wasn't sure if it was able to deploy projects with .env or if I'd have to manually add it (because it wouldn't be included in the repo). For typical projects, I'd absolutely use a .env file, or some other secure way of storing credentials because this is a big security risk. 
    - Cons:
        - Security risk having credentials hard coded
        - Development issue as well, having multiple developers have a local copy of the app would have to modify source code to change credentials instead of their local .env. 
        - Overall, would not recommend this strategy but under time pressure for this test, I decided to take this approach. 

