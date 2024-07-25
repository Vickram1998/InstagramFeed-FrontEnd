
import Constant from "../../Utils/Constant";
import { getFormDataFromObject } from "../../Utils/common-util";



export function loadAllPost(){
   return fetch(Constant.getApiUrl('posts'))
    .then(data=>data.json())
}

export default function createPosts(data){
    return fetch(Constant.getApiUrl('posts'),{
        method:'post',

        
        body:getFormDataFromObject(data)
    }


)

}