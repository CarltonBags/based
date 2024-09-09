



export default function BNBFaucet() {

    const handleClick = (e, url) => {
        e.stopPropagation()
        window.open(url, '_blank')        
    }  

    return(
        <div onClick={(e) => handleClick(e, "https://www.bnbchain.org/en/testnet-faucet")} className={`flex justify-center text-white text-lg bg-base-22 rounded-xl py-2 px-8 hover:scale-110 ease-in-out hover:cursor-pointer hover:text-white hover:bg-base-20 w-42 h-10 font-basic`}>
            BNB-Faucet
        </div>
    )
}