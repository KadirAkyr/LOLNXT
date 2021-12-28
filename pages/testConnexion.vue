<template>
  <div>
    <h1>Connection test</h1>
    <button @click="getConnectionSpeed">Test Connexion</button>
  </div>
</template>

<script>
export default {
  methods: {
    async getConnectionSpeed() {
      console.log("Début fonction");

      let startTime, endTime;
      const imageAddr =
        "https://upload.wikimedia.org/wikipedia/commons/a/a6/Brandenburger_Tor_abends.jpg";
      const downloadSize = 2707459; // this must match with the image above
      startTime = new Date().getTime();
      const cacheBuster = "?nnn=" + startTime;

      const download = new Image();
      download.src = imageAddr + cacheBuster;
      // this returns when the image is finished downloading
      await download.decode();
      endTime = new Date().getTime();
      const duration = (endTime - startTime) / 1000;
      const bitsLoaded = downloadSize * 8;
      const speedBps = (bitsLoaded / duration).toFixed(2);
      const speedKbps = (speedBps / 1024).toFixed(2);
      const speedMbps = (speedKbps / 1024).toFixed(2);
      console.log(Math.round(Number(speedMbps)) + " mbps");
      console.log("fin fonction");
      return await Math.round(Number(speedMbps));
    },
  },
};
</script>

<style>
</style>