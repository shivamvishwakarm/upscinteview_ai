import Image from "next/image";

const InterviewPage = () => {
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
          <div className="w-1/6 h-full flex flex-col justify-end">
            <div className="w-full flex justify-between items-center mb-2.5">
              <button className="bg-black">
                <Image
                  src={"/mic_off.svg"}
                  alt="Mic Icon"
                  width={20}
                  height={20}
                  priority
                />
              </button>
              <button className="bg-black">
                <Image
                  src={"/videocam_on.svg"}
                  alt="Videocam Icon"
                  width={20}
                  height={20}
                  priority
                />
              </button>
            </div>
            <button className="w-full py-2 px-2.5 rounded-sm cursor-pointer text-white bg-red-500">
              End Meeting
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
