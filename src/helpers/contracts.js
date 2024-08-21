import {supportedChainIds} from './chains'
import {ethers} from 'ethers'
import factoryABI from '../abis/factoryABI.json'
import tokenABI from '../abis/tokenABI.json'



export const contracts = {
    factory: 
        {
            addresses: {
                97:'0xA5D9059A277F599857e41bd34C5FF332Dabd1970'
            },

            interface: {
                97: new ethers.utils.Interface(factoryABI)
            }

        },
    eventhandler:
        {
            addresses:{
                97:"0x9eb55843b93F8cBd8dB7A5695eF581FDcc6E91c0"
            }

        },
    sushiV2Factory:
        {   
            addresses:{
                97:"0xc35DADB65012eC5796536bD9864eD8773aBc74C4"
            },
        

        },
    sushiV2Router:
        {   
            addresses:{
                97:"0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506"
            },
            

        },
    WETH:
        {
            addresses:{
                97:"0xa8B8cb1C5c9e13C3af86cc8aa5f0297Db69b099C"
            }
            
        },
    feeAddress:
        {
            97:"0x9695b8652a3046a5390BCF5e2Ca9C4b8C8437aa5"
        },
    token:{
            interface:{
                97: new ethers.utils.Interface(tokenABI)
            }
    }
    
}