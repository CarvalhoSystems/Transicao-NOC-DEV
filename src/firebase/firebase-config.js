import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Se for usar banco de dados
import { getAuth } from "firebase/auth"; // Se for usar autenticação

// Pegando as variáveis de ambiente que configuramos no .env
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa os serviços que você vai usar e exporta eles
export const db = getFirestore(app);
export const auth = getAuth(app);
