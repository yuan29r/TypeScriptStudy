//這邊是定義介面並實作一個介面
interface ILogger{
    log(arg:any):void;
}

class Logger implements ILogger{
    log(arg: any){
        if(typeof console.log==="function"){
            console.log(arg);
        }
        else{
            alert(arg);
        }
        
    }
}

//下面可以看成是把介面當成型別來使用了
interface IUser{
    name:string;
    password:string;
}
var user:IUser={
    name:"",
    password:""
}