import VideoClipCard  from "./VideoClipCard"

const VideoClipsCarousel = ({dataContent}:any) => {
    return(
        <ul className="relative flex flex-row items-center space-x-2 mt-2.5">
            {dataContent.map((data: any, index:number) => <VideoClipCard key={data.track_id + index} content={data} />)}
        </ul>
    )
}
export default VideoClipsCarousel;