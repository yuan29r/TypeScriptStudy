function MM_openBrWindow(i, t, o) {
    window.open(i, t, o)
}
"undefined" == typeof jQuery && document.write('<script type="text/javascript" src="//www.1111.com.tw/includesU/jquery-1.4.3.min.js" ><\/script>'), 
"undefined" == typeof setHref && document.write('<script type="text/javascript" src="//www.1111.com.tw/includesU/clickCount.js" ><\/script>'), 
document.write('<script type="text/javascript" src="//www.1111.com.tw/includesU/toplink/topLinkArray.js" ><\/script>'), 
document.write('<script type="text/javascript" src="//www.1111.com.tw/includesU/toplink/topLinkArrayAD.js" ><\/script>');
for (var mobiles = new Array("midp", "j2me", "avant", "docomo", "novarra", "palmos", "palmsource", "240x320", "opwv", "chtml", 
    "pda", "windows ce", "mmp/", "blackberry", "mib/", "symbian", "wireless", "nokia", "hand", "mobi", "phone", "cdm", "up.b", "audio", "sie-", 
    "sec-", "samsung", "htc", "mot-", "mitsu", "sagem", "sony", "alcatel", "lg", "eric", "vx", "NEC", "philips", "mmm", "xx", "panasonic", 
    "sharp", "wap", "sch", "rover", "pocket", "benq", "java", "pt", "pg", "vox", "amoi", "bird", "compal", "kg", "voda", "sany", "kdd", "dbt", 
    "sendo", "sgh", "gradi", "jb", "dddi", "moto", "iphone", "android", "iPod", "incognito", "webmate", "dream", "cupcake", "webos", "s8000", 
    "bada", "googlebot-mobile"), ua = navigator.userAgent.toLowerCase(), isMobileX = !1, i = 0; i < mobiles.length; i++)
    if (0 < ua.indexOf(mobiles[i])) {
        isMobileX = !0;
        break
    } var fullid = "";

function getTopLink(i) {
    var t = $(".toplinkzone").width();
    for (t < 800 
        ? ($("#showtoplinkmore").html("　"), $("#addivid").hide(), $("#moremoreid").hide(), $(".toplinkzone .navigation1").hide(), 
           $(".toplinkzone .navigation3").hide(), $(".toplinkzone .navigation4 .newMember").hide(), $(".toplinkzone .navigation4 .job").hide(), 
           $(".toplinkzone .navigation2 .job").hide(), $(".toplinkzone .navigation4 .libgcolor").hide().last().show()
           ) 
        : ($("#showtoplinkmore").html("更多▼"), $("#addivid").show(), $("#moremoreid").show(), $(".toplinkzone .navigation1").show(), 
           $(".toplinkzone .navigation3").show(), $(".toplinkzone .navigation4 .newMember").show(), $(".toplinkzone .navigation4 .job").show(), 
           $(".toplinkzone .navigation2 .job").show(), $(".toplinkzone .navigation4 .libgcolor").show()
           ), 
         arradid = (fullid = i).split(","), ai = 0; ai < arradid.length; ai++
         )
     {
        i = parseInt(arradid[ai]);
        var o = "",
            e = "";
        for (ti = 0; ti < topLinkArray.length; ti++) {
            if (0 <= (n = jQuery.inArray(i, topLinkArray[ti]))) {
                o = topLinkArray[1][n], e = topLinkArray[2][n];
                break
            }
            for ($("#toplink_" + i).html(o), $("#toplink_" + i).attr("href", e), ta = 0; ta < topLinkArrayAD.length; ta++) {
                var n;
                if (0 <= (n = jQuery.inArray(i, topLinkArrayAD[ta])))
                    if ((n = Math.floor(Math.random() * topLinkArrayAD[ta].length)) < topLinkArrayAD[ta].length) {
                        o = topLinkArrayAD[1][n], e = topLinkArrayAD[2][n];
                        break
                    }
            }
        }
        t < 700 && "人力銀行" != o && (e = o = ""), $("#toplink_" + i).html(o), $("#toplink_" + i).attr("href", e)
    }
}

function showspace() {
    var i = new detectBrowser;
    (i.isIE && "CSS1Compat" == document.compatMode || !i.isIE) && document.write('<div id="toplinkspace" style="height:28px;"></div>')
}

function detectBrowser() {
    var i = navigator.userAgent.toLowerCase();
    this.isIE = -1 != i.indexOf("msie"), 
    this.isFF = -1 != i.indexOf("firefox"), 
    this.isSa = -1 != i.indexOf("safari"), 
    this.isOp = -1 != i.indexOf("opera"), 
    this.isNN = -1 != i.indexOf("netscape"), 
    this.isMa = this.isIE, 
    this.isOther = !(this.isIE || this.isFF || this.isSa || this.isOp || this.isNN || this.isSa)
}

function TopLinkIsMobile() {
    return !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
"undefined" != typeof jQuery && (
    $(function () {
    window.onresize = function () {
        getTopLink(fullid)
    }
    }), 
    $(function () {
        $(document).click(function (i) {
            var t = $(i.target);
            "showtoplinkmore" != t.attr("id") && $("#showtopmenu").hide(), "showmemberboxmore" != t.attr("id") && ($("#showmemberbox").hide(), $("#libgcolor").attr("class", "libgcolor"))
        }), TopLinkIsMobile() && $("a").each(function () {
            if (null != $(this).attr("href") && "undefined" != $(this).attr("href") && 0 < $(this).attr("href").indexOf("/talents/memberlogin.asp")) {
                var i = $(this).attr("href");
                i = i.replace("/talents/memberlogin.asp", "/login/memberlogins.asp"), $(this).attr("href", i)
            }
        })
    })
);