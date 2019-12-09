enum AlertLv{
    info,warning,error
}

function getAlertLv(level:AlertLv){
    var emails=new Array<string>();
    switch(level)
    {
        case AlertLv.info:
            emails.push("mail01");
            break;
        case AlertLv.warning:
                emails.push("mail03");
                emails.push("mail07");
            break;
        case AlertLv.error:
                emails.push("mail08");
                emails.push("mail09");
             break;             
        default:
           throw new Error("不知名錯誤")
    }
    return emails;
}

getAlertLv(AlertLv.info);