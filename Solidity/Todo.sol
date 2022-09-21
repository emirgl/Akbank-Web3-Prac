// SPDX-License-Identifier: MIT
pragma solidity 0.8.7; // version

//nochancetochange

contract TodoList{
    struct Todo {
        string note;
        bool completed;
    }

    Todo[] public todos;   // array list 

    function setNote(string calldata _note) external {     // create a new Note
        todos.push(Todo({
            note: _note,
            completed: false
        }));
    }

    function updateNote(uint _index , string calldata _note) external {    // update Notes on list 
        todos[_index].note = _note;
    }

    function getNote(uint _index) external view returns (string memory, bool){    // get Note with index 
        Todo memory todo = todos[_index];
        return (todo.note, todo.completed);
    }

    function markAsCompleted(uint _index) external {       // complete the Note
        todos[_index].completed = true;
    }
}
