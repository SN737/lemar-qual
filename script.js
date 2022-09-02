const  driverArray = [];
const inputMain = document.querySelector('.input0')
const addBtn = document.querySelector('.addBtn');
const driverList = document.querySelector('.driverlist');
const sortBtn = document.querySelector('.sortBtn');

addBtn.addEventListener('click', ()=>{
    let  id = (Math.random()*Math.random() * 1000);
    const driver = new Driver(inputMain.value, id)
    driverArray.push(driver)
    displayDrivers(driver.name, driver.id)
    inputMain.value = ''

    //пока не нужно перебирать
    // driverArray.forEach((obj)=> {
    //     displayDrivers(obj.name)
    // })
});

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
    sortedArr.forEach((obj) => {
        displaySorted(obj.name)
    })

}
    function displaySorted(name) {
   const driverItemSorted = document.createElement('div');
   driverItemSorted.classList.add('driverItemSorted');
   const sortedlist = document.querySelector('.sortedlist')
   sortedlist.append(driverItemSorted);
   // driverItem.textContent = name
        driverItemSorted.innerHTML = `<p>${name}</p>`;



}