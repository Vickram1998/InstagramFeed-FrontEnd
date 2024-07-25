import { getAssetPath } from "../Utils/common-util"

export function Image({src,...rest}){
    return <img src={`${getAssetPath()}/${src}`} {...rest}/>
}