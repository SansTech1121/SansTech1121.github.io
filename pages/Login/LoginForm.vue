<template>
    <head>
        <title>Login Form</title>
    </head>
    <div class="formlogin">
        <form @submit.prevent="login">
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
			<input type="password" placeholder="Password" id="Passwordtxt"  oninput="PasswordValue"/> <br>

			<select title="Select Facility" id="Facilittxt" name="Facilittxt" bind="Businesunit">
				<option value="Select">Select Facility</option>
				<option value="DC ACE JABABEKA">DC ACE JABABEKA</option>
				<option value="DC INFORMA JABABEKA">DC INFORMA JABABEKA</option>
				<option value="DC INFORMA CIKUPA">DC INFORMA CIKUPA</option>
				<option value="DC KLS JABABEKA">DC KLS JABABEKA</option>
			</select>
            <button type="submit" @click="Lognbtnclick">LOGIN</button>
		</div>
	</form>
    </div>	
</template> 

<script>
    import axios from 'axios';
    const BaseUrl = 'https://apiblazor.sanstech.online/';
    const GetUserApi = `api/userapps/getusername/`;
    const PostUserToken = 'api/userapps/PostToken';

export default {
    data: () => ({
        UserId : '',
        userinfomartin:{},
        FirstName:""
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
            }
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });

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
        Passwordtxt.focus()
    },

    async Lognbtnclick()
    {
        this.FirstName = "BUTTON BERFUNGSI"
    },

    async FisrApper()
    {
        this.UserId = "JS BERFUNGSI"
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