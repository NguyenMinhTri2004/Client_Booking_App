
import SearchResultsCardItem from './SearchResultsCardItem';

const SearchResultsCardItemList = ({data, isModal} : any) => {
    
    return (
       <div className='SearchResultsCardItemList' >
            {
                data?.map((item:any , index:number) => {
                    return (
                        <SearchResultsCardItem isModal = {isModal} key={index} data={item}/>
                    )
                })
            }
       </div>
    )
}

export default SearchResultsCardItemList