import Buy from "./Buy";
import Sell from "./Sell";
import { useState } from "react";
import "/globals.css"



export default function Trade ({tokenAddress, tokenTicker, tokenBalance, trading}) {

    const [isBuy, setIsBuy] = useState(true)

    return(
        <div>
            <div className="font-basic text-lg font-semibold">
                trade
            </div>
            <div>
                {isBuy &&
                    <Buy tokenAddress={tokenAddress} tokenTicker={tokenTicker} setIsBuy={setIsBuy} tokenBalance={tokenBalance} trading={trading} />
                }

                {!isBuy &&
                    <Sell tokenAddress={tokenAddress} tokenTicker={tokenTicker} setIsBuy={setIsBuy} tokenBalance={tokenBalance} trading={trading}/>
                }
            </div>
            

        </div>
       
    )
}