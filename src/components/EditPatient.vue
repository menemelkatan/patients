<template lang="html">
  <div class="edit-patient-root">
    <form class="data-form edit-doctor-form">
      <h2 class="data-form-title">
        تعديل بيانات المريض
      </h2>

      <label for="email">
        <i class="far fa-user"></i>
        الاسم بالكامل
      </label>
      <input type="text" placeholder="الاسم" v-model="patientData.name">

      <label for="email">
        <i class="far fa-user"></i>
        العمر
      </label>
      <input type="number" placeholder="العمر" v-model="patientData.age">

      <label for="email">
        <i class="far fa-user"></i>
        نوع المرض
      </label>
      <input type="text" placeholder="نوع المرض">

      <label for="email">
        <i class="far fa-user"></i>
        العنوان
      </label>
      <input type="text" placeholder="العنوان" v-model="patientData.address">


      <label for="email">
        <i class="far fa-user"></i>
        رقم التليفون
      </label>
      <input type="text" placeholder="رقم التليفون" v-model="patientData.phone">


      <label for="email">
        <i class="far fa-user"></i>
        الإيميل
      </label>
      <input type="email" placeholder="الإيميل" v-model="patientData.mail">

      <div class="patient-buttons">
        <a href="#!" class="btn" @click="updatePatient()">
          <i class="fa fa-user-edit"></i>
          تعديل بيانات المريض
        </a>
        <a href="#!" class="btn btn-error">
          <i class="fa fa-times"></i>
          إلغاء
        </a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditPatient',
  data () {
    return {
      patientId: this.$route.params.id,
      patientData: [],
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
    updatePatient: function(){
      let patientUserV = JSON.stringify(this.patientData);
      let jj = JSON.parse(patientUserV);
      this.$http.put('http://35.202.107.226:3035/Patient?token='+this.token, jj, {credentials: true, headers: {
            "Content-Type": "application/json",
            "Accept": "*/*"
        }}).then(function(response){
          this.$router.push({path: '/dashboard/patient/'+this.patientId+''})
          swal({
            title: "تم!!",
            text:"تم تعديل بيانات المريض بنجاح",
            icon: "success",
            button: {
              visible: false
            },
            timer: 1500
          });

      })
    },
    getPatient(){
      this.$http.get('http://35.202.107.226:3035/Patients?token='+this.token).then(function(response){
        for(var i = 0; i< response.body.length; i++){
          // console.log(response.body[i].myexaminations[0].description);
          if(response.body[i].id == this.patientId){
            this.patientData = response.body[i];
            break;
          }
        }
        console.log(this.patientData);
      })
    }
  },
  created: function(){
    this.getPatient();
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




</style>
