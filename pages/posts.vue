<template>
  <div v-if="user">
    <p>{{user.name}}</p>
		<PostList :posts="user.posts" />
    <AddPost @submit="addPost" />
  </div>
</template>

<script>
import AddPost from '~/components/AddPost'
import PostList from '~/components/PostList'
import axios from '~/plugins/axios';

export default {
  components: {
    AddPost,
		PostList
  },
  data(){
    return{
      posts:[]
    }
  },
  computed: {
    user(){
      return this.$store.state.currentUser;
    }
  },
	methods:{
		async addPost(posts){
			const { data } = await axios.post("/v1/posts", { posts })
      this.$store.commit("setUser", {
        ...this.user,
        posts: [...this.user.posts, data]
      });
      this.$store.commit("setNotice",{
				status: true,
				message: "Postを作成しました"
			});
			setTimeout(() => {
				this.$store.commit("setNotice", {});
      }, 2000);
		}
	}
};
</script>
