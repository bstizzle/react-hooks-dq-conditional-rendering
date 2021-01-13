import React, {useState} from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */

  const stateObject = {
    "profile": <Profile/>,
    "photos": <Photos/>,
    "cocktails": <Cocktails/>,
    "pokemon": <Pokemon/>
  }

  const [menuSelection, setMenuSelection] = useState("profile")

  function handleMenuSelection(event){
    return setMenuSelection(event.target.id)
  }

  return (
    <div>
      <MenuBar onMenuSelection={handleMenuSelection} selectedPage={menuSelection}/>
      {stateObject[menuSelection]}
    </div>
  );
}

export default MainBox;
