const API_BASE_PATH= 'http://localhost:5500'

const Constant={
    CON_HOST:"",
    ASSEST_BASE_PATH:'/images',
    API_BASE_PATH,
    getApiUrl:(path)=>`${API_BASE_PATH}/${path}`


}

export default Constant