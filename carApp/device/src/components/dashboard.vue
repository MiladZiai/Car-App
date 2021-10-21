<template class="template">
    <view class="container">

        <view class="logo-container">
            <view class="">
                <image :source="require('../../assets/symbol.png')" class="logo"/>
            </view>
        </view>

        <view class="image-container">
            <view class="">
                <image :source="require('../../assets/car.png')" class="car-image" />
            </view>
        </view>

        <view class="km-container">
            <image :source="require('../../assets/cp.png')" class="km"/>
        </view>

        <view class="button-container">
            <view class="button-view">
                <touchable-opacity class="button">
                    <text class="text">Engine</text>
                    <text v-if="isTurnedOn" class="text-children">On.</text>
                    <text v-else class="text-children">Off.</text>
                    <text class="dash">_______</text>
                </touchable-opacity>

                <touchable-opacity class="button">
                    <text class="text">Doors</text>
                    <text v-if="isLocked" class="text-children">Locked.</text>
                    <text v-else class="text-children">Unlocked.</text>
                    <text class="dash">_______</text>
                </touchable-opacity>
            </view>
        </view>

    </view>

</template>

<script>
import { addListener, updateStatus } from '../firebaseFunctions/firebaseFunctions'

export default {
  data: function() {
    return {
      isLocked: Boolean,
      isTurnedOn: Boolean
    } 
  },
  async mounted() {
    await addListener((data) => {
        this.isLocked = data.isLocked,
        this.isTurnedOn = data.isTurnedOn
        updateStatus(this.isTurnedOn, this.isLocked)
    }),
    await setInterval(() => {
        updateStatus(this.isTurnedOn, this.isLocked)
    }, 60 * 1000)
  },
}

</script>

<style scoped>
.container {
  background-color: #010610;
  width: 100%;
  height: 100%;
}
.km-container {
  justify-content: center;
  align-items: center;
  flex: 1;
}
.km {
  width: 380px;
}
.button-container {
  background-color: #010610;
  justify-content: flex-end;
  flex: 1;
  margin-bottom: 40px;
}
.button-view {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.button {
  height: 180px;
  background-color: #0E131D;
  width: 180px;
  margin: 10px;
  border-radius: 8px;
}
.text {
  margin-top: 20px;
  margin-left: 20px;
  font-size: 32px;
  color: #fff;
  flex-direction: row;
  flex-wrap: wrap;
}
.text-children{
  font-size: 32px;
  color: #fff;
  margin-left: 20px;
}
.car-image {
  margin-top: 15px;
  margin-left: auto; 
  margin-right: -1;
  justify-content: center;
}
.logo-container {
  margin-left: 20px;
  margin-top: 90px
}
.dash{
  margin-left: 20px;
  color: #fff;
}
.cheat {
  color: #0E131D;
}
</style>
