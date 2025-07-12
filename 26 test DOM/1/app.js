 function addTodo() {
            const input = document.querySelector('#newTodo');
            const todoText = input.value.trim();

            if (todoText === '') {
                alert('Введите дело!');
                return;
            }

            const li = document.createElement('li');
            li.textContent = todoText;

            li.addEventListener('dblclick', () => {
                li.remove();
            });

            document.querySelector('#todoList').appendChild(li);
            input.value = ''; 
        }