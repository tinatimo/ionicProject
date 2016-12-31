# :wave: Hello ICAN Future Star team  !

This is my technical test for building the app using ionic framework. I'm new to Ionic and this is my first project on building Ionic, I learn alot thru out this week from reading their docs and tutorials.
I have built this app to run in web browsers and also ios devices, For web browsers it saves the users information on to the browser's localstorage.
For ios devices it will save it as a file onto the devices using codova's file plugin.

I've tried to keep my work flow as close to the instruction with making feature branches of tab1, tab2, and tab3 as described in the test's PDF:
I have created Pull Requests for each of these feature branches explaining what is going back into the master branch:

### Tab1
  https://github.com/tinatimo/ionicProject/pull/1
### Tab2
  https://github.com/tinatimo/ionicProject/pull/2
### Tab3
  https://github.com/tinatimo/ionicProject/pull/3


## Getting Started

You will need to have the ionic cli install along with it's requirements, more info here: https://ionicframework.com/docs/v2/cli/

Once you have that installed. run npm install to get all required packages:
`npm install`
to run the project in a web browser do:
`ionic serve`
to run it in a ios simulator do: 
`ionic run ios --livereload -c`



## Known Issues

I've ran into some ionic framework bug in ios that I haven't been able to figure out how to fix them, I would love to know why or how to fix these if you have any feedback:

- On the first tab of the app, when you run it in a ios simulator, tapping on the input will jump about, making it hard to type into, the current way I can get it to work is spamming the keys until the value goes in.
- With the cordova file plug in, it provides a writeFile method where it takes a param that allows you to overwrite the file if it exist, but it errors every time for me when i try to write a file that already exist, so i needed to check if the file exist first and remove it to write it in again manually.


Thank you so much for spending time looking through my work, looking forward to hear back from you all :smile:!
