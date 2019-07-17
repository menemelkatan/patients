<template lang="html">
  <div class="dashboard-root">
    <aside class="right-navbar">
      <h2 class="welcome-text">
        مرحبا دكتور
        <br>
        {{doctor.name}}
      </h2>

      <ul class="right-navbar-menu">
        <li>
          <router-link to="/dashboard/profile">
            <i class="far fa-user"></i>
            الحساب
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/patients">
            <i class="fa fa-users"></i>
            المرضى
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/reservations">
            <i class="fa fa-calendar-alt"></i>
            الحجوزات
          </router-link>
        </li>
        <li>
          <a href="#!">
            <i class="fa fa-poll-h"></i>
            التقارير
          </a>
        </li>
        <li>
          <a href="#!">
            <i class="fa fa-sign-out-alt"></i>
            تسجيل الخروج
          </a>
        </li>
      </ul>
    </aside>
    <div class="main-content">
      <transition name="fade"
        mode="out-in">
        <router-view></router-view>
      </transition>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
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
      token: localStorage.getItem('Jvw11cafNqBcQ22PTjm9XeyGYUegqVAkUxYlETemh2x82xUuYpyaOMa7bwm1Nx92P3fMtyORE4JdLpcP')
    }
  },
  methods: {
    activeTab: function(){

    },
    getData: function(){
      this.$http.get('http://35.202.107.226:3035/DoctorProfile?token='+this.token).then(function(response){
        this.doctor.name = response.body.name;
      })
    }
  },
  created: function(){
    this.getData();
  }
}
</script>

<style lang="sass">
  @import '../assets/sass/mixins'

  .fade-enter-active, .fade-leave-active
    transition-duration: 0.3s
    transition-property: all
    transition-timing-function: ease

  .fade-enter, .fade-leave-active
    transform: translateY(-100px)
    opacity: 0

  .dashboard-root
    .right-navbar
      background: $color
      position: fixed
      top: 0
      right: 0
      width: 200px
      height: 100%
      display: flex
      align-items: stretch
      justify-content: center
      flex-wrap: wrap
      padding: 50px 0
      box-shadow: 0 0 20px gray

      .welcome-text
        color: white
        text-align: center
        font-weight: lighter

      .right-navbar-menu
        list-style-type: none
        width: 100%

        li
          a
            display: block
            text-align: right
            color: white
            text-decoration: none
            padding: 20px
            i
              color: white
              margin-left: 10px

            &:hover
              background: darken($color, 6)

          .active
            background: darken($color, 6)


  .main-content
    width: calc(100% - 200px)
    margin-right: 200px


</style>
