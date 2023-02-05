import React from "react";
import s from "./Lessons.module.css";
import sprite from "../../img/icomoon/sprite.svg";
import ifImg from "../../img/if.png";
import ifElse from "../../img/if-else.png";
import elseIf from "../../img/else-if.png";

import operatorTable1 from "../../img/not-strict-equality.png";
import operatorTable2 from "../../img/strict-equality.png";
import string from "../../img/string-idx.png";
import code1 from "../../img/code1.png";
import booleanOperators from "../../img/boolean-operators.png";
import Scrollspy from "react-scrollspy";

const M1L2 = () => {
  return (
    <div className={s.lessonsBox}>
      <div>
        <Scrollspy
          items={["section-1", "section-2", "section-3"]}
          currentClassName="is-current"
          className={s.breadNav}
        >
          <li>
            <a href="#section-1">Розгалуження</a>
          </li>
          <li>
            <a href="#section-2">Тернарний оператор</a>
          </li>
          <li>
            <a href="#section-3">Інструкція switch</a>
          </li>
          <li>
            <a href="#section-4">Область видимості</a>
          </li>

          <li>
            <a href="#section-5">Цикли</a>
          </li>
        </Scrollspy>
      </div>
      <div className={s.article}>
        <h1>Розгалуження</h1>
        <p>
          Розгалуження використовуються для виконання різного коду залежно від
          умови. Принцип роботи простий - результат умови наводиться до булю
          <span>true</span> або <span>false</span> після чого потік програми
          направляється в ту чи іншу гілку.
        </p>
        <h4>
          Інструкція{" "}
          <strong>
            <span>if</span>
          </strong>
        </h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={ifImg} alt="" />
        </div>
        <pre>
          {`
                 if (умова) {
                // тіло if
                }
                `}
        </pre>
        <p>
          Вхідні дані, що наводяться до булю, називаються{" "}
          <strong>умовою</strong> . Умову поміщають за оператором{" "}
          <span>if</span> у круглих дужках. Якщо умова наводиться до{" "}
          <span>true</span>, то виконується код у фігурних дужках тіла{" "}
          <span>if</span>.
        </p>
        <pre>
          {`
                let cost = 0;
                const subscription = "pro";

                if (subscription === "pro") {
                cost = 100;
                }

                console.log(cost); // 100
                `}
        </pre>
        <p>
          Якщо умова наводиться до <span>false</span>, код у фігурних дужках
          буде пропущено.
        </p>
        <pre>
          {`
            let cost = 0;
            const subscription = "free";

            if (subscription === "pro") {
            cost = 100;
            }

            console.log(cost); // 0
                `}
        </pre>
        <h4>
          Інструкція{" "}
          <strong>
            <span>if...else</span>
          </strong>
        </h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={ifElse} alt="" />
        </div>
        <pre>
          {`
            if (умова) {
            // тіло if
            } else {
            // тіло else
            }
                `}
        </pre>
        <p>
          Розширює синтаксис <span>if</span> тим, що якщо умова наводиться до
          <span>false</span>, виконається код у фігурних дужках після оператора
          <span>else</span>.
        </p>
        <pre>
          {`
            let cost;
            const subscription = "free";

            if (subscription === "pro") {
            cost = 100;
            } else {
            cost = 0;
            }

            console.log(cost); // 0
                `}
        </pre>
        <p>
          Якщо умова наводиться до <span>true</span>, тіло блоку
          <span>else</span> ігнорується.
        </p>
        <pre>
          {`
            let cost;
            const subscription = "pro";

            if (subscription === "pro") {
            cost = 100;
            } else {
            cost = 0;
            }

            console.log(cost); // 100
                `}
        </pre>
        <h3>
          Інструкція{" "}
          <strong>
            <span>else...if</span>
          </strong>
        </h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={elseIf} alt="" />
        </div>
        <p>
          Конструкція <span>if...else</span> може перевірити та зреагувати на
          виконання або невиконання лише однієї умови.
        </p>
        <p>
          Блок <span>else...if</span> дозволяє додати <span>else</span> ще один
          оператор <span>if</span> з умовою. В кінці ланцюжка може бути
          класичний блок <span>else</span>, який виконається тільки у випадку,
          коли жодна з умов не приведеться до <span>true</span>.
        </p>
        <pre>
          {`
            let cost;
            const subscription = "premium";

            if (subscription === "free") {
            cost = 0;
            } else if (subscription === "pro") {
            cost = 100;
            } else if (subscription === "premium") {
            cost = 500;
            } else {
            console.log("Invalid subscription type");
            }

            console.log(cost); // 500
                `}
        </pre>
        При першому ж <span>true</span> перевірки припиняться і виконається лише
        один сценарій, що відповідає цьому <span>true</span>. Тому такий запис
        слід читати як: шукаю перший збіг умови, ігнорую все інше.
      </div>
    </div>
  );
};

export default M1L2;
