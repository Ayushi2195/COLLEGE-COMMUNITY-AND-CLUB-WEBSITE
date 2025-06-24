const books = {
  fantasy: [
    { title: "Harry Potter and the Sorcerer's Stone", image: "https://covers.openlibrary.org/b/id/7984916-L.jpg", link: "https://openlibrary.org/works/OL82563W" },
    { title: "The Hobbit", image: "https://covers.openlibrary.org/b/id/6979861-L.jpg", link: "https://openlibrary.org/books/OL24369619M" },
    { title: "Eragon", image: "https://covers.openlibrary.org/b/id/8667847-L.jpg", link: "https://openlibrary.org/books/OL23277703M" },
    { title: "Percy Jackson and the Olympians: The Lightning Thief", image: "https://covers.openlibrary.org/b/id/8901946-L.jpg", link: "https://openlibrary.org/books/OL24694823M" },
    { title: "A Game of Thrones", image: "https://covers.openlibrary.org/b/id/8231994-L.jpg", link: "https://openlibrary.org/books/OL7570679M" },
    { title: "The Name of the Wind", image: "https://covers.openlibrary.org/b/id/8462111-L.jpg", link: "https://openlibrary.org/books/OL7535462M" },
    { title: "The Magicians", image: "https://covers.openlibrary.org/b/id/7270928-L.jpg", link: "https://openlibrary.org/books/OL15885562M" },
    { title: "The Lion, the Witch and the Wardrobe", image: "https://covers.openlibrary.org/b/id/8239251-L.jpg", link: "https://openlibrary.org/books/OL45804M" },
    { title: "Mistborn: The Final Empire", image: "https://covers.openlibrary.org/b/id/8619705-L.jpg", link: "https://openlibrary.org/books/OL25407235M" },
    { title: "The Way of Kings", image: "https://covers.openlibrary.org/b/id/8232212-L.jpg", link: "https://openlibrary.org/books/OL26434393M" },
    { title: "Northern Lights (The Golden Compass)", image: "https://covers.openlibrary.org/b/id/8128693-L.jpg", link: "https://openlibrary.org/books/OL45846M" },
    { title: "Red Queen", image: "https://covers.openlibrary.org/b/id/8940181-L.jpg", link: "https://openlibrary.org/books/OL26641965M" }
  ],
  mystery: [
    { title: "The Girl with the Dragon Tattoo", image: "https://covers.openlibrary.org/b/id/8228691-L.jpg", link: "https://openlibrary.org/books/OL7711998M" },
    { title: "Gone Girl", image: "https://covers.openlibrary.org/b/id/8091016-L.jpg", link: "https://openlibrary.org/books/OL24350451M" },
    { title: "A Study in Scarlet", image: "https://covers.openlibrary.org/b/id/8228781-L.jpg", link: "https://openlibrary.org/books/OL24368633M" },
    { title: "And Then There Were None", image: "https://covers.openlibrary.org/b/id/8225639-L.jpg", link: "https://openlibrary.org/books/OL24390867M" },
    { title: "The Da Vinci Code", image: "https://covers.openlibrary.org/b/id/9250927-L.jpg", link: "https://openlibrary.org/books/OL7660722M" },
    { title: "The Silent Patient", image: "https://covers.openlibrary.org/b/id/10504980-L.jpg", link: "https://openlibrary.org/books/OL27381412M" },
    { title: "The Woman in White", image: "https://covers.openlibrary.org/b/id/8447583-L.jpg", link: "https://openlibrary.org/books/OL25570209M" },
    { title: "Big Little Lies", image: "https://covers.openlibrary.org/b/id/8312123-L.jpg", link: "https://openlibrary.org/books/OL22936779M" },
    { title: "The Reversal", image: "https://covers.openlibrary.org/b/id/7222246-L.jpg", link: "https://openlibrary.org/books/OL25765542M" },
    { title: "Before I Go to Sleep", image: "https://covers.openlibrary.org/b/id/7778651-L.jpg", link: "https://openlibrary.org/books/OL24695712M" },
    { title: "In the Woods", image: "https://covers.openlibrary.org/b/id/7268163-L.jpg", link: "https://openlibrary.org/books/OL26907899M" }
  ],
  selfhelp: [
    { title: "Atomic Habits", image: "https://covers.openlibrary.org/b/id/10569768-L.jpg", link: "https://openlibrary.org/books/OL25433255M" },
    { title: "The Power of Now", image: "https://covers.openlibrary.org/b/id/9252068-L.jpg", link: "https://openlibrary.org/books/OL25413824M" },
    { title: "Deep Work", image: "https://covers.openlibrary.org/b/id/8673631-L.jpg", link: "https://openlibrary.org/books/OL25491436M" },
    { title: "Think and Grow Rich", image: "https://covers.openlibrary.org/b/id/8207897-L.jpg", link: "https://openlibrary.org/books/OL25426638M" },
    { title: "The 7 Habits of Highly Effective People", image: "https://covers.openlibrary.org/b/id/8306661-L.jpg", link: "https://openlibrary.org/books/OL25483226M" },
    { title: "Start with Why", image: "https://covers.openlibrary.org/b/id/8591916-L.jpg", link: "https://openlibrary.org/books/OL25475521M" },
    { title: "The Subtle Art of Not Giving a F*ck", image: "https://covers.openlibrary.org/b/id/8466559-L.jpg", link: "https://openlibrary.org/books/OL25446831M" },
    { title: "How to Win Friends & Influence People", image: "https://covers.openlibrary.org/b/id/8231856-L.jpg", link: "https://openlibrary.org/books/OL25404782M" },
    { title: "Rich Dad Poor Dad", image: "https://covers.openlibrary.org/b/id/8992603-L.jpg", link: "https://openlibrary.org/books/OL25426319M" },
    { title: "Can't Hurt Me", image: "https://covers.openlibrary.org/b/id/11184948-L.jpg", link: "https://openlibrary.org/books/OL25456577M" },
    { title: "You Are a Badass", image: "https://covers.openlibrary.org/b/id/8430040-L.jpg", link: "https://openlibrary.org/books/OL25447514M" }
  ],
  romance: [
    { title: "The Notebook", image: "https://covers.openlibrary.org/b/id/8244154-L.jpg", link: "https://openlibrary.org/books/OL7435885M" },
    { title: "Pride and Prejudice", image: "https://covers.openlibrary.org/b/id/8481835-L.jpg", link: "https://openlibrary.org/books/OL25445388M" },
    { title: "Me Before You", image: "https://covers.openlibrary.org/b/id/8276251-L.jpg", link: "https://openlibrary.org/books/OL25432239M" },
    { title: "The Fault in Our Stars", image: "https://covers.openlibrary.org/b/id/8231995-L.jpg", link: "https://openlibrary.org/books/OL25428324M" },
    { title: "Twilight", image: "https://covers.openlibrary.org/b/id/8232796-L.jpg", link: "https://openlibrary.org/books/OL25426936M" },
    { title: "It Ends with Us", image: "https://covers.openlibrary.org/b/id/10858283-L.jpg", link: "https://openlibrary.org/books/OL25469899M" },
    { title: "The Time Traveler's Wife", image: "https://covers.openlibrary.org/b/id/8254126-L.jpg", link: "https://openlibrary.org/books/OL25454022M" },
    { title: "Outlander", image: "https://covers.openlibrary.org/b/id/8320713-L.jpg", link: "https://openlibrary.org/books/OL25494783M" },
    { title: "The Kiss Quotient", image: "https://covers.openlibrary.org/b/id/9322391-L.jpg", link: "https://openlibrary.org/books/OL25493472M" },
    { title: "Beach Read", image: "https://covers.openlibrary.org/b/id/10618766-L.jpg", link: "https://openlibrary.org/books/OL25479065M" },
    { title: "Eleanor & Park", image: "https://covers.openlibrary.org/b/id/8262220-L.jpg", link: "https://openlibrary.org/books/OL25458752M" }
  ]
};


const genreSelect = document.getElementById("genreSelect");
const bookContainer = document.getElementById("bookContainer");

genreSelect.addEventListener("change", () => {
  const genre = genreSelect.value;
  showBooks(genre);
});

function showBooks(genre) {
  bookContainer.innerHTML = "";

  books[genre]?.forEach((book, index) => {
    const isRead = localStorage.getItem(`${genre}-${index}`) === "read";
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";
    bookDiv.innerHTML = `
      <a href="${book.link}" target="_blank">
        <img src="${book.image}" alt="${book.title}" />
        <h3>${book.title}</h3>
      </a>
      <button class="${isRead ? 'read' : ''}" onclick="toggleRead('${genre}', ${index}, this)">
        ${isRead ? '✓ Read' : 'Mark as Read'}
      </button>
    `;
    bookContainer.appendChild(bookDiv);
  });
}

function toggleRead(genre, index, btn) {
  const key = `${genre}-${index}`;
  const isRead = localStorage.getItem(key) === "read";

  if (isRead) {
    localStorage.removeItem(key);
    btn.classList.remove("read");
    btn.textContent = "Mark as Read";
  } else {
    localStorage.setItem(key, "read");
    btn.classList.add("read");
    btn.textContent = "✓ Read";
  }
}
