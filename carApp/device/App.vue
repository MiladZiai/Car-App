<template>
  <view class="container">
    <dashboard>
      
    </dashboard>
  </view>
</template>

<script>
import * as firebase from 'firebase'
import dashboard from './src/components/dashboard.vue'
import { addListener } from './src/firebaseFunctions/firebaseFunctions'

const firebaseConfig = {
  apiKey: "AIzaSyA8AUlivzB48qaogwRqMwJq1Ui8Z9zPfjM",
  authDomain: "carapp-93187.firebaseapp.com",
  projectId: "carapp-93187",
  storageBucket: "carapp-93187.appspot.com",
  messagingSenderId: "211060880010",
  appId: "1:211060880010:web:fc388a9957aeebf2967373",
  measurementId: "G-F5N6TPLSBH"
};

if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

export default {
  components: { dashboard },
}
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>