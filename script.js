let   driverArray = [];
const inputMain = document.querySelector('.input0')
const addBtn = document.querySelector('.addBtn');
const driverList = document.querySelector('.driverlist');
const sortBtn = document.querySelector('.sortBtn');
const participants = document.querySelector('.participants');
const clearBtn =  document.querySelector('.clearBtn');
const sortedlist = document.querySelector('.sortedlist')

participants.value

clearBtn.addEventListener('click', ()=> {
    confirm('удалить всех?');
    driverArray = [];
    driverList.innerHTML = '';
    sortedlist.innerHTML ='';

})

addBtn.addEventListener('click', (e)=>{
    if (!inputMain.value){
        return
    }else
        addDriver()
});
inputMain.addEventListener('keydown', (e)=>{


    if(e.code !=='Enter'){
        return
    }else if (!inputMain.value){
        return
    }else
        addDriver()
})

function addDriver (){
    let  id = (Math.random()*Math.random() * 100000);
    const driver = new Driver(inputMain.value, id)
    driverArray.push(driver)
    displayDrivers(driver.name, driver.id)
    inputMain.value = ''
}

sortBtn.addEventListener('click', ()=>{
    if (participants.value>1){
        sortDrivers()
    }else alert('Выбери количество участников!')

})

class Driver {
    constructor(name, id) {
        this.name = name;
        this.id = id
         }
         remove(){
        removeDriver(this.name)
    }
};

// function removeDriver() {
//
// }

function displayDrivers(name, id) {
    const driverItem = document.createElement('div');
    driverItem.classList.add('driverItem');
    driverList.append(driverItem);
    // driverItem.textContent = name
    driverItem.innerHTML = `<p>${name}</p>`;
    const delBtn = document.createElement('button');
    delBtn.classList.add('delBtn');
    driverItem.append(delBtn);
    return driverItem, delBtn;

}

function sortDrivers() {
    const id = 'id';
    const sortedArr = driverArray.sort((id1, id2)=>id1[id]>id2[id] ? 1 : -1);
    // sortedArr.forEach((obj) => {
    //     displaySorted(obj.name)
    // })
    groupingDrivers(sortedArr, participants.value)

}

function groupingDrivers(sortedArr, partValue){
    // let groupedArr = sortedArr.splice(0,partValue);
    let i = 1
    do {
        let groupedArr = sortedArr.splice(0,partValue);
        const groupList = document.createElement('div');
        sortedlist.append(groupList);
        groupList.innerHTML = `<ul>Группа${i}</ul>`;
        groupedArr.forEach((obj) => {
            displaySorted(obj.name, i);
            });
        i++;
    } while (sortedArr.length>0);
}


function displaySorted(name) {
   const driverItemSorted = document.createElement('div');
   driverItemSorted.classList.add('driverItemSorted');
   sortedlist.append(driverItemSorted);

   // driverItem.textContent = name
        driverItemSorted.innerHTML = `<li>${name}</li>`;

}