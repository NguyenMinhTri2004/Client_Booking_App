
import SearchResultsCardItemList from "./SearchResultsCardItemList"
import SearchResultsSort from "./SearchResultsSort"
import SearchResultsCheckboxList from "./SearchResultsCheckBoxList"
import MiniMap from "@/common/components/Map/MiniMap"

const SearchResults = (props : any) => {
    return (
       <div className='SearchResults flex items-start mt-[140px] justify-center gap-5' >
            <div className="SearchResults__left w-[20%]" >
                  <MiniMap/>
                  <SearchResultsCheckboxList/>
            </div>
            
            <div className="SearchResults__right w-[60%]" >
                   <SearchResultsSort/>
                   <SearchResultsCardItemList/>
            </div>
            
       </div>
    )
}

export default SearchResults