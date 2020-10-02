<template>
  <div v-if="user">
    <p>{{user.name}}</p>
    <AddTodo @submit="addTodo" />
    <TodoList :todos="user.todos" />
  </div>
</template>

<script>
import AddTodo from '~/components/AddTodo'
import TodoList from '~/components/TodoList'
import axios from '~/plugins/axios';

export default {
  components: {
    AddTodo,
    TodoList
  },
  data(){
    return{
      todos:[]
    }
  },
  computed: {
    user(){
      return this.$store.state.currentUser;
    }
  },
  methods:{
    async addTodo(todo){
      const { data } = await axios.post("/v1/todos", { todo });
      this.$store.commit("setUser", {
        ...this.user,
        todos: [...this.user.todos, data]
      });
      this.$store.commit("setNotice",{
				status: true,
				message: "Todoを作成しました"
			});
			setTimeout(() => {
				this.$store.commit("setNotice", {});
      }, 2000);
    }
  },
  fetch({store, redirect}){
    store.watch(
      state => state.currentUser,
      (newUser, oldUser) => {
        if(!newUser){
          return redirect("/login");
        }
      }
    )
  }
};
</script>
