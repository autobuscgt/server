
const express = require('express')
const app = express();
const PORT = 7000;
app.use(express.json())

app.get('/', (req, res) => {
    return res.send('Привет')
})
app.post('/',(req,res)=>{

})
app.put('/',(req,res)=>{

})
app.delete('/',(req,res)=>{

})

app.listen(PORT,()=>{console.log(`server is running on http://localhost:${PORT}`)})
