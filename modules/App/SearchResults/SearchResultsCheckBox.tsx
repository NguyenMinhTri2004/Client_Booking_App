
import { Checkbox } from 'antd/lib';
import type { CheckboxProps } from 'antd/lib';

const SearchResultsCheckbox = (props : any) => {

    const onChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    return (
        <div className='flex items-center justify-between' >
             <Checkbox onChange={onChange}>
                Checkbox
             </Checkbox>

             <p>68</p>
        </div>
       
    )
}

export default SearchResultsCheckbox