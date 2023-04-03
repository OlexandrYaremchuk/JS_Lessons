import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import s from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Scrollspy from "react-scrollspy";
import y from "../Header/toggle.module.css";
const Navbar = () => {
  return (
    <nav className={(s.navbar, y.menu)}>
      <ul className={s.navbarList}>
        <Scrollspy items={[]}>
          <Link to="/GitHub">
            <li className="list" id="GitHub">
              Основи Git та GitHub
            </li>
          </Link>
          <Link to="/M1L1">
            <li className="list" id="M1L1">
              Модуль 1 - Заняття 1 - Змінні та типи
            </li>
          </Link>
          <Link to="/M1L2">
            <li className="list" id="M1L2">
              Модуль 1 - Заняття 2 - Розгалуження та цикли
            </li>
          </Link>
          <Link to="/Arrey">
            <li className="list" id="Arrey">
              Модуль 2 - Заняття 3 - Масиви
            </li>
          </Link>
          <Link to="/Function">
            <li className="list" id="Function">
              Модуль 2 - Заняття 4 - Функції
            </li>
          </Link>
          <Link to="/Object">
            <li className="list" id="Object">
              Модуль 3 - Заняття 5 - Об'єкти
            </li>
          </Link>
          <Link to="/SpreadRest">
            <li className="list" id="Dest">
              Модуль 3 - Заняття 6 - Деструктуризація та spread/rest
            </li>
          </Link>
          <Link to="/CallBack">
            <li className="list">
              Модуль 4 - Заняття 7 - CallBack та стрілочні функції
            </li>
          </Link>
          <Link to="/ArrayMethod">
            <li className="list">
              Модуль 4 - Заняття 8 - Перебираючі методи масиву
            </li>
          </Link>
          <Link to="/ArrayMethod">
            <li className="list">
              Модуль 4 - Заняття 8 - Перебираючі методи масиву
            </li>
          </Link>
          <Link to="/This">
            <li className="list">Модуль 5 - Заняття 9 - Ключове слово this</li>
          </Link>

          <li className="list">Модуль 5 - Заняття 10 - Прототипи та класи </li>
          <li className="list">Модуль 6 - Заняття 11 - DOM</li>
          <li className="list">Модуль 6 - Заняття 12 - Події</li>
          <li className="list">Модуль 7 - Заняття 13 - Делегування подій</li>
          <li className="list">
            Модуль 7 - Заняття 14 - throttle/debounce и lazyload{" "}
          </li>
          <li className="list">Модуль 8 - Заняття 15 - Модульність коду</li>
          <li className="list">Модуль 8 - Заняття 16 - Веб - сховище</li>
          <li className="list">Модуль 9 - Заняття 17 - Таймери та час</li>
          <li className="list">Модуль 9 - Заняття 18 - Проміси</li>
          <li className="list">Модуль 10 - Заняття 19 - HTTP-запити</li>
          <li className="list">Модуль 10 - Заняття 20 - Пагінація</li>
          <li className="list">Модуль 11 - Заняття 21 - CRUD</li>
          <li className="list">
            Модуль 11 - Заняття 22 - Синтаксис async/await
          </li>
        </Scrollspy>
      </ul>
    </nav>
  );
};
export default Navbar;
