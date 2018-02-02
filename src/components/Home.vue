<template>
  <div class="hello">

    <div class="container">

      <h1 class="large-title">Welcome Richard,</h1>

      <p class="large-margin-bottom">This is the project allocation application.  Select an option below.</p>

      <ul class="list-halves">

        <li><router-link :to="{path: '/departments'}">Departments</router-link></li>
        <li><router-link :to="{path: '/applications'}">Applications</router-link></li>
        <li><router-link :to="{path: '/employees'}">Employees</router-link></li>
        <li><router-link :to="{path: '/work-type-descriptions'}">Work Type Descriptions</router-link></li>

      </ul>

    </div><!--  Container  -->
    
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  }
}
</script>
