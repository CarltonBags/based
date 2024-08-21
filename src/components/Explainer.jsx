
import '../../globals.css'


export default function ({handleExplainerModal}) {
    
    return(
        <div onClick={handleExplainerModal} className={`flex w-[200px] text-base-21 font-basic font-bold justify-center  hover:cursor-pointer hover:text-base-20`}>
            how it works
        </div>
    )
}