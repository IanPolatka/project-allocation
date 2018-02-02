<template>
  <div class="applications">

    <div class="container">

      <div class="section-heading">

        <div class="section-title">APPLICATIONS</div>

        <router-link :to="{path: '/application/create' }" class="button button-ghost">Create&nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></router-link>

      </div><!--  Section Heading  -->

      <div class="list-box">
        <ul class="titles">
          <li>Status</li>
          <li>Application Name</li>
        </ul>
        <paginate name="applications" :list="applications" class="list-items-two" :per="8">
          <li v-for="application in paginated('applications')">
            <div class="first">
              <div v-if="application.status === true"><div class="green-status"></div></div>
              <div v-if="application.status === false"><div class="red-status"></div></div>
            </div><!-- First  -->
            <div class="second">
              <router-link :to="{path: '/application/' + application.id }">{{application.name }}</router-link>
            </div><!--  Second  -->
          </li>
        </paginate>
      </div>

      <paginate-links for="applications" :hide-single-page="true" :simple="{ prev: '', next: '' }" ></paginate-links>

    </div><!--  Container  -->
    
  </div>
</template>

<script>
export default {
  name: 'Applications',
  data () {
    return {
      applications: [
        { 
          id: 1,
          status: false,
          name: 'CMS'
        },
        { 
          id: 2,
          status: false,
          name: 'DAV.org'
        },
        { 
          id: 3,
          status: true,
          name: 'Membership'
        },
        { 
          id: 4,
          status: true,
          name: 'DAV360'
        },
        { 
          id: 5,
          status: false,
          name: 'AVDLM'
        },
        { 
          id: 6,
          status: true,
          name: 'DAV Secondary Sites'
        },
        {
          id: 7,
          status: false,
          name: 'Mail Center Management'
        },
        {
          id: 8,
          status: true,
          name: 'Kronos'
        },
        {
          id: 9,
          status: false,
          name: 'Hello World'
        }
      ],
      paginate: ['applications']
    }
  }
}
</script>
