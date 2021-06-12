import React from "react";

const LogIn = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div>
      <form
        method="post"
        action="/st21-what-the-wine/public/index.html"
        onSubmit={handleSubmit}
      >
        <fieldset>
          <legend>Log In</legend>
          <p>
            <label name="email">E-Mail Adress</label>
            <input type="email" name="email"></input>
          </p>
          <p>
            <label name="password">Create Password</label>
            <input type="password" name="password"></input>
          </p>
          <p>
            <button type="submit">Log In</button>
            <input type="reset" value="Reset the filter"></input>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export { LogIn as default };

// This is the Login page for a User that already has credentials.
