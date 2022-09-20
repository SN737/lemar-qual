let   driverArray = [];
const inputMain = document.querySelector('.input')
const addBtn = document.querySelector('.addBtn');
const driverList = document.querySelector('.driverlist');
const sortBtn = document.querySelector('.sortBtn');
const participants = document.querySelector('.participants');
const clearBtn =  document.querySelector('.clearBtn');
const sortedlist = document.querySelector('.sortedlist');
const image = document.querySelector('.image');

//клик по картинке вызовет запуск тестовой функции
image.addEventListener('dblclick', testFn)


clearBtn.addEventListener('click', ()=> {
    confirm('Очистить всё?');
    driverArray = [];
    driverList.innerHTML = '';
    sortedlist.innerHTML = '';
    sortBtn.disabled = false;
    participants.value.selected = 0
})

addBtn.addEventListener('click', (e)=>{
    if (!inputMain.value){
        return;
    }else
        addDriver(inputMain.value)
});

sortBtn.addEventListener('click', ()=>{
    if (participants.value>1){
        confirm('Сформировать группы ?')
        sortDrivers()
        sortBtn.disabled = true;
    }else alert('Не задано количество участников в группе');
});

inputMain.addEventListener('keydown', (e)=>{
    if(e.code !=='Enter'){
        return;
    }else if (!inputMain.value){
        return;
    }else
        addDriver(inputMain.value)
});

//создаём пилота, путём создания экземплероа класса, добавляем его в массив и присваеваем случайный ID
function addDriver (driverName){
    let  id = Math.ceil(Math.random() * 100000);
    const driver = new Driver(driverName, id)
    driverArray.push(driver)
    displayDrivers(driver.name, driver.id)
    inputMain.value = ''
};

class Driver {
    constructor(name, id) {
        this.name = name;
        this.id = id
         }
         remove(){
        removeDriver(this.name)
    }
};

function removeDriver(driverItem, delBtn) {
    delBtn.addEventListener('click', ()=>{
       if( driverItem.id == delBtn.id) {
           driverItem.remove()
           driverArray = driverArray.filter(obj => obj.id != delBtn.id);
       }
    })
};

function displayDrivers(name, id) {
    const driverItem = document.createElement('li');
    const driverItemWrapper = document.createElement('div');
    driverItemWrapper.classList.add('driverItemWrapper')
    driverItem.classList.add('driverItem');
    driverItem.setAttribute('id', id)
    driverList.append(driverItem);
    driverItem.append(driverItemWrapper)
    // driverItem.textContent = name
    driverItemWrapper.innerHTML = `<p class="pString">${name}</p>`;
    const delBtn = document.createElement('button');
    delBtn.classList.add('delBtn');
    delBtn.setAttribute('id', id)
    driverItemWrapper.append(delBtn);
    removeDriver(driverItem, delBtn)
};

//сортируем пилотов, по ID , так как они случайны, получаем случайный порядок сортировки
function sortDrivers() {
    const id = 'id';
    const sortedArr = driverArray.sort((id1, id2)=>id1[id]>id2[id] ? 1 : -1);
    groupingDrivers(sortedArr, participants.value)
}

//группируем по группам, путём извлечения из массива
function groupingDrivers(sortedArr, partValue){
    let i = 1
    do {
        let groupedArr = sortedArr.splice(0,partValue);
        const groupList = document.createElement('div');
        // sortedlist.append(groupList);
        const ul = document.createElement('ul')
        ul.classList.add('driverItemSorted_list');
        sortedlist.append(ul)
        ul.innerHTML = `Группа ${i}`;
        groupedArr.forEach((obj) => {
            displaySorted(obj.name, ul);
            });
        i++;
    } while (sortedArr.length>0);
};

//рендерем по группам
function displaySorted(name, ul) {
   const driverItemSorted = document.createElement('li');
   driverItemSorted.classList.add('driverItemSorted');
   ul.append(driverItemSorted);
   driverItemSorted.innerHTML = `${name}`;
};

//функция для тестового формирования списка участников
function testFn(){
    for(let i=1;i<=70;i++){
        addDriver(`Смоляниченко Александр`)
    }

};


