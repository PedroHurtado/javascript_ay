class Customer {
    static async get(id, cb) {
        if(id===1){
            return {id}
        }
        throw "El cliente no existe"
    }
}

class Invoices {
    static get(client_id, cb) {
        return new Promise((resolve, reject) => {
            if (client_id === 1) {
                resolve({ client_id, invoices: [] })
            }
            else {
                reject("El cliente no tiene facturas")
            }
        })
    }
}



async function main(id) {
    try{
        console.log("start")
        const customer = await Customer.get(id)
        const invoices = await Invoices.get(customer.id)
        console.log(invoices)
    }
    catch(err){
        console.log(err)
    }
    finally{
        console.log("end")
    }
    

    //start->invoices->end
}

main(1) //OK
main(2) //ERROR