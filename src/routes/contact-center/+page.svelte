<script lang="ts">
	import { onMount } from "svelte";

	let organization: any;

  let name = ''
  let subject = ''
  let email = ''
  let message = ''

  function sendEmail(event: any) {
    event.preventDefault()
    window.open(`mailto:${organization.contactCenterEmail}?to=${organization.contactCenterEmail}&cc=${email}&subject=${name}: ${subject}&body=${message}`);
  }
	
	onMount(async () => {
		let tubeHostname = window.location.hostname
		if (tubeHostname === 'localhost') {
			tubeHostname = 'videos.subvind.com'
		}

    const responseOrg = await fetch(`https://api.subvind.com/organizations/tubeHostname/${tubeHostname}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (responseOrg.ok) {
      organization = await responseOrg.json();
    } else {
      const errorData = await responseOrg.json();
      alert(errorData.error);
    }

		// @ts-ignore
		gtag('event', 'pageview', {
			'organizationId': organization.id
		});

		window['M'].updateTextFields();
	})
</script>

<svelte:head>
	{#if organization}
		<title>Contact Center - {organization.displayName}</title>
	{/if}
	<meta name="description" content="About this app" />
</svelte:head>


<div class="container" style="padding: 0; border: 3px solid #444;">
	<nav class="breadcrumbs lighten-2" style="background: #000; padding: 0 1em;">
		<div class="nav-wrapper">
			<div class="col s12">
				<a href="/" class="breadcrumb">Main Channel</a>
				<a href="/contact-center" class="breadcrumb">Contact Center</a>
			</div>
		</div>
	</nav>
</div>
<div class="container">
	<br />
	<div class="card">
		<div class="card-content">
			<p style="font-size:  1.2em;">
				{#if organization}
					email address: {organization.contactCenterEmail}
				{:else}
					loading...
				{/if}
			</p>
		</div>
		<form>
			<div class="card-action" style="padding: 1em;">
				<div class="row">
					<div class="input-field col s6">
						<input placeholder="John Smith" id="name" type="text" class="validate" bind:value={name}>
						<label for="name">Name</label>
					</div>
					<div class="input-field col s6">
						<input id="email" type="email" class="validate" bind:value={email}>
						<label for="email">Email Address</label>
					</div>
				</div>
				<div class="row">
					<div class="input-field col s12">
						<input placeholder="" id="subject" type="text" class="validate" bind:value={subject}>
						<label for="subject">Subject</label>
					</div>
				</div>
				<div class="row" style="margin-bottom: 0;">
					<div class="input-field col s12" style="margin-bottom: 0;">
						<textarea placeholder="" id="message" class="materialize-textarea" bind:value={message}></textarea>
						<label for="message">Message</label>
					</div>
				</div>
			</div>
			<div class="card-action">
				<a class="btn red lighten-2" href="#" on:click={(e) => sendEmail(e)}>Send Message</a>
			</div>
		</form>
	</div>
</div>

<style>

  .container {
    margin: 0 auto;
    background: #222;
    padding: 1em;
    padding-top: 0;
    color: #ccc;
    position: relative;
    border: 3px solid #333;
    border-top: 0px;
    border-bottom: 0px;
  }
  
  .card {
    background: #000;
  }
</style>
