<template>
	<!-- TOURS SECTION -->

	<section class="tours wrapper">
		<!-- PREFECTURE PART -->

		<div class="prefecture">
			<div class="prefecture-image">
				<img
					src="~/assets/img/tours-image1.jpg"
					alt="Prefecture in Focus: Tottori"
					class="prefecture-pic"
				/>
				<a
					href="#"
					class="image-link"
				></a>
			</div>
			<div class="prefecture-body">
				<h2 class="prefecture-title">Prefecture in Focus: Tottori</h2>
				<p class="prefecture-desc">
					Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side
					up i could pee on this if i had the energy but under the bed, for attack the child, open the door,
				</p>
				<div>
					<a
						href="#"
						class="link-text"
						>view prefecture</a
					>
					<Icon
						name="odigo:benefitsArrow-icon"
						class="link-arrow"
						aria-hidden="true"
					/>
				</div>
			</div>
		</div>

		<!-- NEIGHBORHOOD PART -->

		<div class="neighborhood">
			<div class="neighborhood-body">
				<h2 class="neighborhood-title">Featured Neighborhood: Kyoto’s Arashiyama</h2>
				<p class="neighborhood-desc">
					Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side
					up i could pee on this if i had the energy but under the bed, for attack the child, open the door,
				</p>
				<div>
					<a
						href="#"
						class="link-text"
						>view neighborhood</a
					>
					<Icon
						name="odigo:benefitsArrow-icon"
						class="link-arrow"
						aria-hidden="true"
					/>
				</div>
			</div>
			<div class="neighborhood-image">
				<img
					src="~/assets/img/tours-image2.jpg"
					alt="Featured Neighborhood: Kyoto’s Arashiyama"
					class="neighborhood-pic"
				/>
				<a
					href="#"
					class="image-link"
				></a>
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

/* Tours styles start */

.tours {
	max-width: 79.4375rem;
	max-height: 49.0625rem;
	margin-bottom: 8.6875rem;
}

.prefecture-pic {
	transition: 0.15s all;
}

.neighborhood-pic {
	transition: 0.15s all;
}

.prefecture-image:hover .prefecture-pic,
.neighborhood-image:hover .neighborhood-pic {
	transform: scale(1.05);
}

.image-link {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 4;
	width: 100%;
	height: 100%;
}

.prefecture {
	display: flex;
	flex-wrap: nowrap;
	max-height: 22.125rem;
	margin-bottom: 4.8125rem;
}

.prefecture-image {
	display: block;
	z-index: 3;
	position: relative;
	max-width: 37.3125rem;
	margin-right: 6.75rem;
	overflow: hidden;
}

.prefecture-body {
	display: block;
	color: var(--color-navy);
}

.prefecture-title {
	margin-top: 1.625rem;
	font-size: 1.875rem;
	line-height: 2.5rem;
	margin-bottom: 5.3125rem;
	font-weight: 700;
}

.prefecture-desc {
	max-width: 32.5rem;
	font-size: 1rem;
	line-height: 1.5rem;
	margin-bottom: 3.625rem;
}

.neighborhood {
	display: flex;
	flex-wrap: nowrap;
	max-height: 22.125rem;
}

.neighborhood-image {
	z-index: 3;
	display: block;
	position: relative;
	max-width: 37.3125rem;
	overflow: hidden;
}

.neighborhood-body {
	display: block;
	color: var(--color-navy);
	margin-left: 2.9375rem;
	margin-right: 6.6875rem;
	max-width: 32.5rem;
}

.neighborhood-title {
	margin-top: 1.625rem;
	font-size: 1.875rem;
	line-height: 2.5rem;
	margin-bottom: 2.8125rem;
	font-weight: 700;
}

.neighborhood-desc {
	max-width: 32.5rem;
	font-size: 1rem;
	line-height: 1.5rem;
	margin-bottom: 5.875rem;
}

/* Tours styles end */

@media screen and (max-width: 57.5rem) {
	.tours {
		margin-bottom: 2.5rem;
	}

	.prefecture {
		margin-bottom: 1.875rem;
	}

	.prefecture-image {
		margin-right: 2.5rem;
	}

	.prefecture-pic {
		transform: translateY(20%);
	}

	.prefecture-title {
		margin-bottom: 1.25rem;
	}

	.prefecture-desc {
		margin-bottom: 1.25rem;
	}

	.neighborhood-body {
		margin-left: 1.25rem;
		margin-right: 2.5rem;
	}

	.neighborhood-title {
		margin-bottom: 1.25rem;
	}

	.neighborhood-desc {
		margin-bottom: 1.25rem;
	}

	.neighborhood-pic {
		transform: translateY(20%);
	}
}
</style>
