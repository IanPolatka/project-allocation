<template>
  <div class="descriptions">

    <div class="container">

      <div class="section-heading">

        <div class="section-title">CREATE WORK TYPE DESCRIPTION</div>

      </div><!--  Section Heading  -->

      <p><small><router-link :to="{path: '/work-type-descriptions'}"><i class="fa fa-angle-left" aria-hidden="true"></i> Back</router-link></small></p>

      <form>

      <table>
        <thead>
          <tr>
            <th>Work Type Description Name & Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" name="work-type-description"></td>
          </tr>
          <tr>
            <td>
              <label class="wrap">
              <select class="dropdown">
                <option v-for="s in itemStatus" :value="s.status">{{ s.name }}</option>
              </select>
              </label>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="button-inline">

        <button type="submit" class="button" value="submit">Submit</button>

      </div><!--  Button Inline  -->

      </form>

    </div><!--  Container  -->
    
  </div>
</template>

<script>
export default {
  name: 'Descriptions',
  data () {
    return {
      description: [
        
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
