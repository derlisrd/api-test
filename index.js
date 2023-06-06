import express from 'express'
import cors from 'cors'
import env from './src/Config/env.js'
import { router } from './src/Routes/index.js'
import { setupSwagger } from './setupSwagger.js'


const app = express()

app.use(cors({origin:'*'}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

setupSwagger(app);


app.use('/',router)




const PORT = env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server ready on port`,PORT);
})

