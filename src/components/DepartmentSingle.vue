<template>
  <div class="department">

    <div class="container">

      <div class="section-heading">

        <div class="section-title">DEPARTMENT - {{ department[id].name }}</div>

      </div><!--  Section Heading  -->

      <p><small><router-link :to="{path: '/departments'}"><i class="fa fa-angle-left" aria-hidden="true"></i> Back</router-link></small></p>

      <form>

      <table>
        <thead>
          <tr>
            <th>Department Name & Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" name="department" v-model="department[id].name"></td>
          </tr>
          <tr>
            <td>
              <label class="wrap">
              <select class="dropdown" v-model="department[id].status">
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
  name: 'Department',
  data () {
    return {
      id: this.$route.params.id - 1,
      department: [
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
