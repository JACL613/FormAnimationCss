import "./styles.css";
import { useEffect } from "react";
import FormLogin from "./formLogin";
import FormRegister from "./formRegister";

export default function App() {
  useEffect(() => {
    const labels = document.querySelectorAll(" .form__control label");
    labels.forEach((label) => {
      label.innerHTML = label.innerText
        .split("")
        .map(
          (letter, idx) =>
            `<span style="transition-delay:${idx * 60}ms">${letter}</span>`
        )
        .join("");
    });
  }, []);
  function activedButtom(p) {
    let buttons = document.querySelectorAll(".buttom");
    buttons.forEach((item) => item.classList.remove("activeBtn"));
    buttons[p].classList.add("activeBtn");
  }
  function activedR() {
    let form = document.querySelector(".form__login");
    let forms = document.querySelectorAll(".form");
    forms.forEach((item) => item.classList.remove("activedL"));
    form.classList.add("activedR");
  }
  function activedL() {
    let form = document.querySelector(".form__register");
    let forms = document.querySelectorAll(".form");

    forms.forEach((item) => item.classList.remove("activedR"));
    form.classList.add("activedL");
  }
  return (
    <div className="App">
      <div className="card card__transparent">
        <div className="card__header">
          <button
            className="buttom buttom__transparent"
            onClick={() => {
              activedR();
              activedButtom(0);
            }}
          >
            login
          </button>
          |
          <button
            className="buttom buttom__transparent"
            onClick={() => {
              activedL();
              activedButtom(1);
            }}
          >
            register
          </button>
        </div>
        <FormLogin />
        <FormRegister />
      </div>
    </div>
  );
}
