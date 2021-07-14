<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <div class="login-logo">
        <a href="/"><b>Sales</b>&nbsp;Online</a>
      </div>
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">กรุณาเข้าระบบผ่านอีเมล์</p>

          <form @submit.prevent="handleSubmit">
            <div class="input-group mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                v-model="f_email"              
                placeholder="name@example.com"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                v-model="f_password"
                placeholder="Password"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="icheck-primary"></div>
              </div>
              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">
                  Sign In
                </button>
              </div>
            </div>
          </form>

          <div class="social-auth-links text-center mb-3">
            <div class="checkbox mb-3">
              <div v-if="message" class="alert alert-success" role="alert">
                {{ message }}
              </div>
              <div v-if="messagesboxs" class="alert alert-danger" role="alert">
                {{ messagesboxs }}
              </div>
            </div>
            <small v-if="token" class="text-muted">Token : {{ token }}.</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      f_email: "",
      f_password: "",
      token: "",
      message:"",
      messagesboxs:"",
    };
  },
  methods: {
     handleSubmit: function (e) {
      if (this.name && this.age) {
        return true;
      }
      this.messagesboxs = [];
      if (!this.f_email) {
        this.messagesboxs.push('Email required.');
      }
      if (!this.f_password) {
        this.messagesboxs.push('Password required.');
      }

      e.preventDefault();
      const response =  axios.post("authen/login", {
        f_email: this.f_email,
        f_password: this.f_password,
      });
       console.log(response)
      this.message = response.data.message
      this.token = response.data.token
      this.messagesboxs = response.data.messagesboxs
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
        this.$router.push('/admin')
      }   
      return response.data        
    },
  },
};
</script>
