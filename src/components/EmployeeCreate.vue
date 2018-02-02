<template>
  <div class="employees">

    <div class="container">

      <div class="section-heading">

        <div class="section-title">CREATE EMPLOYEE</div>

      </div><!--  Section Heading  -->

      <form>

      <div class="form-section">
        <label>First Name</label>
        <input type="text" name="first_name">
      </div><!--  Form Section  -->

      <div class="form-section">
        <label>Last Name</label>
        <input type="text" name="last_name">
      </div><!--  Form Section  -->

      <div class="form-section">
        <label>Employee Status</label>
        <label class="wrap">
          <select class="dropdown">
            <option>Super Admin</option>
            <option>Admin</option>
            <option>Employee</option>
            <option>Viewer</option>
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
