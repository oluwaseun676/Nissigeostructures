const Geotechnical = document.querySelector("#Geo");
const boreholeDrilling = document.querySelector("#Drill")
const waterTreatment = document.querySelector("#water")
const communityWaterSupply = document.querySelector("#community")
const miningAndMinerals = document.querySelector("#mining")
Geotechnical.addEventListener("click",(evt)=>{
evt.preventDefault()
window.location.href = "/geo"
})
boreholeDrilling.addEventListener("click",(evt)=>{
evt.preventDefault()
window.location.href = "/borehole"
})
waterTreatment.addEventListener("click",(evt)=>{
evt.preventDefault()
window.location.href = "/water"
})
communityWaterSupply.addEventListener("click",(evt)=>{
evt.preventDefault()
window.location.href = "/community"
})
miningAndMinerals.addEventListener("click",(evt)=>{
evt.preventDefault()
window.location.href = "/mining"
})
