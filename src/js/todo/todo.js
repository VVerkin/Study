'use strict';

const base = {
  employee: 'Петров Сергей Иванович',
  todo: [
    {
      id: 'td1',
      author: 'Денис Петрович',
      post: 'Выполнить отгрузку пылесосов',
      ready: false,
    },
    {
      id: 'td2',
      author: 'Борис Федорович',
      post: 'Отправить бригабу починить оборудование',
      ready: true,
    },
  ],
  check(id) {
    console.log(id);
  },
  addTodo(author, post) {
    const todo = {
      id: 'td' + (base.todo.length + 1),
      author,
      post,
      ready: false,
    };
    base.todo.push(todo);
    console.log(todo);
  },
};

base.check(24);
base.addTodo('Максим', 'Привет мир!');

