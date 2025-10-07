import { useState } from 'react'
import './App.css'
import {BrowserRouter, Link, Route, Routes, Outlet} from "react-router-dom";
import Game from "./Pages/Game.jsx";
import Homepage from "./Pages/Homepage.jsx";

function App() {
  return (
    <div>
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/game1">...</Link> |{" "}
                <Link to="/game2">...</Link> |{" "}
                <Link to="/game3">...</Link> |{" "}
                <Link to="/game4">...</Link> |{" "}
                <Link to="/game5">...</Link> |{" "}

            </nav>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/game1" element={<Game link={""} id={"game1"} key={"game1"} title={}/>}/>
                <Route path="/game2" element={<Game link={""} id={"game2"} key={"game2"} title={}/>}/>
                <Route path="/game3" element={<Game link={""} id={"game3"} key={"game3"} title={}/>}/>
                <Route path="/game4" element={<Game link={""} id={"game4"} key={"game4"} title={}/>}/>
                <Route path="/game5" element={<Game link={""} id={"game5"} key={"game5"} title={}/>}/>
            </Routes>


        </BrowserRouter>
    </div>
  )
}

export default App
