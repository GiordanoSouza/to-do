import React, {useState} from 'react'
import Navbar from '../../components/Navbar'
import styles from './ToDoList.module.css'
import {Button, Divider, Input, Modal, message} from 'antd'
import ToDoServices from '../../services/toDoServices';
import {getErrorMessage} from '../../util/GetError'
import { getUserDetails } from '../../util/GetUser';

function ToDoList() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmitTask = async () => {
    setLoading(true);
    try{
      const userId = getUserDetails()?.userId;
      const data = {
        title,
        description,
        isCompleted: false,
        userId:userId,
      }
      const response = await ToDoServices.createToDo(data);
      console.log(response.data);
      setLoading(false);
      message.success('Task added successfully');
      setIsAdding(false);
    }catch(err){
      console.log(err);
      setLoading(false);
      message.error(getErrorMessage(err));
    }
    
  }
  return (
    <>
      <Navbar activate={"MyTask"} />
      <section className={styles.toDoWrapper}>
        <div className={styles.toDoHeader}>
          <h2>Your Tasks</h2>
          <Input style={{ width: '50%' }} placeholder='search your task here' />
          <div>
            <Button onClick={()=>setIsAdding(true)} type="primary" size="large">Add Task</Button>
          </div>
        </div>
        <Divider />
        <Modal
          confirmLoading={loading}
          title="Add New To Do Task"
          open={isAdding}
          onOk={handleSubmitTask}
          onCancel={() => setIsAdding(false)}
        >
          <Input
            style={{ marginBottom: '1rem' }}
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input.TextArea
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Modal>
      </section>
    </>
  )
}

export default ToDoList