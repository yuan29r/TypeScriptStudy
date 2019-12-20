///////////////////////////////////////
//合併介面
//介面中非函數的成員必須是唯一的。如果多個介面中具有相同名稱的非函數成員就會報錯。
///////////////////////////////////////
interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

var box: Box = {height: 5, width: 6, scale: 10};

/////////////////////////////////////////////////////////
//對於函數成員，每個同名函式宣告都會被當成這個函數的一個多載。
/////////////////////////////////////////////////////////
interface Document {
    createElement(tagName: any): Element;
}
interface Document {
    createElement(tagName: string): HTMLElement;
}
interface Document {
    createElement(tagName: "div"): HTMLDivElement; 
    createElement(tagName: "span"): HTMLSpanElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
}
//也就是遇到同名的函數要注意，實際在使用時的順序會如下
//interface Document {
//    createElement(tagName: "div"): HTMLDivElement; 
//    createElement(tagName: "span"): HTMLSpanElement;
//    createElement(tagName: "canvas"): HTMLCanvasElement;
//    createElement(tagName: string): HTMLElement;
//    createElement(tagName: any): Element;
//}

