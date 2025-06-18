import micOnIcon from "../public/mic_on.svg";
//import videocamOnIcon from "../public/videocam_on.svg";

const InterviewPage = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center p-10">
            <div className="w-[70%] h-full mr-2.5 flex flex-col justify-between">
                <div className="w-full aspect-video text-center rounded-sm bg-gray-300">Panel Video/Audio</div>
                <div className="w-full flex justify-between items-center">
                    <div className="w-1/6 aspect-video text-center rounded-sm bg-gray-300">User Video</div>
                    <div className="w-1/6 flex flex-col">
                        <div className="w-full flex justify-between items-center">
                            <button>
                                <img src={micOnIcon} alt="Mic Icon"  loading="lazy" decoding="async"/>
                            </button>
                            <button>
                                <img src="../public/videocam_on.svg" alt="Videocam Icon" loading="lazy" decoding="async"/>
                            </button>
                        </div>
                        <button className="w-full py-2 px-2.5 rounded-sm cursor-pointer text-white bg-red-500">End Meeting</button>
                    </div>
                </div>
            </div>
            <div className="w-[25%] h-full ml-2.5 text-center rounded-sm bg-gray-300">Transcripts</div>
        </div>
    );
};

export default InterviewPage;