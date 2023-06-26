export default function(){
    const uiStyle = `h-40 bg-[#333] min-w-[240px] max-w-sm rounded-md overflow-hidden`
    let uiStylesArray = [] as string[];
    for (let index = 0; index < 8; index++) {
        uiStylesArray[index] = uiStyle;
    }
    return(
        <section className="animate-pulse relative w-full flex flex-col justify-center">
            <div className="relative w-full space-y-6 px-6 sm:px-8 md:px-10 lg:px-14 text-xl transform translate-y-24">
                <div className="bg-[#333] h-6 w-28"></div> 
                <div className="relative flex flex-row items-center space-x-2">
                    { uiStylesArray.map( (uiStyle, index) => <div key={uiStyle + index} className={uiStyle}></div>)}
                </div>
            </div>           
        </section>
    )
}