<template lang="html">
  <div class="patient-root">
    <div class="page-tools">
      <a @click="$router.go(-1)" title="كل المرضى">
        <i class="fas fa-arrow-right"></i>
      </a>
    </div>

    <h2 class="patient-name">
      {{patientData.name}}
    </h2>

    <div class="patient-card">

      <ul class="patient-info">
        <li>
          <span class="title">
            <i class="fas fa-capsules"></i>
            نوع المرض
          </span>
          <span class="value">
            يكتب هنا نوع المرض
          </span>
        </li>

        <li>
          <span class="title">
            <i class="fas fa-user"></i>
            العمر
          </span>
          <span class="value">
            {{patientData.age}} سنة
          </span>
        </li>

        <li>
          <span class="title">
            <i class="fas fa-mobile-alt"></i>
            الموبايل
          </span>
          <span class="value">
            {{patientData.phone}}
          </span>
        </li>

        <li>
          <span class="title">
            <i class="fas fa-map-marker-alt"></i>
            العنوان
          </span>
          <span class="value">
            {{patientData.address}}
          </span>
        </li>


        <li>
          <span class="title">
            <i class="fas fa-calendar-alt"></i>
            الكشف القادم
          </span>
          <span class="value">
            05 ديسمبر, 08:00 مساءا
          </span>
        </li>

        <li>
          <span class="title">
            <i class="fas fa-file-prescription "></i>
            الروشتة
          </span>
          <span class="value">
            <a href="#!">#23846168846</a>
          </span>
        </li>

      </ul>

      <div class="patient-image">
        <i class="fas fa-user"></i>
      </div>

    </div>

    <template>
      <agile>
    		<div class="slide" >
    			<h3>slide 1</h3>
          <img src="https://img.youm7.com/large/201810160351595159.jpg" alt="">
    		</div>
    	</agile>
    </template>

    <!-- <carousel :auto="3000" :watch-items="list">
        <carousel-item v-for="(item, index) in list">
            <img :src="item.url" alt="">
        </carousel-item>
    </carousel> -->

    <!-- <div class="patient-examinations">
      <h2 class="ex-section-title">
        الفحوصات
      </h2>
      <ol class="examinatios-list">
        <li class="single-examination" v-for="ex in patientData.myexaminations">
          <h4 class="ex-title">{{ex.description}}</h4>
          <p class="ex-date">
            <i class="fa fa-calendar-alt"></i>
            {{ex.date}}
          </p>
          <p class="ex-description">
            تفاصيل الفحص
          </p>
          <img class="ex-image" src="https://2e9ruf1nz2nl2v8usx2rd6t4-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/medical-examination-personal-injury.jpg" alt="">
        </li>
      </ol>
    </div> -->

    <div class="patient-buttons">
      <router-link class="btn" :to="'/dashboard/patient/'+patientData.id+'/edit-patient'">
        <i class="fa fa-user-edit"></i>
        تعديل بيانات المريض
      </router-link>
      <a href="#!" class="btn btn-error">
        <i class="fa fa-times"></i>
        حذف المريض
      </a>
    </div>
  </div>
</template>

<script>
import { Carousel, CarouselItem } from 'vue-l-carousel'
export default {
  name: 'Patient',
  data () {
    return {
      patientId: this.$route.params.id,
      token: localStorage.getItem('Jvw11cafNqBcQ22PTjm9XeyGYUegqVAkUxYlETemh2x82xUuYpyaOMa7bwm1Nx92P3fMtyORE4JdLpcP'),
      patientData: [],
      auto: 3000,
      list: [
          {
              url: 'https://static.arageek.com/wp-content/uploads/2017/08/Intel-Chipset.jpg'
          },
          {
              url: 'https://img.youm7.com/large/201810160351595159.jpg'
          },
          {
              url: 'https://4.bp.blogspot.com/-fqmGLHgqeaE/WMN3G3r9ggI/AAAAAAAADSI/Sh7SXx-XP4MvURbTE7lWjwVL5xyISwIkwCLcB/s1600/%25D8%25B3%25D9%2588%25D9%2583%25D8%25AA-%25D8%25A7%25D9%2584%25D9%2585%25D8%25B9%25D8%25A7%25D9%2584%25D8%25AC.PNG'
          },
      ]
    }
  },
  methods: {
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
  },
  components: {
      'carousel': Carousel,
      'carousel-item': CarouselItem
  }
}
</script>

<style lang="sass">
  @import '../assets/sass/mixins'

  .patient-root
    width: 90%
    margin: 50px auto

  h2.patient-name
    font-size: 70px
    color: $color
    text-align: center
    text-shadow: 5px 5px 0 #e5e5e5

  .patient-card
    display: flex
    justify-content: space-around
    align-items: center
    width: 80%
    background: white
    box-shadow: 0 0 20px #e5e5e5
    margin: 50px auto
    .patient-info
      padding: 25px
      list-style-type: none
      width: 40%
      position: relative
      li
        margin: 10px 0
        border-bottom: 1px solid #e5e5e5
        padding-bottom: 10px
        &:last-child
          border: none
        .title
          display: block
          color: $color
          font-size: 12px
          margin-bottom: 10px

        .value
          color: gray

    .patient-image
      i
        font-size: 180px
        color: $color
        opacity: 0.5


  .patient-examinations
    width: 80%
    margin: 50px auto
    padding: 25px 0
    margin-top: 0

    .ex-section-title
      font-size: 60px
      color: $color
      text-align: center
      text-shadow: 5px 5px 0 #e5e5e5

    .examinatios-list
      width: 100%
      list-style-type: none

      .single-examination
        width: 100%
        background: white
        box-shadow: 0 0 20px #e5e5e5
        margin: 25px 0
        padding: 25px

        .ex-title
          font-size: 30px
          margin-bottom: 5px
          color: $text_color

        .ex-date
          color: gray
          margin-bottom: 25px

        .ex-image
          width: 100%
          margin: 25px 0

        .ex-description
          color: $text_color



  .patient-buttons
    text-align: center

    .btn
      margin: 0 20px
</style>
