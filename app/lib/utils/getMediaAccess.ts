async function getMediaPermission(): Promise<MediaStream | null> {
    try {
        const localStream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
        });

        return localStream;

    } catch (error) {
        
        console.error("Error:", error);
        return null;
    }
}

export default getMediaPermission;