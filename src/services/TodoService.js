import axios from 'axios'

class TodoService {

    constructor() {        
        this.loadTodos=this.loadTodos.bind(this);
        this.create=this.create.bind(this);
        this.remove=this.remove.bind(this);
        this.update=this.update.bind(this);
    }

    loadTodos() {
        return axios.get('http://localhost:8080/todorest/todos');
    }

    create(todo) {
        return axios.post('http://localhost:8080/todorest/todos',todo);
    }

    remove(id){
        return axios.delete(`http://localhost:8080/todorest/todos/${id}`);
    }

    update(todo) {
        return axios.put('http://localhost:8080/todorest/todos',todo);
    }

}

export default new TodoService();