import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import s from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Scrollspy from "react-scrollspy";

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <ul className={s.navbarList}>
        <Scrollspy items={[]}>
          <Link to="/GitHub">
            <li id="GitHub">Основи Git та GitHub</li>
          </Link>
          <Link to="/M1L1">
            <li id="M1L1">Модуль 1 - Заняття 1 - Змінні та типи</li>
          </Link>
          <Link to="/M1L2">
            <li id="M1L2">Модуль 1 - Заняття 2 - Розгалуження та цикли</li>
          </Link>
          <Link to="/Arrey">
            <li id="Arrey">Модуль 2 - Заняття 3 - Масиви</li>
          </Link>
          <Link to="/Function">
            <li id="Function">Модуль 2 - Заняття 4 - Функції</li>
          </Link>
          <Link to="/Object">
            <li id="Object">Модуль 3 - Заняття 5 - Об'єкти</li>
          </Link>

          <li>Модуль 3 - Заняття 6 - Деструктуризація</li>
          <li>Модуль 4 - Заняття 7 - CallBack та стрілочні функції</li>
          <li>Модуль 4 - Заняття 8 - Перебираючі методи масиву</li>
          <li>Модуль 5 - Заняття 9 - Ключове слово this</li>
          <li>Модуль 5 - Заняття 10 - Прототипи та класи </li>
          <li>Модуль 6 - Заняття 11 - DOM</li>
          <li>Модуль 6 - Заняття 12 - Події</li>
          <li>Модуль 7 - Заняття 13 - Делегування подій</li>
          <li>Модуль 7 - Заняття 14 - throttle/debounce и lazyload </li>
          <li>Модуль 8 - Заняття 15 - Модульність коду</li>
          <li>Модуль 8 - Заняття 16 - Веб - сховище</li>
          <li>Модуль 9 - Заняття 17 - Таймери та час</li>
          <li>Модуль 9 - Заняття 18 - Проміси</li>
          <li>Модуль 10 - Заняття 19 - HTTP-запити</li>
          <li>Модуль 10 - Заняття 20 - Пагінація</li>
          <li>Модуль 11 - Заняття 21 - CRUD</li>
          <li>Модуль 11 - Заняття 22 - Синтаксис async/await</li>
        </Scrollspy>
      </ul>
    </div>
  );
};
export default Navbar;
