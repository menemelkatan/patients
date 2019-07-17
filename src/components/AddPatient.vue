<template lang="html">
  <div class="add-patient-root">
    <form class="data-form edit-doctor-form" :class="{added: added}">
      <h2 class="data-form-title">
        إضافة مريض
      </h2>
      <div class="create-user" :class="{success: success_hint, error: error_hint}">
        <label for="email">
          <i class="far fa-user"></i>
          اسم المستخدم باللغة الانجليزية
        </label>
        <input type="text" placeholder="اسم المستخدم يجب ان يكون مميز" v-model="patientUser.username" @keyup="userExist()" required>
        <p class="username-exist">
          هذا الاسم تم استخدامه من قبل برجاء إختيار اسم مميز!!
        </p>
        <p class="username-not-exist">
          هذا الاسم متاح للإستخدام
        </p>

        <label for="email">
          <i class="far fa-user"></i>
          كلمة المرور
        </label>
        <input type="text" placeholder="كلمة المرور" v-model="patientUser.password" required>

        <div class="patient-buttons">
          <a href="#!" class="btn" @click="addPatient()">
            <i class="fa fa-user-edit"></i>
            إضافة مريض
          </a>
        </div>

      </div>

      <div class="patient-edit-data">
        <label for="email">
          <i class="far fa-user"></i>
          الاسم بالكامل
        </label>
        <input type="text" placeholder="الاسم" v-model="patient.name">

        <label for="email">
          <i class="far fa-user"></i>
          العمر
        </label>
        <input type="number" placeholder="العمر" v-model="patient.age">

        <label for="email">
          <i class="far fa-user"></i>
          نوع المرض
        </label>
        <input type="text" placeholder="نوع المرض">

        <label for="email">
          <i class="far fa-user"></i>
          العنوان
        </label>
        <input type="text" placeholder="العنوان" v-model="patient.address">


        <label for="email">
          <i class="far fa-user"></i>
          رقم التليفون
        </label>
        <input type="text" placeholder="رقم التليفون" v-model="patient.phone">


        <label for="email">
          <i class="far fa-user"></i>
          الإيميل
        </label>
        <input type="email" placeholder="الإيميل" v-model="patient.mail">

        <div class="patient-buttons">
          <a href="#!" class="btn" @click="updatePatient()">
            <i class="fa fa-user-edit"></i>
            إضافة بيانات المريض
          </a>
          <a href="#!" class="btn btn-error">
            <i class="fa fa-times"></i>
            إلغاء
          </a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddPatient',
  data () {
    return {
      success_hint: false,
      error_hint: false,
      added: false,
      patientUser: {
        username: '',
        password: ''
      },
      patient: {
        doc_id: null,
        name: '',
        age: '',
        address: '',
        phone: '',
        mail: '',
        myexaminations:[],
        images: [],
        id: null
      },
      token: localStorage.getItem('Jvw11cafNqBcQ22PTjm9XeyGYUegqVAkUxYlETemh2x82xUuYpyaOMa7bwm1Nx92P3fMtyORE4JdLpcP')
    }
  },
  methods: {
    userExist: function(){
      this.$http.get('http://35.202.107.226:3035/Exist/'+this.patientUser.username+'?token='+this.token).then(function(response){
        if(this.patientUser.username.length >= 4 && response.body === false) {
          this.success_hint = true;
          this.error_hint = false;
        }
        else if (this.patientUser.username.length >= 4 && response.body === true) {
          this.error_hint = true;
          this.success_hint = false;
        }
      })
    },
    addPatient: function(){
      let patientUserV = JSON.stringify(this.patientUser);
      let jj = JSON.parse(patientUserV);
      this.$http.post('http://35.202.107.226:3035/Patient?token='+this.token, jj, {credentials: true, headers: {
            "Content-Type": "application/json",
            "Accept": "*/*"
        }}).then(function(response){
          swal({
            title: "تم!!",
            text:"تم إضافة المريض بنجاح قم بإكمال البيانات الأن",
            icon: "success",
            button: {
              visible: false
            },
            timer: 1500
          });
          this.patient.doc_id = response.body.doc_id;
          this.patient.name = response.body.name;
          this.patient.age = response.body.age;
          this.patient.address = response.body.address;
          this.patient.phone = response.body.phone;
          this.patient.mail = response.body.mail;
          this.patient.id = response.body.id;
          this.patient.examinatios = response.body.examinatios;
          this.patient.images = response.body.images;
          this.added = true;
      })
    },
    updatePatient: function(){
      let patientUserV = JSON.stringify(this.patient);
      let jj = JSON.parse(patientUserV);
      this.$http.put('http://35.202.107.226:3035/Patient?token='+this.token, jj, {credentials: true, headers: {
            "Content-Type": "application/json",
            "Accept": "*/*"
        }}).then(function(response){
          this.$router.push({path: '/dashboard/patient/'+this.patient.id+''})
          swal({
            title: "تم!!",
            text:"تم إضافة بيانات المريض بنجاح",
            icon: "success",
            button: {
              visible: false
            },
            timer: 1500
          });

      })
    }
  },
  created: function () {
  }
}
</script>

<style lang="sass">

  @import '../assets/sass/mixins'

  .data-form
    width: 80%
    margin: 50px auto
    background: white
    box-shadow: 0 0 20px #e5e5e5
    padding: 50px

    .create-user
      border: 2px solid $color
      padding: 20px
      margin-bottom: 50px

      .username-not-exist
        color: $success_color
        margin-bottom: 20px
        display: none

      .username-exist
        color: $error_color
        margin-bottom: 20px
        display: none

    input, textarea
      height: 50px
      width: 100%
      border: none
      border-bottom: 1px solid #e5e5e5
      display: block
      margin-bottom: 25px
      font-size: 13px
      color: $color

      &:focus
        border-color: $color

    textarea
      height: 250px
      margin-top: 25px
      resize: vertical
      width: 100%

    label
      font-size: 12px
      i
        color: $color

    .data-form-title
      text-align: center
      color: $color
      font-size: 50px
      margin-bottom: 50px


    .create-user.error
      .username-exist
        display: block

      .username-not-exist
        display: none

      input:first-of-type
        border-color: $error_color


    .create-user.success
      .username-not-exist
        display: block

      .username-exist
        display: none

      input:first-of-type
        border-color: $success_color


    .patient-edit-data
      display: none

  .added
    .patient-edit-data
      display: block !important

    .create-user
      display: none !important


</style>
