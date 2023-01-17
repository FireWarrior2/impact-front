const updateList = [
  {
    label: '1.0.2.0',
    name: 'last',
    id: '1020',
    date: '18 Apr 2022',
    title: '',
    desc: '',
    img: 'https://cdn.discordapp.com/attachments/916393114166525974/965674623553384528/1020.png',
    linkServer: 'https://raw.githubusercontent.com/GT-IMPACT/impact-front/main/public/go/releases/1.0.2.0/IMPACT-1.0.2.0-SERVER.zip',
    linkClient: 'https://raw.githubusercontent.com/GT-IMPACT/impact-front/main/public/go/releases/1.0.2.0/IMPACT-1.0.2.0-CLIENT.zip',
    changelog: [
      {
        label: 'IMPACT', children: [
          {label: 'fix Lumber Axe'},
          {label: 'fix capacity LSC cell'},
          {label: 'fix textures and scan info (nuclear machines)'},
          {label: 'fix npe LSC'},
          {label: 'fix reverse drying recipe'},
          {label: 'fix space tooltip'},
          {label: 'fix critical bug with multis'},
          {label: 'fix Solar Panel textures'},
          {label: 'add more hatches to Assembler'},
          {label: 'add big Reactor Steam Hatches'},
          {label: 'add new features Multi-Tanks'},
          {label: 'add UEV 2A Dynamo Hatch'},
        ]
      }, {
        label: 'GREGTECH', children: [
          {label: 'change fluid hatches capacity'},
          {label: 'change Hydrogen synthesis from Methane'},
        ]
      }, {
        label: 'DETRAV SCANNER (PROSPECTORS)', children: [
          {label: 'fix charges'},
        ]
      }, {
        label: 'AE2STUFF', children: [
          {label: 'fix consume wireless'},
        ]
      }, {
        label: 'IMPACT RECIPE MODULE', children: [
          {label: 'fix Radiation Proof Casing recycling'},
          {label: 'fix recipe of Illumination Panel'},
          {label: 'fix recipes of UEV energy hatches'},
          {label: 'add recipe for Clear Glass Dust'},
          {label: 'add recipe recycling of Lab-Safe Low Gravity Casing'},
          {label: 'add alternative recipes for Molecular Assembler'},
          {label: 'add recipes of terminals in Assembler'},
          {label: 'add recipe for Illuminated Panel'},
          {label: 'add UHV and UEV multiamp Hatches'},
        ]
      }
    ]
  }
]

const homePic = [
  {src: 'https://raw.githubusercontent.com/GT-IMPACT/impact-front/main/public/media/bg/1.png'},
  {src: 'https://raw.githubusercontent.com/GT-IMPACT/impact-front/main/public/media/bg/2.png'},
  {src: 'https://raw.githubusercontent.com/GT-IMPACT/impact-front/main/public/media/bg/3.png'},
  {src: 'https://raw.githubusercontent.com/GT-IMPACT/impact-front/main/public/media/bg/4.png'},
  {src: 'https://raw.githubusercontent.com/GT-IMPACT/impact-front/main/public/media/bg/5.png'},
  {src: 'https://raw.githubusercontent.com/GT-IMPACT/impact-front/main/public/media/bg/6.png'},
  {src: 'https://raw.githubusercontent.com/GT-IMPACT/impact-front/main/public/media/bg/7.png'},
  {src: 'https://raw.githubusercontent.com/GT-IMPACT/impact-front/main/public/media/bg/8.png'},
  {src: 'https://raw.githubusercontent.com/GT-IMPACT/impact-front/main/public/media/bg/9.png'},
  {src: 'https://raw.githubusercontent.com/GT-IMPACT/impact-front/main/public/media/bg/10.png'},
  {src: 'https://raw.githubusercontent.com/GT-IMPACT/impact-front/main/public/media/bg/11.png'},
  {src: 'https://raw.githubusercontent.com/GT-IMPACT/impact-front/main/public/media/bg/12.png'},
]

export default {
  updateList, homePic
}
