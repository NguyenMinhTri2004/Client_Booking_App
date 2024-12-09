import Image from 'next/image';
import BedIcon from '@mui/icons-material/Bed';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleIcon from '@mui/icons-material/People';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const HotelRateDrawerComment = ({name, point}:any) => {
    return (
       <div className = "flex items-start justify-between gap-10 py-7 border-b border-slate-200" >
            <div className='w-2/4' >
                <div className = "flex items-center gap-2" >
                    <Image
                                src="/images/GlobeGeniusBadge.png"
                                alt="Picture of the author"
                                width="50"
                                height="50"
                                className="object-contain rounded-full"
                    />
                    <div>
                        <p className = "font-bold" >Ellen</p>
                        <p className = "text-12" >Netherlands</p>
                    </div>
                </div>
                <div className='flex items-center gap-3' >
                    <BedIcon fontSize="small" />
                    <p className = "text-12" >Superior Double Room With Internal Window</p>
                </div>
                <div className = "flex items-center gap-3" >
                    <CalendarTodayIcon fontSize="small" />
                    <p className = "text-12" >1 night · July 2024</p>
                </div>
                <div className='flex items-center gap-3'>
                    <PeopleIcon fontSize="small" />
                    <p>Couple</p>
                </div>
            </div>
            <div>
                <div className='flex items-center justify-between' >
                    <div>
                        <p className = "text-12" >Reviewed: 7 August 2024</p>
                        <h1 className = "font-bold text-lg" >Great place to stay, and the staff makes the whole experience simply perfect</h1>
                    </div>

                    <div>
                        <span className='bg-blue-600 py-1 px-2 text-white rounded-sm text-[12px]' >10</span>
                    </div>
                </div>

                <div className = "flex justify-start gap-1" >
                    <div>
                        <InsertEmoticonIcon fontSize="small" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, officia. Dolor placeat doloribus dolorum? Facilis quos debitis illo sunt labore, hic fugiat officiis harum iusto dolor ad rem nam tenetur?</p>
                </div>
            </div>
       </div>
    )
}

export default HotelRateDrawerComment
