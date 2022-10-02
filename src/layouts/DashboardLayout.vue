<template>
  <q-layout view="hHh lpR lFf">
    <q-header reveal class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          v-if="!$q.screen.lt.sm"
          dense
          flat
          round
          icon="menu"
          @click="toggleMiniState"
        />
        <q-btn v-else dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          RayQuasar
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :mini="miniState"
      mini-to-overlay
      :width="256"
      :breakpoint="512"
      bordered
      class="bg-grey-3"
    >
      <!-- drawer content -->
      <q-scroll-area class="fit">
        <q-list v-if="miniState === true && !$q.screen.lt.sm">
          <template v-for="menuItem in menuList" :key="menuItem.label">
            <q-item
              clickable
              :active="menuItem.label === 'Dashboard'"
              @click="`routeTo(${menuItem.route})`"
              v-ripple
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-menu
                v-if="menuItem.menuSubList.length > 0"
                anchor="top right"
                self="top left"
              >
                <q-list dense style="min-width: 128px">
                  <template
                    v-for="subMenuItem in menuItem.menuSubList"
                    :key="subMenuItem.label"
                  >
                    <q-item
                      exact
                      clickable
                      @click="`routeTo(${subMenuItem.route})`"
                      v-ripple
                    >
                      <q-item-section avatar>
                        <q-icon :name="subMenuItem.icon" size="xs"></q-icon>
                      </q-item-section>
                      <q-item-section style="margin-left: -20px">
                        {{ subMenuItem.label }}
                      </q-item-section>
                    </q-item>
                  </template>
                </q-list>
              </q-menu>
              <q-tooltip v-if="menuItem.label !== 'Administrative'">{{
                menuItem.label
              }}</q-tooltip>
              <q-tooltip v-else>Admin</q-tooltip>
            </q-item>
          </template>
        </q-list>
        <q-list v-else>
          <template v-for="menuItem in menuList" :key="menuItem.label">
            <q-item
              v-if="menuItem.menuSubList.length === 0"
              clickable
              :active="menuItem.label === 'Dashboard'"
              @click="`routeTo(${menuItem.route})`"
              v-ripple
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section> {{ menuItem.label }} </q-item-section>
            </q-item>
            <q-expansion-item
              v-else
              :icon="menuItem.icon"
              :label="menuItem.label"
            >
              <template
                v-for="subMenuItem in menuItem.menuSubList"
                :key="subMenuItem.label"
              >
                <q-item
                  exact
                  clickable
                  @click="`routeTo(${subMenuItem.route})`"
                  v-ripple
                  style="padding-left: 40px"
                >
                  <q-item-section avatar>
                    <q-icon :name="subMenuItem.icon" size="xs"></q-icon>
                  </q-item-section>
                  <q-item-section style="margin-left: -20px">
                    {{ subMenuItem.label }}
                  </q-item-section>
                </q-item>
              </template>
            </q-expansion-item>
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ref } from 'vue';
import { defineComponent } from 'vue';

const menuList = [
  {
    route: '/dashboard',
    label: 'Dashboard',
    icon: 'dashboard',
    menuSubList: [],
  },
  {
    label: 'Administrative',
    icon: 'fa-solid fa-users-gear',
    menuSubList: [
      { route: '/account', icon: 'fa-solid fa-users', label: 'Account' },
      {
        route: '/',
        icon: 'fa-solid fa-user-lock',
        label: 'Role Management',
      },
      {
        route: '/permission',
        icon: 'fa-solid fa-user-shield',
        label: 'Permission Management',
      },
    ],
  },
  {
    label: 'Item',
    icon: 'fa-solid fa-shopping-cart',
    menuSubList: [
      {
        route: '/category',
        icon: 'fa-solid fa-regular fa-layer-group',
        label: 'Category Management',
      },
      {
        route: '/item',
        icon: 'fa-solid fa-shopping-basket',
        label: 'Item Management',
      },
    ],
  },
];

export default defineComponent({
  name: 'DashboardLayout',
  setup() {
    const leftDrawerOpen = ref(true);
    const miniState = ref(false);
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      miniState,
      toggleMiniState() {
        miniState.value = !miniState.value;
      },
      menuList,
    };
  },
  methods: {
    async routeTo(path: string) {
      await this.$router.push(path);
      // this.miniState = true;
      // this.leftDrawerOpen = false;
    },
  },
});
</script>
