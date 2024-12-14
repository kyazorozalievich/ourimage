"use client";
import { useState } from "react";
import scss from "./HomePage.module.scss";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const [eyes, setEyes] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();

  function scanerPassword() {
    if (password === "11.07.2024") {
      router.push("/main");
    } else {
      toast.error("Неверный пароль!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <section className={scss.homePage}>
      <div className="container">
        <div className={scss.content}>
          <ToastContainer />
          <div className={scss.block}>
            <h2>
              Введите пароль для <br /> входа
            </h2>
            <div className={scss.input}>
              <input
                type={eyes ? "text" : "password"}
                placeholder="Введите пароль..."
                onChange={(e) => setPassword(e.target.value)}
              />
              <a>
                {eyes ? (
                  <IoEye onClick={() => setEyes(false)} />
                ) : (
                  <IoEyeOff onClick={() => setEyes(true)} />
                )}
              </a>
            </div>
            <button onClick={() => scanerPassword()}>Войти</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
