
document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        const uid = userCredential.user.uid;

        return db.collection("entrepreneurs").doc(uid).set({
            fullName: fullName,
            email: email,
            mobile: mobile,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    })
    .then(() => {
        alert("Registration successful!");
        window.location.href = "entrepreneur_login.html";
    })
    .catch((error) => {
        alert(error.message);
    });
});
