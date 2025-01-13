// Importar las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Configuración de tu proyecto en Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC5103WiOaXlQxpGs1xXU6tsjQ-5W04jiY",
  authDomain: "playstation-e40fd.firebaseapp.com",
  projectId: "playstation-e40fd",
  storageBucket: "playstation-e40fd.firebasestorage.app",
  messagingSenderId: "928236061231",
  appId: "1:928236061231:web:9277c3f2ea91fd0e94fcda",
  measurementId: "G-RNM5W7CLKX"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Lógica de inicio de sesión
document.getElementById('login').addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Usuario autenticado con éxito
      const user = userCredential.user;
      console.log('Usuario autenticado:', user);
      // Redirigir o mostrar mensaje de éxito
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      alert('Error al iniciar sesión: ' + errorMessage);
    });
});

// Lógica de registro de usuario
document.getElementById('register').addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('emailCreate').value;
  const password = document.getElementById('passwordCreate').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Cuenta creada con éxito
      const user = userCredential.user;
      console.log('Usuario registrado:', user);
      // Redirigir o mostrar mensaje de éxito
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      alert('Error al registrar: ' + errorMessage);
    });
});
