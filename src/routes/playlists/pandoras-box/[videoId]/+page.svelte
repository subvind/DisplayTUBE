<script lang="ts">

  /** @type {import('./$types').PageData} */
  export let data;

  console.log('data.videoId', data.videoId)
</script>

<h1>RRABBIT</h1>
<p>RRABBIT was a DJ/Performer/Artist at underground raves in 1998-early 2000’s. Known for playing controversial/complicated music.</p>

<iframe 
  width="560" 
  height="315" 
  src={`https://www.youtube.com/embed/${data.videoId}`} 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
>
</iframe>

<br />
<br />
<a href="/playlists/pandoras-box">PANDORAS BOX</a>