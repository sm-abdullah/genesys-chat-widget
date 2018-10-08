export interface MyWindow extends Window  {
    _genesys: Genesys;
}

export interface Genesys {
    widgets : Widgets;
}

export interface Widgets {
    main : Main;
    webchat: any;
    bus?: any;

}

export interface Webchat {
    dataURL: string;
    apikey: string;
    userData?: any;
    cometD?:CometD;
    autoInvite?: AutoInvite;
    chatButton?: ChatButton;
}

export interface ChatButton {
    enabled: boolean;
    openDelay: number;
    effectDuration: number;
    hideDuringInvite: boolean;

}

export interface AutoInvite {
    enabled: boolean;
    timeToInviteSeconds: number;
    inviteTimeoutSeconds: number;
}
export interface  CometD {
    enabled: boolean;
}
export interface Main {
     debug: boolean;
     theme: string;
     lang:string;
     customStylesheetID:string;
     plugins: string[];
     bus?: any;
}