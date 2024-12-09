
const SearchResultsSort = (props : any) => {
    return (
        <div className="catalog">
                <div className="catalog__top">
                    {/* <div className="catalog__top__item">
                        <h5 className = "text-16" >BỘ LỌC</h5>
                        <div className="catalog__top__item__img"  >
                        </div>
                        
        
                    </div> */}
        
                    <div className="catalog__top__item w-full">
                        {/* <div className="catalog__top__item__img" >
                        </div> */}
                        
                        {/* <h6 className = "text-16" >SẮP XẾP THEO</h6> */}
                            <select className = "w-full rounded-md border-slate-400" >
                                <option>Giá Tăng Dần</option>
                                <option>Giá Giảm Dần</option>
                                <option>Sao Tăng Dần</option>
                                <option>Sao Giảm Dần</option>
                                <option>Điểm Tăng Dần</option>
                                <option>Điểm Giảm Dần</option>
                            </select>
                    </div>
                </div>
        </div>
    )
}

export default SearchResultsSort