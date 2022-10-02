<template>
  <q-page class="column" style="height: 480px">
    <q-form class="col-11 column items-center justify-center">
      <q-card
        style="background-color: rgba(255, 255, 255, 0.56); border-radius: 16px"
        :style="$q.screen.lt.sm ? 'width: 88%;' : 'width: 512px'"
      >
        <div class="row justify-center">
          <q-img
            ratio="1"
            class="q-mt-md q-mx-auto"
            style="width: 32%"
            src="~assets/atoran-logo.svg"
          />
        </div>

        <q-card-section>
          <q-input
            class="q-my-md"
            outlined
            v-model="username"
            label="Username"
            rounded
          />
          <q-input
            class="q-my-md"
            outlined
            v-model="password"
            label="Password"
            rounded
          />
          <q-card-actions class="q-pa-none" vertical>
            <q-btn
              size="lg"
              color="blue-6"
              label="login"
              class="text-weight-regular text-deep-purple-1 q-my-sm q-mt-xl"
              rounded
              type="submit"
            />
            <div class="text-center q-my-sm" style="color: #404046">
              Don&lsquo;t have an account&#63;
            </div>
            <q-btn
              size="lg"
              outline
              rounded
              color="primary"
              label="Sign-up"
              class="text-weight-regular q-my-xs"
            />
          </q-card-actions>
        </q-card-section>
      </q-card>
    </q-form>
    <footer class="col-1 row justify-center items-center text-deep-purple-1">
      &#169; 2022 Atoran App from ITSMarawi
    </footer>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      username: '',
      password: '',
    };
  },
});
</script>
