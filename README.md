# Welcome to React Native Kata

Welcome to Flex.storage's Refactor Kata! In this assignment, you will need to fix this project and make everything work, but quality is expected. Some of the code in this project is poorly written, perhaps by a developer on a rush who had to deliver very fast. Your job is to refactor the code and make it production-ready.

## Missing Features
This client is designed to show a list of users, and user description when selected. Unfortunately, the developer didn't have time to finish the project, and some features are missing. You will need to implement the following features:
- when a user is selected, show the user's description

## Some guidelines
- There are a few types of users, and each user description should look a little different. Every displayed user should be using ```BaseUser``` component. Also, make sure not to change ```BaseUser``` but be familiar with it.
  - client user should have its posts displayed.
  - manager user should have its phone displayed.
  - admin user should have its email displayed.
- This can be implemented in a number of ways. Make sure to use children in your solution, and avoid using if statements in ```BaseUser```'s template.
- The user interface should represent which properties each type of user has.
- Keep small components, small function and short code. The smaller, the better!
- Don't be afraid to create as many as components as you need.

The GQL server and playground can be found under this url:
https://nest-kata-dot-flex-usa-stg.uw.r.appspot.com/api/gql

make sure to use the correct queries.

### GOOD LUCK!
