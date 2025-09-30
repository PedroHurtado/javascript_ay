class Customer{
    static get(id,cb){
        if(id===1){
            cb(null,{id})
        }
        else{
            cb("El clinte no existe")
        }
    }
}

class Invoices{
    static get(client_id,cb){
        if(client_id===1){
            cb(null,{client_id, invoices:[]})
        }
        else{
            cb("El clinte no tiene facturas")
        }
    }
}

function main(id){
   Customer.get(id,(error,data)=>{
     if(data){
        Invoices.get(data.id,(error,data)=>{
            if(data){
                console.log(data)
            }
            else{
                console.log(error)
            }
        })
     }
     else{
        console.log(error)
     }
   })
}

main(1) //OK
main(2) //ERROR