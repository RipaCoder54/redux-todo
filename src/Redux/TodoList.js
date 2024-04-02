import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addTasks, deleteTask, editTasks } from "./ActionTodo";

function TodoList() {
  const List = useSelector((state) => state);
  const dispatch = useDispatch();
  const todoList = List.todolist;
  console.log(todoList, "list");
  const [addData, setAddData] = useState("");
  const [edit, setEdit] = useState(null);
  const [hideBtn, setHideBtn] = useState(true);

  function addTask() {
    if (addData === "") {
      alert("Please enter the task");
    } else {
      let obj = {
        id: Math.random(),
        task: addData,
      };
      dispatch(addTasks(obj));
      setAddData("");
    }
  }
  function updateData(id) {
    // console.log("upd",id);
    let upd = todoList.filter((val) => {
      return val.id === id;
    });
    //console.log(upd, "upd");
    setAddData(upd[0].task);
     setHideBtn(false);
    setEdit(id);
    console.log(edit);
  }
  function editTask(){
    let obj = {
      id: edit,
      task: addData
    }
    console.log(obj);
    dispatch(editTasks(obj));
    setHideBtn(true);
    setAddData("");
  }

  return (
    <>
      <div style={{ textAlign: "center" }} className="mt-3">
        <input
          type="text"
          placeholder="Add Task"
          value={addData}
          onChange={(e) => setAddData(e.target.value)}
        />
        {hideBtn ? <button onClick={addTask}>Add Task</button> : <button onClick={editTask}>Edit Task</button>}
        
      </div>
      <div style={{ textAlign: "center" }} className="mt-5">
        <h2>TodoList</h2>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Serial No</th>
              <th scope="col">Task</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((item, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{item.task}</td>
                  <td>
                    <button class="ms-2" onClick={() => updateData(item.id)}>
                      Edit
                    </button>
                    <button
                      class="ms-3"
                      onClick={() => dispatch(deleteTask(item.id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TodoList;
