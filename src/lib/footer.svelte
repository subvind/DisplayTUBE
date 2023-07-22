<script lang="ts">
  // Date object

  let date: any = new Date();
  const options: any = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  
  setInterval(() => {
    date = new Date();
  }, 1000)

</script>

<br />
<hr>
<br />
<span style="float: right;">{date.toLocaleString('en-IN', options)}</span>
rrabbitmusic.com © {new Date().getFullYear()}.
<br />
<br />

<style>
  hr {
    border: 1px solid #333;
  }
</style>