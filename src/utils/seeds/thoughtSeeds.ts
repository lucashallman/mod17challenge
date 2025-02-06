import { Thought } from "../../models"

const thoughts = [
    {username: 'LaurenIpsum', text: 'firefighteramuseconfuseriskperforatetelephoneridgeaviationreplaceradical'},
    {username: 'DoloresItamet', text: 'canvasswrenchdistributecloverstereotypedscentslowabusiveraggedtie'},
    {username: 'JorJorWell', text: 'causewoodenspeaksagwoundsuitambiguousneedlessversedpainstaking'},
    {username: 'AmishCoder', text: 'tierightquartzpoisoncorrodlocketbucketcometruculentrestrain'},
    {username: 'PopTartDevil', text: 'washimprisonfloweryknownpowerfulsofaproudillustratestitchtempt'},
    {username: 'JukeBoxHero', text: 'happyacousticsoppresscurveberserkairarithmeticapplybusheswell-to-do'},
    {username: 'TwoKidsInATrenchCoat', text: 'complainlaughableairportdetailedscreampestdetaillamentablemightyoccur'},
    {username: 'BurgerBarnOfficial', text: 'shootsoggyballspidersludicroustawdryindustryvalueretainincise'},
    {username: 'TheRealMasterChief', text: 'majesticthankfulpatchsaddlehospitalseealcoholicyokeoutputjazzy'},
    {username: 'TheFakeMasterChief', text: 'stretchcontainlakezoofoldseempartnerneedlerenewwin'},
]

thoughts.forEach((thought) => {
    Thought.create({username: thought.username, text: thought.text});
})