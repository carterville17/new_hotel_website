document.getElementById('bookNow').addEventListener('click',()=> {
    alert ('Redirect to booking page!');
});
const rooms = [
    { title: 'Delux Room', price: 100},
    { title: 'Suite', price: 200 },
];
const roomSection = document.getElementById('rooms');
rooms.forEach((room) => {
    const card = document.createElement('div');
    card.innerHTML = `
    <h3>${room.title}</h3>
    <p>${room.price} FCFA/night</p>
    <button>Book</button>`;
    roomSection.appendChild(card);
});