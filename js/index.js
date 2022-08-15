const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerText = `Gaby Araujo ${thisYear}`;
footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");
skills.forEach((skill) => {
    const skillItem = document.createElement("li")
    skillItem.innerText = skill
    skillsList.appendChild(skillItem)
}) 

/* message form submit */
const messageForm = document.getElementsByName('leave_message')[0];
messageForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    console.log(name, email, message);

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}">${name} </a><span>wrote: ${message}</span>`;

    /* remove button */
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.setAttribute('type', 'button');
    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
});