<script lang="ts">
  import { onMount } from "svelte";

  import { HeaderTUBE } from "subvind-components"
  import Footer from "$lib/footer.svelte";

	let organization: any;
	let tubeHostname: any = '';

  onMount(async () => {

    tubeHostname = window.location.hostname
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

{#if organization}
  <HeaderTUBE organization={organization} />
{:else}
  <nav class="grey darken-3">
    <div class="nav-wrapper">
    </div>
  </nav>
{/if}

<slot />

<Footer />
