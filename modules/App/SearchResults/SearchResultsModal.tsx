import { Modal } from 'antd/lib';
import SearchResultsCheckboxList from './SearchResultsCheckBoxList';
import SearchResultsSort from './SearchResultsSort';
import Map from '@/common/components/Map/GoogleMap';
import SearchResultsCardItemList from './SearchResultsCardItemList';

interface SearchResultsModalProps {
    open: boolean;
    setOpen: (value: boolean) => void;
    data : object;
    checkFunc : Function;
    center : object;
    setSearchResult : Function,
}

const SearchResultsModal: React.FC<SearchResultsModalProps> = ({ open, setOpen, data, checkFunc, center, setSearchResult }) => {

    console.log("Center from modal" , center)
    return (
        <Modal
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={1800}
        >
            <div className = "flex items-start gap-5 " >
                <div className='w-[15%] h-screen overflow-y-scroll' >
                      <SearchResultsCheckboxList checkFunc = {checkFunc}  />
                </div>

                <div className = "w-[35%] h-screen overflow-y-scroll " >
                      <div  >
                          <SearchResultsSort/>
                      </div>

                      <div>
                          <SearchResultsCardItemList isModal = {true} data = {data}/>
                      </div>
                </div>

                <div className='w-[55%]' >
                        <Map center = {center} data = {data} setSearchResult = {setSearchResult}/>
                </div>
            </div>            
        </Modal>
    );
};

export default SearchResultsModal;
