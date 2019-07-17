<template lang="html">
  <div class="login-root">
    <h2 class="login-header">
      تسجيل الدخول
    </h2>

    <!-- login form -->
    <form class="login-form" @submit="signIn">
      <label for="email">
        <i class="far fa-envelope"></i>
        البريد الإلكترونى
      </label>
      <input type="text" id="email" v-model="email" placeholder="مثال: doc@doc.com">
      <label for="pass">
        <i class="fas fa-unlock-alt"></i>
        كلمة المرور
      </label>
      <input type="password" id="pass" v-model="pass">
      <button type="submit">دخول</button>

      <a href="#!">نسيت كلمة المرور؟</a>
    </form>
    <!-- end login form -->
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      pass: '',
      token: ''
    }
  },
  methods: {
    signIn: function(e){
      e.preventDefault;
      this.$http.post('http://35.202.107.226:3035/login?username='+this.email+'&password='+this.pass).then(function(response){
        console.log(response);
        if(response.body.stutus === 1) {
          localStorage.setItem('Jvw11cafNqBcQ22PTjm9XeyGYUegqVAkUxYlETemh2x82xUuYpyaOMa7bwm1Nx92P3fMtyORE4JdLpcP', response.body.token);
          this.token = response.body.token;
          this.$router.push({path: '/dashboard/profile'})
          swal({
            title: "تم!!",
            text:"تم تسجيل الدخول بنجاح",
            icon: "success",
            button: {
              visible: false
            },
            timer: 1500
          })
        }
        else {
          swal({
            title: "خطأ!!",
            text:"من فضلك تأكد من إدخال البيانات الصحية",
            icon: "error",
            button: {
              visible: false
            },
            timer: 1500
          })
        }
      })
    },
    getData: function(){
      this.$http.get('http://192.168.1.6:3035/DoctorProfile?token='+this.token).then(function(response){
        console.log(response);
      })
    }
  }
}
</script>

<style lang="sass">
  @import '../assets/sass/mixins'

  .login-header
    text-align: center
    margin-top: 50px
    color: darken($color, 10)

  /*login form*/
  .login-form
    width: 400px
    background: $color
    margin: 50px auto
    padding: 50px
    box-shadow: 0 0 20px gray
    text-align: right
    padding-bottom: 20px

    input
      width: 100%
      height: 50px
      padding: 5px 10px
      margin-bottom: 20px
      background: darken($color, 5)
      border: none
      color: $grayo


      &:focus
        background: darken($color, 10)


    label
      margin: 10px 0
      display: block
      color: white
      margin-bottom: 20px
      font-weight: lighter

    button
      background: $grayo
      color: $color
      padding: 10px 40px
      cursor: pointer
      transition: 0.3s ease all
      box-sizing: content-box
      margin: 20px auto
      display: block
      border: 2px solid $grayo

      &:hover
        background: transparent
        color: $grayo

      &:active
        transform: scaleX(1.1)


    a
      font-size: 14px
      text-decoration: none
      color: $grayo
      font-weight: lighter

      &:hover
        color: gray

</style>
