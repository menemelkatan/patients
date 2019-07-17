import Vue from 'vue'
import router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Doctor from '@/components/Doctor'
import Patients from '@/components/Patients'
import Patient from '@/components/Patient'
import AddPatient from '@/components/AddPatient'
import EditPatient from '@/components/EditPatient'
import Reservations from '@/components/Reservations'
import Reservation from '@/components/Reservation'
import EditDoctor from '@/components/EditDoctor'



Vue.use(router)

export default new router({
  routes: [
    {
      path: '*',
      redirect: '/dashboard'
    },
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/dashboard',
      component: Dashboard,
      children: [
        {
          path: '/dashboard/profile',
          component: Doctor
        },
        {
          path: '/dashboard/profile/edit',
          component: EditDoctor
        },
        {
          path: '/dashboard/patients',
          component: Patients
        },
        {
          path: '/dashboard/patient/:id',
          component: Patient
        },
        {
          path: '/dashboard/patients/add-patient',
          component: AddPatient
        },
        {
          path: '/dashboard/patient/:id/edit-patient',
          component: EditPatient
        },
        {
          path: '/dashboard/reservations',
          component: Reservations
        },
        {
          path: '/dashboard/reservations/reservation',
          component: Reservation
        }
      ],
      beforeEnter: (to, from, next) => {
        let currentUser = localStorage.getItem('Jvw11cafNqBcQ22PTjm9XeyGYUegqVAkUxYlETemh2x82xUuYpyaOMa7bwm1Nx92P3fMtyORE4JdLpcP')
        let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

        if (requiresAuth && !currentUser){
          next('Login');
          console.log('0');
        }
        else if (!requiresAuth && currentUser){
          next('Dashboard');
          console.log('1');
        }

        else{
          next()
        }

      },
      meta: {
        requiresAuth: true
      }
    }
  ],
  linkActiveClass: "active"
})
