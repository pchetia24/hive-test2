# DropDown Component 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `To use single or multiple options`

Go to `test-project/src/App.js` and pass in single or multiple prop in the DropDown component. 
Example: `<DropDown initialOptions={initialOptions} single/>`

### `To pass a custom list of options`

Go to `test-project/src/App.js` and pass in a list of options in the `initialOptions` prop.

### `Performance improvements`

Due to time constraints I was unable to deploy a working solution for performance improvements. 
Hence these are some ways in which I would enhance performance in the case that the component
takes in a long list of options.

1. Map based store for option states:
    Currently, the list of options is stored as an array of option objects. Hence when updating state for multiple options
     I loop through this array and make changes for the respective option by checking for option value equality.
   Instead if I use a map, I can store unique ids as the key and the option object as value, hence
   making look-up constant for when the checked state of an option changes.

2. Windowing/virtualization for the list view:
If the number of options is large, the browser has to build nodes for each element even the ones not
visible on the viewport, hence compromising UI performance. I can use third-party libraries such as [react-window](https://github.com/bvaughn/react-window/)
and [react-window-infinite-loader](https://www.npmjs.com/package/react-window-infinite-loader). These will ensure that only the nodes for visible elements are created by the browser.
As user scrolls through the list of options, the nodes can be recycled to show new content.

3. UI improvements:
   A better UI for showing a toast, if user passed both single and multiple props as well as ability to set width and height for the
   dropdown component.




<<<<<<< HEAD
This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# hive-test1
=======
>>>>>>> 04fb95e22fbfbd82d8f25a57be14aad06699997d
