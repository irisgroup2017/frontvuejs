<template>
  <div>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <a href="/" class="brand-link">
        <img
          src="/dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          class="brand-image img-circle elevation-3"
          style="opacity: 0.8"
        />
        <span class="brand-text font-weight-light">AdminLTE 3</span>
      </a>
      <div class="sidebar">
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img
              src="/dist/img/user2-160x160.jpg"
              class="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div class="info">
            <a href="#" class="d-block">Alexander Pierce</a>
          </div>
        </div>
        <div class="form-inline">
          <div class="input-group" data-widget="sidebar-search">
            <input
              class="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div class="input-group-append">
              <button class="btn btn-sidebar">
                <i class="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>
        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Dashboard
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="/sales" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>ขาย</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/construction" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>ก่อสร้าง</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/aftersales" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>แจ้งซ่อม</p>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="/" class="nav-link">
                <i class="nav-icon fas fa-th"></i>
                <p>
                  ข่าวประกาศ
                  <span class="right badge badge-danger">New</span>
                </p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-copy"></i>
                <p>
                  งานขาย
                  <i class="fas fa-angle-left right"></i>
                  <span class="badge badge-info right">6</span>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="/leed" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>ลูกค้าสนใจโครงการ</p>
                  </a>
                </li>              
                <li class="nav-item">
                  <a href="/quotation" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>ใบเสนอราคา</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/booking" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>จองซื้อ</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/contact" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>ทำสัญญา</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/findown" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>เงินดาวน์</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="/payments"
                    class="nav-link"
                  >
                    <i class="far fa-circle nav-icon"></i>
                    <p>ลูกค้าค้างชำระ</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/contactusers" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>ติดตามลูกค้าทำเอกสาร</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/banking" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>ขอสินเชื่อ</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/meeting" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>นัดหมายโอน</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/owner" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>บันทึกโอนกรรมสิทธิ์</p>
                  </a>
                </li>                
                <li class="nav-item">
                  <a href="bookingtranfer" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>โอนย้ายห้องยกเลิก</p>
                  </a>
                </li>                
                <li class="nav-item">
                  <a href="/bookingcancel" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>ยกเลิก</p>
                  </a>
                </li>                
              </ul>
            </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-warehouse"></i>
              <p>
                งานก่อสร้าง
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="/updateplan" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>ปรับสถานะผังโครงการ</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/plan" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>ข้อมูลผังโครงการ</p>
                </a>
              </li>
            </ul>
          </li>            
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-house-user"></i>
                <p>
                  งานสาธารณูปโภค
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href=".#" class="nav-link">
                    <i class="fas fa-faucet nav-icon"></i>
                    <p>โอนมิเตอร์น้ำ</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    <i class="fas fa-bolt nav-icon"></i>
                    <p>โอนมิเตอร์ไฟ</p>
                  </a>
                </li>
              </ul>
            </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-search"></i>
              <p>
                งานแจ้งซ่อม
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="/aftersale" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>รายการแจ้งซ่อม</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/aftersales" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>ประวัติการแจ้งซ่อม</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-ad"></i>
              <p>
                การตลาด
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="/pricelist" class="nav-link">
                  <i class="fas fa-bullhorn nav-icon"></i>
                  <p>ตารางราคาขาย</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/promotion" class="nav-link">
                  <i class="fas fa-bullhorn nav-icon"></i>
                  <p>ตารางโปรโมชั่น</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/setpromotion" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>จัดกลุ่มโปรโมชั่น</p>
                </a>
              </li>              
            </ul>
          </li> 
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-money-bill-alt"></i>
              <p>
                บัญชี
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="/customer" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>ข้อมูลลูกค้า</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/room" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>ข้อมูลยูนิต</p>
                </a>
              </li>            
            </ul>
          </li>
          <li class="nav-header">System Configuration</li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-database"></i>
              <p>
                ข้อมูลระบบ
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="/company" class="nav-link">
                  <i class="fas fa-database nav-icon"></i>
                  <p>บริษัท</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/department" class="nav-link">
                  <i class="fas fa-database nav-icon"></i>
                  <p>หน่วยงาน</p>
                </a>
              </li>  
              <li class="nav-item">
                <a href="/position" class="nav-link">
                  <i class="fas fa-user-plus nav-icon"></i>
                  <p>ตำแหน่ง</p>
                </a>
              </li> 
              <li class="nav-item">
                <a href="/bank" class="nav-link">
                  <i class="fas fa-money-bill-alt nav-icon"></i>
                  <p>ธนาคาร</p>
                </a>
              </li>      
              <li class="nav-item">
                <a href="/project" class="nav-link">
                  <i class="fas fa-home nav-icon"></i>
                  <p>โครงการ</p>
                </a>
              </li>   
              <li class="nav-item">
                <a href="/users" class="nav-link">
                  <i class="fas fa-users nav-icon"></i>
                  <p>ผู้ใช้งาน</p>
                </a>
              </li>                                                                    
            </ul>
          </li>
          <li class="nav-header">Documentation</li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon far fa-circle text-danger"></i>
              <p class="text">คู่มือการใช้งาน</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon far fa-circle text-warning"></i>
              <p>แจ้งปัญหาการใช้งาน</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon far fa-circle text-info"></i>
              <p>ข้อเสนอแนะเพิ่มเติม</p>
            </a>
          </li>            
          </ul>
        </nav>
      </div>
    </aside>
  </div>
</template>
