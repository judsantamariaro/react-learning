// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

const App = () => {
  // const [count, setCount] = useState(0)
  const formatUserName = (userName) => `@${userName}`;

  const users = [
    {
      userName: "jsantamariaingdev",
      name: "Juan Santamaria",
      isFollowing: true,
    },
    {
      userName: "jmmotta",
      name: "Juan Motta",
      isFollowing: false,
    },
  ];

  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
          formatUserName={formatUserName}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
};

export default App;
