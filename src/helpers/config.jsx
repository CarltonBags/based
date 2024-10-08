import { DAppProvider, Mainnet, BSCTestnet, Base, TestBNB} from "@usedapp/core";
import React from "react";
import {supportedChainIds} from "./chains"


export default function Provider({children}){

    const config = {
        supportedChainIds: supportedChainIds,
        readOnlyChainId: BSCTestnet.chainId,
        readOnlyUrls:{
            [BSCTestnet.chainId]: 'https://bsc-testnet-rpc.publicnode.com'

        },
        networks:[BSCTestnet]
    }
    return(
        <DAppProvider config={config}>
            {children}
        </DAppProvider>
    )


}
