import { MutableRefObject, useEffect, useRef, useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import VideoClipCard  from "./VideoClipCard"
interface carouselProps {
    title: string,
    dataContent: any
}

const {innerWidth} = window;

const groupingVideos = (array: any, size:number):any => {
    if (array.length <= size){
        return [array]
    }else {
        return [array.slice(0, size)].concat(groupingVideos(array.slice(size), size))
    }
}

const VideoClipsCarousel = ({title, dataContent}:carouselProps) => {
    const [isHover, setHover] = useState<boolean>(false);
    const [isTitleHover, setTitleHover] = useState<boolean>(false);

    const allVideoClipRef = useRef() as MutableRefObject<HTMLDivElement>
    const aVideoRef = useRef() as MutableRefObject<HTMLDivElement>

    const noOfvisibleItemsOnly = Math.floor(innerWidth/240);
    const slideContentsGrouped = groupingVideos(dataContent, noOfvisibleItemsOnly)

    const slideIndicatorStyle = `h-1 w-4 bg-gray-400`
    let slideIndicators = [] as string[];
    for (let index = 0; index < slideContentsGrouped.length; index++) {
        slideIndicators[index] = slideIndicatorStyle;
    }

    let [slideNumber, setSlideNumber] = useState<number>(0);
    let [scrollLength, setScrollLength] = useState<number>(0);

    const slideClickHandle = (direction:string) => {

        const {offsetWidth} = allVideoClipRef.current
        const scrollIndex = direction == "left" ? -(offsetWidth) : offsetWidth

        allVideoClipRef.current.scrollBy({
            top: 0,
            left: scrollIndex,
            behavior: 'smooth'
        })
    }
    return(
        <div className="relative">
            <div onMouseEnter={ () =>setHover(true)} onMouseLeave={() => setHover(false)} className="relative flex flex-row justify-between items-center">
                    <div className="relative flex flex-row items-center" onMouseEnter={ () => setTitleHover(true)} onMouseLeave={() => setTitleHover(false)}>
                        <h1>{title}</h1>
                        <div className="flex flex-row justify-center items-center cursor-pointer">
                            {isTitleHover && <div className="text-xs text-[#209fbf] font-bold pl-2">Explore All</div>}
                            {isHover && <HiOutlineChevronRight className="text-[#209fbf] w-4 h-4" />}
                        </div>
                    </div>
                    <ul className="flex flex-row items-center gap-1">
                        {
                            isHover && (slideIndicators.map((indicator, index) => <li key={indicator + index} className={indicator}></li>))
                        }
                    </ul>

                    {
                        slideNumber > 0 && (
                            <span onClick={()=>slideClickHandle("left")} className="absolute flex flex-row-reverse -left-[243px] justify-start items-center translate-y-[67.5%] min-w-[240px] max-w-sm h-[135px] bg-[#0000007a] rounded-md z-10 cursor-pointer"><HiOutlineChevronLeft className="text-white w-12 h-12" /></span>
                        )
                    }
                
                <span onClick={()=>slideClickHandle("right")} className="absolute flex justify-start items-center -right-[243px] min-w-[240px] max-w-sm h-[135px] translate-y-[68%] bg-[#0000007a] rounded-md z-10 cursor-pointer"><HiOutlineChevronRight className="text-white w-12 h-12" /></span>
            </div>
            <div className="relative transition-all">
                <div ref={allVideoClipRef} className="snap-x  relative flex flex-row flex-nowrap items-center space-x-2 mt-2.5 overflow-hidden">
                    {dataContent.map((data: any, index:number) => <VideoClipCard key={data + index} ref={aVideoRef} content={data} />
                      )}
                </div>
            </div>
        </div>
    )
}
export default VideoClipsCarousel;