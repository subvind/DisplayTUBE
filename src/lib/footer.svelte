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

<div class="container">
  <hr>
  <br />
  <span style="float: right;">{date.toLocaleString('en-IN', options)}</span>
  subvind.com © {new Date().getFullYear()}.
  <br />
  <br />
</div>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

<style>
  .container {
    width: 900px;
    margin: 0 auto;
    background: #111;
    padding: 1em;
    color: #ccc;
    position: relative;
    border: 3px solid #333;
    border-top: 0px;
  }

  hr {
    border: 1px solid #333;
  }
</style>