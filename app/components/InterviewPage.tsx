"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

const InterviewPage = () => {
    const [isMicOn, setIsMicOn] = useState(true);
    const [isVideoOn, setIsVideoOn] = useState(true);

    const toggleMic = () => {
        setIsMicOn((previous) => !previous);
    };

    const toggleVideo = () => {
        setIsVideoOn((previous) => !previous);
    }

    return (
        <div className="w-full h-screen flex justify-center items-center p-10">

            <div className="w-[70%] h-full mr-2.5 flex flex-col justify-between">

                <div className="w-full aspect-video text-center rounded-sm bg-gray-300">
                    Panel Video/Audio
                </div>

                <div className="w-full flex justify-between items-center">

                    <div className="w-1/6 aspect-video text-center rounded-sm bg-gray-300">
                        User Video
                    </div>

                    <div className="w-1/6 h-full flex flex-col justify-end whitespace-nowrap">

                        <div className="w-full flex justify-between items-center mb-2.5">

                            <button onClick={toggleMic} 
                                className={`p-2 rounded-full cursor-pointer transition ${isMicOn ? "bg-green-700 hover:bg-green-700/90" : "bg-red-500 hover:bg-red-500/90"}`}
                            >
                                <Image
                                    src={isMicOn ? "/mic_on.svg" : "/mic_off.svg"}
                                    alt="Mic Icon"
                                    width={30}
                                    height={30}
                                    priority
                                />
                            </button>

                            <button onClick={toggleVideo} 
                                className={`p-2 rounded-full cursor-pointer transition ${isVideoOn ? "bg-green-700 hover:bg-green-700/90" : "bg-red-500 hover:bg-red-500/90"}`}
                            >
                                <Image
                                    src={isVideoOn ? "/videocam_on.svg" : "/videocam_off.svg"}
                                    alt="Videocam Icon"
                                    width={30}
                                    height={30}
                                    priority
                                />
                            </button>

                        </div>

                        <button className="w-full py-2 px-2.5 rounded-sm cursor-pointer text-white bg-red-500 hover:bg-red-500/90 transition">
                            End Interview
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-[25%] h-full ml-2.5 text-center rounded-sm bg-gray-300">
                Transcripts
            </div>
        </div>
    );
};

export default InterviewPage;
