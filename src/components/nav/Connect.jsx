
import '../../../globals.css';
import { useEthers } from "@usedapp/core";



export const Connect = ({handleOpen, isOpen}) => {



const {account, activateBrowserWallet, deactivate, chainId, switchNetwork} = useEthers()

const handleBox = () =>{
    activateBrowserWallet()
    
}

const handleBoxDeact = () =>{
    deactivate()
   
}



    return(
        <div className="max-w-44">
            {!account &&
                <div onClick= {handleBox} className={`rounded text-white px-8 py-2 bg-base-20 hover:scale-110 ease-in-out hover:cursor-pointer shadow-lg shadow-base-22`}>
                    connect
                </div>
            }

            {account && chainId === 97 &&
                <div onClick= {handleBoxDeact} className={`rounded text-white px-8 py-2 bg-base-20 hover:scale-110 ease-in-out hover:cursor-pointer shadow-lg shadow-base-22`}>
                    {`${account.slice(0,4)}...${account.slice(account.length -6, account.length)}`}
                </div>
            }
            {account && chainId !== 97 &&
                <div onClick= {handleBoxDeact} className={`border rounded px-8 py-2 bg-base-8 hover:scale-110 ease-in-out hover:cursor-pointer shadow-lg shadow-base-22`}>
                    Wrong Chain
                </div>
            }
        </div>
        
    )
}

