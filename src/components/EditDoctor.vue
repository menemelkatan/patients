<template lang="html">
  <div class="edit-doctor-root">
    <form class="data-form edit-doctor-form">
      <h2 class="data-form-title">
        تعديل بيانات الطبيب
      </h2>
      <label for="email">
        <i class="far fa-user"></i>
        الاسم بالكامل
      </label>
      <input type="text" placeholder="الاسم" v-model="doctor.name">

      <label for="email">
        <i class="far fa-user"></i>
        التخصص
      </label>
      <input type="text" placeholder="التخصص" v-model="doctor.department">

      <label for="email">
        <i class="far fa-user"></i>
        المدينة
      </label>
      <input type="text" placeholder="المدينة" v-model="doctor.city">

      <label for="email">
        <i class="far fa-user"></i>
        العنوان
      </label>
      <input type="text" placeholder="العنوان" v-model="doctor.address">

      <label for="email">
        <i class="far fa-user"></i>
        نبذة مختصرة
      </label>
      <textarea placeholder="نبذة مختصرة" v-model="doctor.bio"></textarea>

      <label for="email">
        <i class="far fa-user"></i>
        رقم التليفون
      </label>
      <input type="text" placeholder="رقم التليفون" v-model="doctor.first_phone">

      <label for="email">
        <i class="far fa-user"></i>
        رقم التليفون 2
      </label>
      <input type="text" placeholder="رقم التليفون 2" v-model="doctor.second_phone">

      <label for="email">
        <i class="far fa-user"></i>
        الإيميل
      </label>
      <input type="email" placeholder="الإيميل" v-model="doctor.mail">

      <label for="email">
        <i class="far fa-user"></i>
        مواعيد العمل
      </label>
      <input type="text" placeholder="مواعيد العمل" v-model="doctor.open_dates">

      <label for="email">
        <i class="far fa-user"></i>
        رابط الفيسبوك
      </label>
      <input type="text" placeholder="رابط الفيسبوك" v-model="doctor.socialMedia.facebook">

      <label for="email">
        <i class="far fa-user"></i>
        رابط تويتر
      </label>
      <input type="text" placeholder="رابط تويتر" v-model="doctor.socialMedia.twitter">

      <label for="email">
        <i class="far fa-user"></i>
        رابط لينكدان
      </label>
      <input type="text" placeholder="رابط لينكدان" v-model="doctor.socialMedia.linkedin">

      <label for="email">
        <i class="far fa-user"></i>
        رابط يوتيوب
      </label>
      <input type="text" placeholder="رابط يوتيوب" v-model="doctor.socialMedia.youtube">

      <label for="email">
        <i class="far fa-user"></i>
        رقم الواتساب
      </label>
      <input type="text" placeholder="رقم الواتساب" v-model="doctor.socialMedia.whatsapp">

      <div class="patient-buttons">
        <a href="#!" class="btn" @click="updateDate()">
          <i class="fa fa-user-edit"></i>
          حفظ التعديلات
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
  name: 'EditDoctor',
  data () {
    return {
      doctor: {
        location: {
          lat: '',
          lon: ''
        },
        socialMedia: {
          facebook: '',
          twitter: '',
          whatsapp: '',
          linkedin: '',
          youtube: ''
        },
        name: '',
        department: '',
        city: '',
        bio: '',
        image: null,
        address: '',
        id: null,
        second_phone: '',
        open_dates: '',
        first_phone: '',
        mail: ''
      },
      token: localStorage.getItem('Jvw11cafNqBcQ22PTjm9XeyGYUegqVAkUxYlETemh2x82xUuYpyaOMa7bwm1Nx92P3fMtyORE4JdLpcP')
    }
  },
  methods: {
    getData: function(){
      this.$http.get('http://35.202.107.226:3035/DoctorProfile?token='+this.token).then(function(response){
        this.doctor.name = response.body.name;
        this.doctor.department = response.body.department;
        this.doctor.city = response.body.city;
        this.doctor.bio = response.body.bio;
        this.doctor.image = response.body.image;
        this.doctor.address = response.body.address;
        this.doctor.mail = response.body.mail;
        this.doctor.id = response.body.id;
        this.doctor.open_dates = response.body.open_dates;
        this.doctor.first_phone = response.body.first_phone;
        this.doctor.second_phone = response.body.second_phone;
        this.doctor.location.lat = response.body.location.lat;
        this.doctor.location.lon = response.body.location.lon;
        this.doctor.socialMedia.facebook = response.body.socialMedia.facebook;
        this.doctor.socialMedia.twitter = response.body.socialMedia.twitter;
        this.doctor.socialMedia.linkedin = response.body.socialMedia.linkedin;
        this.doctor.socialMedia.youtube = response.body.socialMedia.youtube;
        this.doctor.socialMedia.whatsapp = response.body.socialMedia.whatsapp;

        console.log("das: " + response.body);
      })
    },
    updateDate: function(){
      let updatedDoc = JSON.stringify(this.doctor);
      let jj = JSON.parse(updatedDoc);
      this.$http.put('http://35.202.107.226:3035/DoctorProfile?token='+this.token, jj, {credentials: true, headers: {
            "Content-Type": "application/json",
            "Accept": "*/*"
        }}).then(function(){
          this.$router.push({path: '/dashboard/profile'})
          swal({
            title: "تم!!",
            text:"تم تعديل البيانات بنجاح",
            icon: "success",
            button: {
              visible: false
            },
            timer: 1500
          })
      })
    }
  },
  created: function () {
    this.getData();
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
