const questions = document.querySelectorAll(".question");
// crea una constante llamada questions y selecciona todos los elementos con la clase .question

questions.forEach(question => {
  // recorre todos los elementos guardados en questions
  // y guarda cada uno temporalmente en la variable question

  question.addEventListener("click", () => {
    // cuando se hace click en una pregunta, se ejecuta esta función

    const faqItem = question.parentElement;
    // crea una constante llamada faqItem
    // y selecciona el elemento padre de question
    // en tu HTML, el padre de .question es .faq-item

    const icon = question.querySelector(".icon");
    // crea una constante llamada icon
    // y busca dentro de question el primer elemento con la clase .icon

    faqItem.classList.toggle("active");
    // añade o elimina la clase "active" en .faq-item
    // si no la tiene, la añade
    // si ya la tiene, la elimina
    // esto permite que CSS muestre u oculte la respuesta

    if (faqItem.classList.contains("active")) {
      // comprueba si faqItem tiene la clase "active"

      icon.src = "./assets/images/icon-minus.svg";
      // si está abierto, cambia el icono al de minus

    } else {
      icon.src = "./assets/images/icon-plus.svg";
      // si está cerrado, cambia el icono al de plus
    }
  });
});