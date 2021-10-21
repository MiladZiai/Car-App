<template>
  <view class="container">

    <view class="km-container">
      <image class="km" :source="require('../../assets/128.png')"/> 
    </view>

    <view class="car-container">
      <image class="car" :source="require('../../assets/car.png')"/> 
    </view>

    <view class="image-container">
      <image class="image" :source="require('../../assets/Frame.png')"/> 
    </view>

    <view class="button-container">
      <view class="button-view">
          <touchable-opacity v-bind:style="{ backgroundColor: isTurnedOn ? '#C8C8A9' : '#fff' }" :on-press="turnOn" class="button">
              <text class="text">Turn On</text>
              <image class="lock" :source="require('../../assets/power.png')">
          </touchable-opacity>

          <touchable-opacity v-bind:style="{ backgroundColor: isTurnedOn ? '#fff' : '#C8C8A9' }" :on-press="turnOff" class="button">
              <text class="text">Turn Off</text>
              <image class="lock" :source="require('../../assets/power.png')">
          </touchable-opacity>

          <touchable-opacity v-bind:style="{ backgroundColor: isLocked ? '#C8C8A9' : '#fff' }" :on-press="lock" class="button">
              <text class="text">Lock</text>
              <image class="lock" :source="require('../../assets/lock.png')">
          </touchable-opacity>
          
          <touchable-opacity v-bind:style="{ backgroundColor: isLocked ? '#fff' : '#C8C8A9' }" :on-press="unlock" class="button">
              <text class="text">Unlock</text>
              <image class="lock" :source="require('../../assets/unlock.png')">
          </touchable-opacity>
      </view>
    </view>
  </view>
</template>

<script>
import { turnOn, turnOff, lock, unlock, addListener } from '../firebaseFunctions/firebaseFunctions'

export default {
  data: function() {
    return {
      isLocked: Boolean,
      isTurnedOn: Boolean
    } 
  },
  methods: {
      turnOn: async function() {
        await turnOn(true)
      },
      turnOff: async function() {
        await turnOff(false)
      },
      lock: async function() {
        await lock(true)
      },
      unlock: async function() {
        await unlock(false)
      }
  },
  async mounted() {
    await addListener((data) => {
      this.isLocked = data.isLocked,
      this.isTurnedOn = data.isTurnedOn
    })
  }
}

</script>

<style scoped>
.container {
  background-color: #E7E7E7;
}
.button-container {
  background-color: #E7E7E7;
  justify-content: flex-end;
  flex: 1;
  margin-bottom: 10px;
}
.km-container {
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: auto;
}
.car-container {
  z-index: 1;
  justify-content: center;
  margin-left: 40px;
  position: absolute;
  margin-top: 85px;
}
.image-container {
  justify-content: center;
  align-items: center;
  z-index: -1;
  margin-top: 100px;
}
.button-view {
  flex-direction: row;
  background-color: #E7E7E7;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.button {
  height: 180px;
  background-color: #fff;
  width: 180px;
  margin: 10px;
  border-radius: 8px;
}
.text {
  margin: 15px;
  font-size: 30px;
}
.lock {
  margin-left: 6px;
  margin-top: 30px;
  width: 60px;
  height: 60px;
}
</style>
