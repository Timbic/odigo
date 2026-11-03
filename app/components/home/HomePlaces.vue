<template>
	<section class="places wrapper">
		<div class="header">
			<div class="heading">
				<h2 class="title">Get inspired for your next trip</h2>
				<Icon
					name="odigo:title-line"
					class="line"
					aria-hidden="true"
				/>
			</div>
			<div>
				<a
					href="#"
					class="link-text"
					>view all</a
				>
				<Icon
					name="odigo:benefitsArrow-icon"
					class="link-arrow"
					aria-hidden="true"
				/>
			</div>
		</div>
		<div>
			<div class="images">
				<figure class="image size-lg">
					<img
						src="~/assets/img/places-image1.jpg"
						alt="Mount Fuji"
						class="pic-lg"
					/>
					<figcaption class="image-title">Mount Fuji</figcaption>
					<a
						href="#"
						class="image-link"
					></a>
				</figure>
				<figure class="image size-lg">
					<img
						src="~/assets/img/places-image2.jpg"
						alt="Kyoto"
						class="pic-lg"
					/>
					<figcaption class="image-title">Kyoto</figcaption>
					<a
						href="#"
						class="image-link"
					></a>
				</figure>
				<figure class="image size-sm">
					<img
						src="~/assets/img/places-image3.jpg"
						alt="Tokyo"
						class="pic-sm"
					/>
					<a
						href="#"
						class="image-link"
					></a>
				</figure>
				<figure class="image size-sm">
					<img
						src="~/assets/img/places-image4.jpg"
						alt="Niigata"
						class="pic-sm"
					/>
					<a
						href="#"
						class="image-link"
					></a>
				</figure>
				<figure class="image size-sm">
					<img
						src="~/assets/img/places-image5.jpg"
						alt="Sapporo"
						class="pic-sm"
					/>
					<a
						href="#"
						class="image-link"
					></a>
				</figure>
			</div>
		</div>
	</section>
</template>

<style scoped>
.wrapper {
	max-width: 78.875rem;
	margin: 0 auto;
	padding: 0 0.9375rem;
}

/* Link styles start */

.link-text {
	color: var(--color-blue);
	text-transform: uppercase;
	font-size: 1rem;
	line-height: 1.5rem;
	margin-right: 1.625rem;
	text-decoration: none;
}

.link-text:hover,
.link-text:focus,
.link-text:active {
	color: var(--color-blue-darker);
}

.link-arrow {
	display: inline-block;
	width: 2.0625rem;
	height: 0.5rem;
	color: var(--color-blue);
	vertical-align: baseline;
}

/* Link styles end */

/*Title styles start */

.title {
	font-size: 2.1875rem;
	line-height: 2.625rem;
	text-align: left;
	color: var(--color-navy);
	font-weight: 500;
}

/* Title styles end */

/*Places styles start */

.places {
	margin-bottom: 8.1875rem;
}

.header {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 2.25rem;
}
.heading {
	margin-right: 1.25rem;
}

.line {
	display: inline-block;
	width: 15.9375rem;
	height: 0.1875rem;
	color: var(--color-blue);
	vertical-align: baseline;
}

.images {
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-gap: 0.625rem;
}

.image {
	position: relative;
	overflow: hidden;
}

.image::after {
	display: block;
	content: "";
	width: 100%;
	height: 100%;
	opacity: 0.4;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
}

.image:hover .pic-lg,
.image:hover .image-title,
.image:hover .pic-sm {
	transform: scale(1.05);
}

.image-title {
	position: absolute;
	color: var(--color-white);
	font-size: 3.125rem;
	line-height: 3.75rem;
	left: 1.8125rem;
	bottom: 1.6875rem;
	z-index: 3;
	font-weight: 700;
	transition: 0.15s all;
}

.size-lg {
	grid-column: span 3;
}

.size-sm {
	grid-column: span 2;
}

.pic-lg {
	height: 100%;
	width: 100%;
	object-fit: cover;
	transition: 0.15s all;
}

.pic-sm {
	max-width: 25.9375rem;
	max-height: 17.6875rem;
	object-fit: cover;
	transition: 0.15s all;
}

.image-link {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 4;
	width: 100%;
	height: 100%;
}

/* Places styles end */

@media screen and (max-width: 57.5rem) {
	.places {
		margin-bottom: 2.5rem;
	}

	.image {
		object-fit: initial;
		height: 21.875rem;
	}
	.pic-sm {
		transform: translateY(-25%);
	}

	.size-lg {
		grid-column: span 6;
	}

	.size-sm {
		grid-column: span 6;
	}

	.pic-sm {
		grid-column: span 6;
		width: 100%;
		max-width: none;
		max-height: none;
	}
}
</style>
