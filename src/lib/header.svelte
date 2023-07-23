<script lang="ts">
  import { onMount } from "svelte";

  let channel: any = null
  onMount(() => {
    fetch(`/data/profile.json`)
      .then(response => response.json())
      .then(results => {
        console.log(`profile.json`, results)
        channel = results
      }).catch(error => {
        console.log(error);
        return [];
      });
  })
</script>

  <div class="banner">
    {#if channel}
      <img src={channel.brandingSettings.image.bannerExternalUrl} alt="">
    {/if}
  </div>
  <div class="container">
    <a href="/live-now"><button class="live-now">LIVE NOW</button></a>

    {#if channel}
      <h1>{channel.snippet.title}</h1>
      <p>
        {channel.brandingSettings.channel.description}
      </p>
    {/if}
  </div>


<style>
  .container {
    width: 900px;
    margin: 0 auto;
    background: #111;
    padding: 1em;
    color: #ccc;
    position: relative;
    border: 3px solid #333;
    border-bottom: 0px;
  }
  h1 {
    margin: 0;
  }

  p {
    color: #888;
  }

  .banner {
    width: 100%;
    height: 400px;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin-bottom: -15em;
  }

  .banner img {
    width: 100%;
  }

  .live-now {
    float: right;
    padding: 0.75em;
    cursor: pointer;
  }
</style>