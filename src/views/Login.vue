<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elecation-12">
            <Toolbar />
            <v-card-text>
              <v-form>
                <v-text-field name="mail" label="Mail" type="text">
                </v-text-field>
                <v-text-field
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                >
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="clicked()">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import Toolbar from "../components/Toolbar";

export default {
  components: {
    Toolbar
  },
  methods: {
    clicked() {
      this.$store.dispatch("changeLogin");
    }
  },
  computed: {
    status() {
      return this.$store.getters.loginCheck;
    }
  },
  //computedとwatchでstoreのstateを監視する
  watch: {
    // status(newValue, oldValue) {
    //   //alert(oldValue);
    //   //alert(newValue);
    // }
    status() {
      this.$router.push("/");
    }
  }
};
</script>
