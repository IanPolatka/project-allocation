<template>
  <div class="departments">

    <div class="container">

      <div class="section-heading">

        <div class="section-title">CREATE DEPARTMENT</div>

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
            <td><input type="text" name="department"></td>
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
  name: 'Departments',
  data () {
    return {
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
