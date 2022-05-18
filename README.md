# Todo applikáció

A Todo applikációban tudunk eltárolni elkészítendő feladatokat, amelyeknek van neve, leírása, határideje és állapota. A különböző állapotokhoz hozzáadhatóak az elvégzendő feladatok.

## Beüzemelés

Az alkalmazás beüzemelését a githubról letöltve a repository a master branch-ből tudjuk elindítani. Az alkalmazás tartalmazza a frontend és a backend kódját. A fronted kódot (útvonal: todo-app/todo-app) megnyitva a Visual Studio Code-ban a terminálban kiadott npm install, majd az npm start paranccsal indítható, utána pedig a http://localhost:3000 linken érhető el. A backend része pedig (útvonal: todo-app\Backend\TodoApp\TodoApp.sln) először az adatbázis létrehozása a Visual Studio-ban a Package Manager Console-ban kiadott  Update-Database parancssal generálódik le, ezután a build solution és run parancsokkal indítható el. Az adatbázist a Microsoft SQL Server Management Studio-ban a localhost\sqlexpress csatlakozással érhető el, és az adatbázis a Visual Studio-ban lefutott projekt után jelenik meg Microsoft SQL Server Management Studio-ban. 

## Backend leírása

A backend tartalmaz két entitást, amelyek a Card és Todo osztályokként reprezentálódnak a Visual Studio-ban. A két osztály a Model mappában található. A Card propertyjei között van az id (long típusú), name (string tipusú) és todok egy listája. A Todo propertyjei között van úgyszintén egy id (long típusú), title (string típusú), description (string típusú), deadline (date típusú), priority (int típusú) és cardtype (Card típusú) változó. Emellett Data mappában megtalálható a DataContext, amely az adatbázit reprezentálja és tartalmazza a két osztály entitását. Kettő kontrollert is tartalmaz a backend az egyik a card a másik a todo, és ezek az a api végpontokat tartalmazzák, amelyek a következők:

### CardController:

#### GET: api/Cards: Az adatbázisban lévő összes cardot visszadja.
#### POST: api/Cards: Új cardot ad az adatbázishoz, amelynél megadható a card neve.
#### GET: api/Cards/id: Az adatbázisból visszaadja az id alapján a megfelelő cardot.
#### PUT: api/Cards/id: Változtatni lehet a nevét a már adatbázisban lévő cardnak, amelyet id alapján lehet így modsósítani.
#### DELETE: api/Cards/id: Törölni lehet id alapján a cardot az adatbázisból.

### TodoController:

#### GET: api/Todos: Az adatbázisban lévő összes todot visszadja.
#### POST: api/Todos: Új todot ad az adatbázishoz, amelynél megadható a todo címe, leírása, határideje, priority és a cardid.
#### GET: api/Todos/id: Az adatbázisból visszaadja az id alapján a megfelelő todot.
#### PUT: api/Todos/id: Változtatni lehet a már adatbázisban lévő todot id alapján.
#### DELETE: api/Todos/id: Törölni lehet id alapján a todot az adatbázisból.

A backend tartalmazza a DTO mappát, amely egy CardDto és a TodoDto osztályokat foglalja magában. A CardDto a name (string típusú) változóval, és a TodoDto a title (string típusú), description (string típusú), deadline (date típusú), priority (int típusú) és CardId (long típusú) változóval szerepel.

## Frontend leírása

A frontendben a project tartalmazza a cardokat, amelyek tartalmazzák a todokat, annak megfelelően, hogy a felhasználó, mely card vagyis állapotba sorolja a feladatait. Az applikáción belül lehet új cardokat hozzáadni, todokat hozzáadni cardokhoz, törölni cardokat és todokat. 
A frontend tartalmaz egy App komponens, a többi komponens a components mappában található, amelyek a Card, Task, Addfrom és a Editform komponens. A card komponens a todok állapotát fejezi ki. A Task komponens reprezentálja a todokat. Az app komponens kiíratja a cardokat, emellett a törlést és a módosítást is végezné. A card komponens a taskokat jeleníti meg és foglalja magában, és a taskok törlése és priorizálásuk módosítása is itt hajtódik végre. Az Addform komponens megjelenít egy 3 beviteli mezővel rendelkező formot, amelyben megadható egy task neve, leírása és határideje. A mentés gombra rányomva megjelenik az új task a cardban. Az Editform is megjelenít egy három beviteli mezős formot, amellyel a task nevét, leírását és határ idejét lehet módosítani. Ezenkívül a frontend egy külön index.css fájlban tartalmazza a megjelenítéshez szükséges paramétereket.
Az applikációban az Add card gomb hatására megadható egy új gomb, amely meg is jelenik a felületen. A cardok fejlécében a neve mellett a plusz gombbal hozzáadható egy új task, amely a form kitöltése után jelenik meg. A másik gomb a kuka, amellyel lehet törölni az adott cardot. A taskok fejlécében lévő gombbal lehet törölni az adott taskot úgyszintén a kuka gombbal. A taskok legalján a fel és le gombbal lehet a prioritásukat változtatni. A fel gombbal eggyel fentebbi prioritásban kerül a lefele gombbal egy alacsonyabb prioritásba kerül. Így a card legtetején lévő task a legfontosabb.

