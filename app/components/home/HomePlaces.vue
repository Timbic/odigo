<template>
	<section class="places wrapper-2">
		<div class="places__header">
			<div class="places__title title">
				<h2 class="places__title-style title-style">Get inspired for your next trip</h2>
				<Icon
					name="odigo:title-line"
					class="places__line title-line"
					aria-hidden="true"
				/>
			</div>
			<div class="places__link link">
				<a
					href="#"
					class="places__view link-text"
					>view all</a
				>
				<Icon
					name="odigo:benefitsArrow-icon"
					class="places__arrow link-arrow"
					aria-hidden="true"
				/>
			</div>
		</div>
		<div class="places__body">
			<div class="places__images">
				<figure class="places__image places-image_size_lg">
					<img
						src="~/assets/img/places-image1.jpg"
						alt="Mount Fuji"
						class="places__image-pic-lg"
					/>
					<figcaption class="places__image-title">Mount Fuji</figcaption>
					<a
						href="#"
						class="places__image-link"
					></a>
				</figure>
				<figure class="places__image places-image_size_lg">
					<img
						src="~/assets/img/places-image2.jpg"
						alt="Kyoto"
						class="places__image-pic-lg"
					/>
					<figcaption class="places__image-title">Kyoto</figcaption>
					<a
						href="#"
						class="places__image-link"
					></a>
				</figure>
				<figure class="places__image places-image_size_sml">
					<img
						src="~/assets/img/places-image3.jpg"
						alt="Tokyo"
						class="places__image-pic-sml"
					/>
					<a
						href="#"
						class="places__image-link"
					></a>
				</figure>
				<figure class="places__image places-image_size_sml">
					<img
						src="~/assets/img/places-image4.jpg"
						alt="Niigata"
						class="places__image-pic-sml"
					/>
					<a
						href="#"
						class="places__image-link"
					></a>
				</figure>
				<figure class="places__image places-image_size_sml">
					<img
						src="~/assets/img/places-image5.jpg"
						alt="Sapporo"
						class="places__image-pic-sml"
					/>
					<a
						href="#"
						class="places__image-link"
					></a>
				</figure>
			</div>
		</div>
	</section>
</template>

<style scoped>
.wrapper-2 {
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

.title-style {
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

.places__header {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 2.25rem;
}
.places__title {
	margin-right: 1.25rem;
}

.places__line {
	display: inline-block;
	width: 15.9375rem;
	height: 0.1875rem;
	color: var(--color-blue);
	vertical-align: baseline;
}

.places__images {
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-gap: 0.625rem;
}

.places__image {
	position: relative;
	overflow: hidden;
}

.places__image::after {
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

.places__image:hover .places__image-pic-lg,
.places__image:hover .places__image-title,
.places__image:hover .places__image-pic-sml {
	transform: scale(1.05);
}

.places__image-title {
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

.places-image_size_lg {
	grid-column: span 3;
}

.places-image_size_sml {
	grid-column: span 2;
}

.places__image-pic-lg {
	height: 100%;
	width: 100%;
	object-fit: cover;
	transition: 0.15s all;
}

.places__image-pic-sml {
	max-width: 25.9375rem;
	max-height: 17.6875rem;
	object-fit: cover;
	transition: 0.15s all;
}

.places__image-link {
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

	.places__image {
		object-fit: initial;
		height: 21.875rem;
	}
	.places__image-pic-sml {
		transform: translateY(-25%);
	}

	.places-image_size_lg {
		grid-column: span 6;
	}

	.places-image_size_sml {
		grid-column: span 6;
	}

	.places__image-pic-sml {
		grid-column: span 6;
		width: 100%;
		max-width: none;
		max-height: none;
	}
}
</style>
