import Constant from "./Constant"

function getAssetPath (){
    return `${Constant.ASSEST_BASE_PATH}`
}

function getFormDataFromObject(data){
    const formData = new FormData()
    
    for (let key in data ){
        formData.append(key,data[key])
    }
   
    return formData
}

export{
    getAssetPath,  
    getFormDataFromObject
}