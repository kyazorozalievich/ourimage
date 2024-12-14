"use client";
import { usePostTodoMutation, useUploadFileMutation } from "@/redux/api/crut";
import scss from "./Welcome.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { RiImageAddLine } from "react-icons/ri";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IFormInput {
  file: string;
}

const Welcome = () => {
  const [postTodoMutation] = usePostTodoMutation();
  const [uploadFileMutation, { isLoading, isSuccess }] =
    useUploadFileMutation();
  const { register, handleSubmit } = useForm<IFormInput>();
  const [isUploading, setIsUploading] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const file = data.file[0];
    const formData = new FormData();
    formData.append("file", file);

    const { data: responseData } = await uploadFileMutation(formData);
    const newData = {
      img: responseData?.url!,
    };
 
    if (file) {
      setIsUploading(true);
      toast.success("Фото успешно добавлен!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      await postTodoMutation(newData);
      setIsUploading(false);
    }
  };
  return (
    <section className={scss.Welcome}>
      <div className={scss.bg}>
        <div className="container">
          <ToastContainer/>
          <div className={scss.content}>
            <h1>Это начало нашей истории , и оно начинается с этого момента</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="file-upload" className={scss.fileButton}>
                <RiImageAddLine />
                Выбрать фото
              </label>
              <input
                type="file"
                id="file-upload"
                {...register("file", { required: true })}
              />
              <button type="submit">
                {isUploading ? (
                  <span>Loading...</span>
                ) : (
                  <span>
                    Добавить <MdOutlineAddPhotoAlternate />
                  </span>
                )}
              </button>
            </form>
            <p>
              Каждая наша общая фотография – это маленькая история,
              запечатлённая в кадре. Взгляни на них: вот ты улыбаешься, я смотрю
              на тебя с теплом, а вокруг кажется, будто весь мир остановился.
              Наши лица, наши эмоции – всё это напоминает о моментах, когда
              счастье было настолько реальным, что его можно было потрогать.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
