import { StaticImageData } from "next/image"
import Yago from "../../../public/membros/yago.jpg"
import Toninho from "../../../public/membros/toninho.jpg"
import Placeholder from "../../../public/membros/placeholder-profile.png"

interface MembersObject {
    nome: string,
    imagem: StaticImageData,
    data: string,
    setor: string
}

const membros_data: MembersObject[] =[
    {
        nome: "Yago",
        imagem: Placeholder,
        data: "02/01/1997",
        setor: "coordenação"
    },
    {
        nome: "Yago",
        imagem: Placeholder,
        data: "02/01/1997",
        setor: "apostila"
    },
    {
        nome: "Yago",
        imagem: Placeholder,
        data: "02/01/1997",
        setor: "apostila"
    },
    {
        nome: "douglas",
        imagem: Placeholder,
        data: "02/01/1997",
        setor: "desenvolvimento"
    },
    {
        nome: "Toninho",
        imagem: Toninho,
        data: "02/01/1997",
        setor: "desenvolvimento"
    },

    {
        nome: "Yago",
        imagem: Yago,
        data: "02/01/1997",
        setor: "desenvolvimento"
    },
    {
        nome: "Yago",
        imagem: Placeholder,
        data: "02/01/1997",
        setor: "material"
    },
    {
        nome: "Yago",
        imagem: Placeholder,
        data: "02/01/1997",
        setor: "material"
    },
    {
        nome: "Yago",
        imagem: Placeholder,
        data: "02/01/1997",
        setor: "desenvolvimento"
    },
    {
        nome: "Yago",
        imagem: Placeholder,
        data: "02/01/1997",
        setor: "instrutor"
    },
    {
        nome: "Yago",
        imagem: Placeholder,
        data: "02/01/1997",
        setor: "instrutor"
    },
    {
        nome: "Yago",
        imagem: Placeholder,
        data: "02/01/1997",
        setor: "instrutor"
    },
    {
        nome: "Yago",
        imagem: Placeholder,
        data: "02/01/1997",
        setor: "marketing"
    },
    {
        nome: "Yago",
        imagem: Placeholder,
        data: "02/01/1997",
        setor: "marketing"
    },
    {
        nome: "Yago",
        imagem: Placeholder,
        data: "02/01/1997",
        setor: "marketing"
    },
    {
        nome: "Yago",
        imagem: Placeholder,
        data: "02/01/1997",
        setor: "desenvolvimento"
    },

]

export default membros_data
