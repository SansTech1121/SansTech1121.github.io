import * as StringClass from '~/assets/js/Models/StringClass.js'; 

// PERMANENT_VALUE
export const BaseUrlApi = 'https://apiblazor.sanstech.online/'
export const GetWhseidstr = 'api/Facility/GetBiuName/';
export const PLAN_UNLOADING = '/&XULASHADATALOImport/&PARAAMETER1/';
export const WORKING_PROGRESS_IMPORT = '/&XULASHADATALOImport/&PARAAMETER2/';
export const WORKING_PROGRESS_LOCAL = '/&XULASHADATALOLocal/&PARAAMETER2/';
export const ACHIVEMENT_UNLOADING = '/&XULASHADATALOImport/&PARAAMETER3/';
export const PRODUCTIVITY_UNLOADING = '/&XULASHADATALOImport/&PARAAMETER5/';
export const WORKING_PROGRESS_DETAIL_PART = '/TYPE=import/PARAMETER=2/STATUS=';
export const WORKING_PROGRESS_DETAIL_ALL = '/TYPE=import/PARAMETER=1/STATUS=0/';

// STATIC_VALUE
export var BASE_UNLOADING_FETCH_DATA = '';
export var BASE_UNLOADING_FETCH_DATA_DETAIL = '';



// DECLARE_METHODS
export default({
data: ()=>({
}),
methods:{
    async GetallApiLink(){
        if(localStorage.getItem("WHSEID") == 'WMWHSE4')
        {
            BASE_UNLOADING_FETCH_DATA = 'API/HCI/INBOUND/InboundSpRunning/&aqoonsiHCIJBK/&TAARIIKHDA'
            BASE_UNLOADING_FETCH_DATA_DETAIL= 'API/HCI/INBOUND/InboundSpRunningDetail/WhereParameter/WHSEID=HCIJBK/DATE='
        }
        if(localStorage.getItem("WHSEID") == 'WMWHSE2')
        {
            BASE_UNLOADING_FETCH_DATA = 'API/AHI/INBOUND/InboundSpRunning/&aqoonsiAHI&KLS/&TAARIIKHDA'
            BASE_UNLOADING_FETCH_DATA_DETAIL= 'API/AHI/INBOUND/InboundSpRunningDetail/WhereParameter/WHSEID=AHI&KLS/DATE='    
        }
        if(StringClass.default.data.WHSEID == 'WMWHSE5')
        {
            BASE_UNLOADING_FETCH_DATA = "API/AHI/INBOUND/InboundSpRunning/&aqoonsiHCICKP/&TAARIIKHDA"
            BASE_UNLOADING_FETCH_DATA_DETAIL= "API/AHI/INBOUND/InboundSpRunningDetail/WhereParameter/WHSEID=HCICKP/DATE="   
        }
    }
}
});
