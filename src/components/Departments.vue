<template>
  <div class="departments">

    <div class="container">

      <div class="section-heading">

        <div class="section-title">DEPARTMENT</div>

        <router-link :to="{path: '/department/create' }" class="button button-ghost">Create&nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></router-link>

      </div><!--  Section Heading  -->

      <div class="list-box">
        <ul class="titles">
          <li>Status</li>
          <li>Department Name</li>
        </ul>
        <paginate name="departments" :list="departments" class="list-items-two" :per="8">
          <li v-for="department in paginated('departments')">
            <div class="first">
              <div v-if="department.status === true"><div class="green-status"></div></div>
              <div v-if="department.status === false"><div class="red-status"></div></div>
            </div><!-- First  -->
            <div class="second">
              <router-link :to="{path: '/department/' + department.id }">{{department.name }}</router-link>
            </div><!--  Second  -->
          </li>
        </paginate>
      </div>

      <paginate-links for="departments" :hide-single-page="true" :simple="{ prev: '', next: '' }" ></paginate-links>

      <!-- <a href="" class="button button-ghost"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
      <a href="" class="button button-ghost"><i class="fa fa-angle-right" aria-hidden="true"></i></a> -->

    </div><!--  Container  -->
    
  </div>
</template>

<script>
export default {
  name: 'Departments',
  data () {
    return {
      departments: [
        { 
          id: 1,
          status: true,
          name: 'Communications'
        },
        { 
          id: 2,
          status: false,
          name: 'Employment'
        },
        { 
          id: 3,
          status: true,
          name: 'Membership'
        },
        { 
          id: 4,
          status: true,
          name: 'Purchasing'
        },
        { 
          id: 5,
          status: false,
          name: 'Information Technology'
        },
        { 
          id: 6,
          status: true,
          name: 'Voluntary Services'
        },
        {
          id: 7,
          status: false,
          name: 'Fundraising'
        },
        {
          id: 8,
          status: true,
          name: 'Charitable Service Trust'
        },
        {
          id: 9,
          status: false,
          name: 'Mail Center'
        }
      ],
      paginate: ['departments']
    }
  }
}
</script>
