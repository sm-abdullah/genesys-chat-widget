
import { Genesys, MyWindow, Main,Widgets} from './ss';
require ("jquery")
let myWindow = window as MyWindow;
declare var require: any;
if(!myWindow._genesys)myWindow._genesys = { text: "hello" } as Genesys;
if(!myWindow._gt)myWindow._gt = [];
require("./widgets.min");
const _Genesys: Genesys =  myWindow._genesys;
const mywidget = {
    _Genesys: _Genesys,
}
export * from "./ss";
export default mywidget;

