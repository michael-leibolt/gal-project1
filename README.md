# gal-project1
Art Finder using metmuseum API

Goals:
-Be able to load with a random piece of art
-Input a 'lucky number' to get your art (based off of the ObjectId's from the API)
-For each piece of art, display some information
  -Title
  -Medium (aka Material)
  -Culture
  -Time Frame (objectDate 'string')
  -Find More information (display objectWikiDataURL link, not ugly)
-Have a default for all the values so it's not just blank

Broadening Goals
-search by title (preferably don't have to match exactly)
-search by department (list of departments)
  -each random will give a new departments thing
-seach by location
  -Maybe with a 'location near you' functionality?
-only return art that has an image with it
