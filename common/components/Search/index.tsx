import {DatePicker, Select,Divider, Space} from 'antd/lib';
import { useRouter } from 'next/router';
import { ButtonBlue } from '../Button';
import { useState } from 'react';
import Section from "@/common/components/Section"
import SectionBody from '@/common/components/Section/SectionBody';
import { InputNumber } from 'antd/lib';
import { provinceList } from '@/public/data';

// const escapeRegExp = /[\-#$\^*()+\[\]{}|\\,.?\s]/g;
// const escapeReg = (reg:any) => reg.replace(escapeRegExp, '\\$&');
// const groupLeft = '';
// const groupRight = '';
// const groupReg = new RegExp(escapeReg(groupRight + groupLeft), 'g');
// const groupExtractReg = new RegExp('(' + escapeReg(groupLeft) + '[\\s\\S]+?' + escapeReg(groupRight) + ')', 'g');

// const findMax = (str:any, keyword:any) => {
//   let max = 0;
//   keyword = groupLeft + keyword + groupRight;
//   str.replace(groupExtractReg, (m:any) => {
//     if (keyword === m) {
//       max = Number.MAX_SAFE_INTEGER;
//     } else if (m.length > max) {
//       max = m.length;
//     }
//   });
//   return max;
// };

// const keyReg = (key:any) => {
//   let src:any = ['(.*?)('];
//   let ks = key.split('');
//   if (ks.length) {
//     while (ks.length) {
//       src.push(escapeReg(ks.shift()), ')(.*?)(');
//     }
//     src.pop();
//   }
//   src.push(')(.*?)');
//   src = src.join('');
//   let reg = new RegExp(src, 'i');
//   let replacer = [];
//   let start = key.length;
//   let begin = 1;
//   while (start > 0) {
//     start--;
//     replacer.push('$', begin, groupLeft + '$', begin + 1, groupRight);
//     begin += 2;
//   }
//   replacer.push('$', begin);

//   return {
//     regexp: reg,
//     replacement: replacer.join(''),
//   };
// };

// const Searcher = {
//   search(list:any, keyword:any) {
//     let kr = keyReg(keyword);
//     let result = [];
//     for (let e of list) {
//       if (kr.regexp.test(e)) {
//         result.push(
//           e.replace(kr.regexp, kr.replacement).replace(groupReg, '')
//         );
//       }
//     }
//     result = result.sort((a, b) => findMax(b, keyword) - findMax(a, keyword));
//     return result;
//   }
// };


const Search = (props : any) => {

    const { RangePicker } = DatePicker;

    const router = useRouter();

    const [open, setOpen] = useState(false);

    const [searchLocation, setSearchLocation] = useState("")

    const [numberChild, setNumberChild] = useState(0)

    const [numberAdult, setNumberAdult] = useState(1)

    const [searchDate, setSearchDate] = useState([])

    const [searchTypeGuest, setSearchTypeGuest] = useState<any>([1,0])

    const onChangeAdult = async (value:any) => {
        console.log(value)
        setNumberAdult(value);
    };

    const onChangeChild = async (value:any) => {
        console.log(value)
        setNumberChild(value);
    };

    const onChangeName = async (value: string) => {
        console.log(value)
        setSearchLocation(value);
    };
      
    const onSearchName = (value: string) => {
        setSearchLocation(value);
    };

    const onChangeDate = (dates:any, dateStrings:any) => {
        console.log('Selected dates: ', dates);
        console.log('Formatted dates: ', dateStrings);
        setSearchDate(dateStrings);
    };

    const onChangeTypeGuest = () => {
        setSearchTypeGuest([numberAdult, numberChild])
        setOpen(false);
        console.log(searchTypeGuest)
    };

    const handleSearch = async () => {
        if(searchLocation == "") {
            alert("Please select location")
            return
        }
        const [lat, lon] = searchLocation.split('-').map(Number); 
        const dateStart = searchDate[0] || ""
        const dateEnd = searchDate[1] || ""
        router.push(`/searchresults?lat=${lat}&lon=${lon}&dateStart=${dateStart }&dateEnd=${dateEnd}&type=${searchTypeGuest}`)
    }

    // const handleInputChange = (e:any) => {
    //     console.log("E", e)
    //     const value = e;
    //     setInputValue(value);
    //     const searchResults:any = Searcher.search(list, value);
    //     setResults(searchResults);
    // };

    return (
      <Section>
          <SectionBody>
                <div className = "flex items-center w-full gap-5 absolute justify-center bg-yellow-500 p-3 shadow-lg placeholder:text-black rounded-lg z-50 bottom-3 left-0" >
                    <div className = "w-[30%]" >
                        <Select
                            showSearch
                            className = "w-full text-black placeholder:text-black"
                            placeholder="Chọn điểm đến"
                            optionFilterProp="label"
                            onChange={onChangeName}
                            onSearch={onSearchName}
                            size = {"large"}
                            options={provinceList}
                        />
                    </div>

                    <div>
                        <RangePicker onChange={onChangeDate} size = {"large"}/>
                    </div>

                    <div>
                            <Select
                                style={{ width: 300 }}
                                open={open}
                                onDropdownVisibleChange={(visible) => setOpen(visible)}
                                size = {"large"}
                                value = {`${searchTypeGuest[0]} người lớn ${searchTypeGuest[1]} trẻ em`}
                                placeholder="Vui lòng chọn số người"
                                dropdownRender={(menu) => (
                                <>
                                {menu}
                                <Divider style={{ margin: '8px 0' }} />
                                <Space className='flex flex-col' style={{ padding: '0 8px 4px'}}>
                                    <div className = "flex items-center justify-between gap-5 " >
                                        <label className='font-bold mr-auto' >Người lớn</label>
                                         <InputNumber className='w-1/2 max-w-40' min={1} max={999999} defaultValue={1} onChange = {onChangeAdult} />
                                    </div>

                                    <div className = "flex items-center justify-between gap-5"  >
                                         <label className='font-bold mr-auto' >Trẻ em</label>
                                         <InputNumber className='w-1/2 max-40' min={0} max={99999} defaultValue={0} onChange={onChangeChild} />
                                    </div>
                                    <div onClick = {() => onChangeTypeGuest()} className = "mt-3 w-full flex items-end" >
                                        <ButtonBlue>
                                            <p>Hoàn tất</p>
                                        </ButtonBlue>
                                    </div>
                                </Space>
                                </>
                                )}

                                options={[
                                    {
                                        value: 'option1',
                                        label: " ",
                                    },
                                ]}
                            />
                    </div>

                    <div onClick = {() => handleSearch()} >
                            <ButtonBlue>
                                <p>Tìm kiếm</p>
                            </ButtonBlue>
                    </div>
                </div>
          </SectionBody>

          {/* <div className="search-box">
            <form noValidate>
                <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search..."
                />
            </form>
            <div className="search-prev" id="search-items">
                {results.map((result, index) => (
                <div key={index} className="result">
                    {result}
                </div>
                ))}
            </div>
         </div> */}
      </Section>
    )
}

export default Search