<template>
    <div>
        <div>
            <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">Logo</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link to="/cards">Memory Game</router-link></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" >
          <b-nav-item><router-link to="/scores">Display scores</router-link></b-nav-item>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.navbar a{
    color: white;
}
.navbar a:hover{
    text-decoration: none;
}
</style>