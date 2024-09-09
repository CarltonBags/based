



export default function About() {

    const handleClick = (e, url) => {
        e.stopPropagation()
        window.open(url, '_blank')        
    }  

    return(
        <div onClick={(e) => handleClick(e, "https://about.basedpad.app/")} className={`flex justify-center text-base-21  py-2 px-8 hover:scale-110 ease-in-out hover:cursor-pointer w-42 h-10 font-basic`}>
            about
        </div>
    )
}