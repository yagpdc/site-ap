import { StaticImageData } from "next/image"
import Yago from "../../../public/membros/yago.jpg"
import Toninho from "../../../public/membros/toninho.jpg"
import Placeholder0 from "../../../public/membros/placeholders/placeholder0.png"
import Placeholder1 from "../../../public/membros/placeholders/placeholder1.jpeg"
import Placeholder2 from "../../../public/membros/placeholders/placeholder2.jpg"
import Placeholder3 from "../../../public/membros/placeholders/placeholder3.jpg"
import Placeholder4 from "../../../public/membros/placeholders/placeholder4.jpg"
import Placeholder5 from "../../../public/membros/placeholders/placeholder5.jpg"
import Placeholder6 from "../../../public/membros/placeholders/placeholder6.jpg"

interface MembersObject {
    nome: string,
    imagem: StaticImageData,
    data: string,
    setor: string
}

const membros_data: MembersObject[] =[
    {
        nome: "Yago",
        imagem: Placeholder0,
        data: "02/01/1997",
        setor: "coordenação"
    },
    {
        nome: "Clara",
        imagem: Placeholder1,
        data: "02/01/1997",
        setor: "desenvolvimento"
    },

    {
        nome: "Silvia",
        imagem: Placeholder2,
        data: "02/01/1997",
        setor: "apostila"
    },
    {
        nome: "Clara",
        imagem: Placeholder1,
        data: "02/01/1997",
        setor: "apostila"
    },
    {
        nome: "Toninho",
        imagem: Toninho,
        data: "02/01/1997",
        setor: "apostila"
    },

    {
        nome: "Yago",
        imagem: Yago,
        data: "02/01/1997",
        setor: "desenvolvimento"
    },
    {
        nome: "Pedro",
        imagem: Placeholder4,
        data: "02/01/1997",
        setor: "material"
    },
    {
        nome: "Silvia",
        imagem: Placeholder2,
        data: "02/01/1997",
        setor: "material"
    },
    {
        nome: "Douglas",
        imagem: Placeholder5,
        data: "02/01/1997",
        setor: "desenvolvimento"
    },
    {
        nome: "Ana",
        imagem: Placeholder6,
        data: "02/01/1997",
        setor: "instrutor"
    },
    {
        nome: "Douglas",
        imagem: Placeholder5,
        data: "02/01/1997",
        setor: "instrutor"
    },
    {
        nome: "Clara",
        imagem: Placeholder1,
        data: "02/01/1997",
        setor: "instrutor"
    },
    {
        nome: "Yago",
        imagem: Placeholder0,
        data: "02/01/1997",
        setor: "marketing"
    },
    {
        nome: "Silvia",
        imagem: Placeholder2,
        data: "02/01/1997",
        setor: "marketing"
    },
    {
        nome: "Bruna",
        imagem: Placeholder3,
        data: "02/01/1997",
        setor: "marketing"
    },
    {
        nome: "Clara",
        imagem: Placeholder1,
        data: "02/01/1997",
        setor: "desenvolvimento"
    },

]

export default membros_data
