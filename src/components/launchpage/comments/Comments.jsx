import "../../../../globals.css"
import { useState, useEffect } from "react"
import moment from "moment"

export default function Comments ({item, latest}) {

    const [nDate, setNDate] = useState("")
    const [holder, setHolder] = useState(false)

    useEffect (() => {

        const date = moment.unix(item.timestamp / 1000).format('YYYY-MM-DD HH:mm')
        setNDate(date)
        if(latest){
            for (const object of latest){
                if(object.maker == item.account){
                    setHolder(true)
                }
            }
        }

    },[])

    return(
        <div className="flex flex-col truncate text-wrap border-2 border-base-22 rounded-xl text-xs font-basic mb-4 mr-4 shadow-md shadow-base-22">
            <div className="flex flex-row justify-between bg-base-22 opacity-70 px-2 gap-2 border-b-2 border-base-22">
                    <div >
                        {nDate}
                    </div>
                    {holder &&
                        <div className="font-basic text-xs font-bold ">
                            ✅ buyer
                        </div>
                    }
                    <div>
                        {item && item.account && item.account.slice(0,4)}...{item && item.account && item.account.slice(item.account.length -5, item.account.length)}
                    </div>
            </div>
            <div className="px-2 truncate text-wrap bg-white">
                {item.comment}
            </div>

        </div>
    )
}