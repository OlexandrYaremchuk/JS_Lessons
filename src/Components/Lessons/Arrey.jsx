import React from "react";
import s from "./Lessons.module.css";
import sprite from "../../img/icomoon/sprite.svg";
import Scrollspy from "react-scrollspy";
import Arrey1 from "../../img/Arrey1.png";
import Hello_World from "../../img/Hello World.png";
import Hello2 from "../../img/Hello2.png";
import link from "../../img/link.png";
import Java from "../../img/Java.png";
import pop from "../../img/pop.png";
import push from "../../img/push.png";
import push2 from "../../img/push2.png";
import slice from "../../img/slice.png";
import splice1 from "../../img/splice1.png";
import splice2 from "../../img/splice2.png";
import splice3 from "../../img/splice3.png";

const Arrey = () => {
  return (
    <div className={s.lessonsBox}>
      <div className={s.breadNav}>
        <Scrollspy
          items={["branching", "section-2", "section-3"]}
          currentClassName="is-current"
        >
          <div className={s.breadNavList}>
            <li>
              <a href="#Arr">Масиви</a>
            </li>
            <li>
              <a href="#IterArr">Ітерація по масиву</a>
            </li>
            <li>
              <a href="#Link">Присвоєння за посиланням та за значенням</a>
            </li>
            <li>
              <a href="#ArrMethod">Методи масиву</a>
            </li>
          </div>
        </Scrollspy>
      </div>
      <div className={s.article}>
        <h1 id="Arr">Масиви</h1>
        <p>
          <strong>Масив</strong> - структура даних для зберігання та
          маніпулювання колекцією індексованих значень. Використовується для
          зберігання впорядкованих колекцій даних, наприклад, списку курортів,
          товарів, клієнтів у готелі тощо.
        </p>
        <h4>Створення</h4>
        <p>
          Масив оголошується відкриває і закриває квадратною дужками{" "}
          <span>[ ]</span> - літералом масиву. Усередині дужок кожен елемент
          масиву поділяється комою.
        </p>
        <pre>
          {`
            const clients = ["Mango", "Poly", "Ajax"];
            `}
        </pre>
        <h4>Доступ до елементів</h4>
        <p>
          Для доступу до значення елемента масиву використовується синтаксис
          квадратних дужок <span>масив[індекс]</span>. Між іменем змінної масив,
          що зберігає, і квадратними дужками не повинна бути пробілу.
        </p>
        <pre>
          {`
            const clients = ["Mango", "Poly", "Ajax"];

            // Вказуючи в дужках інтекс елемента ми отримуємо його значення
            console.log(clients[0]); // Mango
            console.log(clients[1]); // Poly
            console.log(clients[2]); // Ajax
                `}
        </pre>
        <p>
          Індексація елементів масиву починається з <strong>нуля</strong> .
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={Arrey1} alt="" />
        </div>
        <h4>Перевизначення</h4>
        <p>
          На відміну від рядків, елементи масиву можна змінювати, звернувшись до
          них за індексом і надавши інше значення.
        </p>
        <pre>
          {`
            const clients = ["Mango", "Poly", "Ajax"];
            clients[0] = "Kiwi";
            clients[1] = "Pango";
            console.log(clients); // ["Kiwi", "Pango", "Ajax"]
                `}
        </pre>
        <h4>Довжина</h4>
        <p>
          Довжина масиву, тобто кількість його елементів, зберігається як
          <span>length</span> . Це динамічна величина, яка автоматично
          змінюється при додаванні або видаленні елементів.
        </p>
        <pre>
          {`
            const clients = ["Mango", "Poly", "Ajax"];
            console.log(clients.length); // 3
                `}
        </pre>
        <h4>Індекс останнього елемента</h4>
        <p>
          Найчастіше ми заздалегідь у коді не знаємо, яка буде довжина масиву.
          Для того щоб отримати значення останнього елемента застосовується
          наступний підхід - довжина масиву завжди на одиницю більша ніж індекс
          останнього елемента. Використовуючи формулу,{" "}
          <span>довжина_масиву - 1</span> можна отримати значення останнього
          елемента масиву довільної довжини.
        </p>
        <pre>
          {`
            const clients = ["Mango", "Poly", "Ajax"];
            const lastElementIndex = clients.length - 1;
            console.log(lastElementIndex); // 2
            console.log(clients[lastElementIndex]); // "Ajax"
                `}
        </pre>
        <h1 id="IterArr">Ітерація з масиву</h1>
        <p>
          Цикл <span>for</span> можна використовувати для ітерації по масиву,
          тобто перебрати його поелементно.
        </p>
        <pre>
          {`
            const clients = ["Mango", "Ajax", "Poly"];

            for (let i = 0; i < clients.length; i += 1) {
              console.log(clients[i]);
            }
                `}
        </pre>
        <p>
          Для доступу до елементів використовується синтаксис квадратних дужок
          <span>масив[індекс]</span>, де <span>індекс</span> це значні
          лічильники циклу від 0і до останнього індексу масиву, тобто менше, але
          не дорівнює його довжині.
        </p>
        <h4>
          Цикл <span>for...of</span>
        </h4>
        <p>
          Конструкція <span>for...of</span> оголошує цикл, що перебирає об'єкти,
          що ітеруються, такі як масиви і рядки. Тіло циклу виконуватиметься для
          значення кожного елемента. Це хороша заміна циклу, <span>for</span>{" "}
          якщо не потрібен доступ до лічильника ітерації.
        </p>
        <pre>
          {`
            for (const variable of iterable) {
              // тіло цикла
            }
                `}
        </pre>
        <ul>
          <li>
            <span>variable</span> - Змінна яка зберігатиме значення елемента на
            кожній ітерації.
          </li>
          <li>
            <span>iterable</span> - Колекція, яка має перераховані елементи,
            наприклад масив.
          </li>
        </ul>
        <pre>
          {`
            const clients = ["Mango", "Ajax", "Poly"];

            for (const client of clients) {
              console.log(client);
            }

            const string = "javascript";

            for (const character of string) {
              console.log(character);
            }
                `}
        </pre>
        <h4>
          Оператори та <span>break</span>
          <span>continue</span>
        </h4>
        <p>
          Шукатимемо ім'я клієнта в масиві імен, якщо знайшли - перервемо цикл,
          тому що немає сенсу шукати далі, імена у нас унікальні.
        </p>
        <pre>
          {`
            const clients = ["Mango", "Poly", "Ajax"];
            const clientNameToFind = "Poly";
            let message;

            for (const client of clients) {
              // На кожній інтерації будемо первіряти чи співпадають елементи масива з
              // іменем клієнта. Якщо співпадають то ми записуєм в message повідомлення
              // про успіх та робимо break щоб не шукати далі
              if (client === clientNameToFind) {
                message = "Клієнт з таким іменем є в базі даних!";
                break;
              }

              // Якщо вони не співпадають то запишемо в message повідомлення про відстуність імені
              message = "Клієнти з таким іменем немає в базі даних!";
            }

            console.log(message); // "Клієнт з таким іменем є в базі даних!"
                `}
        </pre>
        <p>
          Можна спочатку встановити <span>message</span> значення невдачі
          пошуку, а в циклі перезаписати його на успіх, якщо знайшли ім'я. Але
          <span>break</span> все одно знадобиться, тому що якщо у нас масив з
          10000 клієнтів, а потрібний нам стоїть на позиції 2, то немає
          абсолютно ніякого сенсу перебирати 9998 елементів, що залишилися.
        </p>
        <pre>
          {`
            const clients = ["Mango", "Poly", "Ajax"];
            const clientNameToFind = "Poly";
            let message = "Клієнта з таким іменем немає в базі даних!";

            for (const client of clients) {
              if (client === clientNameToFind) {
                message = "Клієнт з таким іменем є в базі даних!";
                break;
              }
              // Якщо не співпадають, то на цій ітерації нічого не робимо
            }

            console.log(message); // Клієнт з таким іменем є в базі даних
                `}
        </pre>
        <p>
          Використовуємо цикл для виведення лише чисел більше за певне значення.
        </p>
        <pre>
          {`
          const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
          const threshold = 15;

          // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
          // и управление передаётся на следующую итерацию.
          for (let i = 0; i < numbers.length; i += 1) {
              if (numbers[i] < threshold) {
              continue;
          } 
          console.log(\`Число більше ніж ${"threshold"}: ${"numbers[i]"}\`); // 18, 29, 34
        }
        
          `}
        </pre>
        <h1 id="Link">Присвоєння за посиланням та за значенням</h1>
        <p>
          Фундаментальною відмінністю складних типів від примітивів є те, як
          вони зберігаються і копіюються. Примітиви: <span>рядки</span>,{" "}
          <span>числа</span>, <span>булі</span>, <span>null</span> і{" "}
          <span>undefined</span>, при присвоенні копіюються повністю,{" "}
          <strong>за значенням (by value)</strong>.
        </p>
        <p>
          Зі складними типами все не так. У змінній, якій присвоєно масив чи
          об'єкт, зберігається саме значення, а адресу його місця у пам'яті,
          іншими словами - посилання (покажчик) нею і передаються вони за
          посиланням (by reference ) .
        </p>
        <p>
          Подаємо змінну у вигляді аркуша паперу. Її значення ми представимо як
          записи цьому листі.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={Hello_World} alt="" />
        </div>
        <p>
          Якщо ми захочемо повідомити вміст цього запису користувачам, то можемо
          зробити так - зробити фізичні копії і вручити їх кожному, тобто
          зробити <span>незалежні</span> копії (присвоєння за значенням).
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={Hello2} alt="" />
        </div>
        <p>
          Або помістити аркуш у закритій кімнаті та дати користувачам ключ від
          цієї кімнати, тобто <strong>один</strong> екземпляр із загальним
          доступом (присвоєння за посиланням).
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={link} alt="" />
        </div>
        <p>
          Тепер змінимо дані на аркуші паперу – значення змінної. Очевидно, що
          відвідувачі кімнати завжди будуть бачити зміни, які ми вносимо, тому
          що змінюється оригінал і вони мають до нього доступ. І також очевидно,
          що власники паперових копій не помітять змін, дивлячись на свої копії.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={Java} alt="" />
        </div>
        <p>
          При передачі за значенням, змінним виділяється нова комірка пам'яті та
          в неї копіюються дані. Аналогія з множинними копіями паперового аркуша
          має цілком реальне втілення, окремий аркуш кожної копії.
        </p>
        <p>
          При передачі за посиланням, замість створення нового об'єкта, змінної
          присвоюється посилання (покажчик) на вже існуючий об'єкт, тобто його
          місце у пам'яті. Таким чином, кілька змінних можуть вказувати на той
          самий об'єкт, за аналогією із закритою кімнатою, у них є ключ доступу
          до оригіналу аркуша.
        </p>
        <p>
          Усі примітивні типи надаються за значенням, тобто створюється копія.
        </p>
        <pre>
          {`
            let a = 5;
            // Присвоєння по значенню, в пам'яті буде створенно ще один елемент
            // в який буде скопійоване значення 5
            let b = a;
            console.log(a); // 5
            console.log(b); // 5

            // Змінемо значення a
            a = 10;
            console.log(a); // 10
            // Значення b не змінилось так, як це окрема копія
            console.log(b); // 5
                `}
        </pre>
        <p>
          Складні типи - об'єкти, масиви, функції присвоюються за посиланням,
          тобто змінна просто отримує посилання вже існуючий об'єкт.
        </p>
        <pre>
          {`
            const a = ["Mango"];
            // Так як a це масив, в b записується посиланняна вже існуючий
            // масив в пам'яті. Теперь a та b вказують на один той самий масив.
            const b = a;
            console.log(a); // ["Mango"]
            console.log(b); // ["Mango"]

            // Змінимо масив, добавимо ще один елемент, використовуючи вказівник з a
            a.push("Poly");
            console.log(a); // ["Mango", "Poly"]

            // b також змінилось, тому що b, як і a,
            // просто включає посилання на одне і теж саме місце в пам'яті
            console.log(b); // ["Mango", "Poly"]

            // Результат повторюється
            b.push("Ajax");
            console.log(a); // ["Mango", "Poly", "Ajax"]
            console.log(b); // ["Mango", "Poly", "Ajax"]
                `}
        </pre>
        <h1 id="ArrMethod">Методи масиву</h1>
        <h4>
          Методи <span>split()</span> <span>join()</span>
        </h4>
        <p>
          Метод <span>split(delimiter)</span> перетворює рядок на масив,
          «розбивши» його по роздільнику <span>delimiter</span>. Якщо роздільник
          це порожній рядок, вийде масив окремих символів. Розділювач може бути
          один або кілька символів.
        </p>
        <pre>
          {`
            const name = "Mango";
            console.log(name.split("")); // ["M", "a", "n", "g", "o"]

            const message = "JavaScript це цікаво";
            console.log(message.split(" ")); // ["JavaScript", "це", "цікаво"]
                `}
        </pre>
        <p>
          Метод масивів <span>join(delimiter)</span> з'єднує елементи масиву
          рядок. У рядку елементи будуть розділені символом або групою символів,
          зазначених у <span>delimiter</span>. Тобто це операція зворотна методу
          рядків <span>split(delimiter)</span>.
        </p>
        <pre>
          {`
            const words = ["JavaScript", "це", "цікаво"];
            console.log(words.join("")); // "JavaScriptцецікаво"
            console.log(words.join(" ")); // "JavaScript це цікаво"
            console.log(words.join("-")); // "JavaScript-це-цікаво"
                `}
        </pre>
        <h4>
          Метод <span>indexOf()</span>
        </h4>
        <p>
          <span>indexOf(value)</span> повертає перший індекс, в якому елемент зі
          значенням <span>value</span> був знайдений в масиві, або число{" "}
          <span>-1</span> якщо такого елемента немає. Використовуйте
          <span>indexOf</span> тоді, коли потрібно отримати безпосередньо індекс
          елемента.
        </p>
        <pre>
          {`
            const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
            console.log(clients.indexOf("Poly")); // 2
            console.log(clients.indexOf("Monkong")); // -1
                `}
        </pre>
        <h4>
          Метод <span>includes()</span>
        </h4>
        <p>
          <span>includes(value)</span> перевіряє чи є у масиві елемент зі
          значенням <span>value</span> і повертає <span>true</span> чи
          <span>false</span> відповідно. Область застосування цього методу
          зводиться до ситуацій, коли необхідно перевірити, чи є елемент у
          масиві і не важлива його позиція <span>(індекс)</span>.
        </p>
        <pre>
          {`
            const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
            console.log(clients.includes("Poly")); // true
            console.log(clients.includes("Monkong")); // false
                `}
        </pre>
        <h5>
          Перевірка множинних <span>includes()</span> умов
        </h5>
        <p>На перший погляд, код наступного прикладу виглядає добре.</p>
        <pre>
          {`
            const fruit = "apple";

            if (fruit === "apple" || fruit === "strawberry") {
              console.log("It is a red fruit!");
            }
                `}
        </pre>
        <p>
          Однак, якщо у нас буде більше червоних фруктів, наприклад ще вишня
          (cherry) або журавлина (cranberries)? Чи будемо розширювати умову за
          допомогою додаткових <span>||</span>?
        </p>
        <pre>
          {`
            const fruit = "apple";

            if (
              fruit === "apple" ||
              fruit === "strawberry" ||
              fruit === "cherry" ||
              fruit === "cranberries"
            ) {
              console.log("It is a red fruit!");
            }
                `}
        </pre>
        <p>
          {" "}
          Можемо переписати умову використовуючи метод <span>includes()</span> ,
          це дуже просто і масштабовано.
        </p>
        <pre>
          {`
            // Виносимо варіанти в масив
            const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
            const fruit = "cherry";
            // Перевіряємо наявність елемента
            const hasFruit = redFruits.includes(fruit);

            if (hasFruit) {
              console.log(${"fruit"} is a red fruit!\`);
            }
                `}
        </pre>
        <h4>
          Методи <span>push()</span> <span>pop()</span>
        </h4>
        <p>
          Додають чи видаляють крайні елементи масиву. Працюють лише з крайнім
          лівим та крайнім правим елементом і не можуть поставити або видалити
          елемент із довільної позиції.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={pop} alt="" />
        </div>
        <p>
          Метод <span>push()</span> додає один або кілька елементів в кінець
          масиву, без необхідності вказувати індекси елементів, що додаються.
          Повертає довжину масиву після додавання елементів.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={push} alt="" zoomFactor={2.0} />
        </div>
        <pre>
          {`
            const numbers = [];

            numbers.push(1);
            console.log(numbers); // [1]

            numbers.push(2);
            console.log(numbers); // [1, 2]

            numbers.push(3);
            console.log(numbers); // [1, 2, 3]

            numbers.push(4);
            console.log(numbers); // [1, 2, 3, 4]

            numbers.push(5);
            console.log(numbers); // [1, 2, 3, 4, 5]
                `}
        </pre>
        <p>
          Метод <span>pop()</span> видаляє останній елемент кінця масиву і
          повертає віддалений елемент. Якщо масив порожній, метод повертає
          <span>undefined</span>.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={push2} alt="" />
        </div>
        <pre>
          {`
            const numbers = [1, 2, 3, 4, 5];

            console.log(numbers.pop()); //  5
            console.log(numbers); // [1, 2, 3, 4]

            console.log(numbers.pop()); //  4
            console.log(numbers); // [1, 2, 3]

            console.log(numbers.pop()); //  3
            console.log(numbers); // [1, 2]

            console.log(numbers.pop()); //  2
            console.log(numbers); // [1]

            console.log(numbers.pop()); //  1
            console.log(numbers); // []
                `}
        </pre>
        <h4>
          Метод <span>slice()</span>
        </h4>
        <p>
          <span>slice(begin, end)</span> повертає новий масив, який містить
          копію частини вихідного масиву, не змінюючи його. Копія робиться від
          <span>begin</span> і до, але не включаючи <span>end</span> - індекси
          елементів вихідного масиву.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={slice} alt="" />
        </div>
        <pre>
          {`
          const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
          console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]
                `}
        </pre>
        <p>
          Якщо <span>begin</span> не <span>end</span> вказано, буде створено
          повну копію вихідного масиву.
        </p>
        <pre>
          {`
            const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
            console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]
                `}
        </pre>
        <p>
          Якщо не вказано <span>end</span>, копіювання буде від{" "}
          <span>start</span> і до кінця вихідного масиву.
        </p>
        <pre>
          {`
            const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
            console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
            console.log(clients.slice(2)); // ["Poly", "Kiwi"]
                `}
        </pre>
        <p>
          Якщо значення <span>start</span> негативне, а <span>end</span> не
          вказано, будуть скопійовані останні <span>start</span> елементи
        </p>
        <pre>
          {`
          const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
          console.log(clients.slice(-2)); // ["Poly", "Kiwi"]
                `}
        </pre>
        <h4>
          Метод <span>splice()</span>
        </h4>
        <p>
          Швейцарський ніж для роботи з масивами, якщо потрібно змінити вихідний
          масив. Видаляє, додає та замінює елементи у довільному місці масиву.
        </p>
        <p>Щоб видалити елементи в масиві, передаються два аргументи.</p>
        <pre>
          {`
          splice(position, num)
                `}
        </pre>
        <ul>
          <li>
            <span>position</span> - вказує позицію (індекс) першого елемента
            видалення
          </li>
          <li>
            <span>num</span> - визначає кількість елементів, що видаляються
          </li>
        </ul>
        <p>
          Метод <span>splice</span> змінює вихідний масив та повертає масив, що
          містить віддалені елементи. Наприклад, ми маємо масив оцінок, який
          містить п'ять чисел від 1 до 5.
        </p>
        <pre>
          {`
            const scores = [1, 2, 3, 4, 5];

            // Видаляємо три елемента з масиву, починаємо з першого елемента (індекс 0)
            const deletedScores = scores.splice(0, 3);

            // Тепер масив scores має два елемента
            console.log(scores); // [4, 5]

            // А масив deletedScores має три видалених елемента
            console.log(deletedScores); // [1, 2, 3]
                `}
        </pre>
        <p>
          На малюнку показано виклик методу <span>score.splice(0, 3)</span> з
          прикладу.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={splice1} alt="" />
        </div>
        <div className={s.interestBox}>
          <div className={s.interestHeader}>
            <svg className={s.textIcon}>
              <use href={sprite + "#target"}></use>
            </svg>
            <h5>ЦІКАВО</h5>
          </div>
          <p>
            На практиці значення, що повертається (масив віддалених елементів)
            використовується рідко. Здебільшого просто необхідно видалити
            елементи з масиву.
          </p>
        </div>
        <h5>Додавання</h5>
        <p>
          Для того щоб додати один або кілька елементів в масив, необхідно
          передати три або більше аргументів, при цьому другий аргумент повинен
          дорівнювати нулю.
        </p>
        <pre>
          {`
            splice(position, 0, new_element_1, new_element_2, ...)
                `}
        </pre>
        <ul>
          <li>
            Аргумент <span>position</span> вказує початкову позицію у масиві,
            куди буде вставлено нові елементи.
          </li>
          <li>
            Другий аргумент - це нуль, він говорить методу не видаляти елементи
            в місці додавання нових.
          </li>
          <li>
            Третій, четвертий і всі наступні аргументи – це нові елементи, які
            додаються до масиву.
          </li>
        </ul>
        <p>
          Наприклад, у нас є масив із назвами кольорів у вигляді рядків. Додамо
          новий колір перед елементом із індексом 2.
        </p>
        <pre>
          {`
            const colors = ["red", "green", "blue"];

            colors.splice(2, 0, "purple");
            console.log(colors); // ["red", "green", "purple", "blue"]
                `}
        </pre>
        <p>
          На малюнку показано виклик методу{" "}
          <span> colors.splice(2, 0, 'purple')</span> з прикладу.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={splice2} alt="" />
        </div>
        <p>
          Можна додати довільну кількість елементів, передавши четвертий, п'ятий
          аргумент і т.д.
        </p>
        <pre>
          {`
            const colors = ["red", "green", "blue"];

            colors.splice(1, 0, "yellow", "pink");
            console.log(colors); // ["red", "yellow", "pink", "green", "blue"]
                `}
        </pre>
        <h5>Заміна</h5>
        <p>
          Заміна це операція додавання, в якій видаляються елементи в місці
          додавання нових. Для цього необхідно передати щонайменше три
          аргументи. Кількість елементів, що видаляються і додаються, може не
          збігатися.
        </p>
        <pre>
          {`
            splice(position, num, new_element_1, new_element_2, ...)
                `}
        </pre>
        <ul>
          <li>
            <span>position</span> - вказує позицію (індекс) першого елемента
            видалення
          </li>
          <li>
            <span>num</span> - визначає кількість елементів, що видаляються
          </li>
          <li>
            Третій, четвертий і всі наступні аргументи – це нові елементи, які
            додаються до масиву.
          </li>
        </ul>
        <p>наприклад, ми маємо масив мов програмування з чотирьох елементів.</p>
        <pre>
          {`
            const languages = ["C", "C++", "Java", "JavaScript"];

            // Заменяем элемент с индексом 1 на новый
            languages.splice(1, 1, "Python");
            console.log(languages); // ["C", "Python", "Java", "JavaScript"]

            // Заменяем один элемент (с индексом 2) на несколько
            languages.splice(2, 1, "C#", "Swift", "Go");
            console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]
                `}
        </pre>
        <p>
          На малюнку показано виклик методу{" "}
          <span>languages.splice(1, 1, 'Python')</span> з прикладу.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={splice3} alt="" />
        </div>
        <h4>
          Метод <span>concat()</span>
        </h4>
        <p>
          Поєднує два або більше масиву в один. Він не змінює масив, на якому
          викликається, а повертає новий. Порядок аргументів методу впливає
          порядок елементів нового масиву.
        </p>
        <pre>
          {`
            const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
            const newClients = ["Monkong", "Singu"];

            const allClientsWithOldFirst = oldClients.concat(newClients);
            console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

            const allClientsWithNewFirst = newClients.concat(oldClients);
            console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

            console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
            console.log(newClients); // ["Monkong", "Singu"]
                `}
        </pre>
      </div>
    </div>
  );
};

export default Arrey;
