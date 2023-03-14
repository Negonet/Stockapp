import DATABASE from "../Database/DATABASE"


export const askData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(DATABASE)
        }, 2000)
    })
}


export const askProductId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(DATABASE.find (prod => prod.id === id))
        }, 2000)
    })
}
