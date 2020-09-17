const majors = [
    "экономика", 
    "юриспруденция", 
    "дизайн", 
    "маркетинг", 
    "экономика", 
    "юриспруденция", 
    "дизайн", 
    "маркетинг",
    "экономика", 
    "маркетинг", 
    "экономика", 
    "юриспруденция", 
    "дизайн", 
    "маркетинг", 
    "экономика",
    "юриспруденция",
    "дизайн", 
    "маркетинг",
    "экономика",
  ];
  
  
  const ul = document.querySelector(".general-info__majors-list");
  
  const displayMajors = (majors) => {
    const HtmlString = majors.map(major => {
      return `<li class="general-info__majors-list-item">${major}</li>`
    })
    .join('');
    ul.innerHTML = HtmlString
  }
  
  displayMajors(majors)
  
  
  
  // const liMajors = majors.map(major => {
  //   const li = document.createElement('li')
  //   li.className ="general-info__majors-list-item"
  //   const text = document.createTextNode(major)
  //   li.appendChild(text)
  //   return li
  // })

  // function appendMajors(list, majors) {
    
  //   majors.forEach(major => {
  //     list.appendChild(major)
  //   });
  // }
  
  // appendMajors(ul, liMajors)
  
  const buttonShowMoreMajors = document.createElement('button')
  buttonShowMoreMajors.className ="general-info__show-more-button"
  const showMoreText = document.createTextNode("Показать больше")
  buttonShowMoreMajors.appendChild(showMoreText)
  
  ul.appendChild(buttonShowMoreMajors)