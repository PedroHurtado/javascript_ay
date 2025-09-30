console.log("start")  //sincrono
setTimeout(()=>console.log("timeout"),0) //task callback
Promise.resolve()
        .then(()=>console.log("promise1")) //microtask
        .then(()=>console.log("promise2"))
console.log("end") //sincrono

/*
    https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
    https://www.youtube.com/watch?v=8aGhZQkoFbQ
    En que orden se imprimen los resultados en la consola
    start,timeout,promise1,promise2,end

    carol

    start,promise1,promise2,timeout,end

    pedro

    start,end,promise1,promise2,timeout

    stack(start,end)
    microtask(promise1,promise2)
    task(timeout)

*/