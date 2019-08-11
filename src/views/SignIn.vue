<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elecation-12">
            <Toolbar text="ログイン" />
            <v-card-text>
              <v-form>
                <v-text-field name="username" label="ユーザー名" type="text" v-model="username">
                </v-text-field>
                <v-text-field
                  id="password"
                  name="password"
                  label="パスワード"
                  type="password"
                  v-model="password"
                >
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="clicked()">ログイン</v-btn>
            </v-card-actions>
          </v-card>
          <v-layout align-center justify-center>
            <a id="sign_up_link" @click="linkClicked()">ユーザー登録の方はこちら</a>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import Toolbar from "../components/Toolbar";
// import { signIn } from "../plugins/aws_auth";

export default {
  data () {
    return {
      username: "",
      password: ""
    }
  },
  components: {
    Toolbar
  },
  methods: {
    clicked() {
      const data = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch("createSession", data);
      // signIn(this.username, this.password)
      //   .then((data) => {
      //     alert("success sign in");
      //     console.log(data);
      //   })
      //   .catch((err) => {
      //     alert("sign in error");
      //     console.log(err);
      //   });
      //this.$store.dispatch("changeLogin");
    },
    linkClicked() {
      this.$router.push("/signup");
    }
  },
  computed: {
    status() {
      return this.$store.getters.loginCheck;
    },
    statusError() {
      return this.$store.getters.errorStatus;
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
    },
    statusError() {
      alert("ログイン処理でエラーが発生しました。");
    }
  }
};
</script>

<style>
#sign_up_link {
  margin-top: 20px;
}
</style>
