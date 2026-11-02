<template>
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
	max-width: 66.25rem;
	margin: 0 auto;
	padding: 0 0.9375rem;
}

/* Footer styles start */

.footer {
	background: var(--color-navy-dark);
	padding: 7.375rem 0;
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
	width: 10.625rem;
	height: 4rem;
	color: var(--color-white);
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
	color: var(--color-white);
}

.footer__menu-title {
	font-weight: 700;
	font-size: 1.125rem;
	line-height: 1.5rem;
}

.footer__menu-link {
	color: inherit;
	text-decoration: none;
	font-size: 1rem;
	line-height: 1.5rem;
}

.footer__menu-link:hover,
.footer__menu-link:focus,
.footer__menu-link:active {
	opacity: 0.8;
}

/* Footer styles end */

@media screen and (max-width: 57.5rem) {
	.footer {
		padding: 3.75rem 0;
	}
}
</style>
