import { useEffect, useState } from "react"
import SearchResultsCheckbox from "./SearchResultsCheckBox"
import { handleApi } from '@/common/utils';
import { getallConvenientType, getAllConvenient } from "@/common/api/convenient";
import { getallConvenientTypeNear, getAllConvenientNear } from "@/common/api/convenientNear";
import { getallAccommodationType } from "@/common/api/accommodationType";

const SearchResultsCheckboxList = ({checkFunc}:any) => {

       const [convenient, setConvenient] = useState([])

       const [convenientList, setConvenientList] = useState([])

       const [accommodationTypeList, setAccommodationTypeList] = useState([])

       const stars = [1, 2, 3, 4, 5];

       const points = [4, 6, 7, 8, 9]; 

       const [convenientNear, setConvenientNear] = useState([])

       const [convenientNearList, setConvenientNearList] = useState([])
 
       const handleGetAPI = async () => {
        try {
            const responseConvenient:any = await handleApi(getallConvenientType())

            const responseConvenientNear:any = await handleApi(getallConvenientTypeNear())

            const responseAccommodationType:any = await handleApi(getallAccommodationType())

            if (responseAccommodationType.success) {
                console.log("Response result convenientNear", responseAccommodationType)
                setAccommodationTypeList(responseAccommodationType.metadata)
            }
    
            if (responseConvenient.success) {
                 console.log("Response result convenient", responseConvenient)
                 setConvenient(responseConvenient?.metadata)
                 const responseConvenientList:any = await handleApi(getAllConvenient())    
                 if(responseConvenientList.success){
                    setConvenientList(responseConvenientList?.metadata)
                    console.log("Response result convenientList", responseConvenientList?.metadata)
                 }
            }

            if (responseConvenientNear.success) {
                console.log("Response result convenientNear", responseConvenientNear)
                setConvenientNear(responseConvenientNear.metadata)
                const responseConvenientNearList:any = await handleApi(getAllConvenientNear())    
                 if(responseConvenientNearList.success){
                    setConvenientNearList(responseConvenientNearList?.metadata)
                 }
            }
          } catch (error) {
            console.log('handleGetAPI error', error);
          }
       }
       
         
    useEffect(() => {
        handleGetAPI()
    }, []);

        return (
            <div className="SearchResultsCheckboxList border rounded-md" >
                <div className="SearchResultsCheckboxList__header font-bold border-b p-3 text-18" >Chọn lọc theo :</div>
                <div className="SearchResultsCheckboxList__content" >
                    <div className = "border-b" >
                        <div className = "ml-[3%] p-3"  >
                            <h1 className = "font-bold text-16" >Tiện dụng có sẵn</h1>
                            {
                                convenient.map((item:any, index) => {
                                    return (
                                       <div key = {index} className="ml-[3%]" >
                                            <h1 className = "text-14 font-bold" >{item?.name}</h1>
                                            {
                                                convenientList
                                                .filter((convenientItem: any) => convenientItem?.typeConvenientId === item?.
                                                convenientTypeId)  
                                                .map((item: any, index: number) => (   
                                                    <SearchResultsCheckbox key = {index} data = {item} checkFunc = {checkFunc} type = "Convenient" />
                                                ))
                                            }
                                           
                                       </div>
                                    )
                                })
                            }
                           
                        </div>
                    </div>

                    <div className = "border-b" >
                         <div className = "ml-[3%] p-3"  >
                            <h1 className = "font-bold text-16" >Tiện dụng ở gần</h1>
                            {
                                convenientNear?.map((item:any, index) => {
                                    return (
                                       <div key = {index} className="ml-[3%] my-1" >
                                            <h1 className = "text-14 font-bold" >{item?.name}</h1>
                                            {
                                                convenientNearList
                                                .filter((convenientItem: any) => convenientItem?.typeConvenientNearId === item?.
                                                convenientNearTypeId)  
                                                .map((item: any, index: number) => (   
                                                    <SearchResultsCheckbox key = {index} data = {item} checkFunc = {checkFunc} type = "ConvenientNear"/>
                                                ))
                                            }
                                           
                                       </div>
                                    )
                                })
                            }
                           
                        </div>
                    </div>

                    <div className = "border-b" >
                        <div className = "ml-[3%] p-3"  >
                            <h1 className = "font-bold text-sm" >Loại chỗ ở</h1>
                            <div className="ml-[3%]" >
                            {
                                accommodationTypeList?.map((item:any, index) => {
                                    return (
                                    
                                            <SearchResultsCheckbox key = {index} data = {item} checkFunc = {checkFunc} type = "Type"/>
                                    )
                                })
                            }
                            </div>
                           
                        </div>
                    </div>

                    <div className = "border-b" >
                        <div className = "ml-[3%] p-3"  >
                            <h1 className = "font-bold text-sm" >Số sao</h1>
                            <div className = "ml-[3%]" >
                                {
                                    stars.map((item: number, index:any) => {
                                        return (
                                            <SearchResultsCheckbox key = {index} data = {item} checkFunc = {checkFunc} type = "Star"/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className = "border-b" >
                        <div className = "ml-[3%] p-3"  >
                            <h1 className = "font-bold text-sm" >Điểm đánh giá</h1>
                            <div className = "ml-[3%]" >
                                {
                                    points.map((item: any, index:any) => {
                                        return (
                                            <SearchResultsCheckbox key = {index} data = {item} checkFunc = {checkFunc} type = "Point"/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default SearchResultsCheckboxList