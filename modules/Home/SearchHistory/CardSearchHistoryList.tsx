import Image from "next/image"
import CardSearchHistory from "./CardSearchHistory"


const CardSearchHistoryList = (props : any) => {
    return (
        <div className="flex items-center gap-5" >
            <CardSearchHistory/>
            <CardSearchHistory/>
            <CardSearchHistory/>
            <CardSearchHistory/>
        </div>
    )
}

export default CardSearchHistoryList