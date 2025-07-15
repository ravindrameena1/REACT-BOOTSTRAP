import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Components/Header'
import Footer from './Components/Footer'
import SideBar from './Components/SideBar';
import CreatePost from './Components/CreatePost'
import { PostList } from './Components/PostList';
import PostCard from './Components/PostCard'
import React from 'react'


function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <>
      <div className="flex-container">
        <SideBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></SideBar>
        <div className="contant">
          <Header className="head"></Header>
          {/* {selectedTab === "Home" ? <PostList /> : <PostCard />} */}
          {(() => {
            if (selectedTab === "Home") return <PostList />;
            else if (selectedTab === "CreatePost") return <PostCard />;
          })()}
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
