
const cart = [
    {id:1,name:"Iphone",price:40000},
    {id:2,name:"Iphone",price:42000},
    {id:3,name:"Android",price:35000}
]
let newId = 3;  

class Cart {
    getAllProducts (req,res) {
        return res.send(cart)
    }
    getByFilter(req,res){
        try {
            const {name} = req.body
            if(!name || name == ""){
                return res.status(404).json({message:'НЕ найдено'})
            }
            const result = cart.filter(item => item.name == String(name))
            return res.status(200).json(result)
        } catch (error) {
            console.log(error);
        }
    }
    getOneProduct(req,res){
        const {id} = req.params
        const choosenOne = cart.filter(item => Number(id) ===  item.id)
        return res.status(200).json(choosenOne)
    }
    postInCart(req,res){
        let {name,price} = req.body
        const newProduct = {
            id:newId++,
            name:name,
            price:price
        }
        cart.push(newProduct)
        return res.send(newProduct)
    }
    update(req,res){
        const {id} = req.params
        const {name,price} = req.body
        if (!name || !price) {
            return res.status(400).send({ message: 'Invalid data' });
        }
        const candidate = cart.find(item=> item.id === Number(id))
        candidate.name = name
        candidate.price = price
        return res.send(candidate)
    }
    delete(req,res){
        const {id} = req.params
        cart.splice(Number(id - 1),1)
        return res.status(200).json({message:'Удалено'})
    }
}
module.exports = new Cart()
