// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { updateDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { doc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCK8k8n1SjyK0IY-XBWlcJUCBC0Vr62zks",
    authDomain: "sparta-7bf56.firebaseapp.com",
    projectId: "sparta-7bf56",
    storageBucket: "sparta-7bf56.firebasestorage.app",
    messagingSenderId: "890997503675",
    appId: "1:890997503675:web:6e1062b29fd62f90375b9e",
    measurementId: "G-F3WLHH58CE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ❤️ 좋아요 버튼 동작
$(document).ready(function () {
    $("#likeBtn").on("click", async function (e) {
        e.preventDefault();

        try {

            const docRef = doc(db, "likes", "yR03Wjor7bOgxEpsbPBg");
            const docSnap = await getDoc(docRef);

            //현재 문서 안의 likes 값을 가져오고, 없으면 0 처리
            const count = docSnap.data().likes || 0;
            await updateDoc(docRef, { likes: count + 1 });
            $("#count").text(`❤️${count}`);
            alert("하트가 +1 되었습니다!");

        } catch (err) {
            console.error("Error adding like: ", err);
        }
    });
});


