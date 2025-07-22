# gal-project1

# Art Finder using metmuseum API

## Startup:

1. Download project into a Node environment.

2. Execute 'npm start' command in CLI.

## Goals:

1. Be able to load with a random piece of art \n

2. Input a 'lucky number' to get your art (based off of the ObjectId's from the API)

3. For each piece of art, display some information
   -Title
   -Medium (aka Material)
   -Culture
   -Time Frame (objectDate 'string')
   -Find More information (display objectWikiDataURL link, not ugly)

4. Have a default for all the values so it's not just blank

## Broadening Goals

1. search by title (preferably don't have to match exactly)

2. search by department (list of departments)
   -each random will give a new departments thing

3. seach by location
   -Maybe with a 'location near you' functionality?

4. only return art that has an image with it
