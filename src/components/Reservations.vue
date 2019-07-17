<template lang="html">
  <div class="reservations-root">
    <div class="reservations-header">
      <h2>
        الحجوزات
      </h2>
      <a href="#!" class="btn">
        <i class="fa fa-plus"></i>
        إضافة حجز
      </a>
    </div>

    <div class="search-box">
      <input type="text" placeholder="بـحـث بـإسـم المـريـض...">
    </div>

    <ul class="reservations-timeline">
      <li class="reservations-day">
        <p class="timeline-date">
          <b>
            20 ديسمبر 2018
          </b>
        </p>

        <ul class="reservations-list">
          <li class="reservation status-completed">
            <router-link to="/dashboard/reservations/reservation">
              <i class="fas fa-check reservation-icon"></i>
              <div class="patient-info">
                <p>
                  <b>
                    إسم المريض
                  </b>
                </p>
                <p>
                  نوع المرض
                </p>
              </div>
              <h3 class="reservation-time">
                08:00 م
              </h3>
            </router-link>
          </li>

          <li class="reservation">
            <a href="#!">
              <i class="far fa-calendar-alt reservation-icon"></i>
              <div class="patient-info">
                <p>
                  <b>
                    إسم المريض
                  </b>
                </p>
                <p>
                  نوع المرض
                </p>
              </div>
              <h3 class="reservation-time">
                08:00 م
              </h3>
            </a>
          </li>
        </ul>
      </li>


      <li class="reservations-day">
        <p class="timeline-date">
          <b>
            20 ديسمبر 2018
          </b>
        </p>

        <ul class="reservations-list">
          <li class="reservation">
            <a href="#!">
              <i class="far fa-calendar-alt reservation-icon"></i>
              <div class="patient-info">
                <p>
                  <b>
                    إسم المريض
                  </b>
                </p>
                <p>
                  نوع المرض
                </p>
              </div>
              <h3 class="reservation-time">
                08:00 م
              </h3>
            </a>
          </li>

          <li class="reservation status-canceled">
            <a href="#!">
              <i class="fas fa-times reservation-icon"></i>
              <div class="patient-info">
                <p>
                  <b>
                    إسم المريض
                  </b>
                </p>
                <p>
                  نوع المرض
                </p>
              </div>
              <h3 class="reservation-time">
                08:00 م
              </h3>
            </a>
          </li>
        </ul>
      </li>


      <li class="reservations-day">
        <p class="timeline-date">
          <b>
            20 ديسمبر 2018
          </b>
        </p>

        <ul class="reservations-list">
          <li class="reservation">
            <a href="#!">
              <i class="far fa-calendar-alt reservation-icon"></i>
              <div class="patient-info">
                <p>
                  <b>
                    إسم المريض
                  </b>
                </p>
                <p>
                  نوع المرض
                </p>
              </div>
              <h3 class="reservation-time">
                08:00 م
              </h3>
            </a>
          </li>

          <li class="reservation">
            <a href="#!">
              <i class="far fa-calendar-alt reservation-icon"></i>
              <div class="patient-info">
                <p>
                  <b>
                    إسم المريض
                  </b>
                </p>
                <p>
                  نوع المرض
                </p>
              </div>
              <h3 class="reservation-time">
                08:00 م
              </h3>
            </a>
          </li>
        </ul>
      </li>


      <li class="reservations-day">
        <p class="timeline-date">
          <b>
            20 ديسمبر 2018
          </b>
        </p>

        <ul class="reservations-list">
          <li class="reservation  status-completed">
            <a href="#!">
              <i class="fas fa-check reservation-icon"></i>
              <div class="patient-info">
                <p>
                  <b>
                    إسم المريض
                  </b>
                </p>
                <p>
                  نوع المرض
                </p>
              </div>
              <h3 class="reservation-time">
                08:00 م
              </h3>
            </a>
          </li>

          <li class="reservation">
            <a href="#!">
              <i class="far fa-calendar-alt reservation-icon"></i>
              <div class="patient-info">
                <p>
                  <b>
                    إسم المريض
                  </b>
                </p>
                <p>
                  نوع المرض
                </p>
              </div>
              <h3 class="reservation-time">
                08:00 م
              </h3>
            </a>
          </li>
        </ul>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'Reservations'
}
</script>

<style lang="sass">
  @import '../assets/sass/mixins'

  .reservations-root
    width: 80%
    margin: 50px auto

    .reservations-header
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


    .reservations-timeline
      list-style-type: none
      width: 100%

      .reservations-day
        width: 50%
        border-left: 2px solid lighten($color, 30)
        text-align: left
        padding: 0 20px
        position: relative
        margin-bottom: -25px

        &:after
          position: absolute
          content: ""
          background: $color
          height: 10px
          width: 10px
          top: 0
          left: -9px
          border-radius: 50%
          border: 3px solid lighten($color, 30)

        .reservations-list
          list-style-type: none

          .reservation
            background: white
            margin: 20px 0
            width: 300px
            margin-left: 0
            margin-right: auto
            position: relative
            height: 80px
            box-shadow: 0 0 20px #e5e5e5

            a
              position: absolute
              top: 0
              left: 0
              right: 0
              bottom: 0
              right: 0
              color: $color
              text-decoration: none
              display: flex
              align-items: center
              justify-content: space-between
              padding: 0 20px
              transition: 0.2s ease all

              &:hover
                color: white
                background: $color

                .patient-info
                  color: white


              &:active
                transform: scale(1.05)

              .patient-info
                text-align: right
                color: $text_color
                transition: 0.2s ease all


              .reservation-icon
                position: absolute
                top: 5px
                left: 60px
                font-size: 70px
                opacity: 0.1


        &:nth-child(even)
          width: 50%
          border-right: 2px solid lighten($color, 30)
          border-left: none
          text-align: right
          margin-left: 2px
          margin-right: auto

          &:after
            top: 0
            right: -9px
            left: auto

          .reservations-list
            .reservation
              margin-left: auto
              margin-right: 0

              a
                .patient-info
                  text-align: right


      .reservation.status-completed
        a
          background: #2eb066
          color: white !important
          .patient-info
            color: white !important


      .reservation.status-canceled
        a
          background: $error_color
          color: white !important
          .patient-info
            color: white !important


</style>
