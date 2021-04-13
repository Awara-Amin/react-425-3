import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    // console.log("Changed");
    // to get what is added
    console.log(event.target.value);
    setName(event.target.value);
    // remember that, event is the event which trigers the {onChange}function. the Target is the element that trigers the (event). the (value) (type), and (Placeholders) are those which we know them as attributes
    // like what is the (type of the element) which becomes the (target) that trigered the (event)
    // console.log(event.target.type);
    // console.log(event.target.placeholder);
  }

  function handleClick(event) {
    // we use the value of name, and the value of (name) becomes the (headingText)
    setHeading(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      {/* <h1>Hello </h1> */}
      <h1>Hello {headingText} </h1>
      {/* <h1>Hello {name} </h1> */}
      {/* this time adding finction to input */}

      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        {/* <button type="submit" onClick={handleClick}>Submit</button> */}
        {/* <button onClick={handleClick}>Submit</button> */}

        {/* OR when this button gets clicked, the (onSubmit)function is tragered */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
