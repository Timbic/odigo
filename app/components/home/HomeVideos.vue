<template>
	<!-- VIDEOS SECTION -->

	<section class="videos">
		<div class="wrapper">
			<div class="video">
				<iframe
					class="video-element"
					src="https://www.youtube.com/embed/IuTDuvYr7f0?si=SzMYCAjLpfJIon2F"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
			</div>
		</div>
	</section>
</template>

<style scoped>
/* Videos styles start */

.videos {
	width: 100%;
}

.wrapper {
	max-width: 90rem;
	margin: 0 auto;
	position: relative;
}

.video {
	padding-top: 56.25%;
}

.video-element {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

/* Videos styles end */
</style>
