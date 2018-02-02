<template>
  <div class="applications">

    <div class="container">

      <div class="section-heading">

        <div class="section-title">CREATE APPLICATION</div>

      </div><!--  Section Heading  -->

      <form>

        <div class="form-section">
          <label>Application Name</label>
          <input type="text" name="department">
        </div><!--  Form Section  -->

        <div class="form-section">
          <label>Status</label>
          <label class="wrap">
            <select class="dropdown">
              <option>Active</option>
              <option>DeActive</option>
            </select>
          </label>
        </div>

        <button type="submit" class="button" value="submit">Submit</button>

      </form>

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
