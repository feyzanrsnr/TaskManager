export const waitFor = async (data, ms = 500) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, ms);
    });
  
  export const getTasks = async () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return waitFor(tasks);
  };
  
  export const addTask = async (task) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const newTask = {
      id: crypto.randomUUID(), // Benzersiz bir ID oluştur
      name: task.name || "Untitled Task", // Eğer name yoksa varsayılan değer ata
      description: task.description || "No description", // Aynı şekilde description da kontrol edilmeli
      completed: task.completed ?? false, // Eğer completed verilmediyse false olsun
    };

    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    return waitFor(newTask);
  };
  
  export const deleteTask = async (id) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const newTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    return waitFor(newTasks);
  };
  
  export const completeTask = async (id) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const task = tasks.find((task) => task.id === id);
    task.completed = !task.completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    return waitFor(task);
  };
  
  export const getTask = async (id) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const task = tasks.find((task) => task.id === id);
    return waitFor(task);
  };
  
  export const updateTask = async (task) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const index = tasks.findIndex((storedTask) => storedTask.id === task.id);
    tasks[index] = task;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    return waitFor(task);
  };