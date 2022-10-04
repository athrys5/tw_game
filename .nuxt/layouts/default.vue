<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div> 
        <b-button 
          v-b-toggle.sidebar-no-header 
          class="btn">
            <span class="navbar-toggler-icon"></span>
        </b-button>
        <b-sidebar 
          id="sidebar-no-header"
          width="450px">
          <template #default="{ hide }">
            <div class="p-3">
              <h4 id="sidebar-no-header-title">Game</h4>
              <nav class="mb-3">
                <b-nav vertical>
                  <b-nav-item active @click="hide">Active</b-nav-item>
                  <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
                  <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
                </b-nav>
              </nav>
              <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
            </div>
          </template>
        </b-sidebar>
      </div>
    </nav>
    <Nuxt />
  </div>
</template>

<style src="./default.css"></style>