<template>
    <title>DASHBOARD: INBOUND</title>
    <div>
        <v-card>
            <v-tabs class="Tabpanel"
            v-model="tab"
            bg-color="#000000"
            align-tabs="center"
            >
            <v-tab value="one">UNLOADING</v-tab>
            <v-tab value="two">PUTAWAY</v-tab>
            <v-tab value="three">FLOWTHRU</v-tab>
            </v-tabs>
            <div class="datepicker">
                <n-date-picker
                    v-model:formatted-value="formattedValue"
                    value-format="yyyy-MM-dd"
                    type="date"
                    clearable
                    class="Hovering"
                />
            </div>
                    <div class="datepicker-btn">
                        <button type="submit" >REFRESH</button>
                    </div>
            <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="one">
                    <div class="Grid-Panel-1">
                    <div class="Grid-Container-1">

                    <div class="Grid-Item-1" @onclick="ShowPlanImport">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M0 80C0 35.8 35.8 0 80 0H432c44.2 0 80 35.8 80 80V368c0 26.2-12.6 49.4-32 64v48c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H128v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V432C12.6 417.4 0 394.2 0 368V80zm129.9 72.2L112 224H400l-17.9-71.8C378.5 138 365.7 128 351 128H161c-14.7 0-27.5 10-31 24.2zM128 320a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
                        <h4>
                            PLAN IMPORT
                            <br />
                            <v-progress-circular
                                v-if="ImportCircular == true"
                                color="primary"
                                indeterminate
                                :size="36"
                                :width="8"
                                ></v-progress-circular>
                            <p v-if="ImportCircular == false">{{ PlanningInbound.IMPORT }}</p>
                        </h4>
                    </div>
                    <div class="Grid-Item-1">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                        <h4>
                            PLAN LOCAL
                            <br />
                            <p>{{ PlanningInbound.LOCAL }}</p>
                        </h4>
                    </div>
                    <div class="Grid-Item-1">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M41 7C31.6-2.3 16.4-2.3 7 7S-2.3 31.6 7 41l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L41 7zM599 7L527 79c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0zM7 505c9.4 9.4 24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L7 471c-9.4 9.4-9.4 24.6 0 33.9zm592 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-72-72c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72zM320 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM212.1 336c-2.7 7.5-4.1 15.6-4.1 24c0 13.3 10.7 24 24 24H408c13.3 0 24-10.7 24-24c0-8.4-1.4-16.5-4.1-24c-.5-1.4-1-2.7-1.6-4c-9.4-22.3-29.8-38.9-54.3-43c-3.9-.7-7.9-1-12-1H280c-4.1 0-8.1 .3-12 1c-.8 .1-1.7 .3-2.5 .5c-24.9 5.1-45.1 23-53.4 46.5zM175.8 224a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-26.5 32C119.9 256 96 279.9 96 309.3c0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6c-7.5-4.1-16.2-6.4-25.3-6.4H149.3zm368 80c14.7 0 26.7-11.9 26.7-26.7c0-29.5-23.9-53.3-53.3-53.3H421.3c-9.2 0-17.8 2.3-25.3 6.4c32.4 11.9 57.2 39.5 65.2 73.6h56.1zM464 224a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
                        <h4>
                            PLAN MPP
                            <br />
                            <p>{{ PlanningInbound.MHE }}</p>
                        </h4>

                    </div>
                    <div class="Grid-Item-1">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 32C0 14.3 14.3 0 32 0h72.9c27.5 0 52 17.6 60.7 43.8L257.7 320c30.1 .5 56.8 14.9 74 37l202.1-67.4c16.8-5.6 34.9 3.5 40.5 20.2s-3.5 34.9-20.2 40.5L352 417.7c-.9 52.2-43.5 94.3-96 94.3c-53 0-96-43-96-96c0-30.8 14.5-58.2 37-75.8L104.9 64H32C14.3 64 0 49.7 0 32zM244.8 134.5c-5.5-16.8 3.7-34.9 20.5-40.3L311 79.4l19.8 60.9 60.9-19.8L371.8 59.6l45.7-14.8c16.8-5.5 34.9 3.7 40.3 20.5l49.4 152.2c5.5 16.8-3.7 34.9-20.5 40.3L334.5 307.2c-16.8 5.5-34.9-3.7-40.3-20.5L244.8 134.5z"/></svg>
                        <h4>
                            PLAN MHE
                            <br />
                            <p>{{ PlanningInbound.RF }}</p>
                        </h4>

                    </div>
                    <div class="Grid-Item-1">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M0 64C0 28.7 28.7 0 64 0H256c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm64 96v64c0 17.7 14.3 32 32 32H224c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32zM80 352a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm24 56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56-56a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm24 56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56-56a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm24 56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM128 48c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H128z"/></svg>
                        <h4>
                            PLAN RF
                            <br />
                            <p>{{ PlanningInbound.MPP }}</p>
                        </h4>
                    </div>
                </div>
                <div class="Grid-Container-2">
                        <div class="Grid-Item-2" >
                            <div class="Header-Grid-Item-2">
                                <a>WORKING PROGRESS</a>

                            </div>
                            <div class="Card-Body-Chart" style="display:flex;" >
                                <div class="Chartbox" >
                                    <ejs-chart id="container" :primaryXAxis='primaryXAxis'>
                                        <e-series-collection>
                                            <e-series :dataSource='this.WorkingProgressBaseTrans' type='Bar' xName='LIST_PROCESS' yName='VALUE' name='IMPORT'> </e-series>
                                        </e-series-collection>
                                    </ejs-chart>
                                </div>
                                <div class="Btnworking">
                                    <div class="Header-Grid-Item-3">
                                        <a>WORKING PROGRESS DETAIL</a>
                                    </div>

                                    <input type="button" class="btnlist" value="WAITING ARRIVAL (ON SCHEDULE)" /> 
                                    <input type="button" class="btnlist" value="WAITING ARRIVAL (DELAYED)" /> 
                                    <input type="button" class="btnlist" value="WAITING TO UNLOAD (ON SCHEDULE)" /> 
                                    <input type="button" class="btnlist" value="WAITING TO UNLOAD (DELAY)" /> 
                                    <input type="button" class="btnlist" value="UNLOADING (ON GOING)" /> 
                                    <input type="button" class="btnlist" value="UNLOADING (DELAY)" /> 
                                    <input type="button" class="btnlist" value="WAITING TO CHECKOUT (ON GOING)" /> 
                                    <input type="button" class="btnlist" value="WAITING TO CHECKOUT (DELAY)" /> 
                                    <input type="button" class="btnlist" value="CHECKED OUT" /> 

                                </div>

                            </div>
                        </div>
                        <div class="Grid-Item-2">
                            <div class="Header-Grid-Item-2">
                                <a>ACHIVEMENT UNLOADING</a>

                            </div>
                            <div class="Card-Body-Chart">
                                    
                                    <div class="Chart-Body-Achivement">
                                        <div class="Achiment-Item"> 
                                            <a class="Header-Achivemnt">PROCESS</a>
                                            <a class="Content-Achivemnt">HASIL</a>
                                        </div>                                
                                        <div class="Achiment-Item">
                                            <a class="Header-Achivemnt">DONE</a>
                                            <a class="Content-Achivemnt">HASIL</a>

                                        </div>                                
                                        <div class="Achiment-Item">
                                            <a class="Header-Achivemnt">TOTAL</a>
                                            <a class="Content-Achivemnt">HASIL</a>
                                        </div>
                                    </div>

                                        <div class="Box-percentage">
                                            <a class="Header-Achivemnt">PERCENTAGE</a>
                                            <br/>
                                            <a>PROGRESS BAR</a>
                                        </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                </v-window-item>

                <v-window-item value="two">
                Two
                </v-window-item>

                <v-window-item value="three">
                Three
                </v-window-item>
            </v-window>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { NDatePicker } from "naive-ui";
import axios from 'axios';
import {ChartComponent, SeriesCollectionDirective, SeriesDirective,BarSeries ,Category } from "@syncfusion/ej2-vue-charts";

    const BaseUrl = 'https://apiblazor.sanstech.online/';
    const BASE_UNLOADING_FETCH_DATA = 'API/HCI/INBOUND/InboundSpRunning/&aqoonsiHCIJBK/&TAARIIKHDA';

    definePageMeta({
        layout:'sidebar'
    })
    export default defineComponent({
        components: {
            NDatePicker,
            'ejs-chart': ChartComponent,
            'e-series-collection': SeriesCollectionDirective,
            'e-series': SeriesDirective
    },
    data: () => ({
      tab: null,
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substring(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      datevalue:null,
      formattedValue: null,
      PlanningInbound:[{
        IMPORT : '',
        LOCAL : '',
        MHE : '',
        RF : '',
        MPP : ''
      }],
    ImportCircular: true,
    WorkingProgressBaseTrans:[{
        LIST_PROCESS:'',
        VALUE: Float32Array,
        FILL:''
    }],
    primaryXAxis: {
           valueType: 'Category'
        }    
    }),
    provide:{
        chart: [BarSeries ,Category]
    },
    methods:{
        FirstApper()
        {
            let yourDate = new Date()
            this.formattedValue = yourDate.toISOString().split('T')[0];
        },

        async LoadData()
        {
            await axios.get(BaseUrl + BASE_UNLOADING_FETCH_DATA +this.formattedValue+'/&XULASHADATALOImport/&PARAAMETER1/').then(Response =>{
                this.PlanningInbound = Response.data[0];
                    this.ImportCircular = false;
            }),
            await axios.get(BaseUrl + BASE_UNLOADING_FETCH_DATA + this.formattedValue + '/&XULASHADATALOImport/&PARAAMETER2/').then(response =>{
                this.WorkingProgressBaseTrans = response.data;
            })
            
        }
    },
    mounted (){
        this.FirstApper.call();
        this.LoadData.call();
    }
  })
</script>


<style>
@import '~/assets/css/inboundBase.css'; 
</style>    