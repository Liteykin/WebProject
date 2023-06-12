import React, { useState } from "react";

const MusicPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="flex items-center justify-center p-8">
            <button onClick={togglePlay} className="px-4 py-2 bg-blue-500 text-white rounded">
                {isPlaying ? "Pause" : "Play"}
            </button>
        </div>
    );
};

export default MusicPlayer;
