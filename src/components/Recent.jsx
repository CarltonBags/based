import lastbuy from "../assets/Lastbuy.svg"
import lastsale from "../assets/Lastsale.svg"
import newpic from "../assets/new.svg"
import dex from "../assets/dex.svg"
import { io } from "socket.io-client"
import { useEffect, useState } from "react"
import axios from "axios"
import "../../globals.css"
import { ethers } from "ethers"
import { useNavigate } from "react-router-dom"
import ChainSelector from "./buttons/Twitter_Telegram"


export default function Recent () {

    const [created, setCreated] = useState([])
    const [buySell, setBuySell] = useState([])
    const [ticker, setTicker] = useState("")
    const [address, setAddress] = useState("")
    const [uniswap, setUniswap] = useState([])
    const [nombre, setNombre] = useState("")


    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/launch?token=${address}`)
    
    }

    const handleCreated = () =>{
        navigate(`/launch?token=${created.tokenAddress}`)
    }


    const fetchData = async () => {
        try{
            const getCreated = await axios.get('https://basedpad.app/api2/getLastCreated',{withCredentials: true})
            setCreated(getCreated.data)
    
            const getLast = await axios.get('https://basedpad.app/api2/getLast',{withCredentials: true})
            const last = getLast.data

            const list = [...last[0].buys,...last[0].sells]
            list.sort((a,b) => b.timestamp - a.timestamp)
            setBuySell(list[0])
            setTicker(list[0].symbol)
            setNombre(list[0].name)
            setAddress(last[0].tokenAddress)
    
           


        }catch(e){console.log("e",e)}
       
    }
    
    useEffect(()=> {
        const socket = io('https://basedpad.app', {
            path: '/socket.io/',
            transports: ['websocket', 'polling'], // Allow both transports
            withCredentials: true,
        });
    
        socket.on('connect', () => {
           // console.log("connected to websocket server")
        })

        socket.on("newBuyEvent", (data) => {
            //console.log("new buy event", data)
            setBuySell(data)
        })

        socket.on("newSellEvent", (data) => {
            //console.log("new sell event", data)
            setBuySell(data)
        })

        socket.on("newCreationEvent", (data) => {
            //console.log("new creation event", data)
            setCreated(data)
        })

        socket.on("newUniswapEvent", (data) => {
            //console.log("new uniswap event", data)
            setUniswap(data)
        })

        return () => {
            socket.disconnect();
        };

    },[])

    useEffect(() => {
        fetchData()
    },[])


    return(
        <div className="flex sm:flex-row justify-between max-sm:items-start md:gap-20 gap-2">
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex ">
                    {buySell && buySell.type === "buy" &&
                        <div className="flex flex-col wiggle font-basic font-bold text-sm " onClick={handleClick}>
                            <div className="text-base-20">
                                Buy!                            
                            </div>
                            <div className="font-basic text-xs font-semibold py-2 rounded border border-black w-[200px] overflow-x-hidden bg-base-12 hover:cursor-pointer" >
                                <div className="flex flex-row gap-2 px-2">
                                    <div>
                                    {buySell.maker.slice(0,4)+"..."+buySell.maker.slice(buySell.maker.length -4, buySell.maker.length)} bought {Number(ethers.utils.formatEther(buySell.amountETH.toString())).toFixed(3)} ETH                     
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {buySell && buySell.type === "sell" && 
                        <div className="flex flex-col wiggle font-basic font-bold text-sm" onClick={handleClick}>
                            <div className="text-base-20">
                                Sell!
                            </div>
                            <div className="font-basic text-xs py-2 rounded border border-black w-[200px] bg-base-8 overflow-x-hidden hover:cursor-pointer" >
                                <div className="flex flex-row  gap-2 px-2">
                                    <div>
                                        {buySell.maker.slice(0,4)+"..."+buySell.maker.slice(buySell.maker.length -4, buySell.maker.length)} sold {Number(ethers.utils.formatEther(buySell.amountETH.toString())).toFixed(3)} ETH
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                {created &&
                    <div className="">
                        <div className="font-basic font-bold text-sm text-base-20">
                            New!
                        </div>
                        <div onClick={handleCreated} className="font-basic text-xs text-white font-semibold rounded border px-2 py-2 border-black w-[200px] overflow-x-hidden hover:cursor-pointer bg-base-20">
                             {created.name} (${created.symbol})
                        </div>
                    </div>
                }
            </div>
            <div>
                <ChainSelector />
            </div>
        
        </div>
    )
}