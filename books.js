

<script>

    fetch("https://raw.githubusercontent.com/MadeleineCavanagh1/SD330/main/FoxBooks/classes.json")
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
        const courseData = data["courses"];
        const coursesList = document.getElementById("courses");

        courseData.forEach((course) => {
          const courseListItem = document.createElement("li");
          const nameElement = document.createElement("h2");
          const booksListElement = document.createElement("ul");

          nameElement.textContent = course.name;
          course.booksList.forEach((book) => {
            const bookListItem = document.createElement("li");
            bookListItem.textContent = `${book.title} by ${book.author}`;
            booksListElement.appendChild(bookListItem);
          });

     
          courseListItem.appendChild(nameElement);
          courseListItem.appendChild(booksListElement);
          coursesList.appendChild(courseListItem);
        });
      })
      .catch((error) => console.error(error));
  </script>