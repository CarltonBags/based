import '../../globals.css';
import LaunchCard from './LaunchCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom'
import launches from "../assets/launches.svg"
import { io } from "socket.io-client"
import left from "../assets/left.svg"
import right from "../assets/right.svg"
import { useEthers} from "@usedapp/core";




export default function LaunchTable() {
    const [files, setFiles] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1)
    const [max, setMax] = useState()

    const {chainId} = useEthers()

    const handleUp = () =>{
        if(page != max){
            setPage(page +1)
            console.log("page", page)
        }
        
    }

    const handleDown = ()  =>{
        if(page > 1){
            setPage(page -1)
            console.log("page", page)
        }
    }
   

    // In your LaunchTable component
useEffect(() => {
    const fetchData = async () => {
        try {
            let chain = chainId || 97;

            const response = await axios.get(`https://basedpad.app/api2/getCreated/${page}?chainId=${chain}`, {
                withCredentials: true,
            });

            const data = response.data.data;
            console.log('API Response:', response.data); // Log the entire response

            const maxPages = response.data.totalPages;
            setMax(maxPages);

            if (Array.isArray(data)) {
                // If des field needs parsing, do it here
                const parsedData = data.map(item => ({
                    ...item,
                    d: JSON.parse(item.description || '{}') // Assuming des is a JSON string
                }));
                setFiles(parsedData);
                console.log("parsed data", parsedData)
            } else {
                console.error('Expected data to be an array, but received:', data);
                setError('Invalid data format received.');
            }

        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Error fetching data.');
        }
    };

    fetchData();
}, [page, chainId]);


    useEffect(() => {
        const socket = io('https://basedpad.app', {
            path: '/socket.io/',
            transports: ['websocket', 'polling'], // Allow both transports
            withCredentials: true,
        });
        
        socket.on("newBuyEvent", (data) => {
            console.log("new buy event", data);
    
            setFiles((prevFiles) => {
                const updatedFiles = [...prevFiles];
                const index = updatedFiles.findIndex(item => item.tokenAddress === data.tokenAddress);
    
                if (index !== -1) {
                    const [boughtItem] = updatedFiles.splice(index, 1); // Remove the bought item from its current position
                    updatedFiles.unshift(boughtItem); // Add it to the front of the array
                    boughtItem.wiggle = true; // Mark it for wiggling
                }
    
                return updatedFiles;
            });
        });

        setTimeout(() => {
            setFiles((prevFiles) =>
                prevFiles.map(item => ({
                    ...item,
                    wiggle: false // Reset wiggle and background color after animation
                }))
            );
        }, 1000);
    
        return () => {
            socket.disconnect();
        };
    }, []);
    

    if (error) return <p>{error}</p>;

    return (
        <div className="flex flex-col justify-center w-full ">
             <div className="flex text-6xl font-basic font-bold justify-center text-base-20 pb-4">
                Launches
            </div>
            <div className="flex flex-col items-center min-h-[500px] ">
                <div className="flex flex-row flex-wrap gap-10 sm:bg-base- sm:p-10 justify-center sm:w-11/12 sm:max-w-[1400px] sm:overflow-x-auto">
                    {files.map((item, index) => (
                        <LaunchCard key={index} tag={index} data={item} />
                    ))}
                </div>
            </div>
            <div className="flex flex-row justify-center gap-2 mt-4">
                {page == 1 ? "" :<span onClick={handleDown} className="hover:cursor-pointer">{"<"}</span>}
                <div className="font-basic font-bold content-center">{page}/{max}</div>
                {page == max ? "" :<span onClick={handleUp} className="hover:cursor-pointer">{">"}</span>}
            </div>
        </div>
    );
}


