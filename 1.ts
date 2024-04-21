import inquirer from "inquirer";

let awnser =await inquirer.prompt (
        {
            "name" : "name",
            "message" : "what is your name",
            "type": "input"
        }
)
    console.log(`hello ${awnser.name}`);

    let dish = await inquirer.prompt (
        {
        "name":"dish",
        "message":"what would you like to eat",
        "type": "list",
        choices:[
            "Spaghetti Carbonara",
            "Chicken Tikka Masala",
            "Sushi Rolls",
            "Hamburger",
            "Pad Thai",
            "Lasagna",
            "Miso Soup",
            "Margherita Pizza",
            "Steak Frites",
            "Caesar Salad"
        ]
    }
)
console.log(`Certainly I will bring your dish ${dish.dish}`)

