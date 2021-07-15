<template>
<div class="wrapper">
<Header/>
<Menu/>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Card Room</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Room</li>
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
                <table id="example2" class="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th>เลขที่เอกสาร</th>
                    <th>โครงการ</th>
                    <th>ยูนิต</th>
                    <th>ชื่อ - นามสกุล</th>
                    <th>มือถือ</th>
                    <th>...</th>
                  </tr>
                  </thead>
                  <tbody>

                  <tr v-for="(item, index) in items.data" :key="index">
                    <td> {{ item.f_running }}</td>
                    <td> {{ item.f_project }}</td>
                    <td> {{ item.f_unit }}</td>
                    <td> {{ item.f_customer }}</td>
                    <td> {{ item.f_mobile }}</td>
                    <td>
                    <router-link :to="{name: 'Edit', params: { id: item.f_running }}"><i class="far fa-edit"></i></router-link>
                    <router-link :to="{name: 'Delete', params: { id: item.f_running }}"><i class="fas fa-trash-alt"></i></router-link>
                    </td>
                  </tr>

                  </tbody>
                  <tfoot>
                  <tr>
                    <th>เลขที่เอกสาร</th>
                    <th>โครงการ</th>
                    <th>ยูนิต</th>
                    <th>ชื่อ - นามสกุล</th>
                    <th>มือถือ</th>
                    <th>...</th>
                  </tr>
                  </tfoot>
                </table>
              </div>
        <div class="card-footer">
          Footer
              <div v-if="messagesboxs " class="alert alert-danger" role="alert">
                {{ messagesboxs }}
              </div>
        </div>
      </div>
    </section>
  </div>
  <Footer/>
</div>
</template>
<script>
import axios from "axios";
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
  data(){
    return {
      items: [],
      messagesboxs:'',
    }
  },
  created: function()
  {
    this.getItems();
  },
    methods: {
getItems()
      {
          axios.get('booking').then(response => {
            console.log(response.data)
            this.messagesboxs = response.data.data.messagesboxs
            this.items = response.data;
          })
          .catch(error => {
              console.log(error)
              this.messagesboxs = error
            })
        .finally(() => this.loading = false)
      }
  }
};
</script>