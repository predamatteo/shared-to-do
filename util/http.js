import axios from "axios";

let URL = `https://pluri-to-do-default-rtdb.europe-west1.firebasedatabase.app`;

export function storeExpense(expense){
    axios.post(URL+'/famigliaFerraresi.json',expense)
}

export async function fetchExpenses(){
    const response = await axios.get(URL+'/famigliaFerraresi.json')
    const expenses = []
    for(const key in response.data){
        const expenseObj ={
            id: key,
            title:response.data[key].title,
            info:response.data[key].info
        }
        expenses.push(expenseObj)
    }
    //console.log(expenses)
    return expenses;
}

export function deleteExpense(id){
    return axios.delete(URL+`/famigliaFerraresi/${id}.json`)
}

//delete room?