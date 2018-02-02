import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Departments from '@/components/Departments'
import DepartmentCreate from '@/components/DepartmentCreate'
import DepartmentSingle from '@/components/DepartmentSingle'
import Applications from '@/components/Applications'
import ApplicationCreate from '@/components/ApplicationCreate'
import ApplicationSingle from '@/components/ApplicationSingle'
import Employees from '@/components/Employees'
import EmployeeCreate from '@/components/EmployeeCreate'
import WorkTypeDescriptions from '@/components/WorkTypeDescriptions'
import WorkTypeDescriptionCreate from '@/components/WorkTypeDescriptionCreate'
import WorkTypeDescriptionSingle from '@/components/WorkTypeDescriptionSingle'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/departments',
      name: 'Departments',
      component: Departments
    },
    {
      path: '/department/create',
      name: 'DepartmentsCreate',
      component: DepartmentCreate
    },
    {
      path: '/department/:id',
      name: 'DepartmentSingle',
      component: DepartmentSingle
    },
    {
      path: '/applications',
      name: 'Applications',
      component: Applications
    },
    {
      path: '/application/create',
      name: 'ApplicationCreate',
      component: ApplicationCreate
    },
    {
      path: '/application/:id',
      name: 'ApplicationSingle',
      component: ApplicationSingle
    },
    {
      path: '/employees',
      name: 'Employees',
      component: Employees
    },
    {
      path: '/employee/create',
      name: 'EmployeeCreate',
      component: EmployeeCreate
    },
    {
      path: '/work-type-descriptions',
      name: 'WorkTypeDescriptions',
      component: WorkTypeDescriptions
    },
    {
      path: '/work-type-description/create',
      name: 'WorkTypeDescriptionCreate',
      component: WorkTypeDescriptionCreate
    },
    {
      path: '/work-type-description/:id',
      name: 'WorkTypeDescriptionSingle',
      component: WorkTypeDescriptionSingle
    }
  ]
})
