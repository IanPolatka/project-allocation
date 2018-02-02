<template>
  <div id="app">
    <header>

      <div class="logo">

        <div class="logo-image">

          <router-link class="header-link" :to="{path: '/'}">

            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 136 47" style="enable-background:new 0 0 136 47;" xml:space="preserve">
 
            <path class="st0" d="M0,47h17.6V0H0V47z M20.6,0v14.4h3.9v20.9h-3.9V47h14.7l8.8-8.8V8.8L35.2,0H20.6z"/>
            <path class="st0" d="M55.8,0L47,8.8V47h16.8V0H55.8z M66.7,0v14.4h3.9v11.1h-3.9v9.8h3.9V47h17.5V25.9L78.7,0H66.7z"/>
            <path class="st1" d="M99.2,0H81.8l17.1,47h17.5L99.2,0z M129.7,12.1V0h-13.2l-7.1,19.4l8.8,24.2L129.7,12.1z"/>
            <g>
              <path class="st0" d="M134.7,2.1V1.8c0-0.3-0.2-0.5-0.6-0.5h-0.8v2.1h0.3V2.7h0.4l0.5,0.7h0.4l-0.5-0.7
                                C134.6,2.5,134.7,2.3,134.7,2.1z M134.3,2.1c0,0.2-0.1,0.2-0.3,0.2h-0.4V1.6h0.4c0.2,0,0.3,0,0.3,0.2V2.1z"/>
              <path class="st0" d="M133.9,0.2c-1.2,0-2.1,0.9-2.1,2.1c0,1.2,0.9,2.1,2.1,2.1c1.2,0,2.1-0.9,2.1-2.1C136,1.1,135.1,0.2,133.9,0.2z
                                 M133.9,4.1c-1,0-1.7-0.7-1.7-1.7c0-1,0.7-1.7,1.7-1.7c1.2,0,1.7,0.9,1.7,1.7C135.6,3.2,135.1,4.1,133.9,4.1z"/>
            </g>
                        </svg>

                    </router-link>

                </div><!--  Logo Image  -->

                <div class="site-title">

                    <router-link :to="{path: '/'}" class="header-link">Project Allocation Application</router-link>

                </div><!--  Site Title  -->

                <div class="profile-name">

                    <a href="/project-allocation/login.php">Hi, Richard</a>

                </div><!--  Profile Name  -->

            </div><!--  Logo  -->

        </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Titillium+Web:400,600,700');



/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------
/ 1. Base Styles
/ 2. Header
/ 3. Tables
/ 4. Buttons
/ 5. Titles
/ 6. Status'
/ 7. Pagination
/ 8. Forms
*/





/*--------------------------------------------------------------
/# Base Styles
--------------------------------------------------------------*/

body {
  font-family: 'Titillium Web', sans-serif;
  color: #5d5c5a;
  background: #F7FDFF;
  font-size: 16px;
  margin: 0;
}

a {
  color: #005d7d;
  text-decoration: none
}

a:hover {
  text-decoration: underline;
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0 0 20px 0;
}

.large-title {
  margin-bottom: 5px;
}

.large-margin-bottom {
  margin-bottom: 35px;
}



//  Container

.container {
  padding: 0 1em;
  background: #fff;
  box-shadow: 0px 1px 2px rgba(0,0,0,.18);
  padding: 20px;
  border-top: 4px solid #005d7d;
}

@media screen and (min-width: 768px) {
  .container {
    width: 55%;
    margin: 0 auto;
  }

}



//  Lists

ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

.list-halves {
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-wrap: wrap;
}

.list-halves li {
  display: flex;
  width: 48%;
  margin-bottom: 20px;
}

.list-halves a {
  flex: 1;
  text-align: center;
  font-size: 1.05em;
  text-decoration: none;
  padding: 8px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.list-halves a:hover {
  color: #005d7d;
  border-color: #005d7d;
  text-decoration: none;
}


.list-box {
  width: 100%;
  text-align: left;
  border: 1px solid #ddd;
  border-collapse: collapse;
  margin-bottom: 20px; 
}

.list-box .titles {
  margin-top: 0;
  padding: 10px;
  background: #f5f5f5;
  font-size: .8em;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
}

.list-box .titles li {
  flex: 4;
}

.list-box .titles li:first-child {
  flex: 1;
}

.list-items-two li {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.list-items-two li:last-child {
  border-bottom: none;
}

.list-items-two li .first {
  align-self: center;
  flex: 1;
}

.list-items-two li .second {
  flex: 4;
}





/*--------------------------------------------------------------
/# Header
--------------------------------------------------------------*/

header {
  padding: 2em 1em;
  border-bottom: 1px solid #cccccc;
  margin-bottom: 30px;
  background: #fff;
}

.header-link {
  color: #000;
  text-decoration: none;
}

.header-link:hover {
  color: #bed12b;
  text-decoration: none;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-image svg {
  flex: 1;
  height: 45px;
  width: auto;
  padding-right: 20px;
}

.site-title {
  font-weight: 700;
  font-size: 18px;
}

.profile-name {
  flex: 1;
  justify-content: flex-end;
  text-align: right;
}

//  Header Logo SVG Colors
.st0{fill:#5D5B59;}
.st1{fill:#B6BD00;}



/*--------------------------------------------------------------
/# Tables
--------------------------------------------------------------*/

table {
  width: 100%;
  text-align: left;
  border: 1px solid #ddd;
  border-collapse: collapse;
  padding: 10px;
  margin-bottom: 20px;
}

thead {
  background: #f5f5f5;
  font-size: .8em;
  text-transform: uppercase;
}

th, td {
  padding: 10px;
}

tbody tr {
  border-bottom: 1px solid #eeeeee;
}

.employee td:first-child {
  width: 15%;
}

.employee td:nth-child(2) {
  width: 50%;
}



/*--------------------------------------------------------------
/# Buttons
--------------------------------------------------------------*/

.button {
  padding: 8px 15px;
  text-transform: uppercase;
  font-size: .8em;
  background: #bed12b;
  text-decoration: none;
  font-weight: bold;
  color: #000;
  display: inline-block;
  border-radius: 2px;
  border: 1px solid transparent;
  line-height: 1;
}

.button:hover {
  cursor: pointer;
  background: rgba(#bed12b, .75);
  text-decoration: none;
}

.button-ghost {
  background: transparent;
  border: 1px solid #ddd;
  color: #000;
}

.button-ghost:hover {
  background: #eee;
}

.button-ghost:active {
  background: #ddd;
}

.button-save {
  background: #bed12b;
  border: 1px solid transparent;
  color: #000;
}

.button-delete {
  color: #D61C1C;
  background: transparent;
}

.button-delete:hover {
  background: #D61C1C;
  color: white;
}

.button-dashed {
  border: 1px dashed #333;
  background: #fff;
  color: #666;
}

.button-dashed:hover {
  color: #000;
}

.button-block {
  display: block;
  text-align: center;
}



/*--------------------------------------------------------------
/# Titles
--------------------------------------------------------------*/

.section-heading {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: -20px -20px 20px -20px;
  padding: 20px;
  border-bottom: 1px solid #ddd;
  align-items: center;
  justify-content: space-between;
}

.section-heading > .button {
  align-self: flex-end;
  margin: 0;
}





/*--------------------------------------------------------------
/# Status
--------------------------------------------------------------*/

.green-status {
  background-color: green;
  height: 8px;
  width: 8px;
  border-radius: 8px;
}

.red-status {
  background-color: #D61C1C;
  height: 8px;
  width: 8px;
  border-radius: 8px;
}



/*--------------------------------------------------------------
/# Pagination
--------------------------------------------------------------*/

.paginate-links {
  padding: 0;
  margin: 0;
}

.paginate-links li {
  display: inline-block;
  margin-right: 3px;
}

.paginate-links li a {
  display: block;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 8px 15px;color: #000;
}

.paginate-links li a:hover {
  background: #eee;
  text-decoration: none;
  cursor: pointer;
}

.paginate-links .prev a:before {
  content: "\f104";
  font-family: FontAwesome;
  font-size: .8em;
}

.paginate-links .next a:before {
  content: "\f105";
  font-family: FontAwesome;
  font-size: .8em;
}



/*--------------------------------------------------------------
/# Forms
--------------------------------------------------------------*/

.form-section {
  display: block;
  margin-bottom: 10px;
}

label {
  display: block;
  font-size: .8em;
  margin-bottom: 5px;
  text-transform: uppercase;
  font-weight: bold;
}

input {
  width: 50%;
  padding: 5px;
  border-radius: 2px;
  border: 1px solid #ddd;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

*:focus {
    outline: none;
}


label.wrap {
    width: 50%;
    overflow: hidden; 
    height: 32px;    
    position: relative;
    display: block;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 100%;
}

select.dropdown{       
  height: 32px;
  border: 0;     
  width: 100%;
  webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
}
label.wrap:after {
    content:"\f107";
    font-family: FontAwesome;
    color: #000;
    position: absolute; 
    right: 3px; 
    top: 6px;
    z-index: 1;
    width: 15px;
    height: 100%;  
    pointer-events: none;    
}








</style>
