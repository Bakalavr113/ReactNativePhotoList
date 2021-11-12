import { PhotoApi } from "../../Api/Api";

export const SET_PHOTOS = "SET_PHOTOS"
export const IS_FETCH  = "IS_FETCH"
export const SET_SEARCH_TEXT ="SET_SEARCH_TEXT"
const LIKE_PHOTO = "LIKE_PHOTO"
const DISLIKE_PHOTO = "DISLIKE_PHOTO"
const initialState = {
  Photos: [],
  isFetch: true,
  searchText: "",
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTOS:
      action.photos.map(photo => {
        photo["liked"] = false
        photo["disliked"] = false
        photo["count"] = 0
      } )
      return { ...state, Photos: action.photos };
    case IS_FETCH:
      return { ...state, isFetch: action.fetch }; 
      case SET_SEARCH_TEXT:
        return { ...state, searchText: action.text}; 
        case LIKE_PHOTO:
          return { ...state, Photos: state.Photos.map(photo => photo.id === action.id ? {...photo, liked: true, disliked: false} : photo)};
          case DISLIKE_PHOTO:
            return { ...state, Photos: state.Photos.map(photo => photo.id === action.id ? {...photo, disliked: true, liked: false} : photo)};
        
    
      
    default:
      return state;
  }
};
export const setIsFetchAction = (fetch) => ({ type: IS_FETCH, fetch });
export const setPhotosAction = (photos) => ({ type: SET_PHOTOS, photos });
export const setSearchTextAction = (text) => ({type: SET_SEARCH_TEXT,text })
export const likePhotoAC = (id) => ({type: LIKE_PHOTO, id})
export const dislikePhotoAC = (id) => ({type: DISLIKE_PHOTO, id})
export const getPhotos = () => (dispatch) => {
    dispatch(setIsFetchAction(true));
    PhotoApi.getPhotos().then(data => {
        dispatch(setPhotosAction(data));
        dispatch(setIsFetchAction(false));
    }).catch((error)=>{
        console.log(error);
        // alert(error.message);
     });
  };
export default homeReducer;
