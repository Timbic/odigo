<template>
	<section class="intro">
		<div class="wrapper">
			<h1 class="intro__title">Discover Amazing places in Japan</h1>
			<p class="intro__article">
				Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i
				could pee on this if i had the energy but under the bed, for attack the child, open the door,
			</p>
			<form class="search-form">
				<fieldset class="search-form__wrapper">
					<p class="search-form__info">
						<span class="search-form__field-wrap">
							<Icon
								name="odigo:circle-icon"
								class="search-form__icon"
								aria-hidden="true"
							/>
							<input
								type="text"
								class="search-form__field"
								placeholder="What would you like to do?"
								name="user-like-to-do"
							/>
						</span>
						<span class="search-form__field-wrap">
							<Icon
								name="odigo:circle-icon"
								class="search-form__icon"
								aria-hidden="true"
							/>
							<input
								type="text"
								class="search-form__field"
								placeholder="Where would you like to go?"
								name="user-like-to-go"
							/>
						</span>
						<button
							type="submit"
							class="search-form__submit"
						>
							search
						</button>
					</p>
				</fieldset>
			</form>
		</div>
	</section>
</template>

<style scoped>
.wrapper {
	max-width: 66.25rem;
	margin: 0 auto;
	padding: 0 0.9375rem;
}

/* Intro styles start */

.intro {
	min-height: 100vh;
	background: url("~/assets/img/intro-bg.jpg") no-repeat center;
	background-size: cover;
	padding-top: 16.4375rem;
	padding-bottom: 17.0625rem;
}

.intro__title {
	color: var(--color-white);
	font-size: 3.125rem;
	line-height: 3.75rem;
	margin-bottom: 1.375rem;
	max-width: 38.6875rem;
	font-weight: 400;
}

.intro__article {
	color: var(--color-white);
	margin-bottom: 3.6875rem;
	max-width: 34.125rem;
	font-size: 1rem;
	line-height: 1.5rem;
	font-weight: 300;
	word-spacing: 0.0625rem;
}

.search-form__wrapper {
	border: none;
}

.search-form__info {
	display: flex;
	flex-wrap: wrap;
}

.search-form__field-wrap {
	display: block;
	position: relative;
	margin-right: 3.75rem;
}

.search-form__field {
	display: block;
	width: 18.5625rem;
	background: transparent;
	border: 0;
	border-bottom: 0.125rem solid var(--color-gray);
	padding-left: 2.6875rem;
	padding-bottom: 1.375rem;
	font-size: 1.125rem;
	line-height: 1.5rem;
	color: var(--color-white);
	font-weight: 500;
}

.search-form__icon {
	position: absolute;
	top: 0.375rem;
	left: 0.375rem;
	width: 1.25rem;
	height: 1.25rem;
	color: var(--color-white);
	pointer-events: none;
}

.search-form__field::placeholder {
	font-size: 1.125rem;
	line-height: 1.5rem;
	color: var(--color-white);
	font-weight: 500;
}

.search-form__submit {
	max-width: 10.6875rem;
	background-color: var(--color-blue-light);
	color: var(--color-white);
	font-size: 1.5rem;
	line-height: 1.8rem;
	text-transform: uppercase;
	padding: 0.9375rem 2.5rem;
	border: none;
}

.search-form__submit:hover,
.search-form__submit:focus,
.search-form__submit:active {
	background-color: var(--color-blue-dark);
}
/* Intro styles end */

@media screen and (max-width: 57.5rem) {
	.search-form__field-wrap {
		margin-bottom: 1.5625rem;
	}
}
</style>
