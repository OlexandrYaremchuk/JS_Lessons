import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import browserJs from "../../img/browser-js.png";
import domFree from "../../img/dom-tree.png";
import htmlParser from "../../img/html-parser.gif";
import jsEngine from "../../img/js-engine.gif";
import pageFold from "../../img/pageFold.png";
import leadingDebounce from "../../img/leadingDebounce.png";
import trailingDebounce from "../../img/trailingDebounce.png";
import throttle from "../../img/throttle.png";

import GitHubBtn from "../GitHubBtn";

import s from "./Lessons.module.css";
import sprite from "../../img/icomoon/sprite.svg";
import Scrollspy from "react-scrollspy";
import { FcHome } from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";
import ReactAce from "react-ace/lib/ace";

const Throttle = () => {
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
              <a href="#unGuamp">Усунення стрибків</a>
            </li>
            <li>
              <a href="#download">Відкладене завантаження</a>
            </li>
          </div>
        </Scrollspy>
      </div>
      <div className={s.article}>
        <h1 id="unGuamp">Дросельний засув та усунення стрибків</h1>
        <p>
          Досить часто необхідно обробити зміну розміру вікна, скролл,
          переміщення миші або текстове введення користувача. Це може бути
          сортування колекції та відтворення результатів, анімація елемента,
          маніпуляції з DOM-деревом та інше. Все це покращує UX (user
          experience), але, на жаль, дає велике навантаження на браузер через
          те, що обробники подій спрацьовують дуже часто. Такі події неофіційно
          називають «chatty events».
        </p>
        <p>
          Наприклад, якщо додати слухача події на скролл, при прокручуванні
          сторінки мишкою можна викликати близько 30 подій в секунду. Повільне
          прокручування (свайп) у смартфоні може викликати до 100 подій за
          секунду. Якщо обробник події скролла виконує важкі обчислення та інші
          маніпуляції DOM, гарантовано будуть проблеми з продуктивністю.
        </p>
        <iframe
          height="500"
          width={"100%"}
          src="https://codepen.io/goit-academy/embed/LYWBxzr?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <p>
          <strong>Throttle</strong> і <strong>Debounce</strong> - це два схожі,
          але різні за поведінкою прийому, що дозволяють контролювати скільки
          разів ми дозволяємо виконання функції з часом. Використовуємо їх
          реалізацію з бібліотеки <a href="https://lodash.com/">Lodash</a> .
        </p>
        <h3>Підключення бібліотеки</h3>
        <p>
          <strong>CDN (Content Delivery Network)</strong> – це географічно
          розподілена мережева інфраструктура, що забезпечує швидку доставку
          контенту користувачам веб-сервісів та сайтів. Сервери, що входять до
          складу CDN, географічно розташовуються таким чином, щоб зробити час
          відповіді для користувачів сайту/сервісу мінімальним.
        </p>
        <p>
          Підключимо до проекту бібліотеку{" "}
          <a href="https://lodash.com/">Lodash</a> через CDN. Для цього
          використовуємо сервіс{" "}
          <a href="https://cdnjs.com/libraries/lodash.js">cdnjs.com</a> і додамо
          посилання на скрипт бібліотеки в кінці HTML-документа, як показано в
          прикладі.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document title</title>
  </head>
  <body>
    <!-- HTML-markup -->

    <!-- Lodash library script file -->
    <script
      async
      src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
      integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <!-- Your script file -->
    <script defer src="path/to/script.js"></script>
  </body>
</html>
                `}
        </SyntaxHighlighter>
        <p>
          Тепер ми можемо отримати доступ до бібліотеки у нашому скрипті. При
          підключенні бібліотек через CDN, на об'єкт{" "}
          <span className={s.Span}>window</span> додається властивість, в якому
          зберігається те, що надає бібліотека. Ім'я цієї властивості унікальне
          для бібліотеки та описано у її документації. Для Lodash це символ
          нижнього підкреслення <span className={s.Span}>_</span>. Для перевірки
          використовуємо метод{" "}
          <a href="https://lodash.com/docs/4.17.15#add">add</a> , який просто
          складає два числа.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
const result = _.add(2, 3);
console.log(result); // 5                `}
        </SyntaxHighlighter>
        <p>
          Прийом <span className={s.Span}>throttle</span> контролює кількість
          разів, яке функція може бути викликана протягом проміжку часу. Тобто
          дозволяє викликати функцію не частіше ніж один раз на{" "}
          <span className={s.Span}>N</span> мілісекунд, гарантуючи її регулярне
          виконання.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={throttle} alt="" />
        </div>
        <p>
          Використовуючи <span className={s.Span}>throttle</span> ми не
          контролюємо, як часто браузер генеруватиме події. Ми лише беремо
          контроль над частотою виконання функції обробника події.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
document.addEventListener(
  "scroll",
  _.throttle(() => {
    console.log("Scroll handler call every 300ms");
  }, 300)
);                `}
        </SyntaxHighlighter>
        <p>
          Реалізація з бібліотеки Lodash очікує першим аргументом функцію, яку
          необхідно «гальмувати», а другим кількість мілісекунд. Повертає нову
          функцію передачі в слухач події.
        </p>
        <iframe
          height="500"
          width={"100%"}
          src="https://codepen.io/goit-academy/embed/YzZjNBM?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <p>
          Прийом <span className={s.Span}>debounce</span> гарантує, що функція
          буде викликана тільки якщо між подіями буде пауза{" "}
          <span className={s.Span}>N</span> мілісекунд. Наприклад, поки
          користувач скроли сторінку функція не викличеться, але як тільки він
          перестав скролить, функція буде викликана через 300 мілісекунд. Якщо
          скролл відновиться раніше, ніж через 300 мілісекунд після паузи,
          функція не викликається.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={trailingDebounce} alt="" />
        </div>
        <p>
          Використовуючи <span className={s.Span}>debounce</span> ми не керуємо
          тим як часто браузер буде генерувати події, а лише беремо контроль над
          частотою виконання функції обробника події.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
document.addEventListener(
  "scroll",
  _.debounce(() => {
    console.log("Scroll handler call after 300ms pause");
  }, 300)
);                `}
        </SyntaxHighlighter>
        <p>
          Реалізація з бібліотеки Lodash очікує першим аргументом на функцію, а
          другим на кількість мілісекунд. Повертає нову функцію передачі в
          слухач події.
        </p>
        <iframe
          height="500"
          width={"100%"}
          src="https://codepen.io/goit-academy/embed/rNyryZP?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <h3>
          Режими <span className={s.Span}>debounce</span> методу
        </h3>
        <p>
          За замовчуванням метод <span className={s.Span}>debounce</span> працює
          в режимі, коли функція викликається через{" "}
          <span className={s.Span}>N</span> мілісекунд після паузи між потоками
          подій. Цей режим називається{" "}
          <span className={s.Span}>trailing edge</span>
          (наприкінці). Є завдання коли функцію треба викликати відразу при
          настанні першої події в потоці, а потім ігнорувати всі наступні події,
          до паузи між ними, наприклад, у 300 мілісекунд. На старті наступного
          потоку подій ця поведінка повторюється. Такий режим називається
          <span className={s.Span}>leading edge</span> (на початку).
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={leadingDebounce} alt="" />
        </div>
        <p>
          Методу <span className={s.Span}>debounce</span> бібліотеки Lodash
          можна передати необов'язковий третій аргумент - об'єкт параметрів у
          якому є дві властивості <span className={s.Span}>leading</span> (за
          промовчанням false) та
          <span className={s.Span}>trailing</span>(за умовчанням true). Ці
          налаштування змінюють режим і вказують, чи функція запускатиметься на
          початку потоку подій або в кінці після паузи.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
document.addEventListener(
  "scroll",
  _.debounce(
    () => {
      console.log("Scroll handler call on every event stream start");
    },
    300,
    {
      leading: true,
      trailing: false,
    }
  )
);                `}
        </SyntaxHighlighter>
        <p>
          На практиці режим <span className={s.Span}>leading</span> може
          застосовуватися, наприклад, у разі коли необхідно виконати функцію
          відправки запиту на сервер при першому кліку кнопки, після чого
          ігнорувати всі натискання кліки до паузи. У прикладі реалізований{" "}
          <span className={s.Span}>debounce</span> в обох режимах для події{" "}
          <span className={s.Span}>scroll</span>.
        </p>
        <iframe
          height="500"
          width={"100%"}
          src="https://codepen.io/goit-academy/embed/KKWBqjm?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <h1 id="download">Відкладене завантаження</h1>
        <p>
          Веб-сторінки містять велику кількість зображень, які роздмухують
          розмір сторінок і впливають на швидкість їх завантаження. Більшість
          зображень знаходяться за межами першого екрана (за кадром, below the
          fold), тому користувач побачить їх лише після того, як прокрутить
          сторінку. Це означає, що ви, можливо, завантажуєте те, що користувач
          ніколи не побачить, але витратить на цей час і можливо гроші.
          Завантаження некритичного контенту також витрачає батарею мобільних
          пристроїв та інші системні ресурси.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={pageFold} alt="" />
        </div>
        <p>
          Терміни above the fold (у кадрі) і below the fold (за кадром) прийшли
          з часів до появи цифрових технологій. Якщо ви коли-небудь купували
          газету в кіоску, їх зазвичай складають навпіл, щоб перехожі могли
          бачити верхню половину першої сторінки. Якщо їм не сподобається те, що
          вони побачать, вони пройдуть повз, і продажі впадуть. Ось чому так
          важливо розміщувати найцікавіший контент у верхній частині сторінки.
        </p>
        <p>
          <strong>Відкладене завантаження (lazy-loading)</strong> – це прийом,
          який відкладає завантаження некритичних ресурсів під час завантаження
          сторінки. Натомість ці некритичні ресурси завантажуються лише за
          потребою. Це знижує початкову вагу ресурсів, які необхідно завантажити
          для відображення сторінки, використання системних ресурсів, підвищує
          час її завантаження та подальшого рендеру. Все це позитивно впливає на
          продуктивність.
        </p>
        <p>
          Ви, напевно, вже бачили в дії ліниве завантаження. Вона виглядає
          приблизно так:
        </p>
        <ul>
          <li>
            Ви потрапляєте на сторінку і починаєте прокручувати її в міру
            читання вмісту.
          </li>
          <li>
            У якийсь момент ви прокручуєте сторінку до зображення-заглушки.
          </li>
          <li>
            Зображення-заглушка раптово замінюється справжнім зображенням.
          </li>
        </ul>
        <h3>
          Атрибут <span className={s.Span}>loading</span>
        </h3>
        <p>
          Раніше розробникам доводилося покладатися лише на можливості
          JavaScript. Сучасні браузери можуть робити це без JavaScript, але, на
          жаль, не всі. HTML-атрибут <span className={s.Span}>loading</span>{" "}
          тега <span className={s.Span}>img</span> підтримується нативно у всіх
          сучасних браузерах крім Safari і дозволяє браузеру відкласти
          завантаження закадрових зображень доти, доки користувач не прокрутить
          до них сторінку.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
<img src="my-image.jpg" loading="lazy" alt="Image description" />defined
                `}
        </SyntaxHighlighter>
        <p>Підтримує три значення:</p>
        <ul>
          <li>
            <span className={s.Span}>lazy</span> - браузер виконає відкладене
            завантаження зображення.
          </li>
          <li>
            <span className={s.Span}>eager</span> - зображення буде завантажено
            при першій нагоді, тобто без відкладеного завантаження.
          </li>
          <li>
            <span className={s.Span}>auto</span> - браузер сам визначає,
            виконувати відкладене завантаження чи ні. Значення за замовчуванням.
          </li>
        </ul>
        <p>
          Ми не можемо дізнатися чи змінити поведінку та механізм визначення
          часу відкладеного завантаження зображення браузером. Головне, що
          браузер завантажить такі зображення незадовго до того, як вони
          потраплять до області перегляду.
        </p>
        <p>
          Відкрийте вкладку <span className={s.Span}>Network</span> в
          інструментах розробника та виберіть фільтр{" "}
          <span className={s.Span}>Img</span>, щоб відобразити лише завантаження
          зображень. Після цього прокручуйте приклад і спостерігайте як
          довантажуватимуться закадрові зображення котів. Браузери, що
          підтримують атрибут, <span className={s.Span}>loading</span> будуть
          завантажувати зображення відкладено, а браузери без підтримки
          завантажать всі зображення відразу.
        </p>
        <iframe
          height="500"
          width={"100%"}
          src="https://codepen.io/goit-academy/embed/qBryJej?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
        <h3>
          Бібліотека <strong>lazysizes</strong>
        </h3>
        <p>
          Щоб забезпечити кросбраузерність, тобто сумісність з старішими
          браузерами, або такими, що ще не підтримують це нативно, можна
          використовувати ряд існуючих JavaScript бібліотек. Одні з
          найпопулярніших це{" "}
          <a href="https://afarkas.github.io/lazysizes/index.html">lazysizes</a>
          {""},{" "}
          <a href="https://www.andreaverlicchi.eu/vanilla-lazyload/">
            vanilla-lazyload
          </a>
          {""}і <a href="https://apoorv.pro/lozad.js/">lozad.js</a> . Вибір
          бібліотеки зводиться до набору можливостей та особистих переваг. Ми
          розберемо бібліотеку
          <a href="https://afarkas.github.io/lazysizes/index.html">lazysizes</a>
        </p>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Нативна підтримка краща і більш продуктивна, ніж використання
            бібліотек, але вони гарантовано працюють у всіх браузерах і можуть
            надавати розширені можливості відкладеного завантаження яких ще
            немає в стандарті.
          </p>
        </div>
        <p>
          Перше, що необхідно зробити, це підключити бібліотеку до проекту,
          використовуючи сервіс{" "}
          <a href="https://cdnjs.com/libraries/lazysizes">cdnjs.com</a>
          {""}. Тег із посиланням на скрипт додається в кінець{" "}
          <span className={s.Span}>body</span>, також як ми це робили для
          бібліотеки Lodash.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
Index.html

<body>
  <!-- HTML-markup -->

  <!-- Lazysizes library script file -->
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
    integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  ></script>
  <!-- Your script file -->
  <script defer src="path/to/script.js"></script>
</body>                `}
        </SyntaxHighlighter>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Бібліотека <span className={s.Span}>lazysizes</span>{" "}
            самоініціалізується під час завантаження на сторінку. Тобто для
            базового використання JavaScript нічого робити не треба. Повний
            список її можливостей наведено у{" "}
            <a href="https://afarkas.github.io/lazysizes/index.html">
              документації
            </a>
          </p>
        </div>
        <p>
          Всім зображенням, які необхідно завантажувати відкладено, задаємо клас
          <span className={s.Span}>lazyload</span> і замінюємо атрибут{" "}
          <span className={s.Span}>src</span> на
          <span className={s.Span}>data-src</span>. Це потрібно бібліотеці{" "}
          <span className={s.Span}>lazysizes</span> для правильної роботи.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
index.html

<img class="lazyload" data-src="path/to/my-image.jpg" alt="Generic alt" />                `}
        </SyntaxHighlighter>
        <p>
          Поки зображення завантажується, можна показувати заповнювач низької
          якості. Ця техніка називається LQIP (Low Quality Image Placeholder). Є
          багато варіантів реалізації LQIP, але спочатку буде показувати один
          стандартний заповнювач замість всіх зображень. Для цього додаємо
          атрибут src, значенням якого буде посилання на зображення-заповнювач.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
index.html

<img
  class="lazyload"
  src="path/to/lqip-placeholder.jpg"
  data-src="path/to/my-image.jpg"
  alt="Generic alt"
/>                `}
        </SyntaxHighlighter>
        <p>
          Коли завантажено зображення, бібліотека{" "}
          <span className={s.Span}>lazysizes</span> додає елементу клас{" "}
          <span className={s.Span}>lazyloaded</span>. Це можна використовувати
          для застосування CSS-ефектів під час завантаження зображення.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
.blur-up {
  filter: blur(5px);
  transition: filter 400ms;
}

.blur-up.lazyloaded {
  filter: blur(0);
}                `}
        </SyntaxHighlighter>
        <p>
          Після оголошення стилів додаємо клас{" "}
          <span className={s.Span}>blur-up</span> тегам{" "}
          <span className={s.Span}>img</span>.
        </p>
        <SyntaxHighlighter language="javascript" style={codeStyle}>
          {`
index.html

<img
  class="lazyload blur-up"
  src="path/to/lqip-placeholder.jpg"
  data-src="path/to/my-image.jpg"
  alt="Generic alt"
/>                `}
        </SyntaxHighlighter>
        <p>
          Застосуємо всі ці кроки на прикладі, додавши кросбраузерну підтримку
          відкладеного завантаження зображень нашому сайту про котів. Тепер
          навіть Safari виконує відкладене завантаження зображень.
        </p>
        <iframe
          height="500"
          width={"100%"}
          src="https://codepen.io/goit-academy/embed/BaWPbOB?default-tab=html%2Cresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
      </div>
    </div>
  );
};
export default Throttle;
