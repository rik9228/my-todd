const app = new Vue({
  el: "#app",
  data: {
    todos: [],
    todo: {
      id: 0,
      item: "",
      state: false,
    },
    updateTodo: {
      id: null,
      item: "",
      state: false,
    },
    showUpdateForm: false,
    caution: false,
  },
  methods: {
    addTodo: function () {
      // もし項目の入力がなかった時
      if (this.todo.item === "") {
        this.caution = true;
        return;
      }
      this.todos.push({
        id: this.todo.id,
        item: this.todo.item,
        state: this.todo.state,
      });
      this.todo.id++;
      this.todo.item = "";
      this.caution = false;
    },
    removeTodo: function (targetId) {
      const res = confirm(`ID：${targetId}の項目を削除しますか？`);

      if (res) {
        this.todos = this.todos.filter((todo) => todo.id !== targetId);
      } else {
        return;
      }
    },
    insertUpdateTodo: function (targetTodo) {
      this.updateTodo = {
        id: targetTodo.id,
        item: targetTodo.item,
        state: targetTodo.state,
      };
      this.showUpdateForm = true;
    },
    updateTodoFunc: function (targetId) {
      this.todos = this.todos.filter((todo) => {
        // 一致したやつはタスク名を変える
        if (todo.id === targetId) {
          todo.item = this.updateTodo.item;
        }
        // todosを返却
        return this.todos;
      });
    },
    // オブジェクト内容のリセット
    leaveUpdateForm: function () {
      this.updateTodo = {
        id: null,
        item: "",
        state: 0,
      };
      this.todo.item = "";
      this.showUpdateForm = false;
    },

    // narrowDown: function (e) {
    //   let stateValue = Boolean(e.target.previousElementSibling.value);
    //   this.todos = this.todos.filter((todo) => {
    //     if (stateValue !== todo.state) {
    //       return this.todos;
    //     }
    //   });
    // },

    changeState: function (todo) {
      todo.state = !todo.state;
    },
  },
});
