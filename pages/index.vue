<template>
  <head>
      <title>Login Form</title>
  </head>
  <v-app class="formlogin">
      <form>
  <div class="body"></div>
  <div class="grad"></div>
  <div class="header">
    <img class="card-img" src="~/assets/img/logo1.png" />
  </div>
  <br>
  <div class="login">
    <label class="form-label">WELCOME</label>
    <input type="text" placeholder="UserId" v-model="UserId"  @keyup.enter.prevent="handleEnterKey"><br>
    <input type="text" placeholder="UserName" id="Usernametxt" v-model="FirstName" readonly="readonly" /> <br>
    <input type="password" placeholder="Password" v-model="Passwordtxt" id="Passwordtxt" /> <br>
    <v-select class="select" v-model="Biu" label="Select Facility" :hint="` ${Biu.SITE_NAME}`"  :items="Facility" item-value="SITE_NAME" item-title="SITE_NAME"  return-object >
    </v-select>
          <button type="button" @click="Lognbtnclick">LOGIN
          
          </button>
  </div>
</form>
  </v-app>	
</template> 

<script>
  import axios from 'axios';
  const BaseUrl = 'https://apiblazor.sanstech.online/';
  const GetUserApi = `api/userapps/getusername/`;
  const PostUserToken = 'api/userapps/PostToken';
  const LoginValidate = 'api/userapps/getlogin';
  const GetWebFacility = 'api/Facility/GetWebFacility';

export default {
  
  data: () => ({
      UserId : '',
      Passwordtxt : '',
      userinfomartin:{},
      FirstName:"",
      Facility:[],
      bindingfaciity:[],
      Biu:{SITE_NAME:''},
      }),
methods: {

  async handleEnterKey()
  {
      await axios.get(BaseUrl+GetUserApi+this.UserId)
    .then(response => {
        if (response.data.length > 0) 
        {
          if (response.data == "USER NOT FOUND")
          {
              this.FirstName = "USER NOT FOUND";
          }
          else
          {
              this.FirstName =  response.data[0].FirstName;  // Displaying the title from the first result
              this.GetFacility.call();
              this.PostToken.call();
          }
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      Passwordtxt.focus()
  },

  async GetFacility()
  {
      await axios.get(BaseUrl + GetWebFacility).then(response =>{
              this.Facility = response.data ;

              for(var item in this.facility)
              {
                  this.bindingfaciity = item.SITE_NAME
              };
          })
  },

  async PostToken()
  {
      if (this.FirstName == "USER NOT FOUND")
      {
          this.FirstName = "USER TIDAK DI TEMUKAN"
      }
      else
      {
          const DataPost = {
              Userid: this.UserId
          };
          await axios.post(BaseUrl+PostUserToken,DataPost,{
              headers: {
                  'Content-Type': 'application/json'
              }
              })
          .then(response =>{
          })
      }
  },

  async Lognbtnclick()
  {

      if (this.Biu == "")
      {
          alert("MOHON PILIH FACILITY");
          this.FirstName = "Select Facility";
      }
      else
      {
          const getlogin = {
          Userid : this.UserId,
          Password : this.Passwordtxt
      };
      await axios.post(BaseUrl + LoginValidate,getlogin,{
          headers:{'Content-Type':'application/json'}
      }).then(response =>{
              const dataresult = response.data;
              if (dataresult == "LOGIN SUCCESS")
              {
                  this.savedatalogin.call();
                  navigateTo('../Home', );
              }
              else
              {
                  alert("USER/PASSWORD SALAH");
              }        
      });

      }
  },
  async savedatalogin()
  {
      localStorage.setItem("Userid",this.UserId);
      localStorage.setItem("Password",this.Passwordtxt);
      localStorage.setItem("Username",this.FirstName);
      localStorage.setItem("Site",this.Biu.SITE_NAME);
  },
  async FisrApper()
  {
      if (localStorage.getItem("Userid") != null && localStorage.getItem("Password") != null)
      {
          const getlogin = {
              Userid : localStorage.getItem("Userid"),
              Password : localStorage.getItem("Password")
          };
          await axios.post(BaseUrl + LoginValidate , getlogin,{headers:{'Content-Type':'application/json'}}).then(response =>{
              const dataresult = response.data;
              if (dataresult == "LOGIN SUCCESS")
              {
                  navigateTo('../Home', );
              }
              else
              {
                  
              }        
          })
      }
  }
},

mounted (){
  this.FisrApper.call();
}
};


</script>

<style scoped>
@import '~/assets/css/loginform.css';
</style>