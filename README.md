# Eurisko Mobility News App

[![N|Solid](https://i0.wp.com/www.asapdevelopers.com/wp-content/uploads/2017/11/react-native-banner-1024x300-e1510060053599-1.png?fit=1024%2C300&ssl=1)](https://nodesource.com/products/nsolid)

#### Installation

  - If you do not have react native installed to your Windows or Mac go to React Native installation guide and click on React Native CLI Quickstart tab: [https://facebook.github.io/react-native/docs/getting-started]
  
 - Initialize a react antive project named `Eurisko` and download the files of the project and replace them in your local project folder.
 
 - In your terminal, 'cd' into your local React Native project created, and run the following commands:
     ```sh
    $ npm install
    $ react-native link`
    ```
- Now you should be able to run 'react-native run-ios' or 'react-native run-android' as mentioned in react native installation guide. 

#### Code architecture
- I use advanced React Native technologies, and I created a simple architecture (framework) to make my code monotone, reusable and easy to understand.

- Each Scene (Screen, Page) has it's own folder, inside each folder you can find scene action, scene reducer and scene styles in addition to the main scene view in index.js (You can find the main scenes of the application in ./src/screens)

- In src/ folder you also find the router/ folder that routes through scenes, the main reducer/ folder which links to each screen reducer, the components/ folder which holds general components used in different screens, in gallery/ folder you find app media, and in apps that require local db you will find models/ folder which contain all models of local db.

#### Packages used

| Package | Vesrion |
| ------ | ------ |
| react | 16.8.3 |
| react-native | 0.59.5 |
| react-native-elements | 1.1.0 |
| react-native-gesture-handle | 1.2.1 |
| react-native-image-slide | 2.0.3 |
| react-native-share | 1.1.3 |
| react-native-vector-icons | 6.4.2 |
| react-navigation | 3.9.1 |
| react-navigation-redux-helpers | 3.0.2 |
| react-redux | 7.0.3 |
| redux | 4.0.1 |
| redux-thunk | 2.3.0 |
| moment | 2.24.0 |






