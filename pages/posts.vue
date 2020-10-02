<template>
  <div v-if="user">
    <p>{{user.name}}</p>
		<PostList :posts="user.posts" />
    <AddPost />
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
};
</script>
