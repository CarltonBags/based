import bnb from "../../assets/2.png"
import mods from "../../assets/3.png"

import "../../../globals.css"



export default function ChainSelector() {

    const handleTwitter = (e, url) => {
        e.stopPropagation()
        window.open(url, '_blank')        
    }        

    const handleTelegram = (e, url) => {
        e.stopPropagation()
        window.open(url, '_blank')        
    }        
    
    return(
        <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col sm:flex-row gap-2">
                <img onClick={(e) => handleTwitter(e, "https://x.com/BasedSwapDex")} src={bnb} className="w-8 hover:cursor-pointer"></img>
                <img onClick={(e) => handleTelegram(e, "https://t.me/basedswapportal")} src={mods} className="w-8 hover:cursor-pointer"></img>
            </div>
        </div>
    )
}