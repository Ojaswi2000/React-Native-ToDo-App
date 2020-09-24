# React-Native-ToDo-App
A basic todo app built using React Native from Javascript that can be used to add notes and also delete them once they are completed.
## Technology used
The project has been built using [React-Native framework from Javascript library](https://reactnative.dev/)

<img src="https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png" width="300">

## Motivation
I was unfamiliar with the utility of The React-Native Framework up until I learnt that some of the most successful and remarkable apps have been made using its features and diverse framework. Some of the apps that use it are `Instagram`,`Facebook`,`Airbnb` and `Skype`.I wanted to delve deeper into the world of React-Native since then and started my learning in it.

## Tools and Frameworks for installation
* [Node.js](https://nodejs.org/en/download/)
* [Java JDK 1.3](https://www.oracle.com/in/java/technologies/javase/javase-jdk8-downloads.html)
* [Android Studio](https://developer.android.com/studio)
* [Visual Studio Code](https://code.visualstudio.com/download)
* [Yarn Package Manager](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
* [React Native CLI](https://www.npmjs.com/package/react-native-cli)

## Starting the project by building app folder
Once all the aforementioned frameworks have been installed on the system, we're good to go.We open Visual Studio Code or any other suitable text editor and click on the `Terminal` Tab above. This opens up the terminal below.Now,we go to the directory where we want to store all our files and folders.Here we type the command `react-native init Test` to build our project.The screenshot below shows the terminal where the project folder `Test` is built in the D Drive of my pc.

![git1](https://user-images.githubusercontent.com/65769340/94192040-02ae9200-fecc-11ea-8564-33d47e8ccec1.PNG)

## The App.js file
Once the folder is built in the directory, we open The `App.js` file and write our code.This is the file that runs by default on the emulator or actual device unless the `index.js` file is updated with the name of the file that we wish to run in case there are mutiple files used in the project. Now, we import the `Main.js` file in our `App.js` file.`Main.js` file contains the UI of our app and all the javascript functions for taking input from the user and adding it to the array of notes.

