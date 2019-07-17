<template lang="html">
  <div class="patients-root">
    <div class="patients-header">
      <h2>
        المرضى
      </h2>
      <router-link class="btn" to="/dashboard/patients/add-patient">
        إضافة مريض
        <i class="fa fa-user-edit"></i>
      </router-link>
    </div>
    <div class="search-box">
      <input type="text" placeholder="بـحـث بـإسـم المـريـض..." v-model="filterInput">
    </div>
    <ul class="patients-list">

      <li class="patient" v-for="patient in filterBy(patients, filterInput)">
        <router-link :to="'/dashboard/patient/'+patient.id">
          <div class="patient-image">
            <i class="fas fa-user"></i>
          </div>
          <div>
            <h3 class="patient-name">
              {{patient.name}}
            </h3>
            <p>
              نوع المرض
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'patients',
  data () {
    return {
      patients: [],
      token: localStorage.getItem('Jvw11cafNqBcQ22PTjm9XeyGYUegqVAkUxYlETemh2x82xUuYpyaOMa7bwm1Nx92P3fMtyORE4JdLpcP'),
      filterInput: ''
    }
  },
  methods: {
    getPatients: function () {
      this.$http.get('http://35.202.107.226:3035/Patients?token='+this.token).then(function(response){
        this.patients = response.body;
        console.log(response.body);
      })
    },
    filterBy(list, value) {
      return list.filter(function(patient){
        return patient.name.indexOf(value) > -1;
      })
    }
  },
  created: function () {
    this.getPatients();
  }
}
</script>

<style lang="sass">
  @import '../assets/sass/mixins'

  .patients-root
    width: 80%
    margin: 50px auto

    .patients-header
      display: flex
      align-items: center
      justify-content: space-between

      h2
        font-size: 70px
        color: $color
        text-shadow: 5px 5px 0 #e5e5e5

    .search-box
      margin-top: 50px
      margin-bottom: 50px
      input
        width: 100%
        background: white
        border: 2px solid $color
        padding: 5px
        padding-right: 15px
        height: 50px
        font-size: 15px
        font-weight: lighter
        box-shadow: 0 0 10px #e5e5e5


    .patients-list
      list-style-type: none
      display: flex
      justify-content: flex-start
      flex-wrap: wrap

      .patient
        position: relative
        width: 180px
        height: 200px
        margin: 20px
        a
          position: absolute
          top: 0
          bottom: 0
          right: 0
          left: 0
          text-align: center
          background: white
          display: block
          text-decoration: none
          color: $color
          padding: 15px
          display: flex
          align-items: flex-end
          justify-content: center
          flex-wrap: wrap
          box-shadow: 0 0 10px #e5e5e5
          transition: 0.2s ease all

          &:hover
            background: $color
            color: white

            .patient-image
              i
                color: white

          &:active
            transform: scale(1.1)

          p
            margin-top: 10px


          .patient-image
            width: 100%
            text-align: center
            margin-bottom: 20px
            i
              font-size: 70px
              color: $color
              opacity: 0.5
              transition: 0.2s ease all

</style>
