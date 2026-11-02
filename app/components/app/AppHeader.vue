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
</template>

<style scoped>
.wrapper {
	max-width: 66.25rem;
	margin: 0 auto;
	padding: 0 0.9375rem;
}

/* Header styles start */

.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	transition: 0.2s linear;
	padding-bottom: 1.25rem;
	z-index: 999;
}

.header_active {
	background: var(--color-navy-dark);
}

.header__wrapper {
	display: flex;
	flex-wrap: wrap;
	align-items: flex-end;
	justify-content: space-between;
	padding-top: 3.5rem;
}

.header__logo-pic {
	width: 5.125rem;
	height: 1.9375rem;
	color: var(--color-white);
	vertical-align: baseline;
}

.header__list {
	display: flex;
	list-style-type: none;
	flex-wrap: wrap;
}

.header__item {
	margin-right: 5.125rem;
}

.header__item:last-child {
	margin-right: 0;
}

.header__link {
	font-family: "Lato";
	color: var(--color-white);
	text-decoration: none;
	font-size: 1.125rem;
	line-height: 1.5rem;
}

.header__link:hover,
.header__link:focus,
.header__link:active {
	cursor: pointer;
	opacity: 0.8;
}

.header__burger {
	display: none;
	width: 2.5rem;
	height: 1.75rem;
	position: relative;
}

.burger__line {
	display: block;
	width: 100%;
	height: 0.125rem;
	background-color: var(--color-white);
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

@media screen and (max-width: 47.9375rem) {
	.header__burger {
		display: block;
	}

	.header__nav {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: var(--color-navy);
		z-index: 10;
		padding: 4.6875rem;
		transform: translateX(100%);
		transition: 0.2s linear;
	}

	.header__nav--active {
		transform: translateX(0);
	}

	.header__item {
		width: 100%;
		margin-right: 0;
		margin-bottom: 1.875rem;
	}

	.header__item:last-child {
		margin-bottom: 0;
	}

	.header__link {
		font-size: 2.625rem;
		line-height: 3rem;
	}

	.header__nav-close {
		width: 2.5rem;
		height: 2.5rem;
		position: absolute;
		top: 1.25rem;
		right: 1.25rem;
		z-index: 11;
	}

	.header__nav-close-line {
		display: block;
		width: 100%;
		height: 0.125rem;
		background-color: var(--color-white);
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
