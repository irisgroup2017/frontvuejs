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
                required
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
                required
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
              <div v-if="messagesboxs === 'Success'" class="alert alert-success" role="alert">
                {{ messagesboxs }}
              </div>
              <div v-if="token" class="alert alert-danger" role="alert">
                {{ token }}
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
      messagesboxs: "",
    };
  },
  methods: {
     handleSubmit: function () {
      axios.post('authen/login', {
        f_email: this.f_email,
        f_password: this.f_password,
      })
      .then(response => {
        this.messagesboxs = response.data.data.messagesboxs
        console.log(response.data.data)
      this.token = response.data.data.token
      if (response.data.data.token) {
        localStorage.setItem('token', response.data.data.token)
        this.$router.push('/admin')
      }
      })
      .catch(error => {
        console.log(error)
        this.messagesboxs = error
      })
      .finally(() => this.loading = false)
 /*
      const response =  axios.post("authen/login", {
        f_email: this.f_email,
        f_password: this.f_password,
      });
      if(response.data.messagesboxs === 'Success'){
      this.token = response.data.token
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
        this.$router.push('/admin')
      }
      */
    },
  },
};
</script>
