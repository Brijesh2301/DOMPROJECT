
var arr = [
    { dp: "https://images.unsplash.com/photo-1627067227573-07bc616f46ee?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEdpcmxzfGVufDB8fDB8fHww", story: "https://media.istockphoto.com/id/538650431/photo/high-school-or-college-graduate.jpg?s=2048x2048&w=is&k=20&c=qcrrBwA-bGypx2fbr8Q6wXj2GmjsjF9_VPrtoEMgCHs=" },
    {
        dp: "https://images.unsplash.com/photo-1606893995103-a431bce9c219?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHMlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
        story: "https://images.unsplash.com/photo-1606122017369-d782bbb78f32?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHMlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1606893995103-a431bce9c219?auto.format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHMlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
        story: "https://images.unsplash.com/photo-1575897368738-aa5401c4af7d?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmxzJTIwcGhvdG98ZW58MHx8MHx8fDA%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1610353458972-73d1d9313347?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmxzJTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
        story: "https://images.unsplash.com/photo-1521856729154-7118f7181af9?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmxzJTIwcGhvdG98ZW58MHx8MHx8fDA%3D"
    }
];

var storiya = document.querySelector("#storiya");
var clutter = "";

arr.forEach(function (elem, idx) {
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>
`;
});
storiya.innerHTML = clutter;

storiya.addEventListener("click", function (dets) {
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },3000)
});
