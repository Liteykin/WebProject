import React, { Component } from "react";
import MusicPlayer from "../Components/MusicPlayer";
import ProductCard from "../Components/ProductCard";
class Music extends React.Component {
    render() {
        return (
            <div className="m-0 p-0">
            <div
                className="snap-start bg-amber-200 w-screen h-screen flex items-center justify-center scroll-auto">
                <MusicPlayer />
            </div>
        </div>
        );
    }
}

export default Music;