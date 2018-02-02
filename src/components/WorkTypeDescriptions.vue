<template>
  <div class="descriptions">

    <div class="container">

      <div class="section-heading">

        <div class="section-title">WORK TYPE DESCRIPTIONS</div>

        <router-link :to="{path: '/work-type-description/create' }" class="button button-ghost">Create&nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></router-link>

      </div><!--  Section Heading  -->

      <div class="list-box">
        <ul class="titles">
          <li>Status</li>
          <li>Work Type Description</li>
        </ul>
        <paginate name="descriptions" :list="descriptions" class="list-items-two" :per="8">
          <li v-for="description in paginated('descriptions')">
            <div class="first">
              <div v-if="description.status === true"><div class="green-status"></div></div>
              <div v-if="description.status === false"><div class="red-status"></div></div>
            </div><!-- First  -->
            <div class="second">
              <router-link :to="{path: '/work-type-description/' + description.id }">{{description.name }}</router-link>
            </div><!--  Second  -->
          </li>
        </paginate>
      </div>

      <paginate-links for="descriptions" :hide-single-page="true" :simple="{ prev: '', next: '' }" ></paginate-links>

    </div><!--  Container  -->
    
  </div>
</template>

<script>
export default {
  name: 'Descriptions',
  data () {
    return {
      descriptions: [
        { 
          id: 1,
          status: false,
          name: 'Capital'
        },
        { 
          id: 2,
          status: false,
          name: 'Expense'
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
      paginate: ['descriptions']
    }
  }
}
</script>
