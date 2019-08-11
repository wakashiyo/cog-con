<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>

          <v-card class="elecation-12" v-if="!status">
            <Toolbar text="ユーザー登録" />
            <v-card-text>
              <v-form>
                <v-text-field name="username" label="ユーザー名" type="text" v-model="username">
                </v-text-field>
                <v-text-field name="mail" label="メールアドレス" type="text" v-model="email">
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
              <v-btn color="primary" block @click="clicked()">登録</v-btn>
            </v-card-actions>
          </v-card>

          <v-card class="elecation-12" v-if="status">
            <Toolbar text="認証" />
            <v-card-text>
              <v-form>
                <v-text-field name="code" label="認証コード" type="text" v-model="code">
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="confirm()">承認</v-btn>
            </v-card-actions>
          </v-card>

          <v-layout align-center justify-center>
            <a id="return_sign_in" @click="linkClicked()">戻る</a>
          </v-layout>

        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import Toolbar from "../components/Toolbar";
import { signUp, confirmSignup } from "../plugins/aws_auth";

export default {
  data () {
    return {
      username: "",
      email: "",
      password: "",
      code: null,
      status: true
    }
  },
  components: {
    Toolbar
  },
  methods: {
    clicked() {
      signUp(this.username, this.password, this.email)
        .then((data) => {
          alert("sign up success");
          this.status = true;
          console.log(data);
        })
        .catch((err) => {
          alert("sign up error");
          console.log(err);
        });
    },
    confirm() {
      confirmSignup("takyoshi", this.code)
        .then((data) => {
          alert("success confirm sign up");
          console.log(data);
        })
        .catch((err) => {
          alert("confirm sign up error");
          console.log(err);
        });
    },
    linkClicked() {
      this.$router.push("/signin");
    }
  }
  // computed: {
  //   status() {
  //     return this.$store.getters.loginCheck;
  //   }
  // },
  // //computedとwatchでstoreのstateを監視する
  // watch: {
  //   // status(newValue, oldValue) {
  //   //   //alert(oldValue);
  //   //   //alert(newValue);
  //   // }
  //   status() {
  //     this.$router.push("/");
  //   }
  // }
};
</script>

<style>
#return_sign_in {
  margin-top: 20px;
}
</style>
