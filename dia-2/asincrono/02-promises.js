class Customer {
    static get(id, cb) {
        return Promise((resolve, reject) => {
            if (id === 1) {
                resolve({ id })
            }
            else {
                reject("El cliente no existe")
            }
        })
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


//resolve->then->1-n
//reject->catch->1 error
function main(id) {
    console.log("start")
    Customer.get(id)
        .then(({ id }) => Invoices.get(id))
        .then((invoices) => console.log(invoices))
        .catch((err) => console.log(err))
        .finally(()=>console.log("end-0"))
    console.log("end-1")
    //start-end1->invoices->end0
}

main(1) //OK
main(2) //ERROR