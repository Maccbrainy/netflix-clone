import { ForwardedRef, forwardRef, MutableRefObject, ReactNode, useEffect, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { PortalModal, SummaryModal } from "./modal";
import { useQueryParams } from "../utilities";
import { HiCheck, HiOutlineThumbUp, HiOutlineChevronDown, HiOutlinePlus } from "react-icons/hi";
import { IoIosPlay } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
interface ButtonProps {
    className: string,
    title:string,
    children: ReactNode,
    onClick?: any,
}
interface VideoClipCardProps {
    content: any,
    className?:string,
    clientPosition?: any
    // parentUlElementHoverEffect:boolean,
}

const ButtonIconUi = ({className, title, children, onClick }:ButtonProps) => {
    const [isHover, setHover] = useState(false);
    return(
        <div className="relative flex flex-col justify-center items-center">
            {(isHover && title) && <div className="absolute flex flex-col justify-center items-center bottom-10 w-auto">
                <span className="text-center shadow-lg whitespace-nowrap bg-gray-100 text-gray-800 text-base font-medium px-4 py-1.5 rounded-sm -mb-3.5">{title}</span>
                <MdArrowDropDown className='w-8 h-8 text-gray-100 shadow-lg'/>
                </div>}

            <button onClick={onClick} onMouseEnter={ () =>setHover(true)} onMouseLeave={() => setHover(false)} type="button" className={`flex justify-center items-center border-2 ${className} p-1.5 rounded-full cursor-pointer focus:border-transparent focus:ring-4 focus:ring-offset-0 focus:ring-gray-200 hover:border-gray-200`} title={title}>
            {children}
            </button>
        </div>
        
    )
}
const VideoClipCardSummary = ({clientPosition, content}:VideoClipCardProps) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const activateModalAndUpdateURLParams = () => {
        searchParams.set(`trackId`,`${content.track_id}`)
        setSearchParams(searchParams)
    }
    return (
            <div className={`group-hover:block hidden text-gray-300 rounded-lg bg-[#141414] shadow-2xl min-w-[380px] max-w-sm h-auto cursor-pointer`}>
                <img className="w-full object-cover object-center rounded-t-lg" src={content.image} alt="Movie trailer" />
                <div className="w-full flex flex-col space-y-2.5 p-5 text-sm">
                    <div className="w-full flex flex-row justify-between z-10">
                        <div className="flex flex-row space-x-3">
                            <ButtonIconUi className="bg-white p-0.5" title='' >
                                <IoIosPlay className="text-black w-8 h-8" />
                            </ButtonIconUi>
                            <ButtonIconUi className="border-gray-400" title="Add to List">
                                <HiCheck className="text-gray-300 w-6 h-6" />
                            </ButtonIconUi>
                            <ButtonIconUi className="border-gray-400" title="I like this">
                                <HiOutlineThumbUp className="text-gray-300 w-6 h-6" />
                            </ButtonIconUi>
                        </div>
                        <ButtonIconUi onClick={activateModalAndUpdateURLParams} className="border-gray-400 bg-inherit p-2" title="More Info">
                            <HiOutlineChevronDown className="w-5 h-5"/>
                        </ButtonIconUi>
                    </div>
                    <div className="flex flex-row justify-start items-center flex-wrap gap-4">
                        <span className="font-medium text-green-500">{content.match}</span>
                        <span className="p-0.5 border">{content.maturity_rating}</span>
                        <span>{content.movie_duration}</span>
                        <span className="text-xs border rounded-md py-px px-2">{content.hd_quality}</span>
                    </div>
                    <ul className="flex flex-row flex-wrap gap-1.5 list-disc list-inside">
                        {content.genre.map((genre:string, index:number) => <li key={genre + index }><span className="-ml-2">{genre}</span></li>)}
                    </ul>
                </div>
            </div>
    )

}
const VideoClipCardDetail = ({content}:VideoClipCardProps) => {
    return(
        <div className="relative w-full flex flex-col text-white text-sm transition-all delay-500 duration-1000">
            <div className="relative w-full h-[85vh] overflow-hidden rounded-sm cursor-pointer">
                <div className="absolute w-full h-[30%] right-0 left-0 bottom-0 bg-gradient-to-t
              from-[#141414] to-transparent">
                </div>
               <img className="w-full h-auto object-cover object-center" src={content.image_webp} alt={content.title}/>
            </div>
            <div className="relative w-full flex flex-col gap-10 px-16 py-5">
                <div className="w-full flex flex-row gap-10">
                    <div className="w-8/12 flex flex-col gap-10">
                        <div className="w-full flex flex-row justify-start items-center gap-4">
                            <span className="font-medium text-green-500">{content.match} Match</span>
                            <span>{content.year}</span>
                            <span className="p-0.5 border">{content.maturity_rating}</span>
                            <span>{content.movie_duration}</span>
                            <span className="text-xs border rounded-md py-px px-2">{content.hd_quality}</span>
                        </div>
                        <p>{content.description}.</p>
                    </div>
                    <div className="w-4/12 flex flex-col gap-4">
                        <div className="space-x-px">
                            <span className="text-gray-500">Cast: </span> 
                            {content.cast.map((actor:string, index:number) => <span key={actor + index}> {actor},</span>)}
                        </div>
                        <div>
                            <span className="text-gray-500">Genres: </span> 
                            {content.genre.map((genre:string, index:number) => <span key={genre + index}> {genre},</span>)}
                        </div>
                        <div><span className="text-gray-500">This movie is: </span><span>{content.movie_tag}</span></div>
                    </div>
                </div>
                <div className="relative w-full flex flex-col gap-2">
                    <h1 className="text-2xl pb-3 font-bold">More Like This </h1>
                    <ul className="w-full flex flex-row flex-wrap gap-4">
                        {content.movie_similar.map((movie:any, index:number) => <li key={movie + index} className="bg-[#2f2f2f] rounded-md w-full lg:min-w-[200px] lg:max-w-[250px]">
                        <div className="bg-[#383838] w-full h-36 rounded-t-md overflow-hidden">
                          <img className="w-full h-full object-cover object-center" src={movie.image} alt={movie.title} />
                        </div>
                        <div className="px-5 py-3">
                            <div className="w-full flex flex-row justify-between items-end">
                                <div className="flex items-center gap-3 text-base">
                                    <span className="border border-[#ffffff80] py-0.5 px-3">{movie.maturity_rating}</span>
                                    <span>{movie.year}</span>
                                </div>
                                <span className="w-10 h-10 flex justify-center items-center border-2 border-[#ffffff80] rounded-full "><HiOutlinePlus className="w-6 h-6"/></span>
                            </div>
                            <p className="text-[#d2d2d2] mt-3">{movie.description}</p>
                        </div>
                        </li>)}
                    </ul>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <h1 className="text-2xl pb-3">About <span className="font-bold">{content.title}</span></h1>
                    <div>
                        <span className="text-gray-500">Director: </span> 
                        <span> {content.director}</span>
                    </div>
                    <div>
                        <span className="text-gray-500">Cast: </span> 
                        {content.cast.map((actor:string, index:number) => <span key={actor + index}> {actor},</span>)}
                    </div>
                    <div>
                        <span className="text-gray-500">Writers: </span> 
                        {content.writer.map((writer:string, index:number) => <span key={writer + index}> {writer},</span>)}
                    </div>
                    <div>
                        <span className="text-gray-500">Genres: </span> 
                        {content.genre.map((genre:string, index:number) => <span key={genre + index}> {genre},</span>)}
                    </div>
                    <div className="flex flex-row gap-4">
                        <div>
                            <span className="text-gray-500">Maturity rating: </span>
                            <span className="py-0.5 px-2 border border-gray-600">{content.maturity_rating}</span>
                        </div>
                        {content.keywords.map((keyword:string, index:number) => <span key={keyword + index}>{keyword},</span>)}
                        <span>Recommended for age {content.maturity_rating} and up</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
const VideoClipCard = forwardRef(({content }:VideoClipCardProps, ref:ForwardedRef<HTMLDivElement>) => {
    const [isHover, setHover] = useState(false);
    let queryParams = useQueryParams();
    const videoRef = useRef() as MutableRefObject<HTMLDivElement>
    const [videoScreenPosition, setVideoScreenPosition] = useState({
        fromLeft: 0,
        toTop: 0,
    })
    useEffect(() => {
        const {left, top} = videoRef.current.getBoundingClientRect()
        setVideoScreenPosition({
            fromLeft:   left,
            toTop: top
        })
    },[isHover])
  return (
    <>
    <div ref={ref} className="snap-start group relative">
        <div ref={videoRef} className="w-full h-auto min-w-[240px] max-w-sm rounded-md cursor-pointer overflow-hidden">
            <img onMouseEnter={ () =>setHover(true)} onMouseLeave={() => setHover(false)} className="object-cover object-center" src={content.image} alt="Movie trailer" />
        </div>
        <SummaryModal><VideoClipCardSummary content={content}/></SummaryModal>
    </div>
    {(queryParams.get('trackId') == content.track_id) && <PortalModal><VideoClipCardDetail content={content}/></PortalModal>}
    </>
  )
});
export default VideoClipCard