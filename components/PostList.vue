<template>
	<div>
		<div v-for='post in posts'>
			<v-card
				class="mx-auto"
				max-width="400"
			>
				<v-img
					class="white--text align-end"
					height="200px"
					:src="post.image"
				>
					<v-card-title>{{post.title}}</v-card-title>
				</v-img>

				<v-card-text class="text--primary">

					<div>{{post.content}}</div>

				</v-card-text>

			</v-card>
		</div>
	</div>
</template>

<script>
	import axios from "@/plugins/axios";
	export default {
		props:["posts"],
		data() {
			return {

			}
		},
		computed:{
			user(){
				return this.$store.state.currentUser;
			}
		},
	}
</script>