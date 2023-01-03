import { promises } from "dns";

export const helphttp=()=>{
    const customfetch=(endpoint:any,options:any)=>{
        const defaultHeader={
            accept:"aplication/json"
        };

        //AbortController
        
        const controller=new AbortController();
        options.signal=controller.signal;
        
        options.method=options.method||"GET";
        options.headers=options.headers?{...defaultHeader,...options.headers}:defaultHeader;

        options.body=JSON.stringify(options.body)||false;
        if(!options.body)delete options.body;
        
        setTimeout(()=>controller.abort(),3000);
        
        return fetch(endpoint,options).then((res)=>res.ok?res.json():Promise.reject({
            err:true,
            status:res.status||"00",
            statusText:res.statusText||"Ocurrio un error",
        }))
        .catch(err=>err);
        
    };


    const get=(url:any, options={})=> customfetch(url,options);

    const post=(url:any,options:any={})=>{
        options.method="POST";
        return customfetch(url,options);
    };

    const put=(url:any,options:any={})=>{
        options.method="PUT";
        return customfetch(url,options);
    };
    const del=(url:any,options:any={})=>{
        options.method="DELETE";
        return customfetch(url,options);
    };
    
    
    return{
        get,post,put,del,
    };
}