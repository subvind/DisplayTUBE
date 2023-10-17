<script lang="ts">
  import { onMount } from 'svelte';

	export let organization: any;

	let playlists: any;
  let channel: any = null;

	onMount(async () => {
    await fetch(`/data/profile.json`)
      .then(response => response.json())
      .then(results => {
        console.log(`profile.json`, results)
        channel = results
      }).catch(error => {
        console.log(error);
        return [];
      });

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

		let tubeHostname = window.location.hostname
		if (tubeHostname === 'localhost') {
			tubeHostname = 'videos.subvind.com'
		}
		// TODO: playlists
    // const response = await fetch(`https://api.subvind.com/playlists/tubeHostname/${tubeHostname}`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // });

    // if (response.ok) {
    //   playlists = await response.json();
    // } else {
		// 	const errorData = await response.json();
    //   alert(errorData.error);
    // }

		setTimeout(() => {
			let elems1 = document.querySelectorAll('.tabs')
			var instance = M.Tabs.init(elems1, {});
	
			var elems2 = document.querySelectorAll('.collapsible');
			var instances = M.Collapsible.init(elems2, {});

			var elems3 = document.querySelectorAll('.dropdown-trigger');
			var instances = M.Dropdown.init(elems3, {
				constrainWidth: false,
			});
		}, 0)
	})
</script>

<header>
	<nav class="grey darken-3">
		<div class="nav-wrapper">
			<ul id="slide-out" class="sidenav">
				<nav class="grey darken-3" style="max-height: 64px;">
					<div class="nav-wrapper">
						{#if organization}
							<a href="/" target="_self" class="brand-logo" style="width: 100%; text-align: center;">{organization.shortName || 'STOREFRONT'}</a>
						{/if}
					</div>
				</nav>
				{#if organization}
					<div class="describe">
						{organization.description}
					</div>
				{/if}
				
				<li><div class="divider"></div></li>
				<li><a class="subheader">Playlists</a></li>
				<li class="black-text">
					<ul class="collapsible">
						{#if playlists}
							{#each playlists.data as playlist}
								{#if !playlist.parentPlaylist}
									<li>
										<div class="collapsible-header">{playlist.name}</div>
										<div class="collapsible-body">
											{#if playlist.subCategories}
												{#each playlist.subCategories as subPlaylist}
													<li><a class="waves-effect" href={`/playlists/${subPlaylist.slug}`} target="_self"><i class="material-icons">subdirectory_arrow_right</i>{subPlaylist.name}</a></li>
												{/each}
											{/if}
										</div>
									</li>
								{/if}
							{/each}
						{/if}
					</ul>
				</li>			
				
				<li><div class="divider"></div></li>
				<li><a class="subheader">Menu</a></li>
				{#if organization.homepageLink}
					<li><a href={organization.homepageLink || '/'} target="_self" class="waves-effect" ><i class="material-icons">home</i>Homepage</a></li>
				{/if}
				{#if organization.isErpModule}
					{#if organization.erpHostname}
						<li><a href={`https://${organization.erpHostname}`} target="_self" class="waves-effect"><i class="material-icons">local_grocery_store</i>Store</a></li>
					{:else}
						<li><a href={`https://${organization.orgname}.erpnomy.com`} target="_self" class="waves-effect"><i class="material-icons">local_grocery_store</i>Store</a></li>
					{/if}
				{/if}
				{#if organization.isTubeModule}
					{#if organization.tubeHostname}
						<li><a href={`https://${organization.tubeHostname}/playlists`} target="_self" class="waves-effect"><i class="material-icons">videocam</i>Videos</a></li>
					{:else}
						<li><a href={`https://${organization.orgname}.tubenomy.com/playlists`} target="_self" class="waves-effect"><i class="material-icons">videocam</i>Videos</a></li>
					{/if}
				{/if}
				{#if organization.isDeskModule}
					{#if organization.deskHostname}
						<li><a href={`https://${organization.deskHostname}`} target="_self" class="waves-effect"><i class="material-icons">verified_user</i>Client Area</a></li>
					{:else}
						<li><a href={`https://${organization.orgname}.desknomy.com`} target="_self" class="waves-effect"><i class="material-icons">verified_user</i>Client Area</a></li>
					{/if}
				{/if}
				{#if organization.contactCenterEmail}
					<li><a href="/contact-center" target="_self" class="waves-effect"><i class="material-icons">local_phone</i>Contact Center</a></li>
				{/if}
				
				<li><div class="divider"></div></li>
				<li><a class="subheader">Extra</a></li>
				<li><a class="waves-effect" href="/privacy-policy" target="_self">Privacy Policy</a></li>
				<li><a class="waves-effect" href="/terms-and-conditions" target="_self">Terms & Conditions</a></li>
			</ul>
			{#if organization}
				<a href="#" data-target="slide-out" class="brand-logo sidenav-trigger left"><i class="material-icons">menu</i>{organization.displayName}</a>
			{/if}

			<ul id="nav-mobile" class="right">
				<!-- Dropdown Trigger -->
				<li>
					<div class="logo">
						{#if organization}
							{#if organization.orgPhoto}
								<img src={`https://s3.us-east-2.amazonaws.com/${organization.orgname}.${organization.orgPhoto.bucket.name}/${organization.orgPhoto.filename}`} alt="logo" class="dropdown-trigger" data-target='dropdown1'>
							{:else}
								<img src="/logo.jpg" alt="logo" class="dropdown-trigger" data-target='dropdown1'>
							{/if}
						{/if}
					</div>
				</li>

				<!-- Dropdown Structure -->
				<ul id='dropdown1' class='dropdown-content'>
					{#if organization}
						{#if organization.ebayUser}
							<li><a href={`https://www.ebay.com/usr/${organization.ebayUser}`} target="_blank">ebay.com/usr/{organization.ebayUser}</a></li>
						{/if}
						{#if organization.etsyShop}
							<li><a href={`https://www.etsy.com/shop/${organization.etsyShop}`} target="_blank">etsy.com/shop/{organization.etsyShop}</a></li>
						{/if}
						{#if organization.youtubeChannel}
							<li><a href={`https://www.youtube.com/${organization.youtubeChannel}`} target="_blank">youtube.com/{organization.youtubeChannel}</a></li>
						{/if}
					{/if}
				</ul>
			</ul>
		</div>
	</nav>
</header>

<div class="banner">
	{#if channel}
		<img src={channel.brandingSettings.image.bannerExternalUrl} alt="">
	{/if}
</div>
<div class="container">
	{#if channel}
		<div class="row">
			<div class="col s12">
				<a href="/"><img src={channel.snippet.thumbnails.medium.url} alt="" class="avatar"></a>
				<div class="hide-on-med-and-down">
					<a href={`https://youtube.com/${channel.snippet.customUrl}`} target="_blank"><button class="btn right red lighten-2">SUBSCRIBE</button></a>
					<a href="/channel-guide"><button class="btn white black-text right" style="margin-right: 0.5em">CHANNEL GUIDE</button></a>
				</div>
		
				<h4>{channel.snippet.title}</h4>
				<p>
					Views: <strong>{channel.statistics.viewCount}</strong> •
					Subscribers: <strong>{channel.statistics.subscriberCount}</strong> • 
					Videos: <strong>{channel.statistics.videoCount}</strong>
				</p>
				<p>
					{channel.brandingSettings.channel.description}
				</p>
			</div>
		</div>
		<div class="row hide-on-large-only">
			<div class="col s6">
				<a href={`https://youtube.com/${channel.snippet.customUrl}`} target="_blank"><button class="btn red lighten-2" style="width: 100%;">SUBSCRIBE</button></a>
			</div>
			<div class="col s6">
				<a href="/channel-guide"><button class="btn white black-text" style="width: 100%">CHANNEL GUIDE</button></a>
			</div>
		</div>
	{/if}
</div>

<style>
	.logo {
		max-height: 3.2em;
		width: 3.2em;
		margin: 0.5em 0.5em 0;
		border-radius: 10em;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
	}

	.logo img {
    width: auto;
    max-width: 100%;
    object-fit: contain;
	}

	nav .sidenav-trigger {
		display: initial !important;
	}
	
	.describe {
    margin: 0px 0.5em;
    color: rgb(17, 17, 17);
    line-height: 2em;
    text-align: center;
	}

	.collapsible-header {
		height: 3.2em;
		padding: 0 32px;
	}

	.container {
		margin: 0 auto;
		background: #333;
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
	}

	.banner {
		width: 100%;
		height: 400px;
		min-width: 938px;
		overflow: hidden;
		display: flex;
		align-items: center;
		margin-bottom: -6em;
		border-bottom: 3px solid #333;
	}

	.banner img {
		width: 100%;
	}
</style>
