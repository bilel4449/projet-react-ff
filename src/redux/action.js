import { AJOUTER,  MODIFIER, SUPPRIMER } from "./actionTypes"

export const handleAjout=(ajoutUser)=>{
return{
    type:AJOUTER,
    payload:ajoutUser
}

}
export const handleSupprime=(ID)=>{
    return{
        type:SUPPRIMER,
        payload:ID
    }
}
export const handleModif=(Id)=>{
return{
    type:MODIFIER,
    payload:Id
}
}
// export const handleFilter=(tag)=>{
//     return{
//         type:FILTRER,
//         payload:tag
//     }
// }
