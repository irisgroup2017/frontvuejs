<template>
<div class="wrapper">
<Header/>
<Menu/>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>{{title}}</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">{{title}}</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section class="content">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Title</h3>
          <div class="card-tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
              <i class="fas fa-minus"></i>
            </button>
            <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div class="card-body">
      <img
        v-bind:src="picture"
        :alt="`${firstName} ${lastName}`"
        :class="gender"
      />
      <h1>{{firstName}} {{lastName}}</h1>
      <h3>Email: {{email}}</h3>
        </div>
        <div class="card-footer">
          <buttons :class="gender" @click="getUser()">Get Random User</buttons>
        </div>
      </div>
    </section>
  </div>
  <Footer/>
</div>
</template>
<script>
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Admin",
  components: {
    Menu,
    Header,
    Footer,
  },
  data() {
    return {
      info: {},
      title: "System Admin",
      firstName: 'Thanit',
      lastName: 'Netprokaew',
      email: 'noom1009@gmail.com',
      gender: 'male',
      picture: 'https://avatars.githubusercontent.com/u/23498431?v=4',
    };
  },
    methods: {
      update(info){
        console.log(info)
      },
    async getUser() {
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()
      console.log(results)
      this.firstName = results[0].name.first
      this.lastName = results[0].name.last
      this.email = results[0].email
      this.gender = results[0].gender
      this.picture = results[0].picture.large
    },

  },
};
</script>
<style scoped>
img {
  border-radius: 50%;
  border: 5px #333 solid;
  margin-bottom: 1rem;
}

.male {
  border-color: steelblue;
  background-color: steelblue;
}

.female {
  border-color: pink;
  background-color: pink;
  color: #333;
}

buttons {
  cursor: pointer;
  display: inline-block;
  background: #333;
  color: white;
  font-size: 18px;
  border: 0;
  padding: 1rem 1.5rem;
}

button:focus {
  outline: none;
}

button:hover {
  transform: scale(0.98);
}
</style>