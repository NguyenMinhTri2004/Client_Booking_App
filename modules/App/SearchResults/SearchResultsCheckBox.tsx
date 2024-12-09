
import { Checkbox } from 'antd/lib';
import type { CheckboxProps } from 'antd/lib';

const SearchResultsCheckbox = ({data, checkFunc, type} : any) => {

    const onChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`);
        checkFunc(type, e.target.checked, data);
        
    };

    return (
        <div className='ml-[3%] text-12' >
             <Checkbox onChange={onChange}>
                {data?.name ? data.name : data}
             </Checkbox>
        </div>
       
    )
}

export default SearchResultsCheckbox