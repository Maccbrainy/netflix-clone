interface IsLoading {
    title?: string;
    height: string;
    width: string;
}
const IsLoading = ({title, height, width}: IsLoading) => {
    return (
       <div className="flex justify-center items-center w-full p-2">
           <div className={`animate-spin rounded-full ${height} ${width} border-b-2 border-white`}/>
           <span className={title ? 'ml-4 text-white': 'hidden'}>{title}</span>
       </div>
   )
}
export default IsLoading;