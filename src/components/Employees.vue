<template>
  <div class="employees">

    <div class="container">

      <div class="section-heading">

        <div class="section-title">EMPLOYEES</div>

        <router-link :to="{path: '/employee/create' }" class="button button-ghost">Create&nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></router-link>

      </div><!--  Section Heading  -->

      <div class="list-box">
        <ul class="titles">
          <li>Employee Name</li>
        </ul>
        <paginate name="employees" :list="employees" class="list-items-two" :per="8">
          <li v-for="employee in paginated('employees')">
            <div class="first">
              <router-link :to="{path: '/employee/' + employee.id }">{{employee.name }}</router-link>
            </div><!-- First  -->
          </li>
        </paginate>
      </div>

      <paginate-links for="employees" :hide-single-page="true" :simple="{ prev: '', next: '' }" ></paginate-links>

    </div><!--  Container  -->
    
  </div>
</template>

<script>
export default {
  name: 'Employees',
  data () {
    return {
      employees: [
        { 
          id: 1,
          name: 'Chris Wertz'
        },
        { 
          id: 2,
          name: 'Ian Polatka'
        },
        { 
          id: 3,
          name: 'Michael Gregor'
        },
        { 
          id: 4,
          name: 'David Anderson'
        },
        { 
          id: 5,
          name: 'Stephanie Simon'
        },
        { 
          id: 6,
          name: 'Tom Wright'
        }
      ],
      paginate: ['employees']
    }
  }
}
</script>
