<template>
	<nav class="navbar is-warning" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<router-link to="/" class="navbar-item">
				<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
			</router-link>

			<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div id="navbarBasicExample" class="navbar-menu">
			<div class="navbar-end">
				<div class="navbar-item">
					<div class="buttons">
						<router-link to="/create" class="button is-dark">
							<strong>Create</strong>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>
<script>
	export default{

	}
</script>