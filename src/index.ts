
import { Genesys, MyWindow, Main,Widgets} from './ss';
require ("jquery")
let myWindow = window as MyWindow;
declare var require: any;
require("./widgets.min");
const _Genesys: Genesys =  myWindow._genesys;
const mywidget = {
    _Genesys: _Genesys,
}
export * from "./ss";
export default mywidget;

