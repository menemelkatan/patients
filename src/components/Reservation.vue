<template lang="html">
  <div class="reservation-root">
    <div class="page-tools">
      <a @click="$router.go(-1)" title="كل الحجوزات  ">
        <i class="fas fa-arrow-right"></i>
      </a>
    </div>

    <div class="reservation-info">
      <h2 class="reservation-time">
        08:00 مساءا
      </h2>
      <p class="reservation-date">
        20 ديسمبر 2018
      </p>
      <router-link to="/dashboard/patients/patient" class="patient-name">
        <h2>
          <i class="fa fa-user"></i>
          إسم المريض
        </h2>
      </router-link>
    </div>

    <div class="reservation">
      <div class="reservation-description">
        <h4>
          تفاصيل الكشف
        </h4>
        <p>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          <br> <br>
           إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
        </p>
      </div>
      <div class="old-reservations">
        <a href="#!" class="btn">
          <i class="fa fa-prescription"></i>

          الروشتة
        </a>
        <a href="#!" class="btn">
          <i class="fa fa-step-backward "></i>
          الكشوفات السابقة
        </a>

        <a href="#!" class="btn">
          <i class="fa fa-edit"></i>

          تعديل الحجز
        </a>
        <a href="#!" class="btn btn-error">
          <i class="fa fa-times "></i>
          حذف الحجز
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reservation'
}
</script>

<style lang="sass">
  @import '../assets/sass/mixins'

  .reservation-root
    width: 90%
    margin: 50px auto


    .reservation-info
      margin: 20px 0
      .reservation-time
        font-size: 60px
        color: $color
        font-weight: lighter

      .reservation-date
        font-size: 30px
        color: $text_color

      .patient-name
        text-decoration: none
        h2
          margin-top: 20px
          font-size: 50px
          color: $color
          text-shadow: 5px 5px 0 #e5e5e5

          &:hover
            color: #e5e5e5
            text-shadow: 5px 5px 0 $color


    .reservation
      margin: 50px
      display: flex
      align-items: center
      justify-content: space-between
      .reservation-description
        background: white
        width: 60%
        padding: 25px
        box-shadow: 0 0 20px #e5e5e5

        h4
          font-size: 30px
          margin-bottom: 25px
          color: $color

        p
          color: gray

      .old-reservations
        width: 30%
        display: flex
        flex-wrap: wrap
        align-items: stretch
        .btn
          display: block
          width: 100%
          text-align: center


</style>
