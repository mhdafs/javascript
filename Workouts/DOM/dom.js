//! Selecting Elements

// 1. Function to display the inner text of an element
function showElementText() {
  const element = document.getElementById("demoText");
  const output = document.getElementById("output");
  output.innerText = `Element text: "${element.innerText}"`;
}

// 2. Function to display the inner text of an element by class name
function showElementTextByClass() {
  const elements = document.getElementsByClassName("sampleClass");
  const output = document.getElementById("outputClass");
  output.innerText = `Element text: "${elements[0].innerText}"`;
}

// 3. Function to display the inner text of an element by tag name
function showElementTextByTag() {
  const elements = document.getElementsByTagName("p");
  const output = document.getElementById("outputTag");
  output.innerText = `Element text: "${elements[0].innerText}"`;
}

// 4. Function to display the inner text of an element by selector
function showElementTextBySelector() {
  const element = document.querySelector(".selectorExample");
  const output = document.getElementById("outputSelector");
  output.innerText = `Element text: "${element.innerText}"`;
}

// 5. Function to display the inner text of all elements matching a selector
function showAllElementsText() {
  const elements = document.querySelectorAll(".multiClass");
  const output = document.getElementById("outputAll");
  let text = "";
  elements.forEach((el) => {
    text += `${el.innerText}\n`;
  });
  output.innerText = `All elements text: \n${text}`;
}

//! Creating and Adding Elements

// 6. Function to create a new element
function createNewElement() {
  const newDiv = document.createElement("div");
  newDiv.innerText = "Hello, World!";
  document.body.appendChild(newDiv);
  document.getElementById("outputCreate").innerText =
    "A new element with text 'Hello, World!' was created!";
}

// 7. Function to append a new child element to a parent
function appendChildElement() {
  const parent = document.getElementById("parent");
  const child = document.createElement("p");
  child.innerText = "New Child";
  parent.appendChild(child);
  document.getElementById("outputAppend").innerText =
    "A new child element was appended to the parent!";
}

// 8. Function to insert a new element before a reference child
function insertBeforeElement() {
  const parent = document.getElementById("parentInsert");
  const newChild = document.createElement("div");
  newChild.innerText = "Inserted Before";
  const reference = document.getElementById("referenceChild");
  parent.insertBefore(newChild, reference);
  document.getElementById("outputInsert").innerText =
    "A new element was inserted before the reference child!";
}

// 9. Function to change inner HTML of an element
function changeInnerHTML() {
  document.getElementById("content").innerHTML = "<b>Updated Content</b>";
  document.getElementById("outputInnerHTML").innerText =
    "The inner HTML of the element was changed!";
}

// 10. Function to replace an element with outerHTML
function replaceWithOuterHTML() {
  document.getElementById("replaceContent").outerHTML =
    "<div>Replaced Element</div>";
  document.getElementById("outputOuterHTML").innerText =
    "The element was replaced with new outer HTML!";
}
