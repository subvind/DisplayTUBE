<script lang="ts">
  import Header from "$lib/header.svelte"
  import Footer from "$lib/footer.svelte"
</script>

<div class="container">
  <Header />
  <a href="/" target="_self"><button class="back">MAIN CHANNEL</button></a>
  <br />
  <br />
  An infinite loop starts from the playlist publish date up until now and into the future. 
  It consists of a group of videos that repeat over and over and over again. 
  There is a mathmatically algorithum to sync each persons browser together by queueing them up and dispatching them to the next song in the playlist all at the right time.
  Such that they are synced up live with everyone else already tuned in.
  Everyone experiences the same broadcast in a livestream like fasion because after sync the videos start playing one after another.
  Then as an added bonus a shoutbox is turned on for any additional needed commentary.
  <Footer />
</div>

<style>
  .container {
    width: 900px;
    margin: 0 auto;
    background: #111;
    padding: 1em;
    color: #ccc;
  }
  .back {
    padding: 0.5em;
    cursor: pointer;
    background: #555;
    border: none;
  }
</style>