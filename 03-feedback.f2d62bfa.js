const e={form:document.querySelector(".feedback-form")};e.form.addEventListener("input",(function(t){t.preventDefault();const o=e.form.elements.message.value,a=e.form.elements.email.value;localStorage.setItem("feedback-form-state",JSON.stringify({message:o,email:a}))})),console.log(localStorage.getItem("feedback-form-state")||"");
//# sourceMappingURL=03-feedback.f2d62bfa.js.map
