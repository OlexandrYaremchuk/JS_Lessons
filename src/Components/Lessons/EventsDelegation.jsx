import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import browserJs from "../../img/browser-js.png";
import domFree from "../../img/dom-tree.png";
import htmlParser from "../../img/html-parser.gif";
import jsEngine from "../../img/js-engine.gif";
import liveDomTree from "../../img/live-dom-tree.png";
import afterDelegation from "../../img/afterDelegation.png";
import beforeDelegation from "../../img/beforeDelegation.png";
import eventFlow from "../../img/eventFlow.png";
import eventBubbling from "../../img/eventBubbling.png";

import GitHubBtn from "../GitHubBtn";

import s from "./Lessons.module.css";
import sprite from "../../img/icomoon/sprite.svg";
import Scrollspy from "react-scrollspy";
import { FcHome } from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";
import ReactAce from "react-ace/lib/ace";
const EventsDelegation = () => {
  const codeStyle = materialDark;
  const location = useLocation();
  const locationPathname = location.pathname;

  return (
    <div className={s.lessonsBox}>
      <button className={s.home}>
        <Link to="/Start">
          <FcHome customStyle={{ with: "40vh" }} size="3em" />
        </Link>
      </button>
      <GitHubBtn locationPathname={locationPathname} />

      <div className={s.breadNav}>
        <Scrollspy
          items={["branching", "section-2", "section-3"]}
          currentClassName="is-current"
        >
          <div className={s.breadNavList}>
            <li>
              <a href="#eventShare">Поширення подій</a>
            </li>
            <li>
              <a href="#event_up">Сплив подій</a>
            </li>
            <li>
              <a href="#eventDelegation">Делегування події</a>
            </li>
          </div>
        </Scrollspy>
      </div>
      <div className={s.article}>
        <h1 id="eventShare">Поширення подій</h1>
        <p>
          <strong>Поширення подій (event propagation)</strong> - це термін
          описує життєвий цикл події, який включає три етапи: занурення,
          націлення і спливання. Насправді найчастіше використовують лише фазу
          спливання.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={eventFlow} alt="" />
        </div>
        <p>При настанні події вона проходить через три обов'язкові фази:</p>
        <ul>
          <li>
            <strong> Capturing phase (занурення)</strong> - подія починається на
            <span className={s.Span}>window</span> і тоне (проходить через всі
            предки) до найглибшого цільового елемента на якому відбулася дія,
            наприклад клік.
          </li>
          <li>
            <strong>Target phase (націлювання)</strong> - подія дійшла до
            цільового елемента. Цей етап включає лише повідомлення елемента у
            тому, що у ньому сталося дію.
          </li>
          <li>
            <strong>Bubbling phase (сплив)</strong> - заключна фаза, подія
            спливає від найглибшого, цільового елемента, через всі
            елементи-предки до <span className={s.Span}>window</span>.
          </li>
        </ul>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Поширення часто неправильно використовується як синонім стадії
            спливу. Щоразу, коли відбувається подія, відбувається її поширення.
          </p>
        </div>
        <h1 id="event_up">Сплив подій</h1>
        <p>
          При настанні події, обробники спочатку спрацьовують на вкладеному
          елементі, потім на його батьку, потім вище і так далі, вгору по
          ланцюжку вкладеності. Цей процес називається{" "}
          <strong>спливанням (event bubbling)</strong> , тому що події
          «спливають» від внутрішнього елемента вгору через всіх предків до
          <span className={s.Span}>window</span>, подібно до того, як спливає
          бульбашка повітря у воді.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={eventBubbling} alt="" />
        </div>
        <p>
          Розглянемо приклад, то буде зрозуміліше. Є три вкладені теги{" "}
          <span className={s.Span}>div</span> з обробниками кліку на кожному з
          них.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
<div id="parent">
  Parent
  <div id="child">
    Child
    <div id="descendant">Descendant</div>
  </div>
</div>
`}
        </SyntaxHighlighter>
        <p>
          Випливання гарантує, що клік{" "}
          <span className={s.Span}>#descendant</span> викличе обробник кліка,
          якщо він є, спочатку на самому <div id="span">descendant</div>, потім
          на елементі <span className={s.Span}>#child</span>, далі на елементі{" "}
          <span className={s.Span}>#parent</span> і так далі вгору по ланцюжку
          предків до window. Тому, якщо в прикладі натиснути на{" "}
          <span className={s.Span}>#descendant</span>, то послідовно виведуть{" "}
          <span className={s.Span}>alert</span> для{" "}
          <span className={s.Span}>descendant</span> →
          <span className={s.Span}>child</span> →{" "}
          <span className={s.Span}>parent</span>.
        </p>
        <iframe
          height="500"
          width={"100%"}
          src="https://codepen.io/goit-academy/embed/QWpBwaa?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Спливають майже всі події, наприклад події{" "}
            <span className={s.Span}>focus</span> і
            <span className={s.Span}>blur</span> не спливають, тому існують їх
            спливаючі аналоги -<span className={s.Span}>focusin</span> і{" "}
            <span className={s.Span}>focusout</span>.
          </p>
        </div>
        <h3>
          Властивість <span className={s.Span}>event.target</span>
        </h3>
        <p>
          Незалежно від того, де ми зловили подію під час її спливання, завжди
          можна дізнатися де саме вона відбулася. Найглибший елемент, який
          викликає подію, називається цільовим чи вихідним та доступний як
          <span className={s.Span}>event.target</span>.
        </p>
        <ul>
          <li>
            <span className={s.Span}>event.target</span> - це посилання вихідний
            елемент у якому сталося подія, у процесі випливання він незмінний.
          </li>
          <li>
            <span className={s.Span}>event.currentTarget</span> - це посилання
            поточний елемент якого дійшло спливання, на ньому зараз виконується
            обробник події.
          </li>
        </ul>
        <p>
          Якщо слухач події зареєстрований на верхньому елементі, він «зловить»
          всі кліки всередині, оскільки події спливатимуть до цього елемента.
          Відкрийте консоль у прикладі і покликайте,{" "}
          <span className={s.Span}>event.target</span> це завжди вихідний (і
          найглибший) елемент, на якому був зроблений клік, а{" "}
          <span className={s.Span}>event.currentTarget</span> не змінюється.
        </p>
        <iframe
          height="500"
          width={"100%"}
          src="https://codepen.io/goit-academy/embed/JjWBoqd?default-tab=html%2Cresult
"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <h3>Припинення спливання</h3>
        <p>
          Зазвичай подія спливатиме до елемента{" "}
          <span className={s.Span}>window</span>, викликаючи всі обробники на
          своєму шляху. Але будь-який проміжний обробник може вирішити, що подія
          повністю оброблена і зупинити спливання викликавши метод{" "}
          <span className={s.Span}>stopPropagation()</span>.
        </p>
        <iframe
          height="500"
          width={"100%"}
          src="https://codepen.io/goit-academy/embed/gOmjpwo?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <p>
          Якщо елемент має кілька обробників на одну подію, то навіть при
          припиненні спливання всі вони будуть виконані. Тобто метод
          <span className={s.Span}>stopPropagation()</span> лише перешкоджає
          просуванню події далі. Якщо потрібно повністю зупинити обробку події,
          використовується метод
          <span className={s.Span}>stopImmediatePropagation()</span>. Він не
          тільки запобігає випливанню, але й зупиняє обробку подій на поточному
          елементі.
        </p>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Не припиняйте випливання без необхідності. Припинення спливання
            створює своє підводне каміння, яке потім доводиться обходити.
            Наприклад, аналітика використовує спливання, щоб відстежувати події
            на сторінці.
          </p>
        </div>
        <h1 id="eventDelegation">Делегування подій</h1>
        <p>
          Сплив дозволяє реалізувати один з найкорисніших прийомів - делегування
          подій (event delegation). Він полягає в тому, що якщо є група
          елементів, події яких потрібно обробляти однаково, то додається один
          обробник їхнього спільного предка, замість того, щоб додавати обробник
          кожному елементу. Використовуючи властивість
          <span className={s.Span}>event.target</span> можна отримати посилання
          на цільовий елемент, зрозуміти на якому саме нащадку сталася подія та
          обробити її.
        </p>
        <p>
          Розглянемо делегування з прикладу. Створюємо елемент{" "}
          <span className={s.Span}>div</span>, додаємо до нього довільну
          кількість кнопок, наприклад 100, і реєструємо кожної з них слухача
          події кліка з функцією handleButtonClick.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={beforeDelegation} alt="" />
        </div>
        <p>
          Проблема в тому, що ми маємо сто слухачів подій. Всі вони вказують на
          ту саму функцію слухача, але самих слухачів 100. Що якщо ми
          перемістимо всіх слухачів на загального предка, елемент{" "}
          <span className={s.Span}>div</span> ?
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={afterDelegation} alt="" />
        </div>
        <p>
          Тепер є лише один обробник події кліка і браузеру не потрібно
          зберігати в пам'яті сто різних слухачів. Тобто делегування зводиться
          до трьох простих кроків.
        </p>
        <ol>
          <li>
            Визначити загальний предок групи елементів для відстеження подій.
          </li>
          <li>
            Зареєструвати на предковому елементі обробник події, яку ми хочемо
            відловлювати від групи елементів.
          </li>
          <li>
            У обробнику використовуватиме{" "}
            <span className={s.Span}>event.target</span> вибору цільового
            елемента.
          </li>
        </ol>
        <p>
          Такий підхід полегшує ініціалізацію слухачів однотипних елементів.
          Можна додавати, видаляти або змінювати елементи, при цьому не потрібно
          додавати або видаляти обробники подій вручну.
        </p>
        <h3>Палітра кольорів</h3>
        <p>
          Будемо робити палітру кольорів з можливістю вибрати колір під час
          кліку та відображенням вибраного кольору. Замість того, щоб призначати
          обробник кожному елементу палітри, яких може бути дуже багато,
          повісимо слухач на спільного предка{" "}
          <span className={s.Span}>div.color-palette</span>. У обробнику події
          кліка використовуємо <span className={s.Span}>event.target</span>, щоб
          отримати елемент, на якому відбулася подія і пов'язаний з ним колір,
          який будемо зберігати в атрибуті{" "}
          <span className={s.Span}>data-color</span>.
        </p>
        <iframe
          height="500"
          width={"100%"}
          src="https://codepen.io/goit-academy/embed/GRWBodN?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Обов'язково перевіряємо ціль кліка, щоб це точно була кнопка, ми не
            хочемо обробляти кліки в елемент-контейнер. Для перевірки типу
            елемента використовуємо властивість{" "}
            <span className={s.Span}>nodeName</span>.
          </p>
        </div>
      </div>
    </div>
  );
};
export default EventsDelegation;
