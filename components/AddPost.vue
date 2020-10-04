<template>
  <v-form>
    <v-text-field
      v-model="title"
      :counter="10"
      label="Title"
      required
    ></v-text-field>

		<v-textarea
      autocomplete="content"
      label="Content"
			v-model="content"
    ></v-textarea>

		<v-file-input
			accept="image/*"
			label="File input"
			@change="onUpload()"
  	></v-file-input>

    <v-btn
      color="success"
      class="mr-4"
			@click="UploadSubmit"
    >
      Send
    </v-btn>
  </v-form>
</template>

<script>
	import firebase from "@/plugins/firebase";

	export default {
		data(){
			return{
				title: "",
				content: "",
				image: ""
			}
		},
		computed:{
			user(){
				return this.$store.state.currentUser
			}
		},
		methods:{
			onUpload(){
				this.image = event.target.files[0];
			},
			UploadSubmit(){
				const storage = firebase.storage()
				const post_title = this.title
				const post_content = this.content
				const storageRef = storage.ref('users/' + this.user.id + '/images/' + this.image.name)
				storageRef.put(this.image).then(snapshot => {
					snapshot.ref.getDownloadURL().then((url) => {
						const posts = {
							title: post_title,
							content: post_content,
							image: url,
							user_id: this.user.id
						}
						this.$emit("submit", posts)
					});
				}).catch(error => {
					console.log(error);
				})
				this.title = ""
				this.content = ""
				this.image = ""
			}
		}
	}

</script>