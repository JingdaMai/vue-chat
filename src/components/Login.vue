<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div
          v-if="page === 'login'"
          class="column is-4 is-offset-4"
        >
          <h1 class="title has-text-grey">
            Login
          </h1>
          <div class="box">
            <form @submit.prevent="login">
              <div class="field">
                <div class="control">
                  <input
                    v-model="email"
                    type="email"
                    class="input"
                    placeholder="Your Email"
                    autofocus=""
                  >
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input
                    v-model="password"
                    type="password"
                    class="input"
                    placeholder="Your Password"
                  >
                </div>
              </div>

              <p
                v-if="loginError"
                class="help is-danger"
              >
                {{ loginError }}
              </p>
              <button
                type="submit"
                class="button is-block is-info is-fullwidth"
              >
                Login
              </button>
            </form>
          </div>
          <p class="has-text-grey">
            <a @click="page = 'signUp'">Sign Up</a>
          </p>
        </div>
        <div
          v-if="page === 'signUp'"
          class="column is-4 is-offset-4"
        >
          <h1 class="title has-text-grey">
            Sign Up
          </h1>
          <div class="box">
            <form @submit.prevent="signUp">
              <div class="field">
                <div class="control">
                  <ValidationProvider
                    v-slot="{ errors }"
                    name="email"
                    rules="required|email"
                  >
                    <input
                      v-model="email"
                      class="input"
                      type="email"
                      placeholder="your@email.address"
                    />
                    <p class="help is-danger">
                      {{ errors[0] }}
                    </p>
                  </ValidationProvider>
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <ValidationProvider
                    v-slot="{ errors }"
                    name="username"
                    rules="required"
                  >
                    <input
                      v-model="username"
                      class="input"
                      type="text"
                      placeholder="Your username"
                    >
                    <p class="help is-danger">
                      {{ errors[0] }}
                    </p>
                  </ValidationProvider>
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <ValidationProvider
                    v-slot="{ errors }"
                    name="password"
                    rules="required|min:6"
                  >
                    <input
                      v-model="password"
                      class="input"
                      type="password"
                      placeholder="Your Password"
                    >
                    <p class="help is-danger">
                      {{ errors[0] }}
                    </p>
                  </ValidationProvider>
                </div>
              </div>
              <button class="button is-block is-info is-fullwidth">
                Sign up
              </button>
            </form>
          </div>
          <p class="has-text-grey">
            <a @click="page = 'login'">Login</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { FirebaseDb, FirebaseAuth} from '../library/Database';

export default {
  name: "Login",
  data() {
    return {
      page: 'login',
      email: '',
      password: '',
      username: '',
      loginError: ''
    };
  },
  created() {
    FirebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit('SET_LOGIN', { uid: user.uid, email: user.email });
        FirebaseDb.ref(`users/${user.uid}`).once('value')
          .then(data => {
            this.$store.commit('SET_USERNAME', data.val().name);
          });

        this.$router.push('/chat');
      }
    })
  },
  methods: {
    login() {
      FirebaseAuth.signInWithEmailAndPassword(this.email, this.password)
        .catch((error) => this.loginError = error);
    },
    signUp() {
      FirebaseAuth.createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          FirebaseDb.ref(`users/${data.user.uid}`).set({
            name: this.username
          });
        });
    }
  }
}
</script>

<style scoped>

</style>
