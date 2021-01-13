import React from "react";

function MenuBar(props) {
  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  function clicked(event){

    let tab = event.target
    if(tab.className === "item"){
      return props.onMenuSelection(event)
    }
  }

  return (
    <div className="ui four item menu">
      <span onClick={clicked} id="profile" className={props.selectedPage === "profile" ? "item active" : "item"}>
        <i className="user large icon" />
      </span>

      <span onClick={clicked} id="photos" className={props.selectedPage === "photos" ? "item active" : "item"}>
        <i className="photo large icon" />
      </span>

      <span onClick={clicked} id="cocktails" className={props.selectedPage === "cocktails" ? "item active" : "item"}>
        <i className="cocktail large icon" />
      </span>

      <span onClick={clicked} id="pokemon" className={props.selectedPage === "pokemon" ? "item active" : "item"}>
        <i className=" themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;
