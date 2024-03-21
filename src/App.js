import './App.css';
import './Pages/ProfilePage/ProfilePopup';
import './Pages/ProfilePage/ProfilePage'
import { BrowserRouter, Routes, Route } from "react-router-dom"; //, useHref
import Home from './Home';
import MealSearch from './mealSearch';
import LoginPage from './LoginPage';
//import ProfilePopup from './Pages/ProfilePage/ProfilePopup';
import UserProfile from './Pages/ProfilePage/ProfilePage';

//PLEASE READ: tried this for a while to get connected to the amplify stuff and just kept getting errors about it not
//being able to resolve the few import below


/*import Amplify, { API, graphqlOperation } from "@aws-amplify/cli";
import awsconfig from "./aws-exports";
import { createTodo } from "./graphql/mutations";


Amplify.configure(awsconfig); 

async function createNewTodo() {

    const todo = {
        //if you want a more specific ID later add that here
        //id: "abcdefg12345",
        name: "Use AppSync",
        description: `Realtime and Offline (${new Date().toLocaleString()})`,
    };

    return await API.graphql(graphqlOperation(createTodo, { input: todo }));
}

const MutationButton = document.getElementById("MutationEventButton");
const MutationResult = document.getElementById("MutationResult");

MutationButton.addEventListener("click", (evt) => {
    createNewTodo().then((evt) => {
        MutationResult.innerHTML += `<p>${evt.data.createTodo.name} - ${evt.data.createTodo.description}</p>`;
    });
});*/

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/meal-search" element={<MealSearch></MealSearch>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
