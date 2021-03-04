import { toast } from "react-toastify";

interface ErrorResponse 
{
    Message: string;
}

class ApiCommunicatorInner 
{
    private serverUrl:string;

    constructor(serverUrl : string | undefined) {
        if(serverUrl === undefined){
            throw new Error("Not founded server url in env file");
        }
        this.serverUrl = serverUrl;
    }

    CallGet<T>(urlRouter : string, resultMethod : any, errorMethod? : any){
        fetch(this.serverUrl + "/" + urlRouter, {
            method: "GET",
            headers: this.BuildHeader(),
        })
        .then(res => res.json())
        .then((data: T) => {
            resultMethod(data);
        })
        .catch((error: ErrorResponse) => {
            if(errorMethod != null){
                errorMethod(error);
            }else{
                if(error.Message != null){
                    toast(error.Message,{type:"error"});
                }else{
                    toast("Something wrong happens",{type:"error"});
                }
            }
        }
        );
    }
    
    CallPost<T>(urlRouter : string, resultMethod : any, errorMethod? : any, bodyModel? : object){
        fetch(this.serverUrl + "/" + urlRouter, {
            method: "POST",
            headers: this.BuildHeader(),
            body: JSON.stringify(bodyModel)
        })
        .then(res => res.json())
        .then((data: T) => {
            resultMethod(data);
        })
        .catch((error: ErrorResponse) => {
            if(errorMethod != null){
                errorMethod(error);
            }else{
                if(error.Message != null){
                    toast(error.Message,{type:"error"});
                }else{
                    toast("Something wrong happens",{type:"error"});
                }
            }
        }
        );
    }

    private BuildHeader() : Headers{
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        return headers;
    }
}

export const ApiCommunicator = new ApiCommunicatorInner(process.env.REACT_APP_API_URL);
