import "../../globals.css"
import { useEthers } from "@usedapp/core"
import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import LaunchCard from "../components/LaunchCard"
import devpage from "../assets/devpage.svg"


export default function Account (){

    const {account, chainId} = useEthers()
    const [searchParams, setSerchParams] = useSearchParams()
    const [devData, setDevData] = useState([])
    const [devAddr, setDevAddr] = useState("")


    useEffect (() => {

        const fetchData = async (devAddress) => {
            try {
                const response = await axios.get(`https://basedpad.app/api2/getDev/${devAddress}`)
                const data = response.data
                console.log("devdata", data)

                const filtered =  data.filter((item, index, self) => index === self.findIndex((t) => (
                    item.timestamp === t.timestamp
                )))

                const parsedData = filtered.map(item => ({
                    ...item,
                    d: JSON.parse(item.description || '{}') // Assuming des is a JSON string
                }));

                setDevData(parsedData)
            }
           catch(e){console.log("error fetching dev data", e)}

        }

        const devAddress = searchParams.get("account")
        setDevAddr(devAddress)
        fetchData(devAddress)
    },[])

    return(

        <div className="flex flex-col pt-10 items-center mb-10">
            <div className="flex flex-col items-center">
                <div className="font-basic font-extrabold text-6xl mb-4 text-base-20">
                    Dev Page                
                </div>
                {
                    <div className="border-2 border-base-22 rounded bg-slate-50 px-4 py-2 font-basic font-semibold text-sm text-base-20 md:text-xl max-w-[300px] shadow-xl shadow-base-22">
                        {devAddr.slice(0,10)}...{devAddr.slice(devAddr.length-8,devAddr.length)}
                    </div>
                }
                
            </div>
            <div className="flex flex-col gap-4 items-center mt-20 overflow-x-auto pb-10">
                <div className="font-basic font-semibold text-base-20 text-2xl pt-2">
                    devs past launches
                </div>
                <div className="flex flex-row flex-wrap justify-center gap-8 p-4 overflow-x-auto">
                    {devData &&
                        devData.map((item,index) => (<LaunchCard key={index} data={item} />))
                    } 
                </div>
            </div> 
        </div>
    )
}