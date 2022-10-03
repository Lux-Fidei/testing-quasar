<template>
  <q-page class="column" style="height: 480px">
    <q-form class="col-11 column justify-center items-center">
      <q-card
        style="background-color: rgba(255, 255, 255, 0.83); border-radius: 16px"
        :style="$q.screen.lt.sm ? 'width: 88%;' : 'width: 384px'"
      >
        <div class="row justify-center">
          <q-img
            ratio="1"
            class="q-mt-md"
            :style="$q.screen.lt.md ? 'width: 40%' : 'width: 24%'"
            src="~assets/atoran-logo.svg"
          />
        </div>

        <q-card-section class="flex flex-center q-px-md">
          <div style="width: 88%">
            <q-input
              class="col-6 q-mt-md q-mb-md"
              outlined
              v-model="username"
              label="Username"
              rounded
            />
            <q-input
              class="col-6 q-mt-xs q-mb-md"
              outlined
              v-model="password"
              label="Password"
              rounded
            />
          </div>

          <q-card-actions class="q-pa-none" vertical style="width: 88%">
            <q-btn
              size="lg"
              color="blue-6"
              label="login"
              class="text-weight-regular text-deep-purple-1 q-mt-none q-mb-sm"
              rounded
              type="submit"
            />
            <div class="text-center q-mt-xs q-mb-sm" style="color: #404046">
              Don&lsquo;t have an account&#63;
            </div>
            <q-btn
              size="lg"
              outline
              rounded
              color="primary"
              label="Sign-up"
              class="text-weight-regular q-mb-sm"
            />
          </q-card-actions>
        </q-card-section>
      </q-card>
    </q-form>
    <footer class="col-1 row justify-center items-center text-grey-10">
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
