
const firebaseConfig = {
  apiKey: "AIzaSyAH8bN0cSMyj8T4niN6spjE79ZKtNyLk8Q",
  authDomain: "homehub-4477e.firebaseapp.com",
  projectId: "homehub-4477e",
  storageBucket: "homehub-4477e.firebasestorage.app",
  messagingSenderId: "409144228304",
  appId: "1:409144228304:web:629831fba15e583a8de1d5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Auth
const auth = firebase.auth();

// Get current user
function getCurrentUser() {
  return auth.currentUser;
}

// Check if user is logged in
function isUserLoggedIn() {
  return auth.currentUser !== null;
}

// Sign out
function signOut() {
  return auth.signOut();
}
