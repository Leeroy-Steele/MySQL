
(async function (){     // get data from backend project / mongoDB when page loads
    let data = await fetch('http://localhost:3000/students/all').then((res)=>{return res.json()})
    console.log(data)
    populateChart(data)
})()

function populateChart(data){

    populateHeaders(data)
    populateBody(data)
    
}

function populateHeaders(data){
    let tableHead = document.getElementById("tableHead")
    let tr = document.createElement("tr")

    for(let key in data[0]){    //get table titles from first data entry keys
        // console.log(key)
        let th = document.createElement("th")
        th.innerHTML = key.toUpperCase()
        tr.appendChild(th)
    }
    tr.classList.add("table-primary")
    tableHead.appendChild(tr)
}

function populateBody(data){
    let tableBody = document.getElementById("tableBody") 
   
    for(let i in data){
        // console.log(i)
        let tr = document.createElement("tr")

        for(let key in data[i]){
            let item = key
            // console.log(key)
            let td = document.createElement("td")
            td.innerHTML=data[i][item]
            tr.appendChild(td)
            // console.log(data[i][item])
        }

        tableBody.appendChild(tr)
    }
}

function showOne(){
    let name = document.getElementById("showOneTextInput").value
    // console.log(name)
     
    document.getElementById('tableBody').replaceChildren();//remove current results trom table
    
    (async function (){     // get data from backend project / mongoDB when page loads
        let data = await fetch(`http://localhost:3000/students/one/${name}`).then((res)=>{return res.json()})
        console.log(data)
        // console.log(data)
        let tableBody = document.getElementById("tableBody") 
        let tr = document.createElement("tr")

        for(let key in data){
            let item = key
   
            let td = document.createElement("td")
            td.innerHTML=data[item]
            tr.appendChild(td)
            
        }

        tableBody.appendChild(tr)
    })()

}

function deleteOne(){
    let name = document.getElementById("deleteTextInput").value

    document.getElementById('tableBody').replaceChildren();//remove current results trom table

    (async function (){     // get data from backend project / mongoDB when page loads
        await fetch(`http://localhost:3000/students/deleteOneEntry/${name}`)    // delete from database

        let data = await fetch('http://localhost:3000/students/all').then((res)=>{return res.json()})
        // console.log(data)
        populateBody(data)
    })()


}