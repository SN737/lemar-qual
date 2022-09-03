let   driverArray = [];
const inputMain = document.querySelector('.input')
const addBtn = document.querySelector('.addBtn');
const driverList = document.querySelector('.driverlist');
const sortBtn = document.querySelector('.sortBtn');
const participants = document.querySelector('.participants');
const clearBtn =  document.querySelector('.clearBtn');
const sortedlist = document.querySelector('.sortedlist')



clearBtn.addEventListener('click', ()=> {
    confirm('Очистить всё?');
    driverArray = [];
    driverList.innerHTML = '';
    sortedlist.innerHTML = '';
    sortBtn.disabled = false;
})

addBtn.addEventListener('click', (e)=>{
    if (!inputMain.value){
        return;
    }else
        addDriver()
});

sortBtn.addEventListener('click', ()=>{
    if (participants.value>1){
        sortDrivers()
        sortBtn.disabled = true;
    }else alert('Выбери количество участников!');


});

inputMain.addEventListener('keydown', (e)=>{
    if(e.code !=='Enter'){
        return;
    }else if (!inputMain.value){
        return;
    }else
        addDriver()
});

function addDriver (){
    let  id = (Math.random()*Math.random() * 100000);
    const driver = new Driver(inputMain.value, id)
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
}

function displayDrivers(name, id) {
    const driverItem = document.createElement('div');
    driverItem.classList.add('driverItem');
    driverItem.setAttribute('id', id)
    driverList.append(driverItem);
    // driverItem.textContent = name
    driverItem.innerHTML = `<p>${name}</p>`;
    const delBtn = document.createElement('button');
    delBtn.classList.add('delBtn');
    delBtn.setAttribute('id', id)
    driverItem.append(delBtn);
    removeDriver(driverItem, delBtn)
};

function sortDrivers() {
    const id = 'id';
    const sortedArr = driverArray.sort((id1, id2)=>id1[id]>id2[id] ? 1 : -1);
    groupingDrivers(sortedArr, participants.value)
}

function groupingDrivers(sortedArr, partValue){
    let i = 1
    do {
        let groupedArr = sortedArr.splice(0,partValue);
        const groupList = document.createElement('div');
        // sortedlist.append(groupList);
        const ul = document.createElement('ul')
        sortedlist.append(ul)
        ul.innerHTML = `Группа${i}`;
        groupedArr.forEach((obj) => {
            displaySorted(obj.name, ul);
            });
        i++;
    } while (sortedArr.length>0);
};


function displaySorted(name, ul) {
   const driverItemSorted = document.createElement('li');
   driverItemSorted.classList.add('driverItemSorted');
   ul.append(driverItemSorted);
   driverItemSorted.innerHTML = `${name}`;
}