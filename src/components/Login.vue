<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <div class="login-logo">
         <a href="/"><b>Sales</b>&nbsp;Online</a>
      </div>
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">Sign in to start your session</p>

          <form action="/checklogin" method="post">
            <div class="input-group mb-3">
              <input type="email" class="form-control" placeholder="Email" />
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
                <div class="icheck-primary">
 
                </div>
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
