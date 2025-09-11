const todo = document.querySelector("#todo-input");
const form = document.querySelector(".todo-form");
const taskList = document.querySelector("#task-list")

const tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
console.log(tasks);
form.onsubmit = (e) => {
    e.preventDefault();
    // lấy ra một hành động từ thẻ input


    const newTodo = {
        nameDo : todo.value ,
        isCompleted:false
    }
    if(!newTodo.nameDo){
        alert("tên công việc không được để trống")
        return;
    }

    const existTask = tasks.find(task => task.name === newTodo.name )
    if(existTask){
        alert(`Tên công việc ${newTask.name} đã tồn tại `);
        return;
    }
    // thêm vào danh sách mảng task[] vừa tạo;
        tasks.unshift(newTodo);

        renderTask();

        localStorage.setItem("tasks" , JSON.stringify(tasks));

        console.log(tasks);

        todo.value = "";
};

function renderTask(){
    if(!tasks.length){
        taskList.innerHTML = `<li class="task-item">
                    <span class="task-title">danh sách trống</span>
                    <div class="task-action">
                        <button class="task-btn edit">Edit</button>
                        <button class="task-btn done">Mark as done</button>
                        <button class="task-btn delete">Delete</button>
                    </div>
                </li>`;
        return;
    }

     const html = tasks.map(task => {
            return ` <li class="task-item">
                    <span class="task-title">${task.nameDo}</span>
                    <div class="task-action">
                        <button class="task-btn edit">Edit</button>
                        <button class="task-btn done">Mark as done</button>
                        <button class="task-btn delete">Delete</button>
                    </div>
                </li>`
    }).join("");
    console.log(html);
    taskList.innerHTML = html;
}


renderTask();