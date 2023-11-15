<script lang="ts">
  import { onMount } from "svelte";

  import { AuthAccountRegister } from "subvind-components"

	let organization: any;

  onMount(async () => {
    let tubeHostname = window.location.hostname
    if (tubeHostname === 'localhost') {
      tubeHostname = 'videos.subvind.com'
    }
    const response = await fetch(`https://api.subvind.com/organizations/tubeHostname/${tubeHostname}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.ok) {
      organization = await response.json();
    } else {
      const errorData = await response.json();
      alert(errorData.error);
    }
  })
</script>

<br />
<br />
<AuthAccountRegister organization={organization} />

<style>
  :global(body) {
    background: #eee !important;
  }
</style>