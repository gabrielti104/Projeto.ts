import { Router, Request, Response } from "express"

const router = Router()

router.get('/',(req:Request,res:Response)=>{
    res.render('home')
})

//rota estatica
router.get('/login',(req:Request,res:Response)=>{
    res.render('login')
})

//rota dinamica
router.get('/noticia/:politica',(req:Request,res:Response) =>{
    let politica:string = req.params.politica
    res.send("Noticias: "+politica)
})

router.get('/noticia/:noticia',(req:Request,res:Response) =>{
    let noticia:string = req.params.noticia
    res.send("Noticia: " +noticia)
})
0
 router.get('/bebida/:opção1-:opção2',(req:Request,res:Response) =>{
    let opção1:string = req.params.opção1
    let opção2:string = req.params.opção2

    res.send(`Jose pinguço escolheu ${opção1} e ${opção2}`)
 })

 export default router