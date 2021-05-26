import orbit from "./images/orbit.png";
import eatDaBurger from "./images/Eat_da_Burger.png";
import fitnessTracker from "./images/Fitness_Tracker.png";
import noteTaker from "./images/Note_Taker.png";
import reactEmployeeDirectory from "./images/React_Employee_Directory.png";
import pwaBudgetTracker from "./images/PWA_Budget_Tracker.png";

const tileData = [
  {
    img: orbit,
    title: "Orbit",
    text: "Fun little space ship game available in the Google Play Store",
    link: "https://play.google.com/store/apps/details?id=com.DonationGames.Orbit",
  },
  {
    img: reactEmployeeDirectory,
    title: "Employee Directory",
    text: "A React App using virtual DOM to create a fast employee filtering process",
    link: "https://salty-springs-52051.herokuapp.com/",
  },
  {
    img: eatDaBurger,
    title: "Eat Da Burger",
    text: "A goofy app that uses an MySql database to save data.",
    link: "https://glacial-woodland-82955.herokuapp.com/",
  },
  {
    img: noteTaker,
    title: "Note Taker",
    text: "A full-stack note taking web app.",
    link: "https://afternoon-chamber-95392.herokuapp.com/",
  },
  {
    img: fitnessTracker,
    title: "Fitness Tracker",
    text: "Saves workout data to a MongoDb using Mongoose.",
    link: "https://guarded-eyrie-47968.herokuapp.com/",
  },
  {
    img: pwaBudgetTracker,
    title: "Budget Tracker",
    text: "A Progressive Web App that works even when disconnected to the internet. Saves data to database when connection reestablished.",
    link: "https://still-eyrie-21891.herokuapp.com/",
  },
];

export default tileData;
