<template>
	<footer class="footer">
		<div class="wrapper">
			<div class="inner">
				<div class="logo">
					<span
						class="logo-mark"
						role="img"
						aria-label="Discover Amazing places in Japan"
					>
						<Icon
							name="odigo:odigoFooter-Logo"
							class="logo-pic"
							aria-hidden="true"
						/>
					</span>
				</div>
				<nav class="nav">
					<ul class="menu">
						<li class="menu-item">
							<h3 class="menu-title">Company</h3>
						</li>
						<li class="menu-item">
							<a
								href="#!"
								class="menu-link"
								>About</a
							>
						</li>
						<li class="menu-item">
							<a
								href="#!"
								class="menu-link"
								>Team</a
							>
						</li>
						<li class="menu-item">
							<a
								href="#!"
								class="menu-link"
								>Team</a
							>
						</li>
						<li class="menu-item">
							<a
								href="#!"
								class="menu-link"
								>Privacy Policy</a
							>
						</li>
					</ul>

					<ul class="menu">
						<li class="menu-item">
							<h3 class="menu-title">Locations</h3>
						</li>
						<li class="menu-item">
							<a
								href="#!"
								class="menu-link"
								>Tokyo</a
							>
						</li>
						<li class="menu-item">
							<a
								href="#!"
								class="menu-link"
								>Kyoto</a
							>
						</li>
						<li class="menu-item">
							<a
								href="#!"
								class="menu-link"
								>Osaka</a
							>
						</li>
						<li class="menu-item">
							<a
								href="#!"
								class="menu-link"
								>Hokkaido</a
							>
						</li>
					</ul>

					<ul class="menu">
						<li class="menu-item">
							<h3 class="menu-title">Social Media</h3>
						</li>
						<li class="menu-item">
							<a
								href="#!"
								class="menu-link"
								>Facebook</a
							>
						</li>
						<li class="menu-item">
							<a
								href="#!"
								class="menu-link"
								>Twitter</a
							>
						</li>
						<li class="menu-item">
							<a
								href="#!"
								class="menu-link"
								>Instagram</a
							>
						</li>
						<li class="menu-item">
							<a
								href="#!"
								class="menu-link"
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

.inner {
	display: flex;
	flex-wrap: wrap;
}

.logo {
	width: 50%;
}

.logo-mark {
	display: inline-flex;
}

.logo-pic {
	width: 10.625rem;
	height: 4rem;
	color: var(--color-white);
	vertical-align: baseline;
}

.nav {
	display: flex;
	justify-content: space-between;
	width: 50%;
}

.menu {
	list-style: none;
}

.menu-item {
	color: var(--color-white);
}

.menu-title {
	font-weight: 700;
	font-size: 1.125rem;
	line-height: 1.5rem;
}

.menu-link {
	color: inherit;
	text-decoration: none;
	font-size: 1rem;
	line-height: 1.5rem;
}

.menu-link:hover,
.menu-link:focus,
.menu-link:active {
	opacity: 0.8;
}

/* Footer styles end */

@media screen and (max-width: 57.5rem) {
	.footer {
		padding: 3.75rem 0;
	}
}
</style>
