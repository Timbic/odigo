<template>
	<header
		class="header"
		ref="header"
	>
		<div class="wrapper">
			<div class="inner">
				<div class="logo">
					<a
						href=""
						class="logo-link"
						aria-label="Discover Amazing places in Japan"
					>
						<Icon
							name="odigo:odigo-logo"
							class="logo-pic"
							aria-hidden="true"
						/>
					</a>
				</div>

				<nav
					class="nav"
					ref="header-nav"
				>
					<ul class="list">
						<li class="item">
							<a
								href="#"
								class="nav-link"
								>Articles</a
							>
						</li>
						<li class="item">
							<a
								href="#"
								class="nav-link"
								>Locations</a
							>
						</li>
						<li class="item">
							<a
								href="#"
								class="nav-link"
								>Videos</a
							>
						</li>
						<li class="item">
							<a
								href="#"
								class="nav-link"
								>Sign in</a
							>
						</li>
					</ul>
					<div
						class="nav-close"
						@click="onMenuCloseItemClick"
					>
						<span class="close-line"></span><span class="close-line"></span>
					</div>
				</nav>
				<div
					class="burger"
					@click="onBurgerItemClick"
				>
					<span class="burger-line line-first"></span>
					<span class="burger-line line-second"></span>
					<span class="burger-line line-third"></span>
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

.is-active {
	background: var(--color-navy-dark);
}

.inner {
	display: flex;
	flex-wrap: wrap;
	align-items: flex-end;
	justify-content: space-between;
	padding-top: 3.5rem;
}

.logo-pic {
	width: 5.125rem;
	height: 1.9375rem;
	color: var(--color-white);
	vertical-align: baseline;
}

.list {
	display: flex;
	list-style-type: none;
	flex-wrap: wrap;
}

.item {
	margin-right: 5.125rem;
}

.item:last-child {
	margin-right: 0;
}

.nav-link {
	font-family: "Lato";
	color: var(--color-white);
	text-decoration: none;
	font-size: 1.125rem;
	line-height: 1.5rem;
}

.nav-link:hover,
.nav-link:focus,
.nav-link:active {
	cursor: pointer;
	opacity: 0.8;
}

.burger {
	display: none;
	width: 2.5rem;
	height: 1.75rem;
	position: relative;
}

.burger-line {
	display: block;
	width: 100%;
	height: 0.125rem;
	background-color: var(--color-white);
	position: absolute;
	left: 0;
}

.line-first {
	top: 0;
}

.line-second {
	top: 50%;
	transform: translateY(-50%);
}

.line-third {
	bottom: 0;
}

/* Header styles end */

@media screen and (max-width: 47.9375rem) {
	.burger {
		display: block;
	}

	.nav {
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

	.is-open {
		transform: translateX(0);
	}

	.item {
		width: 100%;
		margin-right: 0;
		margin-bottom: 1.875rem;
	}

	.item:last-child {
		margin-bottom: 0;
	}

	.nav-link {
		font-size: 2.625rem;
		line-height: 3rem;
	}

	.nav-close {
		width: 2.5rem;
		height: 2.5rem;
		position: absolute;
		top: 1.25rem;
		right: 1.25rem;
		z-index: 11;
	}

	.close-line {
		display: block;
		width: 100%;
		height: 0.125rem;
		background-color: var(--color-white);
		position: absolute;
		top: 50%;
	}

	.close-line:first-child {
		transform: translateY(-50%) rotate(45deg);
	}

	.close-line:last-child {
		transform: translateY(-50%) rotate(-45deg);
	}
}
</style>

<script setup lang="ts">
const header = useTemplateRef("header");
onMounted(() => {
	window.onscroll = () => {
		if (window.pageYOffset > 50) {
			header.value?.classList.add("is-active");
		} else {
			header.value?.classList.remove("is-active");
		}
	};
});

const menu = useTemplateRef("header-nav");
function onBurgerItemClick() {
	menu.value?.classList.add("is-open");
}

function onMenuCloseItemClick() {
	menu.value?.classList.remove("is-open");
}
</script>
