!function(){const e={form:document.querySelector(".feedback-form")},t="feedback-form-state";e.form.addEventListener("input",(function(o){o.preventDefault();const a=e.form.elements.message.value,m=e.form.elements.email.value;localStorage.setItem(t,JSON.stringify({message:a,email:m}))})),console.log(localStorage.getItem(t)||"")}();
//# sourceMappingURL=03-feedback.9448c058.js.map
