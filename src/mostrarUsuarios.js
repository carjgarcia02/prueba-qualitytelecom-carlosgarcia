fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {
    let tableData = "";
    data.map((value) => {
        tableData += `<tr>
            <td class="border border-slate-700">${value.id}</td>
            <td class="border border-slate-700">${value.name}</td>
            <td class="border border-slate-700">${value.email}</td>
            <td class="border border-slate-700">${value.website}</td> 
        </tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
}).catch((err) => {
    console.log(err);
});
