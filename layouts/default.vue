<template>
  <div class="container-fluid layoutcontainer">
    <div class="row justify-content-center">
        <div class="fix_1">
            <nav class="navbar">
              <button
                v-b-toggle.sidebar-no-header
                class="btnNavbar"
              >
                      <b-icon-list
                        style="color: #a53f3c;"
                        font-scale="1.8"
                      ></b-icon-list>
              </button>
              <div class="sidebarcontent">
                <b-sidebar
                  id="sidebar-no-header"
                  aria-labelledby="sidebar-no-header-title"
                  no-header
                  backdrop-variant="dark"
                  backdrop
                  shadow
                  width="450px"
                  >
                    <template #default="{ hide }">
                      <div class="sidetitle">
                        <h4 id="sidebar-no-header-title">Game App</h4>
                      </div>
                      <div class="activities">
                        <ul style="padding: 0;">
                          <NuxtLink to="/" style="text-decoration: none; color: inherit;">
                            <li><b-icon-house style="margin-right: 5px"></b-icon-house>Home</li>
                          </NuxtLink>
                          <NuxtLink to="/yourpet" style="text-decoration: none; color: inherit;">
                            <li><b-icon-pencil style="margin-right: 5px"></b-icon-pencil>Your Friends!</li>
                          </NuxtLink>
                          <NuxtLink to="/curiosities" style="text-decoration: none; color: inherit;">
                            <li><b-icon-book style="margin-right: 5px"></b-icon-book>Curiosities on your Animals</li>
                          </NuxtLink>
                          <NuxtLink to="/generalcuriosities" style="text-decoration: none; color: inherit;">
                            <li><b-icon-question-lg style="margin-right: 5px"></b-icon-question-lg>General Curiosities</li>
                          </NuxtLink>
                          <NuxtLink to="/games" style="text-decoration: none; color: inherit;">
                            <li><b-icon-joystick style="margin-right: 5px"></b-icon-joystick>Games</li>
                          </NuxtLink>
                          <NuxtLink to="/videos" style="text-decoration: none; color: inherit;">
                            <li><b-icon-collection-play style="margin-right: 5px"></b-icon-collection-play>Videos</li>
                          </NuxtLink>
                        </ul>
                      </div>
                      <div class="buttoncustom">
                        <button class="button-2" @click="hide">Back</button>
                      </div>
                    </template>
                </b-sidebar>
              </div>
            </nav>
        </div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
import { BIconList, BIconBook, BIconCollectionPlay, BIconJoystick, BIconPencil, BIconQuestionLg, BIconHouse} from 'bootstrap-vue'

export default {
  components: {
    BIconList,
    BIconBook,
    BIconCollectionPlay,
    BIconJoystick,
    BIconPencil,
    BIconQuestionLg,
    BIconHouse,
  },
}
</script>


<style src="./default.css"></style>
