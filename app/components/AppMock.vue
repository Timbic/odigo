<template>
	<header
		class="header"
		ref="header"
	>
		<div class="wrapper">
			<div class="header__wrapper">
				<div class="header__logo">
					<a
						href=""
						class="header__logo-link"
						aria-label="Discover Amazing places in Japan"
					>
						<Icon
							name="odigo:odigo-logo"
							class="header__logo-pic"
							aria-hidden="true"
						/>
					</a>
				</div>

				<nav
					class="header__nav"
					ref="header-nav"
				>
					<ul class="header__list">
						<li class="header__item">
							<a
								href="#"
								class="header__link"
								>Articles</a
							>
						</li>
						<li class="header__item">
							<a
								href="#"
								class="header__link"
								>Locations</a
							>
						</li>
						<li class="header__item">
							<a
								href="#"
								class="header__link"
								>Videos</a
							>
						</li>
						<li class="header__item">
							<a
								href="#"
								class="header__link"
								>Sign in</a
							>
						</li>
					</ul>
					<div
						class="header__nav-close"
						@click="onMenuCloseItemClick"
					>
						<span class="header__nav-close-line"></span><span class="header__nav-close-line"></span>
					</div>
				</nav>
				<div
					class="header__burger burger"
					@click="onBurgerItemClick"
				>
					<span class="burger__line burger__line_first"></span>
					<span class="burger__line burger__line_second"></span>
					<span class="burger__line burger__line_third"></span>
				</div>
			</div>
		</div>
	</header>

	<main class="main">
		<section class="intro">
			<div class="wrapper">
				<h1 class="intro__title">Discover Amazing places in Japan</h1>
				<p class="intro__article">
					Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side
					up i could pee on this if i had the energy but under the bed, for attack the child, open the door,
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

		<section class="benefits">
			<div class="benefits__wrap">
				<h2 class="benefits__title">Benefits of Odigo</h2>
				<div class="benefits__cards">
					<div class="benefits__card">
						<div class="benefits__card-logo">
							<Icon
								name="odigo:benefits1-icon"
								mode="svg"
								class="benefits__card-thumb"
								aria-hidden="true"
							/>
						</div>
						<h3 class="benefits__card-title">Welcome to Odigo!</h3>
						<p class="benefits__card-desk">
							Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
						</p>
						<div class="benefits__card-link link">
							<a
								href="#"
								class="benefits__card-more link-text"
								>learn more</a
							>
							<Icon
								name="odigo:benefitsArrow-icon"
								class="benefits__card-arrow link-arrow"
								aria-hidden="true"
							/>
						</div>
					</div>
					<div class="benefits__card">
						<div class="benefits__card-logo">
							<Icon
								name="odigo:benefits2-icon"
								mode="svg"
								class="benefits__card-thumb"
								aria-hidden="true"
							/>
						</div>
						<h3 class="benefits__card-title">Your Personal Japan Guide</h3>
						<p class="benefits__card-desk">
							Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
						</p>
						<div class="benefits__card-link link">
							<a
								href="#"
								class="benefits__card-more link-text"
								>learn more</a
							>
							<Icon
								name="odigo:benefitsArrow-icon"
								class="benefits__card-arrow link-arrow"
								aria-hidden="true"
							/>
						</div>
					</div>
					<div class="benefits__card">
						<div class="benefits__card-logo">
							<Icon
								name="odigo:benefits3-icon"
								mode="svg"
								class="benefits__card-thumb"
								aria-hidden="true"
							/>
						</div>
						<h3 class="benefits__card-title">Promoting Local Businesses</h3>
						<p class="benefits__card-desk">
							Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
						</p>
						<div class="benefits__card-link link">
							<a
								href="#"
								class="benefits__card-more link-text"
								>learn more</a
							>
							<Icon
								name="odigo:benefitsArrow-icon"
								class="benefits__card-arrow link-arrow"
								aria-hidden="true"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>

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

		<!-- TOURS SECTION -->

		<section class="tours wrapper-2">
			<!-- PREFECTURE PART -->

			<div class="tours__prefecture">
				<div class="prefecture__image">
					<img
						src="~/assets/img/tours-image1.jpg"
						alt="Prefecture in Focus: Tottori"
						class="prefecture__pic"
					/>
					<a
						href="#"
						class="prefecture__image-link"
					></a>
				</div>
				<div class="prefecture__body">
					<h2 class="prefecture__title">Prefecture in Focus: Tottori</h2>
					<p class="prefecture__desk">
						Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly
						side up i could pee on this if i had the energy but under the bed, for attack the child, open the door,
					</p>
					<div class="tours__link link">
						<a
							href="#"
							class="tours__view link-text"
							>view prefecture</a
						>
						<Icon
							name="odigo:benefitsArrow-icon"
							class="tours__arrow link-arrow"
							aria-hidden="true"
						/>
					</div>
				</div>
			</div>

			<!-- NEIGHBORHOOD PART -->

			<div class="tours__neighborhood">
				<div class="neighborhood__body">
					<h2 class="neighborhood__title">Featured Neighborhood: Kyoto’s Arashiyama</h2>
					<p class="neighborhood__desk">
						Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly
						side up i could pee on this if i had the energy but under the bed, for attack the child, open the door,
					</p>
					<div class="tours__link link">
						<a
							href="#"
							class="tours__view link-text"
							>view neighborhood</a
						>
						<Icon
							name="odigo:benefitsArrow-icon"
							class="tours__arrow link-arrow"
							aria-hidden="true"
						/>
					</div>
				</div>
				<div class="neighborhood__image">
					<img
						src="~/assets/img/tours-image2.jpg"
						alt="Featured Neighborhood: Kyoto’s Arashiyama"
						class="neighborhood__pic"
					/>
					<a
						href="#"
						class="neighborhood__image-link"
					></a>
				</div>
			</div>
		</section>

		<!-- TOP SECTION  -->

		<section class="top wrapper-2">
			<div class="top__title title">
				<h2 class="top__title-style title-style">Today top places to visit</h2>
				<Icon
					name="odigo:title-line"
					class="top__line title-line"
					aria-hidden="true"
				/>
			</div>
			<div class="top__cards">
				<!-- CARD #1 -->

				<div class="card top__card">
					<div class="card__img top__card-img">
						<img
							src="~/assets/img/top-image1.jpg"
							alt="Nagoya"
							class="card__thumb top__card-thumb"
						/>
						<div class="card__stats top__card-stats">
							<h3 class="card__title top__card-title">Nagoya</h3>
							<div class="card__likes top__card-likes">
								<span class="card__likes-value top__card-likes-value">221</span>
								<Icon
									name="odigo:like-icon"
									class="card__likes-icon"
									aria-hidden="true"
								/>
							</div>
							<div class="card__comments top__card-comments">
								<span class="card__likes-value top__card-likes-value">50</span>
								<Icon
									name="odigo:comment-icon"
									class="card__comments-icon"
									aria-hidden="true"
								/>
							</div>
						</div>
						<a
							href="#"
							class="card__link top__card-link"
						></a>
					</div>
					<p class="card__desk top__card-desk">
						Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly
						side up i could pee on this.
					</p>
					<a
						href="#"
						class="card__btn top__card-btn"
						>see more</a
					>
				</div>

				<!-- CARD #2 -->

				<div class="card top__card">
					<div class="card__img top__card-img">
						<img
							src="~/assets/img/top-image2.jpg"
							alt="Nigata"
							class="card__thumb top__card-thumb"
						/>
						<div class="card__stats top__card-stats">
							<h3 class="card__title top__card-title">Niigata</h3>
							<div class="card__likes top__card-likes">
								<span class="card__likes-value top__card-likes-value">221</span>
								<Icon
									name="odigo:like-icon"
									class="card__likes-icon"
									aria-hidden="true"
								/>
							</div>
							<div class="card__comments top__card-comments">
								<span class="card__likes-value top__card-likes-value">50</span>
								<Icon
									name="odigo:comment-icon"
									class="card__comments-icon"
									aria-hidden="true"
								/>
							</div>
						</div>
						<a
							href="#"
							class="card__link top__card-link"
						></a>
					</div>
					<p class="card__desk top__card-desk">
						Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly
						side up i could pee on this.
					</p>
					<a
						href="#"
						class="card__btn top__card-btn"
						>see more</a
					>
				</div>

				<!-- CARD #3 -->

				<div class="card top__card">
					<div class="card__img top__card-img">
						<img
							src="~/assets/img/top-image3.jpg"
							alt="Osaka"
							class="card__thumb top__card-thumb"
						/>
						<div class="card__stats top__card-stats">
							<h3 class="card__title top__card-title">Osaka</h3>
							<div class="card__likes top__card-likes">
								<span class="card__likes-value top__card-likes-value">221</span>
								<Icon
									name="odigo:like-icon"
									class="card__likes-icon"
									aria-hidden="true"
								/>
							</div>
							<div class="card__comments top__card-comments">
								<span class="card__likes-value top__card-likes-value">50</span>
								<Icon
									name="odigo:comment-icon"
									class="card__comments-icon"
									aria-hidden="true"
								/>
							</div>
						</div>
						<a
							href="#"
							class="card__link top__card-link"
						></a>
					</div>
					<p class="card__desk top__card-desk">
						Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly
						side up i could pee on this.
					</p>
					<a
						href="#"
						class="card__btn top__card-btn"
						>see more</a
					>
				</div>

				<!-- CARD #4 -->

				<div class="card top__card">
					<div class="card__img top__card-img">
						<img
							src="~/assets/img/top-image4.jpg"
							alt="Saitama"
							class="card__thumb top__card-thumb"
						/>
						<div class="card__stats top__card-stats">
							<h3 class="card__title top__card-title">Saitama</h3>
							<div class="card__likes top__card-likes">
								<span class="card__likes-value top__card-likes-value">221</span>
								<Icon
									name="odigo:like-icon"
									class="card__likes-icon"
									aria-hidden="true"
								/>
							</div>
							<div class="card__comments top__card-comments">
								<span class="card__likes-value top__card-likes-value">50</span>
								<Icon
									name="odigo:comment-icon"
									class="card__comments-icon"
									aria-hidden="true"
								/>
							</div>
						</div>
						<a
							href="#"
							class="card__link top__card-link"
						></a>
					</div>
					<p class="card__desk top__card-desk">
						Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly
						side up i could pee on this.
					</p>
					<a
						href="#"
						class="card__btn top__card-btn"
						>see more</a
					>
				</div>

				<!-- CARD #5 -->

				<div class="card top__card">
					<div class="card__img top__card-img">
						<img
							src="~/assets/img/top-image5.jpg"
							alt="Ueno"
							class="card__thumb top__card-thumb"
						/>
						<div class="card__stats top__card-stats">
							<h3 class="card__title top__card-title">Ueno</h3>
							<div class="card__likes top__card-likes">
								<span class="card__likes-value top__card-likes-value">221</span>
								<Icon
									name="odigo:like-icon"
									class="card__likes-icon"
									aria-hidden="true"
								/>
							</div>
							<div class="card__comments top__card-comments">
								<span class="card__likes-value top__card-likes-value">50</span>
								<Icon
									name="odigo:comment-icon"
									class="card__comments-icon"
									aria-hidden="true"
								/>
							</div>
						</div>
						<a
							href="#"
							class="card__link top__card-link"
						></a>
					</div>
					<p class="card__desk top__card-desk">
						Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly
						side up i could pee on this.
					</p>
					<a
						href="#"
						class="card__btn top__card-btn"
						>see more</a
					>
				</div>

				<!-- CARD #6 -->

				<div class="card top__card">
					<div class="card__img top__card-img">
						<img
							src="~/assets/img/top-image6.jpg"
							alt="Shibuya"
							class="card__thumb top__card-thumb"
						/>
						<div class="card__stats top__card-stats">
							<h3 class="card__title top__card-title">Shibuya</h3>
							<div class="card__likes top__card-likes">
								<span class="card__likes-value top__card-likes-value">221</span>
								<Icon
									name="odigo:like-icon"
									class="card__likes-icon"
									aria-hidden="true"
								/>
							</div>
							<div class="card__comments top__card-comments">
								<span class="card__likes-value top__card-likes-value">50</span>
								<Icon
									name="odigo:comment-icon"
									class="card__comments-icon"
									aria-hidden="true"
								/>
							</div>
						</div>
						<a
							href="#"
							class="card__link top__card-link"
						></a>
					</div>
					<p class="card__desk top__card-desk">
						Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly
						side up i could pee on this.
					</p>
					<a
						href="#"
						class="card__btn top__card-btn"
						>see more</a
					>
				</div>
			</div>
		</section>

		<!-- VIDEOS SECTION -->

		<section class="videos">
			<div class="videos__wrapper">
				<div class="videos__video">
					<iframe
						class="videos__video-element"
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
	</main>
	<footer class="footer">
		<div class="wrapper">
			<div class="footer__item">
				<div class="footer__logo">
					<span
						class="footer__logo-mark"
						role="img"
						aria-label="Discover Amazing places in Japan"
					>
						<Icon
							name="odigo:odigoFooter-Logo"
							class="footer__logo-pic"
							aria-hidden="true"
						/>
					</span>
				</div>
				<nav class="footer__nav">
					<ul class="footer__menu">
						<li class="footer__menu-item">
							<h3 class="footer__menu-title">Company</h3>
						</li>
						<li class="footer__menu-item">
							<a
								href="#!"
								class="footer__menu-link"
								>About</a
							>
						</li>
						<li class="footer__menu-item">
							<a
								href="#!"
								class="footer__menu-link"
								>Team</a
							>
						</li>
						<li class="footer__menu-item">
							<a
								href="#!"
								class="footer__menu-link"
								>Team</a
							>
						</li>
						<li class="footer__menu-item">
							<a
								href="#!"
								class="footer__menu-link"
								>Privacy Policy</a
							>
						</li>
					</ul>

					<ul class="footer__menu">
						<li class="footer__menu-item">
							<h3 class="footer__menu-title">Locations</h3>
						</li>
						<li class="footer__menu-item">
							<a
								href="#!"
								class="footer__menu-link"
								>Tokyo</a
							>
						</li>
						<li class="footer__menu-item">
							<a
								href="#!"
								class="footer__menu-link"
								>Kyoto</a
							>
						</li>
						<li class="footer__menu-item">
							<a
								href="#!"
								class="footer__menu-link"
								>Osaka</a
							>
						</li>
						<li class="footer__menu-item">
							<a
								href="#!"
								class="footer__menu-link"
								>Hokkaido</a
							>
						</li>
					</ul>

					<ul class="footer__menu">
						<li class="footer__menu-item">
							<h3 class="footer__menu-title">Social Media</h3>
						</li>
						<li class="footer__menu-item">
							<a
								href="#!"
								class="footer__menu-link"
								>Facebook</a
							>
						</li>
						<li class="footer__menu-item">
							<a
								href="#!"
								class="footer__menu-link"
								>Twitter</a
							>
						</li>
						<li class="footer__menu-item">
							<a
								href="#!"
								class="footer__menu-link"
								>Instagram</a
							>
						</li>
						<li class="footer__menu-item">
							<a
								href="#!"
								class="footer__menu-link"
								>Youtube</a
							>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</footer>
</template>

<style scoped>
.wrapper {
	max-width: 1060px;
	margin: 0 auto;
	padding: 0 15px;
}

.wrapper-2 {
	max-width: 1262px;
	margin: 0 auto;
	padding: 0 15px;
}

/* GLOBAL BLOCS */
/* Link styles start */

.link-text {
	color: #006dfe;
	text-transform: uppercase;
	font-size: 16px;
	line-height: 24px;
	margin-right: 26px;
	text-decoration: none;
}

.link-text:hover,
.link-text:focus,
.link-text:active {
	color: #0051bb;
}

.link-arrow {
	display: inline-block;
	width: 33px;
	height: 8px;
	color: #006dfe;
	vertical-align: baseline;
}

/* Link styles end */

/*Title styles start */

.title-style {
	font-size: 35px;
	line-height: 42px;
	text-align: left;
	color: #102746;
	font-weight: 500;
}

.title-line {
	display: inline-block;
	width: 255px;
	height: 3px;
	color: #006dfe;
	vertical-align: baseline;
}

/* Title styles end */

/* Card styles start */

.card {
	display: flex;
	flex-direction: column;
	grid-column: span 2;
}

.card__img {
	position: relative;
	max-width: 386px;
	max-height: 377px;
	margin-bottom: 45px;
	overflow: hidden;
}

.card__thumb {
	background-size: cover;
	transition: 0.15s all;
}

.card__stats {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	color: white;
	padding: 16px 25px;
	justify-content: flex-end;
}

.card__title {
	font-size: 18px;
	line-height: 24px;
	font-weight: 400;
	text-transform: uppercase;
	margin: 0 auto 0 0;
}

.card__likes {
	display: flex;
	align-items: center;
	gap: 4px;
	font-size: 16px;
	line-height: 24px;
	font-weight: 400;
	margin-right: 14px;
}

.card__likes-icon {
	width: 16px;
	height: 15px;
	flex-shrink: 0;
}

.card__comments {
	display: flex;
	align-items: center;
	gap: 9px;
	font-size: 16px;
	line-height: 24px;
	font-weight: 400;
}

.card__comments-icon {
	width: 14px;
	height: 14px;
	flex-shrink: 0;
}

.card__link {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 4;
	width: 100%;
	height: 100%;
}

.card__img:hover .card__thumb {
	transform: scale(1.05);
}

.card__desk {
	color: #102746;
	font-size: 16px;
	line-height: 24px;
	margin-bottom: 43px;
	float: right;
}

.card__btn {
	width: 118px;
	color: white;
	font-size: 16px;
	line-height: 19.2px;
	padding: 12px 19px 11px 19px;
	background-color: #006dfe;
	text-transform: uppercase;
	text-decoration: none;
	margin: auto 0 0 0;
}

.card__btn:hover,
.card__btn:active,
.card__btn:focus {
	background-color: #0051bb;
}

/* Card styles end */

/* GLOBAL BLOCS END */

/* Header styles start */

.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	transition: 0.2s linear;
	padding-bottom: 20px;
	z-index: 999;
}

.header_active {
	background: #0e1d28;
}

.header__wrapper {
	display: flex;
	flex-wrap: wrap;
	align-items: flex-end;
	justify-content: space-between;
	padding-top: 56px;
}

.header__logo-pic {
	width: 82px;
	height: 31px;
	color: white;
	vertical-align: baseline;
}

.header__list {
	display: flex;
	list-style-type: none;
	flex-wrap: wrap;
}

.header__item {
	margin-right: 82px;
}

.header__item:last-child {
	margin-right: 0;
}

.header__link {
	font-family: "Lato";
	color: white;
	text-decoration: none;
	font-size: 18px;
	line-height: 24px;
}

.header__link:hover,
.header__link:focus,
.header__link:active {
	cursor: pointer;
	opacity: 0.8;
}

.header__burger {
	display: none;
	width: 40px;
	height: 28px;
	position: relative;
}

.burger__line {
	display: block;
	width: 100%;
	height: 2px;
	background-color: white;
	position: absolute;
	left: 0;
}

.burger__line_first {
	top: 0;
}

.burger__line_second {
	top: 50%;
	transform: translateY(-50%);
}

.burger__line_third {
	bottom: 0;
}

/* Header styles end */

/* Intro styles start */

.intro {
	min-height: 100vh;
	background: url(~/assets/img/intro-bg.jpg) no-repeat center;
	background-size: cover;
	padding-top: 263px;
	padding-bottom: 273px;
}

.intro__title {
	color: white;
	font-size: 50px;
	line-height: 60px;
	margin-bottom: 22px;
	max-width: 619px;
	font-weight: 400;
}

.intro__article {
	color: white;
	margin-bottom: 59px;
	max-width: 546px;
	font-size: 16px;
	line-height: 24px;
	font-weight: 300px;
	word-spacing: 1px;
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
	margin-right: 60px;
}

.search-form__icon {
	position: absolute;
	top: 50%;
	left: 6px;
	width: 20px;
	height: 20px;
	color: white;
	transform: translateY(-50%);
	pointer-events: none;
}

.search-form__field {
	width: 297px;
	border: 0;
	border-bottom: 2px solid #bfc0c5;
	padding-left: 43px;
	padding-bottom: 22px;
	font-size: 18px;
	line-height: 24px;
	color: white;
	font-weight: 500;
}

.search-form__field::placeholder {
	font-size: 18px;
	line-height: 24px;
	color: white;
	font-weight: 500;
}

.search-form__submit {
	max-width: 171px;
	background-color: #1b7dff;
	color: white;
	font-size: 24px;
	line-height: 28.8px;
	text-transform: uppercase;
	padding: 15px 40px;
	border: none;
}

.search-form__submit:hover,
.search-form__submit:focus,
.search-form__submit:active {
	background-color: #0960d1;
}
/* Intro styles end */

/* Benefits styles start */

.benefits {
	margin-bottom: 131px;
}

.benefits__wrap {
	max-width: 1262px;
	max-height: 655px;
	background-color: white;
	padding: 32px 100px 111px 100px;
	margin: 0 auto;
	box-shadow: 0px 2px 20px 0px #15182429;
	position: relative;
}

.benefits__title {
	width: 100%;
	font-size: 35px;
	line-height: 42px;
	color: #102746;
	font-weight: 500;
	padding: 93px 100px 90px 100px;
	position: absolute;
	top: 0;
	left: 0;
	transform: translateY(-99%);
	background-color: white;
}

.benefits__cards {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 55px;
}

.benefits__card {
	grid-column: span 1;
}

.benefits__card-logo {
	margin-bottom: 37px;
	max-width: 66px;
}

.benefits__card-thumb {
	display: block;
	width: 66px;
	height: auto;
}

.benefits__card-title {
	margin-bottom: 26px;
	font-size: 18px;
	line-height: 24px;
}

.benefits__card-desk {
	margin-bottom: 39px;
	font-size: 16px;
	line-height: 24px;
}

/* Benefits styles end */

/*Places styles start */

.places {
	margin-bottom: 131px;
}

.places__header {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 36px;
}
.places__title {
	margin-right: 20px;
}

.places__images {
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-gap: 10px;
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
	color: #ffffff;
	font-size: 50px;
	line-height: 60px;
	left: 29px;
	bottom: 27px;
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
	max-width: 415px;
	max-height: 283px;
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

/* Tours styles start */

.tours {
	max-width: 1271px;
	max-height: 785px;
	margin-bottom: 139px;
}

.prefecture__pic {
	transition: 0.15s all;
}

.neighborhood__pic {
	transition: 0.15s all;
}

.prefecture__image:hover .prefecture__pic,
.neighborhood__image:hover .neighborhood__pic {
	transform: scale(1.05);
}

.prefecture__image-link,
.neighborhood__image-link {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 4;
	width: 100%;
	height: 100%;
}

.tours__prefecture {
	display: flex;
	flex-wrap: nowrap;
	max-height: 354px;
	margin-bottom: 77px;
}

.prefecture__image {
	display: block;
	z-index: 3;
	position: relative;
	max-width: 597px;
	margin-right: 108px;
	overflow: hidden;
}

.prefecture__body {
	display: block;
	color: #102746;
}

.prefecture__title {
	margin-top: 26px;
	font-size: 30px;
	line-height: 40px;
	margin-bottom: 85px;
	font-weight: 700;
}

.prefecture__desk {
	max-width: 520px;
	font-size: 16px;
	line-height: 24px;
	margin-bottom: 58px;
}

.tours__neighborhood {
	display: flex;
	flex-wrap: nowrap;
	max-height: 354px;
}

.neighborhood__image {
	z-index: 3;
	display: block;
	position: relative;
	max-width: 597px;
	overflow: hidden;
}

.neighborhood__body {
	display: block;
	color: #102746;
	margin-left: 47px;
	margin-right: 107px;
	max-width: 520px;
}

.neighborhood__title {
	margin-top: 26px;
	font-size: 30px;
	line-height: 40px;
	margin-bottom: 45px;
	font-weight: 700;
}

.neighborhood__desk {
	max-width: 520px;
	font-size: 16px;
	line-height: 24px;
	margin-bottom: 94px;
}

/* Tours styles end */

/* Top styles start */

.top {
	margin-bottom: 144px;
}

.top__title-style {
	margin-bottom: 7px;
	font-size: 35px;
	line-height: 42px;
	font-weight: 500;
}

.top__line {
	margin-bottom: 54px;
}

.top__cards {
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	column-gap: 40px;
	row-gap: 30px;
}

/* Top styles end */

/* Videos styles start */

.videos {
	width: 100%;
}

.videos__wrapper {
	max-width: 1440px;
	margin: 0 auto;
	position: relative;
}

.videos__video {
	padding-top: 56.25%;
}

.videos__video-element {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

/* Videos styles end */

/* Footer styles start */

.footer {
	background: #0e1d28;
	padding: 118px 0;
}

.footer__item {
	display: flex;
	flex-wrap: wrap;
}

.footer__logo {
	width: 50%;
}

.footer__logo-mark {
	display: inline-flex;
}

.footer__logo-pic {
	width: 170px;
	height: 64px;
	color: white;
	vertical-align: baseline;
}

.footer__nav {
	display: flex;
	justify-content: space-between;
	width: 50%;
}

.footer__menu {
	list-style: none;
}

.footer__menu-item {
	color: white;
}

.footer__menu-title {
	font-weight: 700;
	font-size: 18px;
	line-height: 24px;
}

.footer__menu-link {
	color: inherit;
	text-decoration: none;
	font-size: 16px;
	line-height: 24px;
}

.footer__menu-link:hover,
.footer__menu-link:focus,
.footer__menu-link:active {
	opacity: 0.8;
}

/* Footer styles end */

/* Media start */

@media screen and (max-width: 920px) {
	.search-form__field {
		margin-bottom: 25px;
	}

	.benefits {
		margin-bottom: 60px;
	}

	.benefits__wrap {
		box-shadow: none;
		padding: 0 15px 20px 15px;
	}

	.benefits__cards {
		grid-column-gap: 35px;
	}

	.benefits__title {
		padding: 55px 15px 55px 15px;
	}

	.places {
		margin-bottom: 40px;
	}

	.places__image {
		object-fit: initial;
		height: 350px;
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

	.tours {
		margin-bottom: 40px;
	}

	.tours__prefecture {
		margin-bottom: 30px;
	}

	.prefecture__image {
		margin-right: 40px;
	}

	.prefecture__pic {
		transform: translateY(20%);
	}

	.prefecture__title {
		margin-bottom: 20px;
	}

	.prefecture__desk {
		margin-bottom: 20px;
	}

	.neighborhood__body {
		margin-left: 20px;
		margin-right: 40px;
	}

	.neighborhood__title {
		margin-bottom: 20px;
	}

	.neighborhood__desk {
		margin-bottom: 20px;
	}

	.neighborhood__pic {
		transform: translateY(20%);
	}

	.card {
		grid-column: span 3;
	}

	.footer {
		padding: 60px 0;
	}
}

@media screen and (max-width: 767px) {
	.header__burger {
		display: block;
	}

	.header__nav {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #102746;
		z-index: 10;
		padding: 75px;
		transform: translateX(100%);
		transition: 0.2s linear;
	}

	.header__nav--active {
		transform: translateX(0);
	}

	.header__item {
		width: 100%;
		margin-right: 0;
		margin-bottom: 30px;
	}

	.header__item:last-child {
		margin-bottom: 0;
	}

	.header__link {
		font-size: 42px;
		line-height: 48px;
	}

	.header__nav-close {
		width: 40px;
		height: 40px;
		position: absolute;
		top: 20px;
		right: 20px;
		z-index: 11;
	}

	.header__nav-close-line {
		display: block;
		width: 100%;
		height: 2px;
		background-color: white;
		position: absolute;
		top: 50%;
	}

	.header__nav-close-line:first-child {
		transform: translateY(-50%) rotate(45deg);
	}

	.header__nav-close-line:last-child {
		transform: translateY(-50%) rotate(-45deg);
	}
}
</style>

<script setup lang="ts">
const header = useTemplateRef("header");
onMounted(() => {
	window.onscroll = () => {
		if (window.pageYOffset > 50) {
			header.value?.classList.add("header_active");
		} else {
			header.value?.classList.remove("header_active");
		}
	};
});

const menu = useTemplateRef("header-nav");
function onBurgerItemClick() {
	menu.value?.classList.add("header__nav--active");
}

function onMenuCloseItemClick() {
	menu.value?.classList.remove("header__nav--active");
}
</script>
