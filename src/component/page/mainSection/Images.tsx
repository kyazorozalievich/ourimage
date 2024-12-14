"use client";
import { useGetTodosQuery } from "@/redux/api/crut";
import scss from "./Images.module.scss";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css';

const Images = () => {
  const { data } = useGetTodosQuery();

  console.log(data?.map((el)=> el.img), 'hello');
  
  return (
    <section className={scss.Images}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.cards}>
            {data?.map((item) => (
              <div key={item._id} className={scss.todoItem}>
                {item.img ? ( 
                  <Zoom>
                    <Image 
                      width={150} 
                      height={200} 
                      src={item.img} 
                      alt="photo" 
                    />
                  </Zoom>
                ) : (
                  <p>Нет изображения</p> 
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Images;
