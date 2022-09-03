let   driverArray = [];
const inputMain = document.querySelector('.input0')
const addBtn = document.querySelector('.addBtn');
const driverList = document.querySelector('.driverlist');
const sortBtn = document.querySelector('.sortBtn');
const participants = document.querySelector('.participants');
const clearBtn =  document.querySelector('.clearBtn');
const sortedlist = document.querySelector('.sortedlist')

let partValue = participants.value;

clearBtn.addEventListener('click', ()=> {
    confirm('удалить всех?');
    driverArray = [];
    driverList.innerHTML = '';
    sortedlist.innerHTML ='';

})

addBtn.addEventListener('click', addDriver);
inputMain.addEventListener('keydown', (e)=>{

// допилить проверку на заполненность
    // alert(e.code)
    if(e.code !=='Enter'){
        return
    }else addDriver()
})

function addDriver (){
    let  id = (Math.random()*Math.random() * 1000);
    const driver = new Driver(inputMain.value, id)
    driverArray.push(driver)
    displayDrivers(driver.name, driver.id)
    inputMain.value = ''
}

sortBtn.addEventListener('click', sortDrivers)

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
    driverItem.innerHTML = `<p>${name} ${id}</p>`;
}

function sortDrivers() {
    const id = 'id';
    const sortedArr = driverArray.sort((id1, id2)=>id1[id]>id2[id] ? 1 : -1);
    // sortedArr.forEach((obj) => {
    //     displaySorted(obj.name)
    // })
    groupingDrivers(sortedArr, partValue)

}

function groupingDrivers(sortedArr, partValue){
    let groupedArr = sortedArr.splice(0,partValue);
    console.log('тут')
    let stop = sortedArr.length
    for(let i=1; i<10; i++) {
        console.log('и тут')
        const groupList = document.createElement('div');
        sortedlist.append(groupList);
        console.log(i)
        groupList.innerHTML = `<p>Группа${i}</p>`;
        groupedArr.forEach((obj) => {
            displaySorted(obj.name, i)

        });
    }
}


function displaySorted(name) {
   const driverItemSorted = document.createElement('div');
   driverItemSorted.classList.add('driverItemSorted');
   sortedlist.append(driverItemSorted);
   // driverItem.textContent = name
        driverItemSorted.innerHTML = `<p>${name}</p>`;



}