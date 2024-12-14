"use client";
import { useDeleteTodoMutation, useGetTodosQuery } from "@/redux/api/crut";
import scss from "./DeleteImg.module.scss";
import Image from "next/image";

const DeleteImg = () => {
      const { data } = useGetTodosQuery();
      const [deleteTodoMutation] = useDeleteTodoMutation();
    
  return (
    <section className={scss.DeleteImg}> 
      <div className="container">
        <div className={scss.content}>
          {data?.map((item) => (
            <div key={item._id} className={scss.todoItem}>
              <Image width={150} height={200} src={item.img} alt="photo" />
              <button onClick={() => deleteTodoMutation(item._id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeleteImg;
