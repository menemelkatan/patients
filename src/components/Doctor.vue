<template lang="html">
  <div class="doctor-root">
    <div class="doctor-profile">
      <header class="profile-header">
        <div class="header-details">
          <h4>
            د/
            {{doctor.name}}
          </h4>
          <p>
            <i class="fa fa-user-md"></i>
            أخصائى
            {{doctor.department}}
          </p>
          <p>
            <i class="fa fa-map-marker-alt"></i>
            {{doctor.city}}
          </p>
          <ul class="social">
            <li>
              <a :href="doctor.socialMedia.facebook">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a :href="doctor.socialMedia.twitter">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a :href="doctor.socialMedia.linkedin">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div class="doctor-info">
        <img class="profile-picture" src="../assets/d1.png" alt="profile picture">
        <p class="bio">
          {{doctor.bio}}
        </p>

        <div class="contact-doctor">
          <ul class="contact-info">
            <li>
              <span class="title">
                <i class="fas fa-location-arrow"></i>
                العنوان
              </span>
              <span class="value">
                {{doctor.address}}
              </span>
            </li>

            <li>
              <span class="title">
                <i class="fas fa-mobile-alt"></i>
                الموبايل
              </span>
              <span class="value">
                {{doctor.first_phone}}
              </span>
            </li>

            <li>
              <span class="title">
                <i class="fas fa-phone"></i>
                الأرضى
              </span>
              <span class="value">
                {{doctor.second_phone}}
              </span>
            </li>

            <li>
              <span class="title">
                <i class="fas fa-envelope-open"></i>
                الإيميل
              </span>
              <span class="value">
                {{doctor.mail}}
              </span>
            </li>

            <li>
              <span class="title">
                <i class="fas fa-calendar-alt"></i>
                مواعيد العمل
              </span>
              <span class="value">
                {{doctor.open_dates}}
              </span>
            </li>

          </ul>

          <div class="doctor-location">
            <GmapMap class="mapa"
              :center="{lat:parseInt(doctor.location.lat), lng:parseInt(doctor.location.lon)}"
              :zoom="7"
            >

            </GmapMap>
          </div>
        </div>


        <router-link class="btn" to="/dashboard/profile/edit">
          تعديل البيانات
          <i class="fa fa-user-edit"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Doctor',
  data () {
    return {
      doctor: {
        id: null,
        name: '',
        address: '',
        bio: '',
        city: '',
        department: '',
        image: '',
        mail: '',
        open_dates: '',
        second_phone: '',
        location: {
          lat: '',
          lon: ''
        },
        socialMedia: {
          facebook: '',
          linkedin: '',
          twitter: '',
          whatsapp: '',
          youtube: ''
        }
      },
      jss: [],
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
        // this.jss = JSON.parse(response.body);
        // console.log("jss: " + this.jss);
        console.log("das: " + response.body);
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
  .doctor-profile
    width: 80%
    margin: 50px auto
    background: white
    box-shadow: 0 0 20px #e5e5e5
    .profile-header
      height: 250px
      background: white
      display: flex
      align-items: center
      background: url('../assets/h2.jpg') center no-repeat
      background-size: cover

      .header-details
        margin-right: 100px
        color: white
        p
          font-size: 12px
          margin: 10px 0

        .social
          list-style-type: none
          display: flex

          a
            margin-left: 10px
            color: white
            i:hover
              opacity: 0.9


    .doctor-info
      background: #fcfcfc
      padding: 20px 50px

      .profile-picture
        height: 150px
        width: 150px
        border-radius: 50%
        margin: 0 auto
        margin-top: -100px
        margin-bottom: 50px
        display: block
        border: 3px solid $color

      .bio
        font-size: 12px
        line-height: 1.5
        color: $text_color
        font-weight: lighter


      .contact-doctor
        margin-top: 50px
        display: flex
        justify-content: space-between
        align-items: center
        .contact-info
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

        .doctor-location
          width: 50%
          height: 350px
          position: relative

          .mapa
            position: absolute
            height: 100%
            width: 100%
            top: 0
            left: 0
            border: none


      .btn
        margin: 20px auto
        display: block
</style>
