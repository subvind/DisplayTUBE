<script>
  let uploads = [
    {
      name: `BASQUIAT`,
      watch: `NJe5LoKuj8c`
    },
    {
      name: `'NEGLIGENT' music by RRABBIT`,
      watch: `CBWXeKD6mzc`
    },
    {
      name: `“Thank You For Using” music by RRABBIT`,
      watch: `FECEzjI8kFs`
    },
    {
      name: `“Muccia” music by RRABBIT`,
      watch: `NJe5LoKuj8c`
    },
    {
      name: `“Wow. That Sounds Like Music” music by RRABBIT`,
      watch: `Ufr7jkKfI08`
    },
    {
      name: `'Light In The Dark' visualizer & song 'Mardi Gras' by RRABBIT`,
      watch: `J2bwENuCEHI`
    },
    {
      name: `“Traverse” music by RRABBIT`,
      watch: `CNXIJ3Od7WU`
    },
    {
      name: `“Oppressive” music by RRABBIT`,
      watch: `rkytbvfQ-AE`
    },
    {
      name: `Untitled Work (Sunset Valley) music by RRABBIT`,
      watch: `9cLlq0PQ-98`
    },
  ]

  let playlists = [
    {
      name: 'PANDORAS BOX',
      ref: 'pandoras-box'
    },
    {
      name: 'MY15MIN',
      ref: 'my15min'
    }
  ]
</script>

<h1>RRABBIT</h1>
<p>RRABBIT was a DJ/Performer/Artist at underground raves in 1998-early 2000’s. Known for playing controversial/complicated music.</p>

<h3>Uploads</h3>
<ul>
  {#each uploads as upload}
    <li>
      <a href={`/uploads/${upload.watch}`}>{upload.name}</a>
    </li>
  {/each}
</ul>

<h3>Created playlists</h3>
<ul>
  {#each playlists as playlist}
    <li>
      <a href={`/playlists/${playlist.ref}`}>{playlist.name}</a>
    </li>
  {/each}
</ul>