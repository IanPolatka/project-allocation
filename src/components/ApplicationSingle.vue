<template>
  <div class="applications">

    <div class="container">

      <div class="section-heading">

        <div class="section-title">APPLICATION - {{ application[id].name }}</div>

      </div><!--  Section Heading  -->

      <p><small><router-link :to="{path: '/applications'}"><i class="fa fa-angle-left" aria-hidden="true"></i> Back</router-link></small></p>

      <form>

      <table>
        <thead>
          <tr>
            <th>Application Name & Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" name="department" v-model="application[id].name"></td>
          </tr>
          <tr>
            <td>
              <label class="wrap">
              <select class="dropdown" v-model="application[id].status">
                <option v-for="s in itemStatus" :value="s.status">{{ s.name }}</option>
              </select>
              </label>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="button-inline">

        <button type="submit" class="button" value="submit">Submit</button>
        <button type="submit" class="button button-delete" value="submit">Delete</button>

      </div><!--  Button Inline  -->

      </form>

    </div><!--  Container  -->
    
  </div>
</template>

<script>
export default {
  name: 'Applications',
  data () {
    return {
      id: this.$route.params.id - 1,
      application: [
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
      itemStatus: [
        {
          status: true,
          name: "Active"
        },
        {
          status: false,
          name: "DeActive"
        }
      ]
    }
  }
}
</script>
