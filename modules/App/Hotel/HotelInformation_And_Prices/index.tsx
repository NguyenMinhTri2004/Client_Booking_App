
import Section from "@/common/components/Section"
import SectionTitle from "@/common/components/Section/SectionTitle";
import SectionBody from '@/common/components/Section/SectionBody';
import Image from "next/image";
import { FaBed, FaRulerCombined, FaUmbrellaBeach, FaCity, FaSnowflake, FaBath, FaVolumeMute, FaWineBottle, FaWifi, FaUserFriends, FaCoffee, FaChild } from 'react-icons/fa';
import { formatCurrency } from "@/common/utils";
import { useRouter } from "next/router";
import { useState } from "react";
import {DatePicker, Select,Divider, Space} from 'antd/lib';
interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

  
const HotelInformation_And_Prices = ({roomTypeList, slugAccommodation, nameAccommodation}:any) => {

  const router = useRouter()

  const [quantity, setQuantity] = useState(1)

  const [searchDate, setSearchDate] = useState([])

  const { RangePicker } = DatePicker;

  const handleReserve = (name:any) => {
      const dateStart = searchDate[0] || ""
      const dateEnd = searchDate[1] || ""
      router.push(`/book?accommodation=${slugAccommodation}&room=${name}&quantity=${quantity}&dateStart=${dateStart }&dateEnd=${dateEnd}`)
  }

  const onChangeDate = (dates:any, dateStrings:any) => {
    console.log('Selected dates: ', dates);
    console.log('Formatted dates: ', dateStrings);
    setSearchDate(dateStrings);
  };

    return (
        <Section>
             <SectionTitle>
                <p>Phòng trống</p>
             </SectionTitle>
             <p>Tất cả các căn hộ còn trống</p>

             <SectionBody>
                 {/* <Table columns={columns} dataSource={data} /> */}
                 <div className="bg-white">
                    <div>
                        <RangePicker onChange={onChangeDate} size = {"large"}/>
                    </div>
                      <div className="max-w-7xl mx-auto p-4">
                        <table className="w-full border border-gray-300 text-sm">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border-r border-gray-300 p-4 text-left">Room type</th>
                              <th className="border-r border-gray-300 p-4 text-left">Number of guests</th>
                              <th className="border-r border-gray-300 p-4 text-left">Today's price</th>
                              <th className="border-r border-gray-300 p-4 text-left">Your choices</th>
                              <th className="p-4 text-left">Select rooms</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              roomTypeList?.map((room : any, index: any) => {
                                return (
                                    <tr>
                                      <td className="border-r border-gray-300 p-4">
                                        <div className="font-bold text-blue-700">
                                          <a href="#" className="hover:underline">{room?.name}</a>
                                        </div>
                                        <div className="mt-2">
                                           {
                                              room?.convenients.map((convenient:any , index:any) => {
                                                return (
                                                  <p>{convenient}<FaBed className="inline" /></p>
                                                )
                                              })
                                           }
                                        </div>
                                      </td>
                                      <td className="border-r border-gray-300 p-4 text-center">
                                        <div className = "flex items-center gap-2" >
                                           {room?.adult} x adult 
                                        </div>
                                        
                                        {
                                          room?.children > 0 && (
                                            <div className = "flex items-center gap-2" >
                                              {room?.children} x child
                                            </div>

                                          )
                                        }
                                        
                                      </td>
                                      <td className="border-r border-gray-300 p-4 text-center">
                                        <div>
                                          <p className="text-lg font-bold">VND {formatCurrency(room?.price)}</p>
                                          <p className="text-gray-500">Includes taxes and charges</p>
                                        </div>
                                      </td>
                                      <td className="border-r border-gray-300 p-4">
                                        <div className="font-bold">
                                          <FaCoffee /> Very good breakfast VND 501,929
                                        </div>
                                        <ul className="list-disc list-inside mt-2">
                                          <li>Non-refundable</li>
                                          <li>Pay in advance</li>
                                        </ul>
                                        <div className="mt-2">
                                          <a href="#" className="text-blue-700 hover:underline">Partner offer</a>
                                        </div>
                                        <p className="text-gray-500 mt-2">
                                          Facilitated by a Booking.com partner company
                                          <br />No modifications
                                          <br />Confirmed within 2 minutes
                                          <br />Can't be combined with other offers
                                        </p>
                                        <div className="mt-2 text-blue-700">
                                          <a href="#" className="hover:underline">Learn more</a>
                                        </div>
                                      </td>
                                      <td className="p-4 text-center">
                                        <select onChange = {(e:any) => setQuantity(e.target.value)}  className="border border-gray-300 p-2 mb-4">
                                          <option>0</option>
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                        </select>
                                        <button onClick = {() => handleReserve(room?.name)}  className="bg-blue-600 text-white px-4 py-2 rounded">I'll reserve</button>
                                      </td>
                                    </tr>
                                )
                              })
                            }
                          </tbody>
                        </table>
                      </div>
                 </div>
             </SectionBody>
        </Section>
    )
}

export default HotelInformation_And_Prices
