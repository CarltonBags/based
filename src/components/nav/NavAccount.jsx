import "../../../globals.css"
import { useEthers } from "@usedapp/core"
import { useNavigate, useSearchParams } from "react-router-dom"

export  function NavAccount ({handleOpen, isOpen}) {

    const {chainId, account} = useEthers()
    const navigate = useNavigate()

    const handleClick = () => {
        if(isOpen){
            handleOpen()
        }
        if(account){
            navigate(`/me?account=${account}`)
        }
    }

    return (

        <div onClick={handleClick} className="flex bg-base-21 text-white justify-center h-10 rounded p-2 mb-4 hover:scale-110 ease-in-out hover:cursor-pointer w-12 shadow-lg shadow-base-22">
            me
        </div>
    )
}