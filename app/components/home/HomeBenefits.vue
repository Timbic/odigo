<template>
	<section class="benefits">
		<div class="wrap">
			<h2 class="title">Benefits of Odigo</h2>
			<div class="cards">
				<div class="card">
					<div class="logo">
						<Icon
							name="odigo:benefits1-icon"
							mode="svg"
							class="thumb"
							aria-hidden="true"
						/>
					</div>
					<h3 class="card-title">Welcome to Odigo!</h3>
					<p class="card-desc">Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.</p>
					<div>
						<a
							href="#"
							class="link-text"
							>learn more</a
						>
						<Icon
							name="odigo:benefitsArrow-icon"
							class="link-arrow"
							aria-hidden="true"
						/>
					</div>
				</div>
				<div class="card">
					<div class="logo">
						<Icon
							name="odigo:benefits2-icon"
							mode="svg"
							class="thumb"
							aria-hidden="true"
						/>
					</div>
					<h3 class="card-title">Your Personal Japan Guide</h3>
					<p class="card-desc">Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.</p>
					<div>
						<a
							href="#"
							class="link-text"
							>learn more</a
						>
						<Icon
							name="odigo:benefitsArrow-icon"
							class="link-arrow"
							aria-hidden="true"
						/>
					</div>
				</div>
				<div class="card">
					<div class="logo">
						<Icon
							name="odigo:benefits3-icon"
							mode="svg"
							class="thumb"
							aria-hidden="true"
						/>
					</div>
					<h3 class="card-title">Promoting Local Businesses</h3>
					<p class="card-desc">Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.</p>
					<div>
						<a
							href="#"
							class="link-text"
							>learn more</a
						>
						<Icon
							name="odigo:benefitsArrow-icon"
							class="link-arrow"
							aria-hidden="true"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
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

/* Benefits styles start */

.benefits {
	margin-bottom: 8.1875rem;
}

.wrap {
	max-width: 78.875rem;
	max-height: 40.9375rem;
	background-color: var(--color-white);
	padding: 2rem 6.25rem 6.9375rem 6.25rem;
	margin: 0 auto;
	box-shadow: 0px 2px 20px 0px var(--color-shadow);
	position: relative;
}

.title {
	width: 100%;
	font-size: 2.1875rem;
	line-height: 2.625rem;
	color: var(--color-navy);
	font-weight: 500;
	padding: 5.8125rem 6.25rem 5.625rem 6.25rem;
	position: absolute;
	top: 0;
	left: 0;
	transform: translateY(-99%);
	background-color: var(--color-white);
}

.cards {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 3.4375rem;
}

.card {
	grid-column: span 1;
}

.logo {
	margin-bottom: 2.3125rem;
	max-width: 4.125rem;
}

.thumb {
	display: block;
	width: 4.125rem;
	height: 4.125rem;
}

.card-title {
	margin-bottom: 1.625rem;
	font-size: 1.125rem;
	line-height: 1.5rem;
}

.card-desc {
	margin-bottom: 2.4375rem;
	font-size: 1rem;
	line-height: 1.5rem;
}

/* Benefits styles end */

@media screen and (max-width: 57.5rem) {
	.benefits {
		margin-bottom: 3.75rem;
	}

	.wrap {
		box-shadow: none;
		padding: 0 0.9375rem 1.25rem 0.9375rem;
	}

	.cards {
		grid-column-gap: 2.1875rem;
	}

	.title {
		padding: 3.4375rem 0.9375rem 3.4375rem 0.9375rem;
	}
}
</style>
