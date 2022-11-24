<template>
   <div class='local' id='local' :style="{width: '300px'}"></div>
</template>

<script lang="ts" setup>
import TRTC from 'trtc-js-sdk';
import { genTestUserSig } from '@/utils/generateTestUserSig';
import { getParamKey } from '@/utils/utils';

const userId = getParamKey('userId');
const { sdkAppId, userSig } = genTestUserSig({ sdkAppId: 0, userId, secretKey: '' });

const Client = TRTC.createClient({
  mode: 'rtc',
  sdkAppId,
  userId,
  userSig,
});
Client.on('stream-added', (event) => {
  const remoteStream = event.stream;
  console.log(`远端流增加: ${remoteStream.getId()}`);
  // 订阅远端流
  Client.subscribe(remoteStream);
});
Client.on('stream-subscribed', (event) => {
  const remoteStream = event.stream;
  console.log(`远端流订阅成功：${remoteStream.getId()}`);
  // 播放远端流
  remoteStream.play(`remote-stream-${remoteStream.getId()}`);
});
Client
  .join({
    roomId: 111,
    role: 'anchor',
  })
  .then(async () => {
    console.log('进房成功');
    const localStream = TRTC.createStream({
      userId,
      audio: true,
      video: true,
      cameraId: (await TRTC.getCameras())[0].deviceId,
      microphoneId: (await TRTC.getMicrophones())[0].deviceId,
    });
    localStream.setVideoProfile('480p');
    await localStream.initialize();
    localStream.play('local');
    await Client.publish(localStream);
  })
  .catch((error) => {
    console.error(`进房失败，请稍后再试${error}`);
  });

</script>

<style lang="stylus">
*
  box-sizing border-box
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, 'Microsoft YaHei', PingFang SC, sans-serif;

body
  margin 0
  padding 0
  width 100%
  height 100%

a
  color #0d6efd
  text-decoration none
</style>
