<template>
  <div>
    <div>
        <nav class="navbar">
            <div> 
                <b-button 
                v-b-toggle.sidebar-no-header
                class="btn">
                    <span class="navbar-toggler-icon"></span>
                </b-button>
                <b-sidebar 
                id="sidebar-no-header"
                aria-labelledby="sidebar-no-header-title"
                no-header
                shadow
                width="450px">
                <template #default="{ hide }">
                    <div class="p-3 idk">
                    <h4 id="sidebar-no-header-title">Game</h4>
                    </div>
                    <div class="p-3">
                    <nav class="mb-3">
                        <b-nav vertical>
                        <b-nav-item class="item-menu" @click="hide">I tuoi Amici</b-nav-item>
                        <b-nav-item class="item-menu" @click="hide">Giochi</b-nav-item>
                        <b-nav-item class="item-menu" @click="hide">Video</b-nav-item>
                        </b-nav>
                    </nav>
                    <b-button block @click="hide">Close Sidebar</b-button>
                    </div>
                </template>
                </b-sidebar>
            </div>
        </nav>
    </div>
    <Nuxt />
  </div>
</template>

<style>
    .navbar{
        background-color: #FF4742;
    }
</style>