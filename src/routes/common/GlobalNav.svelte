<script>
	import { page } from '$app/stores';
</script>

<nav>
	<ul>
		<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
			<a href="/">Home</a>
		</li>
		<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
			<a href="/about">About</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	nav {
		display: flex;
		height: 50px;
		font-family: var(--font-nanum);
		justify-content: center;

		ul {
			display: flex;
			list-style: none;
			position: relative;
			margin: 0;
			padding: 0;
			background: var(--background);
			background-size: contain;
			align-items: center;
			justify-content: center;

			gap: 10px;

			li {
				position: relative;
				height: 100%;
				&[aria-current='page'] {
					border-bottom: 2px solid var(--color-theme-1);
					&::before {
						content: '';
						position: absolute;
						bottom: 0;
						left: calc(50% - var(--size));
						width: 0;
						height: 0;
						border: var(--size) solid transparent;
						border-bottom: var(--size) solid var(--color-theme-1);

						--size: 6px;
					}
					a {
						color: var(--color-theme-1);
					}
				}
				a {
					display: flex;
					height: 100%;
					padding: 0 0.5rem;
					color: var(--color-text);
					font-size: 1.2rem;
					font-weight: 700;
					align-items: center;
					text-decoration: none;
					text-transform: uppercase;
					letter-spacing: 0.1em;
					transition: color 0.2s linear;
					&:hover {
						color: var(--color-theme-1);
					}
				}
			}
		}
	}
</style>
