<template>
<div class="wrapper">
<Header/>
<Menu/>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Card Unit</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Unit</li>
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
                <table id="example1" class="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th>เลขที่เอกสาร</th>
                    <th>โครงการ</th>
                    <th>ยูนิต</th>
                    <th>ชื่อ - นามสกุล</th>
                    <th>มือถือ</th>
                  </tr>
                  </thead>
                  <tbody>

                  <tr v-for="(item, index) in info.data" :key="index">
                    <td> {{ item.f_running }}</td>
                    <td> {{ item.f_project }}</td>
                    <td> {{ item.f_unit }}</td>
                    <td> {{ item.f_customer }}</td>
                    <td> {{ item.f_mobile }}</td>
                  </tr>

                  </tbody>
                  <tfoot>
                  <tr>
                    <th>เลขที่เอกสาร</th>
                    <th>โครงการ</th>
                    <th>ยูนิต</th>
                    <th>ชื่อ - นามสกุล</th>
                    <th>มือถือ</th>
                  </tr>
                  </tfoot>
                </table>
              </div>
        <div class="card-footer">
          Footer
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
  props: {
    title: String
  },
  data(){
    return {
      info: []
    }
  },
    mounted(){
    axios.get('customer').then(response => {
      console.log(response.data)
      this.info = response.data
    })
  }
};
</script>