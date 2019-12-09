var AlertLv;
(function (AlertLv) {
    AlertLv[AlertLv["info"] = 0] = "info";
    AlertLv[AlertLv["warning"] = 1] = "warning";
    AlertLv[AlertLv["error"] = 2] = "error";
})(AlertLv || (AlertLv = {}));
function getAlertLv(level) {
    var emails = new Array();
    switch (level) {
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
            throw new Error("不知名錯誤");
    }
    return emails;
}
getAlertLv(AlertLv.info);
//# sourceMappingURL=AlertLevel.js.map