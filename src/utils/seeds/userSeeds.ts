import { User } from "../../models";

const users = [
    {username: 'LaurenIpsum'},
    {username: 'DoloresItamet'},
    {username: 'JorJorWell'},
    {username: 'AmishCoder'},
    {username: 'PopTartDevil'},
    {username: 'JukeBoxHero'},
    {username: 'TwoKidsInATrenchCoat'},
    {username: 'BurgerBarnOfficial'},
    {username: 'TheRealMasterChief'},
    {username: 'TheFakeMasterChief'},
];

users.forEach((user) => {
    User.create({username: user.username});
})

console.log('Test users seeded.')