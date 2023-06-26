import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdNotifications, MdArrowDropDown } from "react-icons/md";
import { HiOutlineSearch, HiOutlineMenuAlt1, HiViewGrid, HiOutlineChevronRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useQueryParams } from "../../utilities";
import { filterViewOption } from "../../reducers/filterViewOptionSlice";

const genreLists = [
    'Action', 'Anime','Award-Wining', 'Children & Family', 'Classics', 'Comedies', 'Crime','Documentaries', 'Dramas', 'Fantasy', 'Hollidays', 'Hollywood', 'Horror','Nollywood', 'Romance','Sci-Fi', 'Shorts', 'Sports', 'Thriller', 'Stand-Up Comedy', 'Independent', 'Music & Musicals', 'Made in Africa'
]

const SubHeader = () => {
    const [showMenu, setShowMenu]  = useState(false);
    const [title, setTitle] = useState('');
    const { pathname, search } = useLocation();
    const navigate = useNavigate();

    let queryParams = useQueryParams();

    const [breadCrumbTitle, setbreadCrumbTitle] = useState<string | null>();
    const pinSubHeaderToTheTop = useSelector((state:RootState) => state.stickySubHeaderToTheTop.value);
    const activeFilterView = useSelector((state:RootState) => state.filterViewOption.value);
    const dispatch = useDispatch();


    const openMenuGenre = () => {
        let isOpen = showMenu ? false : true
        setShowMenu(isOpen);
    }

    const setDefaultFilterView = () => {
        dispatch(filterViewOption('default'))
        navigate(pathname)
    }
    const setGridFilterView = () => {
        dispatch(filterViewOption('grid-view'))
        navigate(`?grid-view=searchAllFilter`);
    }

    useEffect(() => {
        let title = pathname == '/browse/tv_shows' 
          ? 'TV Shows' : pathname == '/browse/movies' 
          ? 'Movies' :  pathname == '/latest' 
          ? 'Latest' : pathname == '/browse/my-list'
          ? 'My List' : '';
    setTitle(title);
    setbreadCrumbTitle(queryParams.get('genreType'))

    },[pathname, search]);

    return(
      <div className={`${pinSubHeaderToTheTop ? 'fixed top-auto bg-[#141414]' : 'absolute top-20'} w-full px-6 sm:px-8 md:px-10 lg:px-14 mx-auto z-10 py-4`}>
        <div className="w-full flex flex-row justify-between items-center">
            {
                breadCrumbTitle ? (<div className="flex justify-start items-center">
                    <h1 className="text-lg"><Link to={pathname}>{title}</Link></h1>
                    <HiOutlineChevronRight className="w-5 h-5"/>
                    <h1 className="text-4xl font-semibold">{breadCrumbTitle}</h1>
                </div>) : (
                    <div className="flex justify-start items-center gap-10">
                        <h1 className='text-4xl font-semibold'>{title}</h1>
                        <div className="relative">
                            <button onClick={openMenuGenre} type="button" title="genre" className="flex flex-row justify-between items-center gap-6 border py-0.5 px-2 text-sm bg-[#000] hover:bg-transparent focus:bg-transparent hover:backdrop-blur-sm focus:backdrop-blur-sm">
                            <span>Genres</span>
                            <MdArrowDropDown className='w-6 h-6'/> 
                            </button>
                            {
                            showMenu && 
                            <div className="absolute flex flex-row justify-between left-0 w-[360px] h-auto bg-[#000000ea] border border-[#ffffff21] overflow-hidden p-3 text-xs z-10">
                                <div className="flex flex-col flex-nowrap gap-1 w-auto h-auto">
                                {genreLists.map((list, index) => index <=7 && <span className="cursor-pointer hover:underline" key={list + index}><Link to={`?genreType=${list}`}>{list}</Link></span>)}
                                </div>
                                <div className="flex flex-col flex-nowrap gap-1 w-auto h-auto">
                                {genreLists.map((list, index) => (index > 7 && index < 16) && <span className="cursor-pointer hover:underline" key={list + index}><Link to={`?genreType=${list}`}>{list}</Link></span>)}
                                </div>
                                <div className="flex flex-col flex-nowrap gap-1 w-auto h-auto">
                                {genreLists.map((list, index) => index > 15 && <span className="cursor-pointer hover:underline" key={list + index}><Link to={`?genreType=${list}`}>{list}</Link></span>)}
                                </div>
                            </div>
                        }
                </div>
            </div>
                )
            }
            <div className="flex flex-row">
                <span onClick={setDefaultFilterView} className={`${activeFilterView == 'default' ? 'border border-white': 'border-[#ffffff80] border-l border-y'} flex justify-center items-center px-4 py-1 cursor-pointer`}><HiOutlineMenuAlt1 title="default view" className="w-5 h-5 active:scale-110" /></span>
                <span onClick={setGridFilterView} className={`${activeFilterView == 'grid-view' ? 'border border-white': 'border-[#ffffff80] border-r border-y'} flex justify-center items-center px-4 py-1 cursor-pointer`}><HiViewGrid title="grid view" className="w-5 h-5 active:scale-110" /></span>
            </div>
        </div>
      </div>
    )
  }

const NavBar = () => {
    const changeBgOnScroll = useSelector((state:RootState) => state.changeNavBarBgOnScroll.value);
    const { pathname, search } = useLocation();
    let queryParams = useQueryParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const signIn = () => {
        navigate('/login');
    }

    useEffect(() => {
        let filterView = queryParams.get('grid-view');
       !filterView 
         ? dispatch(filterViewOption('default')) 
         : dispatch(filterViewOption('grid-view'));
    }, [search])

return(
    <header className="relative">
    <nav className={`${pathname != '/browse'? 'absolute' : 'fixed'} w-full h-[70px] transition bg-gradient-to-b
    from-[#000000b3] ${(changeBgOnScroll && pathname == '/browse') && 'bg-[#141414]'} flex justify-center items-center px-6 sm:px-8 md:px-10 lg:px-14 mx-auto z-10 transition-all duration-500`}>
        <div className='w-full flex flex-row justify-between items-center flex-nowrap text-sm'>
            <div className='flex flex-row justify-start gap-16'>
                <div><Link to={localStorage.getItem('token') ? '/browse': '/'}>Logo</Link></div>
                {
                    (pathname != '/' && pathname != '/sign-up/password' && pathname != '/login') && (<ul className='flex justify-start items-center gap-6'>
                    <li><Link to='/browse'>Home</Link></li>
                    <li><Link to='/browse/tv_shows'>TV shows</Link></li>
                    <li><Link to='/browse/movies'>Movies</Link></li>
                    <li><Link to='/latest'>New & Popular</Link></li>
                    <li><Link to='/browse/my-list'>My list</Link></li>
                    <li><Link to='/browse/original-audio'>Browse by language</Link></li>
                </ul>)
                }
                
            </div>
            {
                (pathname != '/' && pathname != '/sign-up/password' && pathname != '/login') && (
                <div className='flex items-center gap-4 overflow-hidden'>
                    <HiOutlineSearch className='w-6 h-6'/>
                    <Link to='/kids'>Kids</Link>
                    <MdNotifications className='w-6 h-6' title='notification bell'/>
                    <div className='flex items-center'>
                    <div className='bg-gray-200 h-10 w-10 rounded-xl'></div>
                    <div><MdArrowDropDown className='w-6 h-6'/></div>
                    </div>
                </div>
                )
            }
            { pathname == '/' && <button onClick={signIn} type="button" title="sign-in" className="px-5 py-2 bg-[#e50914] text-base hover:bg-red-600">Sign in</button>}
        </div>
    </nav>
    { (pathname != '/browse' && pathname != '/' && pathname != '/sign-up/password' && pathname != '/login' ) && <SubHeader />}
    </header>
)
};
export default NavBar;

