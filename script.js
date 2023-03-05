let passawordLength = 16
const inpuEl = document.querySelector('#password')

function generatePassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ0123456789?!@*";

    let passaword = "";

    for (let i = 0; i < passawordLength; i += 1) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        passaword += chars.substring(randomNumber, randomNumber + 1)
    }


    inpuEl.value = passaword
};

function copy() {
    navigator.clipboard.writeText(inpuEl.value)
}

const passwordLengthEl = document.querySelector('#password-length');

passwordLengthEl.addEventListener('input', function () {
    passawordLength = passwordLengthEl.value
    console.log(passawordLength)
    generatePassword()
})

const copyButtonEl = document.querySelector('#copy');
copyButtonEl.addEventListener('click', copy)

generatePassword()
