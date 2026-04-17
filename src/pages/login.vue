<template>
  <v-container
    class="pa-0 d-flex justify-center align-center fill-height flex-column"
    fluid
    style="flex: 1;"
  >
    <v-row class="w-100">
      <v-col
        class="pa-4 d-flex align-center flex-wrap"
        cols="7"
        style="position: relative;"
      >
        <div class="login-bg" />
      </v-col>
      <v-col
        class="login-form d-flex flex-column justify-center align-center"
        cols="5"
      >
        <v-sheet class="w-75">
          <v-img class="w-100" contain max-height="200" src="@/assets/logo.png" />
          <LoginForm />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.login {
  z-index: 2;
}
.login-bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url('@/assets/crafty-form-bg.png');
  background-size: contain;
  background-position: 50% 50%;
  z-index: 1;

  // &:before {
  //   position: absolute;
  //   content: '';
  //   top: 0;
  //   left: 0;
  //   height: 100%;
  //   width: 100%;
  //   background-color: orange;
  //   opacity: 0.8;
  // }
}
.login-form {
  background-color: #fff;
  margin-top: -100px;
}
.login__title {
  color: #fff;
  text-shadow: 1px 1px 2px rgba(51, 51, 51, 1)
}
.login__subtitle {
  color: #fff;
  text-shadow: 1px 1px 2px rgba(51, 51, 51, 1)
}
</style>
