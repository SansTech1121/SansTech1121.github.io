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
                        <button type="submit" @click="RefrshBtn">REFRESH</button>
                    </div>
            <v-card-text>
            <v-window  v-model="tab">
                <v-window-item value="one" >
                    <div class="Grid-Panel-1">
                    <div class="Grid-Container-1">

                    <div class="Grid-Item-1" @onclick="ShowPlanImport">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M0 80C0 35.8 35.8 0 80 0H432c44.2 0 80 35.8 80 80V368c0 26.2-12.6 49.4-32 64v48c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H128v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V432C12.6 417.4 0 394.2 0 368V80zm129.9 72.2L112 224H400l-17.9-71.8C378.5 138 365.7 128 351 128H161c-14.7 0-27.5 10-31 24.2zM128 320a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
                        <h4>
                            PLAN IMPORT
                            <br />
                            <v-progress-circular
                                v-if="PlanImportCircular == true"
                                color="primary"
                                indeterminate
                                :size="40"
                                :width="8"
                                ></v-progress-circular>
                            <p v-if="PlanImportCircular == false">{{ PlanningInbound.IMPORT }}</p>
                        </h4>
                    </div>
                    <div class="Grid-Item-1">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                        <h4>
                            PLAN LOCAL
                            <br />
                            <v-progress-circular
                                v-if="PlanLocalCircular == true"
                                color="primary"
                                indeterminate
                                :size="40"
                                :width="8"
                                ></v-progress-circular>
                            <p v-if="PlanLocalCircular == false">{{ PlanningInbound.LOCAL }}</p>
                        </h4>
                    </div>
                    <div class="Grid-Item-1">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M41 7C31.6-2.3 16.4-2.3 7 7S-2.3 31.6 7 41l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L41 7zM599 7L527 79c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0zM7 505c9.4 9.4 24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L7 471c-9.4 9.4-9.4 24.6 0 33.9zm592 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-72-72c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72zM320 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM212.1 336c-2.7 7.5-4.1 15.6-4.1 24c0 13.3 10.7 24 24 24H408c13.3 0 24-10.7 24-24c0-8.4-1.4-16.5-4.1-24c-.5-1.4-1-2.7-1.6-4c-9.4-22.3-29.8-38.9-54.3-43c-3.9-.7-7.9-1-12-1H280c-4.1 0-8.1 .3-12 1c-.8 .1-1.7 .3-2.5 .5c-24.9 5.1-45.1 23-53.4 46.5zM175.8 224a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-26.5 32C119.9 256 96 279.9 96 309.3c0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6c-7.5-4.1-16.2-6.4-25.3-6.4H149.3zm368 80c14.7 0 26.7-11.9 26.7-26.7c0-29.5-23.9-53.3-53.3-53.3H421.3c-9.2 0-17.8 2.3-25.3 6.4c32.4 11.9 57.2 39.5 65.2 73.6h56.1zM464 224a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
                        <h4>
                            PLAN MPP
                            <br />
                            <v-progress-circular
                                v-if="PlanMppCircular == true"
                                color="primary"
                                indeterminate
                                :size="40"
                                :width="8"
                                ></v-progress-circular>
                            <p v-if="PlanMppCircular == false">{{ PlanningInbound.MHE }}</p>
                        </h4>

                    </div>
                    <div class="Grid-Item-1">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 32C0 14.3 14.3 0 32 0h72.9c27.5 0 52 17.6 60.7 43.8L257.7 320c30.1 .5 56.8 14.9 74 37l202.1-67.4c16.8-5.6 34.9 3.5 40.5 20.2s-3.5 34.9-20.2 40.5L352 417.7c-.9 52.2-43.5 94.3-96 94.3c-53 0-96-43-96-96c0-30.8 14.5-58.2 37-75.8L104.9 64H32C14.3 64 0 49.7 0 32zM244.8 134.5c-5.5-16.8 3.7-34.9 20.5-40.3L311 79.4l19.8 60.9 60.9-19.8L371.8 59.6l45.7-14.8c16.8-5.5 34.9 3.7 40.3 20.5l49.4 152.2c5.5 16.8-3.7 34.9-20.5 40.3L334.5 307.2c-16.8 5.5-34.9-3.7-40.3-20.5L244.8 134.5z"/></svg>
                        <h4>
                            PLAN MHE
                            <br />
                            <v-progress-circular
                                v-if="PlanMheCircular == true"
                                color="primary"
                                indeterminate
                                :size="40"
                                :width="8"
                                ></v-progress-circular>
                            <p v-if="PlanMheCircular == false">{{ PlanningInbound.RF }}</p>
                        </h4>

                    </div>
                    <div class="Grid-Item-1">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M0 64C0 28.7 28.7 0 64 0H256c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm64 96v64c0 17.7 14.3 32 32 32H224c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32zM80 352a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm24 56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56-56a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm24 56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56-56a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm24 56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM128 48c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H128z"/></svg>
                        <h4>
                            PLAN RF
                            <br />
                            <v-progress-circular
                                v-if="PlanRfCircular == true"
                                color="primary"
                                indeterminate
                                :size="40"
                                :width="8"
                                ></v-progress-circular>
                            <p v-if="PlanRfCircular == false">{{ PlanningInbound.MPP }}</p>
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
                                    <v-progress-circular
                                    v-if="WorkingProgressCircular == true"
                                    color="primary"
                                    indeterminate
                                    :size="400"
                                    :width="30"
                                    ></v-progress-circular>
                                    <ejs-chart  v-if="WorkingProgressCircular == false" id="container" width='100%' height="90%" :primaryXAxis='primaryXAxis' :legendSettings='legendSettings'>
                                        <e-series-collection>
                                            <e-series :dataSource='this.WorkingProgressImport' type='Bar' xName='LIST_PROCESS' yName='VALUE' name='IMPORT'  :pointColorMapping='pointColorMapping' :marker='marker' columnSpacing="1.7" columnWidth="1.25"> </e-series>
                                            <e-series :dataSource='this.WorkingProgressLocal' type='Bar' xName='LIST_PROCESS' yName='VALUE' name='LOCAL'  :pointColorMapping='pointColorMapping' :marker='marker' columnSpacing="1.7" columnWidth="1.25"> </e-series>
                                        </e-series-collection>
                                    </ejs-chart>
                                </div>
                                <div class="Btnworking">
                                    <div class="Header-Grid-Item-3">
                                        <a>WORKING PROGRESS DETAIL</a>
                                    </div>
                                        <n-button  class="btnlist" @click="WorkingProgresPartClicked" value="WAITING ARRIVAL (ON SCHEDULE)">WAITING ARRIVAL (ON SCHEDULE)</n-button>
                                        <n-button  class="btnlist" @click="WorkingProgresPartClicked" value="WAITING ARRIVAL (DELAYED)" >WAITING ARRIVAL (DELAYED)</n-button>
                                        <n-button  class="btnlist" @click="WorkingProgresPartClicked" value="WAITING TO UNLOAD (ON SCHEDULE)" >WAITING TO UNLOAD (ON SCHEDULE)</n-button>
                                        <n-button  class="btnlist" @click="WorkingProgresPartClicked" value="WAITING TO UNLOAD (DELAYED)" >WAITING TO UNLOAD (DELAYED)</n-button>
                                        <n-button  class="btnlist" @click="WorkingProgresPartClicked" value="UNLOADING (ON GOING)" >UNLOADING (ON GOING)</n-button>
                                        <n-button  class="btnlist" @click="WorkingProgresPartClicked" value="UNLOADING (DELAYED)" >UNLOADING (DELAYED)</n-button>
                                        <n-button  class="btnlist" @click="WorkingProgresPartClicked" value="WAITING TO CHECKOUT (ON GOING)" >WAITING TO CHECKOUT (ON GOING)</n-button>
                                        <n-button  class="btnlist" @click="WorkingProgresPartClicked" value="WAITING TO CHECKOUT (DELAYED)" >WAITING TO CHECKOUT (DELAYED)</n-button>
                                        <n-button  class="btnlist" @click="WorkingProgresPartClicked" value="CHECKED OUT" >CHECKED OUT</n-button>
                                        <n-modal v-model:show="WorkingProgresPartDialog">
                                            <n-card
                                            style="width: auto;height: auto;overflow: auto;"
                                            v-bind:title="this.BtnWorkingProgress"
                                            :bordered="false"
                                            size="huge"
                                            role="dialog"
                                            aria-modal="true"
                                            >
                                            <template #header-extra>
                                                <n-button @click="WorkingProgresPartDialog = false">
                                                    X
                                                </n-button>
                                            </template>
                                            <v-table style="height: 600px;">
                                                <thead>
                                                <tr>
                                                    <th style="font-size:15px;">TYPE</th>
                                                    <th style="font-size:15px;">PIB</th>
                                                    <th style="font-size:15px;">VENDOR</th>
                                                    <th style="font-size:15px;">CONTAINER</th>
                                                    <th style="font-size:15px;">WEIGHT</th>
                                                    <th style="font-size:15px;">CBM</th>
                                                    <th style="font-size:15px;">DESCRIPTION</th>
                                                    <th style="font-size:15px;">PLANARRIVALDATE</th>
                                                    <th style="font-size:15px;">WT</th>
                                                    <th style="font-size:15px;">TIMING</th>
                                                    <th style="font-size:15px;">STATUS</th>
                                                </tr>
                                                </thead>
                                                <tbody>

                                                <tr v-if="this.WorkingProgressTblStats == false"
                                                     v-for="item in this.WORKINGDETAILUNLOADING"
                                                    :key="item.TYPE"
                                                >
                                                    <td>{{ item.TYPE }}</td>
                                                    <td>{{ item.PIB }}</td>
                                                    <td>{{ item.VENDOR }}</td>
                                                    <td>{{ item.CONTAINER }}</td>
                                                    <td>{{ item.WEIGHT }}</td>
                                                    <td>{{ item.CBM }}</td>
                                                    <td>{{ item.DESCRIPTION }}</td>
                                                    <td>{{ item.PLANARRIVALDATE }}</td>
                                                    <td>{{ item.WT }}</td>
                                                    <td>{{ item.TIMING }}</td>
                                                    <td>{{ item.STATUS }}</td>
                                                </tr>
                                                <tr v-if="this.WorkingProgressTblStats == true"                                                >
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                </tbody>
                                            </v-table>
                                            <template #footer>
                                                Footer
                                            </template>
                                            </n-card>
                                        </n-modal>
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
                                            <v-progress-circular
                                            v-if="AchProcessCircular == true"
                                            color="primary"
                                            indeterminate
                                            :size="90"
                                            :width="10"
                                            ></v-progress-circular>
                                            <a v-if="AchProcessCircular == false" class="Content-Achivemnt">{{ ACHIVEMENT_UNLOADING.PROCESS }}</a>
                                        </div>                                
                                        <div class="Achiment-Item">
                                            <a class="Header-Achivemnt">DONE</a>
                                            <v-progress-circular
                                            v-if="AchDoneCircular == true"
                                            color="primary"
                                            indeterminate
                                            :size="90"
                                            :width="10"
                                            ></v-progress-circular>
                                            <a v-if="AchDoneCircular == false" class="Content-Achivemnt">{{ ACHIVEMENT_UNLOADING.DONE }}</a>

                                        </div>                                
                                        <div class="Achiment-Item">
                                            <a class="Header-Achivemnt">TOTAL</a>
                                            <v-progress-circular
                                            v-if="AchTotalCircular == true"
                                            color="primary"
                                            indeterminate
                                            :size="90"
                                            :width="10"
                                            ></v-progress-circular>

                                            <a v-if="AchTotalCircular == false" class="Content-Achivemnt">{{ ACHIVEMENT_UNLOADING.TOTAL }}</a>
                                        </div>
                                    </div>

                                        <div class="Box-percentage">
                                            <a class="Header-Achivemnt">PERCENTAGE</a>
                                            <br/>
                                            <v-progress-circular
                                            v-if="AchPercentageCircular == true"
                                            color="primary"
                                            indeterminate
                                            :size="150"
                                            :width="15"
                                            ></v-progress-circular>

                                            <v-progress-circular v-if="AchPercentageCircular == false" :rotate="360" :size="160" :width="30" :model-value="this.ACHIVEMENT_UNLOADING.PERCENTAGE" color="teal">
                                            <template v-slot:default> {{ this.ACHIVEMENT_UNLOADING.PERCENTAGE }} % </template>
                                            </v-progress-circular>
                                        </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="Grid-Container-3">
                        <div class="Grid-Item-3_a">
                        <div class="Header-Grid-Item-2">
                            <a>PRODUCTIVITY UNLOADING</a>
                        </div>
                        <v-table>
                            <thead>
                            <tr>
                                <th style="font-size:10px;text-align:center;font-weight: 900;">SHIFT</th>
                                <th style="font-size:10px;text-align:center;font-weight: 900;">TEAM</th>
                                <th style="font-size:10px;text-align:center;font-weight: 900;">NIK TEAM LEADER</th>
                                <th style="font-size:10px;text-align:center;font-weight: 900;">NAMA TEAM LEADER</th>
                                <th style="font-size:10px;text-align:center;font-weight: 900;">TARGET TEAM</th>
                                <th style="font-size:10px;text-align:center;font-weight: 900;">ACTUAL TEAM</th>
                                <th style="font-size:10px;text-align:center;font-weight: 900;">LPN RECEIVED</th>
                                <th style="font-size:10px;text-align:center;font-weight: 900;">PERCENTAGE</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr v-if="this.ProductivityUnloadTblStats == false"
                                v-for="item in this.PRODUCTIVITYUNLOADING"
                                :key="item.SHIFT"
                            >
                                <td>{{ item.SHIFT }}</td>
                                <td>{{ item.TEAM }}</td>
                                <td>{{ item.NIK_TEAM_LEADER }}</td>
                                <td>{{ item.NAMA_TEAM_LEADER }}</td>
                                <td>{{ item.TARGET_TEAM }}</td>
                                <td>{{ item.ACTUAL_TEAM }}</td>
                                <td>{{ item.LPN }}</td>
                                <td>{{ item.PERCENTAGE }}</td>
                            </tr>
                            <tr  v-if="this.ProductivityUnloadTblStats == true">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </v-table>
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
import { defineComponent, ref } from "vue";
import { NButton } from 'naive-ui'
import { NDatePicker } from "naive-ui";
import { NModal } from "naive-ui";
import { NCard } from "naive-ui";
import axios from 'axios';
import {ChartPlugin, ChartComponent, SeriesCollectionDirective, SeriesDirective,BarSeries ,Category ,DataLabel ,Legend } from "@syncfusion/ej2-vue-charts";
import * as StringClass from '~/assets/js/Models/StringClass.js';
import * as ApiLink from '~/assets/js/Models/ApiLink.js';

    definePageMeta({
        layout:'sidebar'
    })
    export default defineComponent({
        components: {
            NDatePicker,
            NButton,
            NModal,
            NCard,
            'ejs-chart': ChartComponent,
            'e-series-collection': SeriesCollectionDirective,
            'e-series': SeriesDirective
    },
    setup() {
    return {
        WorkingProgresPartDialog: ref(false),
        WorkingProgressTblStats:ref(false),
        ProductivityUnloadTblStats:ref(false)
    };
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
    PlanImportCircular: true,
    PlanLocalCircular: true,
    PlanMppCircular: true,
    PlanMheCircular: true,
    PlanRfCircular: true,
    WorkingProgressCircular: true,
    AchProcessCircular: true,
    AchDoneCircular: true,
    AchTotalCircular: true,
    AchPercentageCircular: true,
    WorkingProgressImport:[{
        LIST_PROCESS:'',
        VALUE: '',
        FILL:''
    }],
    WorkingProgressLocal:[{
        LIST_PROCESS:'',
        VALUE: '',
        FILL:''
    }],
    ACHIVEMENT_UNLOADING:[{
        DONE:'',
        PROCESS:'',
        TOTAL:'',
        PERCENTAGE:Number,
    }],
    PRODUCTIVITYUNLOADING:[{
        SHIFT:'',
        TEAM:'',
        NIK_TEAM_LEADER:'',
        NAMA_TEAM_LEADER:'',
        TARGET_TEAM:Number,
        ACTUAL_TEAM:Number,
        LPN:Number,
        PROGRES:Number
    }],
    WORKINGDETAILUNLOADING:[{
        TYPE:'',
        PIB:'',
        VENDOR:'',
        CONTAINER:'',
        WEIGHT:'',
        CBM:'',
        DESCRIPTION:'',
        PLANARRIVALDATE:'',
        WT:'',
        TIMING:'',
        STATUS:''
    }],
    BtnWorkingProgress:'',
    pointColorMapping:"FILL",
    primaryXAxis: {
        labelStyle: {
            size: '10px', color: 'Black',
            position:'left'
           },
           valueType: 'Category'
        },
        marker: {
                    //Data label for chart series
                    dataLabel: { visible: true }
                },
                legendSettings: {
                visible: true,
                position: 'Custom',
                location: { x: 300, y: 10 }
        },
    }),
    provide:{
        chart: [BarSeries ,Category ,DataLabel ,Legend ]
    },
    methods:{
        WorkingProgresPartClicked(value)
        {
            this.BtnWorkingProgress = value.target.value;

            if(this.BtnWorkingProgress == 'WAITING ARRIVAL (ON SCHEDULE)')
            {
                this.WorkingProgresPartDialog = true;
                this.FetchDataWorkingProgressUnloadingPart.call();
            }
            if(this.BtnWorkingProgress == 'WAITING ARRIVAL (DELAYED)')
            {
                this.WorkingProgresPartDialog = true;
                this.FetchDataWorkingProgressUnloadingPart.call();
            }
            if(this.BtnWorkingProgress == 'WAITING TO UNLOAD (ON SCHEDULE)')
            {
                this.WorkingProgresPartDialog = true;
                this.FetchDataWorkingProgressUnloadingPart.call();
            }
            if(this.BtnWorkingProgress == 'WAITING TO UNLOAD (DELAYED)')
            {
                this.WorkingProgresPartDialog = true;
                this.FetchDataWorkingProgressUnloadingPart.call();
            }
            if(this.BtnWorkingProgress == 'UNLOADING (ON GOING)')
            {
                this.WorkingProgresPartDialog = true;
                this.FetchDataWorkingProgressUnloadingPart.call();
            }
            if(this.BtnWorkingProgress == 'UNLOADING (DELAYED)')
            {
                this.WorkingProgresPartDialog = true;
                this.FetchDataWorkingProgressUnloadingPart.call();
            }
            if(this.BtnWorkingProgress == 'WAITING TO CHECKOUT (ON GOING)')
            {
                this.WorkingProgresPartDialog = true;
                this.FetchDataWorkingProgressUnloadingPart.call();
            }
            if(this.BtnWorkingProgress == 'WAITING TO CHECKOUT (DELAYED)')
            {
                this.WorkingProgresPartDialog = true;
                this.FetchDataWorkingProgressUnloadingPart.call();
            }
            if(this.BtnWorkingProgress == 'CHECKED OUT')
            {
                this.WorkingProgresPartDialog = true;
                this.FetchDataWorkingProgressUnloadingPart.call();
            }
        },
        ChangestatusboolFalseCircularPlan()
        {
            this.PlanImportCircular = false;
            this.PlanLocalCircular = false;
            this.PlanMppCircular = false;
            this.PlanMheCircular = false;
            this.PlanRfCircular = false;
        },
        ChangestatusboolTrueCircular()
        {
            this.PlanImportCircular = true;
            this.PlanLocalCircular = true;
            this.PlanMppCircular = true;
            this.PlanMheCircular = true;
            this.PlanRfCircular = true;
            this.AchProcessCircular = true;
            this.AchDoneCircular = true;
            this.AchTotalCircular = true;
            this.AchPercentageCircular = true;
            this.WorkingProgressCircular = true;
        },
        ChangestatusboolFalseCircularAch()
        {
            this.AchProcessCircular = false;
            this.AchDoneCircular = false;
            this.AchTotalCircular = false;
            this.AchPercentageCircular = false;

        },
        FirstApper()
        {
            let yourDate = new Date()
            this.formattedValue = yourDate.toISOString().split('T')[0];
            
        },
        async FetchDataWorkingProgressUnloadingPart()
        {
            await axios.get(ApiLink.BaseUrlApi + ApiLink.BASE_UNLOADING_FETCH_DATA_DETAIL + this.formattedValue + ApiLink.WORKING_PROGRESS_DETAIL_PART + this.BtnWorkingProgress + '/').then(Response =>{
                this.WORKINGDETAILUNLOADING = Response.data;
                if(Response.data == 'DATA NOT FOUND')
                {
                    this.WorkingProgressTblStats = true;
                }
                else
                {
                    this.WorkingProgressTblStats = false;
                }
            })
        },
        async LoadData()
        {
            
            await axios.get(ApiLink.BaseUrlApi + ApiLink.BASE_UNLOADING_FETCH_DATA +this.formattedValue + ApiLink.PLAN_UNLOADING).then(Response =>{
                this.PlanningInbound = Response.data[0];
                    this.ChangestatusboolFalseCircularPlan.call();
            }),
            await axios.get(ApiLink.BaseUrlApi + ApiLink.BASE_UNLOADING_FETCH_DATA + this.formattedValue + ApiLink.WORKING_PROGRESS_IMPORT).then(response =>{
                this.WorkingProgressImport = response.data;
            }),
            await axios.get(ApiLink.BaseUrlApi + ApiLink.BASE_UNLOADING_FETCH_DATA + this.formattedValue + ApiLink.WORKING_PROGRESS_LOCAL).then(response =>{
                this.WorkingProgressLocal = response.data;
                this.WorkingProgressCircular = false;
            }),
            await axios.get(ApiLink.BaseUrlApi + ApiLink.BASE_UNLOADING_FETCH_DATA + this.formattedValue + ApiLink.ACHIVEMENT_UNLOADING).then(response =>{
                this.ACHIVEMENT_UNLOADING = response.data[0];
                this.ChangestatusboolFalseCircularAch.call();
            }),
            await axios.get(ApiLink.BaseUrlApi +ApiLink.BASE_UNLOADING_FETCH_DATA + this.formattedValue + ApiLink.PRODUCTIVITY_UNLOADING).then(response =>{
                this.PRODUCTIVITYUNLOADING = response.data;
                if(response.data == 'DATA NOT FOUND')
                {
                    this.ProductivityUnloadTblStats = true;
                }
                else
                {
                    this.ProductivityUnloadTblStats = false;
                }
                
            })
        },
        RefrshBtn()
        {
            this.ChangestatusboolTrueCircular.call();
            this.LoadData.call();
        }
    },
    mounted (){
        this.FirstApper.call();
        if(StringClass.default.data.WHSEID == '')
        {

        }
        else
        {
            ApiLink.default.methods.GetallApiLink.apply();
            this.LoadData.call();
        }
        
    }
  })
</script>


<style>
@import '~/assets/css/inboundBase.css'; 
@import '~/assets/css/FontStyle.css';

</style>    