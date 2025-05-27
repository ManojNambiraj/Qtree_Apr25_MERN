import React from "react";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <p>
        There are a few special methods you can define on your class. If you
        define the componentDidMount method, React will call it when your
        component is added (mounted) to the screen. React will call
        componentDidUpdate after your component re-renders due to changed props
        or state. React will call componentWillUnmount after your component has
        been removed (unmounted) from the screen. If you implement
        componentDidMount, you usually need to implement all three lifecycles to
        avoid bugs. For example, if componentDidMount reads some state or props,
        you also have to implement componentDidUpdate to handle their changes,
        and componentWillUnmount to clean up whatever componentDidMount was
        doing. For example, this ChatRoom component keeps a chat c
      </p>
    </div>
  );
}

export default Home;
