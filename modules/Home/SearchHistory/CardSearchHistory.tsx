import Image from "next/image"


const CardSearchHistory = (props : any) => {
    return (
        <div className="shadow-lg flex items-center justify-between p-10 cursor-pointer w-[25%] border rounded-lg border-slate-200" >
                <Image/>
                <div className="flex items-center gap-5" >
                    <h1>London</h1>
                    <p>30 thang 2</p>
                </div>
        </div>
    )
}

export default CardSearchHistory