import "../../globals.css"



export default function MarqueeBanner() {
    return (
      <div className="border-t-4 border-b-4 border-black h-10 flex items-center bg-base-20">
        <div className=" marquee border-t-4 border-b-4 border-base-4">
          <div className="marquee-content font-basic text-sm text-slate-50">
            <span><span className="font-bold">+++ WELCOME TO BASEDPAD +++</span> check us out on BASE-Testnet <span className="font-bold">+++ subscribe to our socials to stay up to date </span></span>
            <span><span className="font-bold">+++ WELCOME TO BASEDPAD +++</span> check us out on BASE-Testnet <span className="font-bold">+++ subscribe to our socials to stay up to date </span></span>
          </div> 
          <div className="marquee-content font-basic text-sm text-black">
          <span><span className="font-bold">+++ WELCOME TO BASEDPAD +++</span> check us out on BASE-Testnet <span className="font-bold">+++ subscribe to our socials to stay up to date </span></span>
          <span><span className="font-bold">+++ WELCOME TO BASEDPAD +++</span> check us out on BASE-Testnet <span className="font-bold">+++ subscribe to our socials to stay up to date </span></span>
          </div>
        </div>
      </div>
    );
}