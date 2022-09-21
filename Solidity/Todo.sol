// SPDX-License-Identifier: MIT
pragma solidity 0.8.7; // version

contract TodoList{
    struct Todo {
        string note;
        bool completed;
    }

    Todo[] public todos;

    function setNote(string calldata _note) external {
        todos.push(Todo({
            note: _note,
            completed: false
        }));
    }

    function updateNote(uint _index , string calldata _note) external {
        todos[_index].note = _note;
    }

    function getNote(uint _index) external view returns (string memory, bool){
        Todo memory todo = todos[_index];
        return (todo.note, todo.completed);
    }

    function markAsCompleted(uint _index) external {
        todos[_index].completed = true;
    }
}
