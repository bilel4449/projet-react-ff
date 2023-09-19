import { AJOUTER,  MODIFIER, SUPPRIMER } from "./actionTypes";


export const init={
    selectedTag:"",
    users:[
        {id:'1',nom:'haj mabrouk',prenom:'bilel',ville:'sfax',photo:'https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/369640747_25502645689334178_302696026048093524_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=yeMdVCDNf1IAX-AY-p1&_nc_ht=scontent.ftun14-1.fna&oh=00_AfABrbn10gdmDW5WR0ErgB_77C1m66iQwt8dcZbVtTEOgQ&oe=6501AAC4'},
        {id:'2',nom:'ayedi',prenom:'brahim',ville:'sfax'}
    ]
};
export const reducer=(state=init,{type,payload})=>{
    switch (type) {
        case AJOUTER:
            
            return{
            ...state,
            users:[...state.users,payload]
            }
            case SUPPRIMER:
                return{
                    ...state,
                    users:state.users.filter(el=>el.id!==payload)
                }
                case MODIFIER:
                    return{
                        ...state,
                        users:state.users.map(el=>el.id===payload.id?payload:el)
                    }
                //  case FILTRER:
                //     return{
                //       ...state,
                //      selectedTag:action.payload
                //     }





                   
        default:
            return state;
    }

}