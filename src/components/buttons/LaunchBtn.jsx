import '../../../globals.css'
import { Link } from 'react-router-dom'


export default function LaunchBtn () {

    return(
        
        <Link to="/create">
            <div className={`flex justify-center text-white text-xl bg-base-22 rounded-xl py-2 px-8 hover:scale-110 ease-in-out hover:cursor-pointer hover:text-white hover:bg-base-20 w-64 h-12 font-basic`}>
                start new token
            </div>
        </Link>
        
    )
}