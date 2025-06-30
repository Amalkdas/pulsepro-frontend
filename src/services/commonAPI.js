// this is where the axios configuration

// import axios

import axios from 'axios'

// axios config

export const commonAPI = async(httpMethod,url,reqbody)=>{
    const reqconfig={
        method:httpMethod,
        url,
        data:reqbody

    }
    return await axios(reqconfig).then((res)=>
       
    {
        return res

    }).catch((err)=>{
        return err
    })

    }

