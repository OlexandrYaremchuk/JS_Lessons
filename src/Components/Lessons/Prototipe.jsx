import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import oop from "../../img/oop.png";
import oop2 from "../../img/oop2.png";
import GitHubBtn from "../GitHubBtn";

import s from "./Lessons.module.css";
import sprite from "../../img/icomoon/sprite.svg";
import Scrollspy from "react-scrollspy";
import { FcHome } from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";

const Prototipe = () => {
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
              <a href="#OOP">Обʼєктно-орієнтоване-програмування</a>
            </li>
            <li>
              <a href="#proto">Прототипне успадкування</a>
            </li>
            <li>
              <a href="#class">Класи</a>
            </li>
          </div>
        </Scrollspy>
      </div>
      <div className={s.article}>
        <h1 id="OOP">Об'єктно-орієнтоване програмування</h1>
        <p>
          <strong>Процедурне програмування</strong> - набір явно не пов'язаних
          функцій і змінних для зберігання та обробки інформації. Цей підхід
          простий і прямолінійний і підходить для завдань, де немає тісно
          пов'язаних сутностей (даних і функцій для їх обробки).
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={oop} alt="" />
        </div>
        <p>
          Розглянемо приклад процедурного коду де є змінні та функція для
          підрахунку результату.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={codeStyle}
          customStyle={{ paddingLeft: "6vh" }}
        >
          {`
const baseSalary = 30000;
const overtime = 10;
const rate = 20;

const getWage = (baseSalary, overtime, rate) => {
  return baseSalary + overtime * rate;
};

getWage(baseSalary, overtime, rate);               `}
        </SyntaxHighlighter>
        <p>
          <strong>Об'єктно-орієнтоване програмування (ООП)</strong> -
          методологія, заснована на представленні програми як сукупності
          об'єктів, кожен із яких містить дані (властивості) і методи взаємодії
          із нею.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={oop2} alt="" />
        </div>
        <p>
          Використовуємо ООП, зібравши дані в об'єкт{" "}
          <span className={s.Span}>employee</span>.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={codeStyle}
          customStyle={{ paddingLeft: "6vh" }}
        >
          {`
const employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
};

employee.getWage();
                `}
        </SyntaxHighlighter>
        <p>
          При такому підході методу немає параметрів, використовуються
          властивості об'єкта, які задаються при створенні об'єкта і, можливо,
          так само змінюються іншими методами. На виході отримуємо сутність із
          простим інтерфейсом, що знижує складність програми.
        </p>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Ідеологічно, ОВП - це підхід до програмування як до моделювання, що
            вирішує основне завдання - структурування інформації з погляду
            керованості, що значно покращує контроль процесу моделювання.{" "}
          </p>
        </div>
        <h2>Сутності ООП</h2>
        <p>
          Уявіть, що ми проектуємо автомобіль. У нього буде двигун, чотири
          колеса, бензобак і т.д. Автомобіль повинен мати можливість заводитися,
          набирати та зменшувати швидкість. Ми знаємо як взаємодіє двигун та
          колеса, тобто згідно з якими законами взаємодіють різні частини
          машини.
        </p>
        <h3>Клас</h3>
        <p>
          Ми описуємо всі запчастини з яких складається автомобіль, як ці
          запчастини взаємодіють між собою і що повинен зробити водій, щоб
          машина загальмувала, включилися фари та інше. Результатом роботи буде
          деякий ескіз (шаблон, схема). Ми щойно розробили те, що в ООП
          називається клас.
        </p>
        <p>
          <strong>Клас</strong> - спосіб опису сутності, що визначає стан і
          поведінку, що залежить від цього стану, а також правила для взаємодії
          з цією сутністю (контракт).
        </p>
        <p>
          У нашому випадку клас описує сутність – автомобіль. Властивістю класу
          будуть двигун, колеса, фари і т.д. Методами класу відчинять двері,
          завести двигун, збільшити швидкість і т.п.
        </p>
        <h3>Примірник</h3>
        <p>
          Ми спроектували креслення та машини, розроблені по них, сходять із
          конвеєра. Кожна з них точно повторює креслення, всі системи
          взаємодіють саме так, як ми спроектували, але кожна машина є
          унікальною. Вони всі мають номер кузова та двигуна, але всі номери
          різні, автомобілі відрізняються кольором, оздобленням салону. Ці
          автомобілі є екземплярами класу.
        </p>
        <p>
          <strong>Примірник (об'єкт)</strong> - це окремий представник класу, що
          має конкретний стан та поведінку, що повністю визначається класом. Це
          те, що створено за кресленням, тобто за описом із класу.
        </p>
        <p>
          Говорячи простою мовою, об'єкт має конкретні значення властивостей та
          методи, що працюють із цими властивостями на основі правил, заданих у
          класі. У даному прикладі, якщо клас - це абстрактний автомобіль на
          кресленні, то об'єкт - це конкретний автомобіль, що стоїть у нас під
          вікнами.
        </p>
        <h3>Інтерфейс</h3>
        <p>
          Коли ми підходимо до автомата з кавою або сідаємо за кермо автомобіля,
          існує певний набір елементів керування, з якими ми можемо взаємодіяти.
        </p>
        <p>
          <strong>Інтерфейс</strong> - це набір властивостей та методів класу,
          доступних для використання під час роботи з екземпляром.
        </p>
        <p>
          Насправді, інтерфейс визначає клас, чітко визначаючи всі можливі події
          з нього. Хороший приклад інтерфейсу - панель приладів автомобіля, яка
          дозволяє викликати такі методи як збільшення швидкості, гальмування,
          поворот, перемикання передач, включення фар і т. п.
        </p>
        <p>
          При описі інтерфейсу класу дуже важливо дотриматися балансу між
          гнучкістю і простотою. Клас із простим інтерфейсом буде легко
          використовувати, але існуватимуть завдання, які за допомогою нього
          вирішити буде не під силу.
        </p>
        <p>
          Якщо інтерфейс буде гнучким, то швидше за все, він складатиметься з
          досить складних методів з великою кількістю параметрів, які
          дозволятимуть робити дуже багато, але його використання буде пов'язане
          з великими складнощами та ризиком зробити помилку, щось переплутавши.
        </p>
        <h1 id="proto">Прототипне успадкування</h1>
        <p>
          ООП у JavaScript побудовано на прототипному успадкування. Об'єкти
          можна організувати в ланцюжка так, щоб властивість не знайдена в
          одному об'єкті автоматично шукалася б в іншому. Сполучною ланкою
          виступає спеціальне приховане властивість{" "}
          <span className={s.Span}>[[Prototype]]</span>, яке консолі браузера
          відображається як <span className={s.Span}>__proto__</span>.
        </p>
        <h2>Прототип обʼєкта</h2>
        <p>
          Метод Object.create(obj)створює та повертає новий об'єкт, пов'язуючи
          його з об'єктом obj.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={codeStyle}
          customStyle={{ paddingLeft: "6vh" }}
        >
          {`
const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Манго";

console.log(dog); // { name: 'Манго', __proto__: animal }
console.log(animal.isPrototypeOf(dog)); // true
                `}
        </SyntaxHighlighter>
        <p>
          Об'єкт, який вказує посилання в{" "}
          <span className={s.Span}>__proto__</span>, називається прототипом. У
          прикладі об'єкт <span className={s.Span}>animal</span> це прототип для
          об'єкта <span className={s.Span}>dog</span>. Метод{" "}
          <span className={s.Span}>isPrototypeOf()</span> перевіряє чи є об'єкт{" "}
          <span className={s.Span}>animal</span> прототипом для{" "}
          <span className={s.Span}>dog</span> і повертає{" "}
          <span className={s.Span}>true</span> або{" "}
          <span className={s.Span}>false</span>.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={codeStyle}
          customStyle={{ paddingLeft: "6vh" }}
        >
          {`
console.log(dog.hasOwnProperty("name")); // true
console.log(dog.name); // 'Манго'

console.log(dog.hasOwnProperty("legs")); // false
console.log(dog.legs); // 4
                `}
        </SyntaxHighlighter>
        <p>
          Звернення <span className={s.Span}>dog.name</span> працює очевидним
          чином - повертає власну властивість{" "}
          <span className={s.Span}>name</span> об'єкта{" "}
          <span className={s.Span}>dog</span>. При зверненні до{" "}
          <span className={s.Span}>dog.legs</span> інтерпретатор шукає
          властивість
          <span className={s.Span}>legs</span> в об'єкті{" "}
          <span className={s.Span}>dog</span>, не знаходить і продовжує пошук в
          об'єкті за посиланням <span className={s.Span}>dog.__proto__</span>,
          тобто в даному випадку в об'єкті{" "}
          <span className={s.Span}>animal</span> - його прототип.
        </p>
        <p>
          <strong>Тобто прототип</strong> - це резервне сховище властивостей та
          методів об'єкта , що автоматично використовується при їх пошуку.
          Об'єкт, який виступає прототипом, може також мати свій прототип, у
          того свій, і так далі.
        </p>
        <p>
          Пошук якості виконується до першого збігу. Інтерпретатор шукає
          властивість на ім'я в об'єкті, якщо не знаходить, то звертається до
          властивості <span className={s.Span}>__proto__</span>, тобто
          переходить за посиланням до об'єкта-прототипу, а потім і прототипу
          прототипу. Якщо інтерпретатор дістанеться кінця ланцюжка і знайде
          властивості з такою назвою, то поверне{" "}
          <span className={s.Span}>undefined</span>.
        </p>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            У специфікації властивість <span className={s.Span}>__proto__</span>{" "}
            зазначено як
            <span className={s.Span}>[[Prototype]]</span>. Подвійні квадратні
            дужки тут важливі, вони вказують на те, що це внутрішня, службова
            властивість.
          </p>
        </div>
        <h2>
          Метод <span className={s.Span}>hasOwnProperty()</span>
        </h2>
        <p>
          Після того, як ми дізналися про те, як відбувається пошук властивостей
          об'єкта, має стати зрозуміло, чому цикл{" "}
          <span className={s.Span}>for...in</span> не робить відмінності між
          властивостями об'єкта та його прототипу.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={codeStyle}
          customStyle={{ paddingLeft: "6vh" }}
        >
          {`
const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;

for (const key in dog) {
  console.log(key); // barks, eats
}
                `}
        </SyntaxHighlighter>
        <p>
          Саме тому ми використовуємо метод{" "}
          <span className={s.Span}>obj.hasOwnProperty(prop)</span>, який
          повертає <span className={s.Span}>true</span>, якщо властивість{" "}
          <span className={s.Span}>prop</span> належить самому об'єкту{" "}
          <span className={s.Span}>obj</span>, а не його прототипу, інакше{" "}
          <span className={s.Span}>false</span>.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={codeStyle}
          customStyle={{ paddingLeft: "6vh" }}
        >
          {`
const animal = {
  eats: true,
};
const dog = Object.create(animal);
dog.barks = true;

for (const key in dog) {
  if (!dog.hasOwnProperty(key)) continue;

  console.log(key); // barks
}                `}
        </SyntaxHighlighter>
        <p>
          Метод <span className={s.Span}>Object.keys(obj)</span> поверне масив
          лише власних ключів об'єкта <span className={s.Span}>obj</span>, тому
          практично використовують саме його, а чи не{" "}
          <span className={s.Span}>for...in</span>.
        </p>{" "}
        <SyntaxHighlighter
          language="javascript"
          style={codeStyle}
          customStyle={{ paddingLeft: "6vh" }}
        >
          {`
const animal = {
  eats: true,
};
const dog = Object.create(animal);
dog.barks = true;

const dogKeys = Object.keys(dog);

console.log(dogKeys); // ['barks']                `}
        </SyntaxHighlighter>
        <h1 id="class">Класи</h1>
        <p>
          Синтаксис літералу об'єкта дозволяє створити один об'єкт. Але часто
          потрібно створити багато однотипних об'єктів з однаковим набором
          властивостей, але різними значеннями та методами взаємодії з ними. Все
          це потрібно зробити динамічно, під час виконання програми. Для цього
          використовують класи - спеціальний синтаксис оголошення функції для
          створення об'єктів.
        </p>
        <h2>Оголошення класу</h2>
        <p>
          Оголошення класу починається з ключового слова{" "}
          <span className={s.Span}>class</span>, після якого йде ім'я класу та
          фігурні дужки – його тіло. Класи прийнято називати з великої літери, а
          в самій назві відображати тип об'єкта, що створюється (іменник).
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={codeStyle}
          customStyle={{ paddingLeft: "6vh" }}
        >
          {`
class User {
  // Тіло класа
}

const mango = new User();
console.log(mango); // {}

const poly = new User();
console.log(poly); // {}                `}
        </SyntaxHighlighter>
        <p>
          Результат виклику <span className={s.Span}>new User()</span> є
          об'єктом, який називається <strong>екземпляр класу</strong> , тому що
          містить дані та поведінку, що описуються класом.
        </p>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            Як будувати клас залежить від того, що вам потрібно. У нашому
            випадку, клас є користувача, тому ми додамо туди поля для імені та
            пошти.
          </p>
        </div>
        <h2>Конструктор класу</h2>
        <p>
          Для ініціалізації екземпляра у класі є метод{" "}
          <span className={s.Span}>constructor</span>. Якщо його не оголошено,
          створюється конструктор за замовчуванням - порожня функція, яка змінює
          екземпляр.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={codeStyle}
          customStyle={{ paddingLeft: "6vh" }}
        >
          {`
class User {
  // Синтаксис оголошення методу класа
  constructor(name, email) {
    // Ініціалізація властивостей екземпляра
    this.name = name;
    this.email = email;
  }
}

const mango = new User("Манго", "mango@mail.com");
console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

const poly = new User("Полі", "poly@mail.com");
console.log(poly); // { name: 'Полі', email: 'poly@mail.com' }                `}
        </SyntaxHighlighter>
        <p>
          Виклик класу з оператором <span className={s.Span}>new</span>{" "}
          призводить до створення нового об'єкта та виклику конструктора в
          контексті цього об'єкта. Тобто <span className={s.Span}>this</span>{" "}
          всередині конструктора посилатиметься на новостворений об'єкт. Це
          дозволяє додавати кожному об'єкту властивості з однаковими іменами,
          але різними значеннями.
        </p>
        <p>
          Властивості <span className={s.Span}>name</span> і{" "}
          <span className={s.Span}>email</span> називаються
          <span className={s.Span}>публічні властивості</span> , тому що вони
          будуть власними властивостями об'єкта-екземпляра і до них можна буде
          отримати доступ через точку.
        </p>
        <h2>Обʼєкт параметрів</h2>
        <p>
          Клас може приймати велику кількість вхідних даних властивостей
          майбутнього об'єкта. Тому до них також можна застосувати патерн Об'єкт
          параметрів, передаючи один об'єкт з логічно іменованими властивостями,
          замість незв'язаного набору аргументів.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={codeStyle}
          customStyle={{ paddingLeft: "6vh" }}
        >
          {`
class User {
  // Деструктуризуємо обʼєкт
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}

const mango = new User({
  name: "Манго",
  email: "mango@mail.com",
});
console.log(mango); // { name: "Манго", email: "mango@mail.com" }

const poly = new User({
  name: "Поли",
  email: "poly@mail.com",
});
console.log(poly); // { name: "Поли", email: "poly@mail.com" }                `}
        </SyntaxHighlighter>
        <h2>Методи класу</h2>
        <p>
          Для роботи з властивостями майбутнього екземпляра використовуються
          методи класу - функції, які будуть доступні екземпляру в його
          прототипі.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={codeStyle}
          customStyle={{ paddingLeft: "6vh" }}
        >
          {`
class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }

  // Метод getEmail
  getEmail() {
    return this.email;
  }

  // Метод changeEmail
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}                `}
        </SyntaxHighlighter>
        <h2>Приватні властивості</h2>
        <p>
          <strong>Інкапсуляція</strong> - це концепція, яка дозволяє приховати
          внутрішні деталі класу. Користувач класу повинен отримувати доступ
          лише до публічного інтерфейсу - набору суспільних властивостей та
          методів класу.
        </p>
        <p>
          У класах інкапсуляція реалізується приватними властивостями, доступ до
          яких можна отримати лише всередині класу.
        </p>
        <p>
          Припустимо, пошта користувача повинна бути недоступна для прямої зміни
          ззовні, тобто приватна. Додаючи до імені властивості символ,{" "}
          <span className={s.Span}>#</span> ми робимо його приватним. Оголошення
          приватної якості до ініціалізації в архітекторі - обов'язково.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={codeStyle}
          customStyle={{ paddingLeft: "6vh" }}
        >
          {`
class User {
  // Необовʼязкове оголошення публічних властивостей
  name;
  // Обовʼязкове оголошення приватних властивостей
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({
  name: "Манго",
  email: "mango@mail.com",
});
mango.changeEmail("mango@supermail.com");
console.log(mango.getEmail()); // mango@supermail.com
console.log(mango.#email); // Буде помилка, це приватна властивість`}
        </SyntaxHighlighter>
        <p>
          Методи класу можуть бути приватними, тобто доступні лише у тілі класу.
          Для цього перед їх ім'ям необхідно поставити символ{" "}
          <span className={s.Span}>#</span>.
        </p>
        <h2>Геттери та сеттери</h2>
        <p>
          Геттери і сеттери - це короткий синтаксис оголошення методів взаємодії
          з властивостями. Геттер і сеттер імітують звичайне суспільне
          властивість класу, але дозволяють змінювати інші властивості зручнішим
          способом. Геттер виконується при спробі набути значення властивості, а
          сеттер - при спробі його змінити.
        </p>
        <p>
          Геттери та сеттери добре використовувати для простих операцій читання
          та зміни значення властивостей, особливо приватних, як їх публічний
          інтерфейс. Для роботи з властивістю, що зберігає масив або об'єкт,
          вони не підійдуть.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={codeStyle}
          customStyle={{ paddingLeft: "6vh" }}
        >
          {`
class User {
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  // Геттер email
  get email() {
    return this.#email;
  }

  // Сеттер email
  set email(newEmail) {
    this.#email = newEmail;
  }
}                `}
        </SyntaxHighlighter>
        <p>
          Ми оголосили геттер і сеттер, <span className={s.Span}>email</span>{" "}
          поставивши перед іменем властивості ключові слова{" "}
          <span className={s.Span}>get</span> і{" "}
          <span className={s.Span}>set</span>. Усередині цих методів ми або
          повертаємо значення приватного властивості{" "}
          <span className={s.Span}>#email</span> або змінюємо його значення.
          Геттер і сетер йдуть у парі і мають називатися однаково.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={codeStyle}
          customStyle={{ paddingLeft: "6vh" }}
        >
          {`
const mango = new User({ name: "Манго", email: "mango@mail.com" });
console.log(mango.email); // mango@mail.com
mango.email = "mango@supermail.com";
console.log(mango.email); // mango@supermail.com                `}
        </SyntaxHighlighter>
        <p>
          Під час звернення до <span className={s.Span}>mango.email</span>{" "}
          викликається геттер{" "}
          <span className={s.Span}>get email() {"{...}"}</span> і виконується
          його код. При спробі запису{" "}
          <span className={s.Span}>mango.email = "mango@supermail.com"</span>{" "}
          викликається сеттер{" "}
          <span className={s.Span}>set email(newEmail) {"{...}"}</span> і рядок
          " mango@supermail.com " буде значенням параметра{" "}
          <span className={s.Span}>newEmail</span>.
        </p>
        <p>
          Плюс у тому, що це методи, а значить при записі можна виконати
          додатковий код, наприклад з якими-небудь перевірками, на відміну від
          виконання цієї ж операції безпосередньо з властивістю.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={codeStyle}
          customStyle={{ paddingLeft: "6vh" }}
        >
          {`
set email(newEmail) {
  if(newEmail === "") {
    console.error("Помилка! Пошта не може бути пустим рядком!");
    return;
  }

  this.#email = newEmail;
}                `}
        </SyntaxHighlighter>
        <h2>Статичні властивості</h2>
        <p>
          Крім громадських і приватних властивостей майбутнього екземпляра, у
          класі можна оголосити його власні властивості, доступні лише класу,
          але з його екземплярам - статичні властивості ( ){" "}
          <span className={s.Span}>static</span>. Вони корисні для зберігання
          інформації, що відноситься до самого класу.
        </p>
        <p>
          Додамо класу користувача приватну властивість{" "}
          <span className={s.Span}>role</span> - його роль, що визначає набір
          прав, наприклад адміністратор, редактор, просто користувач і т.п.
          Можливі ролі користувачів зберігатимемо як статичну властивість{" "}
          <span className={s.Span}>Roles</span> - об'єкт з властивостями.
        </p>
        <p>
          Статичні властивості оголошуються у тілі класу. Перед ім'ям
          властивості додається ключове слово{" "}
          <span className={s.Span}>static</span>.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={codeStyle}
          customStyle={{ paddingLeft: "6vh" }}
        >
          {`
class User {
  // Оголошення та ініціалізація статичної властивості
  static Roles = {
    ADMIN: "admin",
    EDITOR: "editor",
  };

  #email;
  #role;

  constructor({ email, role }) {
    this.#email = email;
    this.#role = role;
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }
}

const mango = new User({
  email: "mango@mail.com",
  role: User.Roles.ADMIN,
});

console.log(mango.Roles); // undefined
console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

console.log(mango.role); // "admin"
mango.role = User.Roles.EDITOR;
console.log(mango.role); // "editor"                `}
        </SyntaxHighlighter>
        <p>
          Статичні властивості також можуть бути приватними, тобто доступними
          лише всередині класу. Для цього ім'я ради має починатися з символу{" "}
          <span className={s.Span}>#</span>, також як приватні властивості.
          Звернення до приватної статичної властивості поза тілом класу викликає
          помилку.
        </p>
        <h2>Статичні методи</h2>
        <p>
          У класі можна оголосити як методи майбутнього екземпляра, а й методи
          доступні лише класу - статичні методи, які може бути як громадські і
          приватні. Синтаксис оголошення аналогічний статичним властивостям, за
          винятком того, що значенням буде метод.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={codeStyle}
          customStyle={{ paddingLeft: "6vh" }}
        >
          {`
class User {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User.#takenEmails.includes(email);
  }

  #email;

  constructor({ email }) {
    this.#email = email;
    User.#takenEmails.push(email);
  }
}

const mango = new User({ email: "mango@mail.com" });

console.log(User.isEmailTaken("poly@mail.com"));
console.log(User.isEmailTaken("mango@mail.com"));                `}
        </SyntaxHighlighter>
        <p>
          Особливість статичних методів у тому, що під час їхнього виклику
          ключове слово <span className={s.Span}>this</span> посилається на сам
          клас. Це означає, що статичний метод може отримати доступ до статичних
          властивостей класу, але не до властивостей екземпляра. Логічно, бо
          статичні методи викликає сам клас, а чи не його екземпляри.
        </p>
        <h2>Спадкування класів</h2>
        <p>
          Ключове слово <span className={s.Span}>extends</span> дозволяє
          реалізувати спадкування класів, коли один клас (дочірній, похідний)
          успадковує властивості та методи іншого класу (батька).
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={codeStyle}
          customStyle={{ paddingLeft: "6vh" }}
        >
          {`
class Child extends Parent {
  // ...
}                `}
        </SyntaxHighlighter>
        <p>
          У виразі class Child extends <span className={s.Span}>Parent</span>{" "}
          дочірній клас
          <span className={s.Span}>Child</span> успадковує (розширює) від
          батьківського класу
          <span className={s.Span}>Parent</span>.
        </p>
        <p>
          Це означає, що ми можемо оголосити базовий клас, який зберігає
          загальні характеристики та методи для групи похідних класів, які
          успадковують властивості та методи батьків, але також додають свої
          унікальні.
        </p>
        <p>
          Наприклад, у додатку є користувачі різних ролей – адміністратор,
          письменник статей, контент менеджер тощо. У кожного типу користувача є
          набір загальних характеристик, наприклад пошта та пароль, але також є
          й унікальні.
        </p>
        <p>
          Зробивши незалежні класи для кожного типу користувача ми отримаємо
          дублювання загальних властивостей і методів, і при необхідності
          змінити назву властивості, доведеться проходити по всіх класах, це
          незручно і трудомістко.
        </p>
        <p>
          Натомість можна зробити загальний клас{" "}
          <span className={s.Span}>User</span>, який буде зберігати набір
          загальних властивостей та методів, після чого зробити класи для
          кожного типу користувача які успадковують цей набір від класу{" "}
          <span className={s.Span}>User</span>. При необхідності змінити щось
          спільне, достатньо буде поміняти лише код класу{" "}
          <span className={s.Span}>User</span>.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={codeStyle}
          customStyle={{ paddingLeft: "6vh" }}
        >
          {`
class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User {
  // Тело класса ContentEditor
}

const editor = new ContentEditor("mango@mail.com");
console.log(editor); // { email: "mango@mail.com" }
console.log(editor.email); // "mango@mail.com"                `}
        </SyntaxHighlighter>
        <p>
          Клас <span className={s.Span}>ContentEditorу</span> спадковує від
          класу <span className={s.Span}>User</span> його конструктор, геттер і
          сеттер <span className={s.Span}>email</span>, а також однойменна
          громадська якість. Важливо пам'ятати, що приватні властивості та
          методи класу-батька не успадковуються класом-дитиною.
        </p>
        <h2>Конструктор дочірнього класу</h2>
        <p>
          Насамперед у конструкторі дочірнього класу необхідно викликати
          спеціальну функцію <span className={s.Span}>super(аргументы)</span> -
          це псевдонім конструктора батьківського класу. В іншому випадку, при
          спробі звернутися до <span className={s.Span}>this</span> конструктора
          дочірнього класу, буде помилка. При виклику конструктора класу батька
          передаємо необхідні аргументи для ініціалізації властивостей.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={codeStyle}
          customStyle={{ paddingLeft: "6vh" }}
        >
          {`
class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User {
  constructor({ email, posts }) {
    // ВИклик конструктора батьківського класу User
    super(email);
    this.posts = posts;
  }
}

const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
console.log(editor); // { email: 'mango@mail.com', posts: [] }
console.log(editor.email); // 'mango@mail.com'                `}
        </SyntaxHighlighter>
        <h2>Методи дочірнього класу</h2>
        <p>
          У дочірньому класі можна оголошувати методи, які будуть доступні
          тільки його екземплярам.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={codeStyle}
          customStyle={{ paddingLeft: "6vh" }}
        >
          {`
// Уявимо, що вище є оголошення класа User

class ContentEditor extends User {
  constructor({ email, posts }) {
    super(email);
    this.posts = posts;
  }

  addPost(post) {
    this.posts.push(post);
  }
}

const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
console.log(editor); // { email: 'mango@mail.com', posts: [] }
console.log(editor.email); // 'mango@mail.com'
editor.addPost("post-1");
console.log(editor.posts); // ['post-1']                `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Prototipe;
