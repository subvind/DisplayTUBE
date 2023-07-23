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
    {#if channel}
      <img src={channel.snippet.thumbnails.medium.url} alt="" class="avatar">
      <a href={`https://youtube.com/${channel.snippet.customUrl}`} target="_blank"><button class="navigation">SUBSCRIBE</button></a>
      <a href="/live-now"><button class="navigation">LIVE NOW</button></a>

      <h1>{channel.snippet.title}</h1>
      <p>
        Views: <strong>{channel.statistics.viewCount}</strong> •
        Subscribers: <strong>{channel.statistics.subscriberCount}</strong> • 
        Videos: <strong>{channel.statistics.videoCount}</strong>
      </p>
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
    padding-bottom: 0;
    color: #ccc;
    position: relative;
    border: 3px solid #333;
    border-bottom: 0px;
    overflow: hidden;
  }

  h1 {
    margin: 0;
  }

  p {
    margin: 0.5em 0;
    color: #888;
  }

  .avatar {
    float: left;
    width: 150px;
    border: 3px solid #333;
    border-radius: 10em;
    margin-right: 1em;
    margin-bottom: 1em;
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

  .navigation {
    float: right;
    padding: 0.75em;
    cursor: pointer;
    margin-left: 0.5em;
  }
</style>