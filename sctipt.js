function test(){
    console.log('a')

    Promise.resolve().then(() => console.log('b'))

    setTimeout(()=>{
        console.log("c")
    }, 0)

    console.log("f")

    Promise.resolve().then(() => console.log("d"))
}



test()