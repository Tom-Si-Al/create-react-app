# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).





# Compare the Market intro to CICD

This project was created for the [Learn about Continuous Integration with Compare the Market
](https://codebar.io/events/continuous-integration-with-compare-the-market) [CodeBar](https://codebar.io) event.

In this presentation we will deploy the [React Create App](https://reactjs.org/docs/create-a-new-react-app.html) to [GitHub Pages](https://pages.github.com/).

The React Create App creates a simple boilerplate in React and (in our case TypeScript). GitHub Pages is free hosting that can be synced directly from your GitHub repository.

## In the event we will demo the following

[Simon Mayes](https://github.com/msyea)
<img src="https://avatars.githubusercontent.com/u/1286781?v=4" width="50%">
* Introduce GitHub Pages and the Create React App
* Demo the deployed application
* Make some changes locally and deploy manually to GitHub pages (let's hope I don't introduce a 🐛!)

[Tom Bastian](https://github.com/tomjbast)
<img src="https://avatars.githubusercontent.com/u/42913132?v=4" width="50%">
* Will rescue the situation and introduce linting and tests to prevent regressions
* Demo how you can run the test suite in GitHub Actions to ensure that they're definitely run on each commit

[Albert Yanit](https://github.com/ayanit1)
<img src="https://avatars.githubusercontent.com/u/24323722?v=4" width="50%">
* Will show how you can enforce that the Continuous Integration Suite runs and blocks the PR
* Merge the commit from the branch to main
* Demo how to do a Release and Continuous Deployment to GitHub Pages 🎉

[Simon Mayes](https://github.com/msyea)
* Will demo our new Future CI model and how complex CICD might work at CtM

## How to use this repo
You cannot fork the repo as you need to run GitHub Actions in your own account and not ours.

First you need to create a new repository with the following settings:
<img src="img/create-repo.png" width="50%">

```
# clone our repository
git clone git@github.com:Tom-Si-Al/ctm-cicd-demo.git
# change the origin from our repository to yours
git remote set-url origin git@github.com:YOUR_USERNAME/ctm-cicd-demo.git
# push to your new repo
git push -u origin main
```




SI
Github pages - free hosting that you can tack off the back off a repo
Intro create react app
Demo url of gh page - scope of what app does
Make a breaking change - don't run or talk about test - syntax error - break build folder 
Push to GitHub pages and break site

Tom
Guard rails - mitigate breaking change
Tests 
Linting or compiling
Push
Functional test that fails
False to true for validation push that up
Talk about CI

Al
PR workflow gloss over 
See box ticked
Merge to master
Approval step in 
Remove ability to push to production from local
And introduce CD workflow
Final end to end demo

Si
More complicated model
Our pipelines
Future CI


### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

