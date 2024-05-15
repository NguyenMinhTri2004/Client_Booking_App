
import { Checkbox } from 'antd/lib';
import type { CheckboxProps } from 'antd/lib';

const CheckboxComponent = (props : any) => {

    const onChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    return (
        <div className='flex items-center justify-between' >
             <Checkbox className='' onChange={onChange}>
                 {props.children}
             </Checkbox> 
        </div>
       
    )
}

export default CheckboxComponent