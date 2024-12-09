
import SearchResultsCardItemList from "./SearchResultsCardItemList"
import SearchResultsSort from "./SearchResultsSort"
import SearchResultsCheckboxList from "./SearchResultsCheckBoxList"
import MiniMap from "@/common/components/Map/MiniMap"
import { useRouter } from 'next/router';
import { handleApi } from '@/common/utils';
import { useCallback, useEffect, useState } from "react";
import SearchResultsModal from "./SearchResultsModal";
import { searchAccommodation } from "@/common/api/accommodation";
const SearchResults = (props : any) => {

    const router = useRouter();

    const [searchResult, setSearchResult] = useState<any>([])

    const [open, setOpen] = useState(false);

    const [loading, setLoading] = useState(false);

    const initFilter = {
      convenients : [],
      convenientNears : [],
      types : [],
      stars : [],
      points : []
   }

   const [filter , setFilter] = useState<any>(initFilter)
   
    const filterSelect = (type:any , checked:any , item:any) => {
      if(checked) {
        switch(type) {
            case "Convenient":
              setFilter({...filter , convenients : [...filter.convenients , item?.name]})
              break

            case "ConvenientNear":
              setFilter({...filter , convenientNears : [...filter.convenientNears , item.name]})
              break
              
            case "Type":
              setFilter({...filter , types : [...filter.types , item.name]})
              break  

            case "Star":
              setFilter({...filter , stars : [...filter.stars , item]})
              break  

            case "Point":
              setFilter({...filter , points : [...filter.points , item]})
              break  
              
            default:  
        }
      } else {
        switch(type) {
          case "Convenient" :
              const newConvenient = filter.convenients.filter((e:any) => e!== item?.name)
              setFilter({...filter, convenients : newConvenient})
              break

          case "ConvenientNear" :
              const newConvenientNear = filter.convenientNears.filter((e:any) => e!== item.name)
              setFilter({...filter, convenientNears : newConvenientNear})
              break

          case "Type":
              const newType = filter.types.filter((e:any) => e!== item.name)
              setFilter({...filter, types : newType})
              break
          
          case "Star":
                const newStar = filter.stars.filter((e:any) => e!== item)
                setFilter({...filter, stars : newStar})
                break

          case "Point":
                const newPoint = filter.points.filter((e:any) => e!== item)
                setFilter({...filter, points : newPoint})
                break

          default:    
        }
      }

      console.log("filter" , filter)
    }

   const updateProducts = useCallback(
    () => {

       let temp = searchResult

       if(filter.convenients.length > 0) {
            temp = temp.filter((e:any) => {
                const check =  Object.values(e.convenients).map((item:any) => item.find((convenient : any) => filter.convenients.includes(convenient)))
                return check !== undefined
            })
       }

       if(filter.convenientNears.length > 0) {
            temp = temp.filter((e:any) => {
              const check =  Object.values(e.convenientsNear).map((item:any) => item.find((convenient : any) => filter.convenientNears.includes(convenient)))
              return check !== undefined
          })
       }

       if(filter.types.length > 0) {
         temp = temp.filter((e:any) => {
            const check = e.size.find((size:any) => filter.types.includes(size))
            return check !== undefined
         })
       }

       if(filter.stars.length > 0) {
          filter.stars.sort(function(a:any, b:any) {
            return a - b;
          });

          temp = temp.filter((e:any) => {
             const check = e.star >= filter.stars[0] || e.star <= filter.stars[filter.stars.length - 1]
             return check
          })

          console.log(temp)
       }

      //  if(filter.points.length > 0) {
      //     temp = temp.filter((e:any) => {
      //        const check = e.size.find((size:any) => filter.points.includes(size))
      //        return check !== undefined
      //     })
      //  }
       
      setSearchResult(temp)
    },
    [filter]
   )

    const handleGetAPI = async () => {
     
        try {
           console.log("routerQuery", router.query)
            const response:any = await handleApi(searchAccommodation(false, router.query))
    
            if (response?.success) {
              setSearchResult(response?.metadata)   
              console.log(response)
            }
          } catch (error) {
            console.log('handleGetAPI error', error);
          } 
    }
       
    useEffect(() => {
      setLoading(true)
       handleGetAPI()
      setLoading(false)
    }, [router.query]);

    useEffect(() => {
      updateProducts()
    }, [filter]);


    return (
      <div>   
          {
            !loading && (
              <div className='SearchResults flex items-start mt-[140px] justify-center gap-5' >
                  <div className="SearchResults__left w-[20%]" >
                        <MiniMap setOpen={setOpen}/>
                        <SearchResultsCheckboxList checkFunc = {filterSelect}/>
                  </div>
                
                  <div className="SearchResults__right w-[60%]" >
                        <SearchResultsSort/>
                        <SearchResultsCardItemList data = {searchResult}/>
                  </div>

                  <div>
                        <SearchResultsModal center = {{
                            lat : router.query.lat, 
                            lng : router.query.lon  
                        }} checkFunc = {filterSelect} data = {searchResult} open = {open} setOpen = {setOpen} setSearchResult = {setSearchResult} />
                  </div>
             </div>
            )
          
          }
      </div>
    )
}

export default SearchResults