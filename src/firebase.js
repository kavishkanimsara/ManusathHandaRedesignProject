import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, limit} from "firebase/firestore"; 

// Initialize Firebase
var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
  };
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const pagesRef = collection(db, "pages");

export const getpages = async (page)=>{
  const arrData =[];
  try{
    const q = query(pagesRef, where("path", "==",decodeURI(page)) , limit(1));
  const querySnapshot = await getDocs(q);
 if(querySnapshot.empty){
    throw "404";
 }
  querySnapshot.forEach((doc)=>{
    const data = doc.data();
    const reStruct = {
      id:doc.id,
      categories:data.categories,
      files:data.files,
    };
    arrData.push(reStruct);
  });

  }
  catch(err){
    throw err;
  }


  return arrData;

}

export const getRelativeURL=(url)=>{
  let path = url.split("/");
  path = path.filter((p)=>p!=='');
  path = path.slice(1);
  return '/'+path.join('/');
}

export const CategoryPath = 'categories';
