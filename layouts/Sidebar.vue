
<template>
    <div class="SinglePage">
        <div>
            <div class="TopBar">
                <div class="TopBarItem">
                    <div class="TopBarItemGroup">
                        <svg xmlns="http://www.w3.org/2000/svg"  height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                        <a>{{Name}}</a>
                    </div>
                    <a>|</a>
                    <div class="TopBarItemGroup">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M0 488V171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0L599.8 111.9c24.3 9.7 40.2 33.3 40.2 59.4V488c0 13.3-10.7 24-24 24H568c-13.3 0-24-10.7-24-24V224c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32V488c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zm488 24l-336 0c-13.3 0-24-10.7-24-24V432H512l0 56c0 13.3-10.7 24-24 24zM128 400V336H512v64H128zm0-96V224H512l0 80H128z"/></svg>
                        <a>{{Site}}</a>
                    </div>
                    <a>|</a>
                    <div class="TopBarItemGroup">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
                        <a>{{WHSEID}}</a>
                    </div>
                    <a>|</a>
                    <div class="TopBarItemGroup">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                        <a>{{Loc}}</a>
                    </div>
                    <a>|</a>
                    <div class="TopBarItemGroup">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                        <a>{{timestamp}}</a>
                    </div>

                </div>
            </div>
            <div class="wrapper">
                <div class="sidebar">
                    <div class="TitleBar">
                        <img src="../assets/img/logo1.png">
                        <NuxtLink class="titlelink" to="/">KllWebApplication</NuxtLink>
                    </div>
                    <div class="MenuBar">
                        <div id="app">
                            <div class="Singlebtn">
                                <NuxtLink  class="ClickedsingleBtn" to="/Home">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>                                    <a>HOME</a>
                                </NuxtLink>
                            </div>
                            <div class="CollapseBtn">
                                <NuxtLink class="ClickCollapseBtn" v-on:click="toggleDiv()">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"/></svg>
                                    <a>DASHBOARD</a>
                                </NuxtLink>
                                <NuxtLink class="DashbordBtn" v-if="display_div" to="/Dashboard/Inbound/BaseInboundDashboard">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                                    <a>INBOUND</a>
                                </NuxtLink>
                            </div>
                            <div class="Singlebtn">
                                <NuxtLink  class="ClickedsingleBtn" @click="Logoutbtn" to="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/></svg>                                    
                                    <a>LOGOUT</a>
                                </NuxtLink>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div class="BoxField">
                <slot />
            </div>
    </div>
</template>
<script >
import axios from 'axios';
const BaseUrl = 'https://apiblazor.sanstech.online/';
const GetWhseidstr = 'api/Facility/GetBiuName/';

export default {
    data: () => ({
        name: 'App',
        display_div: false,
        Name:'',
        Site:'',
        WHSEID:'',
        Loc:'',
        timestamp: ''
        
        }),
        created() {
            setInterval(() => {
                this.getNow();
                }, 1000)
            },
    methods:{
        getNow: function() {
                    const today = new Date();
                    // const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    const date = today.toDateString();
                    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    const dateTime = date +' '+ time;
                    this.timestamp = dateTime;
                },
        toggleDiv: function() {
                this.display_div = !this.display_div;
            },
        async FisrApper()
        {
            if (localStorage.getItem("Userid") == null && localStorage.getItem("Password") == null)
            {
                navigateTo("../");
            }
            else
            {
                this.Name = localStorage.getItem("Username");
                this.Site = localStorage.getItem("Site");
                await this.GetWhseid.call();
                await this.GetLoc.call();
            }
        },
        async Logoutbtn(){
            localStorage.removeItem("Userid");
            localStorage.removeItem("Password");
        },
        async GetWhseid()
        {
            await axios.get(BaseUrl + GetWhseidstr + this.Site).then(response => {
                if (response.data.length > 0)
                {
                    this.WHSEID = response.data[0].WHSEID;
                }
            })
        },
        async GetLoc(){
            if (navigator.geolocation) 
            {
                navigator.geolocation.getCurrentPosition(getPosition);
            }
            function getPosition(position) {
            localStorage.setItem("Location",position.coords.latitude +','+ position.coords.longitude) ;
            }  
            this.Loc = localStorage.getItem("Location");
        },
        currentDateTime() {
            const current = new Date();
            const date = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
            const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
            const dateTime = date +' '+ time;

        return dateTime;
        }

    },
    mounted (){
    this.FisrApper.call();

    }
}

</script>

<style  scoped>
@import '~/assets/css/Sidebar.css';
</style>