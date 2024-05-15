import SearchResultsCheckbox from "./SearchResultsCheckBox"

const SearchResultsCheckboxList = (props : any) => {
        return (
            <div className="SearchResultsCheckboxList border rounded-md p-3" >
                <div className="SearchResultsCheckboxList__header font-bold border-b" >Chon loc theo</div>
                <div className="SearchResultsCheckboxList__content" >
                    <h1 className="font-bold" >Dùng các bộ lọc cũ</h1>
                    <SearchResultsCheckbox />
                    <SearchResultsCheckbox />
                    <SearchResultsCheckbox />
                    <SearchResultsCheckbox />
                    <SearchResultsCheckbox />
                    <SearchResultsCheckbox />
                    <SearchResultsCheckbox />
                </div>
            </div>
        )
}

export default SearchResultsCheckboxList