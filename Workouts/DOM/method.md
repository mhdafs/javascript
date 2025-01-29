## **Selecting Elements**

### **1. `getElementById()`**
- Selects an element by its `id`.
**Example**:
```javascript
const element = document.getElementById("myId");
console.log(element.innerText);
```

---

### **2. `getElementsByClassName()`**
- Selects elements by their class name.
**Example**:
```javascript
const elements = document.getElementsByClassName("myClass");
console.log(elements[0].innerText);
```

---

### **3. `getElementsByTagName()`**
- Selects elements by their tag name.
**Example**:
```javascript
const elements = document.getElementsByTagName("p");
console.log(elements[0].innerText);
```

---

### **4. `querySelector()`**
- Selects the first element that matches the CSS selector.
**Example**:
```javascript
const element = document.querySelector(".myClass");
console.log(element.innerText);
```

---

### **5. `querySelectorAll()`**
- Selects all elements that match the CSS selector.
**Example**:
```javascript
const elements = document.querySelectorAll(".myClass");
elements.forEach(el => console.log(el.innerText));
```

---

## **Creating and Adding Elements**

### **6. `createElement()`**
- Creates a new element.
**Example**:
```javascript
const newDiv = document.createElement("div");
newDiv.innerText = "Hello, World!";
document.body.appendChild(newDiv);
```

---

### **7. `appendChild()`**
- Appends an element as the last child of another element.
**Example**:
```javascript
const parent = document.getElementById("parent");
const child = document.createElement("p");
child.innerText = "New Child";
parent.appendChild(child);
```

---

### **8. `insertBefore()`**
- Inserts an element before another specified element.
**Example**:
```javascript
const parent = document.getElementById("parent");
const newChild = document.createElement("div");
newChild.innerText = "Inserted Before";
const reference = document.getElementById("referenceChild");
parent.insertBefore(newChild, reference);
```

---

### **9. `innerHTML`**
- Sets or retrieves HTML content of an element.
**Example**:
```javascript
document.getElementById("content").innerHTML = "<b>Updated Content</b>";
```

---

### **10. `outerHTML`**
- Replaces the element and its content with new HTML.
**Example**:
```javascript
document.getElementById("content").outerHTML = "<div>Replaced Element</div>";
```

---

## **Removing and Replacing Elements**

### **11. `removeChild()`**
- Removes a child element.
**Example**:
```javascript
const parent = document.getElementById("parent");
const child = document.getElementById("child");
parent.removeChild(child);
```

---

### **12. `replaceChild()`**
- Replaces an existing child element with a new one.
**Example**:
```javascript
const parent = document.getElementById("parent");
const newChild = document.createElement("p");
newChild.innerText = "Replaced Child";
const oldChild = document.getElementById("child");
parent.replaceChild(newChild, oldChild);
```

---

### **13. `remove()`**
- Removes the element itself.
**Example**:
```javascript
document.getElementById("child").remove();
```

---

## **Changing Element Attributes**

### **14. `setAttribute()`**
- Sets an attribute on an element.
**Example**:
```javascript
const element = document.getElementById("myElement");
element.setAttribute("class", "newClass");
```

---

### **15. `getAttribute()`**
- Gets the value of an attribute.
**Example**:
```javascript
const value = document.getElementById("myElement").getAttribute("class");
console.log(value);
```

---

### **16. `removeAttribute()`**
- Removes an attribute from an element.
**Example**:
```javascript
document.getElementById("myElement").removeAttribute("class");
```

---

## **Working with Classes**

### **17. `classList.add()`**
- Adds a class to an element.
**Example**:
```javascript
document.getElementById("myElement").classList.add("newClass");
```

---

### **18. `classList.remove()`**
- Removes a class from an element.
**Example**:
```javascript
document.getElementById("myElement").classList.remove("oldClass");
```

---

### **19. `classList.toggle()`**
- Toggles a class on an element.
**Example**:
```javascript
document.getElementById("myElement").classList.toggle("highlight");
```

---

### **20. `classList.contains()`**
- Checks if an element has a specific class.
**Example**:
```javascript
if (document.getElementById("myElement").classList.contains("active")) {
    console.log("Element is active");
}
```

---

## **Styling Elements**

### **21. `style`**
- Sets inline CSS styles.
**Example**:
```javascript
document.getElementById("myElement").style.color = "blue";
```

---

## **Events**

### **22. `addEventListener()`**
- Attaches an event listener to an element.
**Example**:
```javascript
document.getElementById("button").addEventListener("click", () => {
    alert("Button Clicked");
});
```

---

### **23. `removeEventListener()`**
- Removes an event listener from an element.
**Example**:
```javascript
function handleClick() {
    alert("Button Clicked");
}
const button = document.getElementById("button");
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
```

---

## **Traversing the DOM**

### **24. `parentNode`**
- Accesses the parent of an element.
**Example**:
```javascript
const parent = document.getElementById("child").parentNode;
console.log(parent.id);
```

---

### **25. `childNodes`**
- Returns a collection of an element's child nodes.
**Example**:
```javascript
const children = document.getElementById("parent").childNodes;
console.log(children);
```

---

### **26. `firstChild` and `lastChild`**
- Accesses the first or last child of an element.
**Example**:
```javascript
const first = document.getElementById("parent").firstChild;
const last = document.getElementById("parent").lastChild;
console.log(first, last);
```

---

### **27. `nextSibling` and `previousSibling`**
- Accesses the next or previous sibling of an element.
**Example**:
```javascript
const next = document.getElementById("child").nextSibling;
console.log(next);
```

---

### **28. `children`**
- Returns a collection of an element's child elements.
**Example**:
```javascript
const childElements = document.getElementById("parent").children;
console.log(childElements);
```

---

### **29. `firstElementChild` and `lastElementChild`**
- Accesses the first or last child element.
**Example**:
```javascript
const first = document.getElementById("parent").firstElementChild;
console.log(first);
```
Yes, there are additional DOM manipulation methods that may not have been included in the earlier list. Here are some more methods and properties, categorized for clarity:

---

## **Additional Element Creation and Insertion Methods**

### **30. `append()`**
- Appends multiple nodes or strings to an element.
- Unlike `appendChild()`, it allows appending text nodes directly.
**Example**:
```javascript
const div = document.getElementById("parent");
div.append("New text", document.createElement("span"));
```

---

### **31. `prepend()`**
- Inserts content at the beginning of an element.
**Example**:
```javascript
const div = document.getElementById("parent");
div.prepend("Prepended text");
```

---

### **32. `after()`**
- Inserts content after an element.
**Example**:
```javascript
const element = document.getElementById("child");
element.after("Content after this element");
```

---

### **33. `before()`**
- Inserts content before an element.
**Example**:
```javascript
const element = document.getElementById("child");
element.before("Content before this element");
```

---

### **34. `insertAdjacentHTML()`**
- Inserts HTML into a specific position relative to an element.
**Example**:
```javascript
document.getElementById("parent").insertAdjacentHTML("beforeend", "<p>Inserted HTML</p>");
```
**Positions**:
- `beforebegin`: Before the element.
- `afterbegin`: Inside the element, before its first child.
- `beforeend`: Inside the element, after its last child.
- `afterend`: After the element.

---

### **35. `insertAdjacentElement()`**
- Similar to `insertAdjacentHTML()`, but inserts an element.
**Example**:
```javascript
const newDiv = document.createElement("div");
newDiv.textContent = "New Element";
document.getElementById("parent").insertAdjacentElement("beforeend", newDiv);
```

---

### **36. `insertAdjacentText()`**
- Inserts text at a specified position relative to an element.
**Example**:
```javascript
document.getElementById("parent").insertAdjacentText("beforeend", "Inserted Text");
```

---

## **Cloning and Copying**

### **37. `cloneNode()`**
- Clones an element. Use `true` to clone the element and its children.
**Example**:
```javascript
const original = document.getElementById("myElement");
const clone = original.cloneNode(true);
document.body.appendChild(clone);
```

---

## **Content Manipulation**

### **38. `textContent`**
- Gets or sets the text content of an element, ignoring HTML tags.
**Example**:
```javascript
const text = document.getElementById("myElement").textContent;
document.getElementById("myElement").textContent = "New Text Content";
```

---

### **39. `replaceWith()`**
- Replaces an element with specified content.
**Example**:
```javascript
const element = document.getElementById("oldElement");
const newElement = document.createElement("div");
newElement.textContent = "Replacement Element";
element.replaceWith(newElement);
```

---

## **Working with Styles**

### **40. `getComputedStyle()`**
- Retrieves the computed style of an element.
**Example**:
```javascript
const element = document.getElementById("myElement");
const style = window.getComputedStyle(element);
console.log(style.color);
```

---

## **Node Manipulation**

### **41. `normalize()`**
- Merges adjacent text nodes and removes empty ones.
**Example**:
```javascript
const parent = document.getElementById("parent");
parent.normalize();
```

---

### **42. `isEqualNode()`**
- Checks if two nodes are equal.
**Example**:
```javascript
const node1 = document.getElementById("node1");
const node2 = document.getElementById("node2");
console.log(node1.isEqualNode(node2)); // true or false
```

---

### **43. `isSameNode()`**
- Checks if two nodes are the same (reference equality).
**Example**:
```javascript
console.log(node1.isSameNode(node2)); // true or false
```

---

## **HTML Document Methods**

### **44. `getElementsByName()`**
- Selects elements by their `name` attribute.
**Example**:
```javascript
const elements = document.getElementsByName("username");
console.log(elements[0].value);
```

---

### **45. `matches()`**
- Checks if an element matches a specific CSS selector.
**Example**:
```javascript
const element = document.getElementById("myElement");
console.log(element.matches(".active")); // true or false
```

---

### **46. `closest()`**
- Finds the nearest ancestor (or the element itself) that matches a selector.
**Example**:
```javascript
const element = document.getElementById("child");
const ancestor = element.closest(".container");
console.log(ancestor);
```

---

## **Attributes and Dataset**

### **47. `dataset`**
- Accesses custom `data-*` attributes.
**Example**:
```javascript
const element = document.getElementById("myElement");
console.log(element.dataset.userId); // Retrieves data-user-id attribute
element.dataset.userId = "123"; // Sets data-user-id attribute
```

---

### **48. `hasAttribute()`**
- Checks if an element has a specific attribute.
**Example**:
```javascript
console.log(document.getElementById("myElement").hasAttribute("class")); // true or false
```

---

## **Scroll and Position**

### **49. `scrollIntoView()`**
- Scrolls an element into view.
**Example**:
```javascript
document.getElementById("myElement").scrollIntoView({ behavior: "smooth" });
```

---

### **50. `offsetTop` and `offsetLeft`**
- Retrieves the position of an element relative to its offset parent.
**Example**:
```javascript
const element = document.getElementById("myElement");
console.log(element.offsetTop, element.offsetLeft);
```
