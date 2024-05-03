const selectStyle = document.querySelector('#selectStyle');

selectStyle.addEventListener('change', () => {

  switch (selectStyle.value) {
    case 'georgia':
    document.querySelector('link').remove();
    const georgia = `<link rel="stylesheet" href="./styles.css">`;
    document.head.insertAdjacentHTML('afterbegin',georgia);
    break;
    
    case 'bootstrap':
    document.querySelector('link').remove();
    const bootstrap = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">`;
    document.head.insertAdjacentHTML('afterbegin',bootstrap);
    break;

    default:
    //'latex'
    document.querySelector('link').remove();
    const latex = `<link rel="stylesheet" href="./latex-css/latex.css">`;
    document.head.insertAdjacentHTML('afterbegin',latex);
    break;
  }

});
