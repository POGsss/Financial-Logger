// Getting Form And Input Fields
const form = document.querySelector(".newItemForm") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLInputElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// Setting Form Submit Event
form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});

// Classes